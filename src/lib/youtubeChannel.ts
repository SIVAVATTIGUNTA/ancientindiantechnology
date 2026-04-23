import type { YouTubeGalleryVideo } from '@/components/video/YouTubeVideoGallery';
import {
  dedupeVideosById,
  parseYouTubeDurationToSeconds,
  sortByLatest,
} from '@/lib/youtubeVideoFilters';

type LoadLatestYouTubeVideosOptions = {
  apiKey: string;
  channelId: string;
  uploadsPlaylistId?: string;
  maxResults: number;
  signal?: AbortSignal;
};

type YouTubeChannelsResponse = {
  items?: Array<{
    contentDetails?: {
      relatedPlaylists?: {
        uploads?: string;
      };
    };
  }>;
};

type YouTubePlaylistItemsResponse = {
  items?: Array<{
    snippet?: {
      title?: string;
      description?: string;
      publishedAt?: string;
      thumbnails?: YouTubeThumbnailSet;
      resourceId?: {
        videoId?: string;
      };
    };
    contentDetails?: {
      videoId?: string;
      videoPublishedAt?: string;
    };
  }>;
};

type YouTubeVideoDetailsResponse = {
  items?: Array<{
    id?: string;
    snippet?: {
      title?: string;
      description?: string;
      publishedAt?: string;
      thumbnails?: YouTubeThumbnailSet;
    };
    contentDetails?: {
      duration?: string;
    };
  }>;
};

type YouTubeVideoDetailsItem = NonNullable<YouTubeVideoDetailsResponse['items']>[number];

type YouTubeThumbnailSet = {
  default?: { url?: string };
  medium?: { url?: string };
  high?: { url?: string };
  standard?: { url?: string };
  maxres?: { url?: string };
};

type SearchVideo = {
  videoId: string;
  title: string;
  description: string;
  publishedAt?: string;
  thumbnail?: string;
};

type CachePayload = {
  expiresAt: number;
  videos: YouTubeGalleryVideo[];
};

const CACHE_TTL_MS = 30 * 60 * 1000;
const CHANNEL_FETCH_LIMIT = 50;
const CACHE_PREFIX = 'yt-channel-latest-videos-v3:';

const cacheKeyFor = (channelId: string, uploadsPlaylistId?: string) =>
  `${CACHE_PREFIX}${uploadsPlaylistId?.trim() || channelId}`;
const inFlightRequests = new Map<string, Promise<YouTubeGalleryVideo[]>>();

function readCache(channelId: string, uploadsPlaylistId?: string): YouTubeGalleryVideo[] | null {
  try {
    const raw = window.sessionStorage.getItem(cacheKeyFor(channelId, uploadsPlaylistId));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachePayload;
    if (!Array.isArray(parsed.videos) || typeof parsed.expiresAt !== 'number') return null;
    if (Date.now() > parsed.expiresAt) return null;
    return parsed.videos;
  } catch {
    return null;
  }
}

function writeCache(channelId: string, videos: YouTubeGalleryVideo[], uploadsPlaylistId?: string) {
  try {
    const payload: CachePayload = {
      expiresAt: Date.now() + CACHE_TTL_MS,
      videos,
    };
    window.sessionStorage.setItem(cacheKeyFor(channelId, uploadsPlaylistId), JSON.stringify(payload));
  } catch {
    // Ignore storage errors.
  }
}

function bestThumbnail(thumbnails?: YouTubeThumbnailSet): string | undefined {
  return (
    thumbnails?.maxres?.url ||
    thumbnails?.standard?.url ||
    thumbnails?.high?.url ||
    thumbnails?.medium?.url ||
    thumbnails?.default?.url
  );
}

function inferUploadsPlaylistId(channelId: string): string | undefined {
  const normalized = channelId.trim();
  if (normalized.startsWith('UU')) return normalized;
  if (normalized.startsWith('UC')) return `UU${normalized.slice(2)}`;
  return undefined;
}

async function fetchYouTubeJson<T>(url: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(url, { signal });

  if (!response.ok) {
    let message = `YouTube API request failed (${response.status})`;

    try {
      const body = await response.json();
      const reason = body?.error?.errors?.[0]?.reason;
      const apiMessage = body?.error?.message;
      if (reason === 'quotaExceeded') {
        message = 'YouTube API quota exceeded. Showing cached or curated videos until quota resets.';
      } else if (apiMessage) {
        message = apiMessage;
      }
    } catch {
      // Keep the status-based message if YouTube does not return JSON.
    }

    throw new Error(message);
  }

  return (await response.json()) as T;
}

async function loadUploadsPlaylistId(
  apiKey: string,
  channelId: string,
  configuredUploadsPlaylistId?: string,
  signal?: AbortSignal
): Promise<string> {
  const explicitUploadsPlaylistId = configuredUploadsPlaylistId?.trim();
  if (explicitUploadsPlaylistId) return explicitUploadsPlaylistId;

  const inferredUploadsPlaylistId = inferUploadsPlaylistId(channelId);
  if (inferredUploadsPlaylistId) return inferredUploadsPlaylistId;

  const params = new URLSearchParams({
    part: 'contentDetails',
    id: channelId,
    key: apiKey,
  });

  const data = await fetchYouTubeJson<YouTubeChannelsResponse>(
    `https://www.googleapis.com/youtube/v3/channels?${params.toString()}`,
    signal
  );

  const uploadsPlaylistId = data.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploadsPlaylistId) {
    throw new Error('YouTube uploads playlist was not found for this channel.');
  }

  return uploadsPlaylistId;
}

async function loadPlaylistVideos(apiKey: string, playlistId: string, signal?: AbortSignal): Promise<SearchVideo[]> {
  const params = new URLSearchParams({
    part: 'snippet,contentDetails',
    playlistId,
    maxResults: String(CHANNEL_FETCH_LIMIT),
    key: apiKey,
  });

  const data = await fetchYouTubeJson<YouTubePlaylistItemsResponse>(
    `https://www.googleapis.com/youtube/v3/playlistItems?${params.toString()}`,
    signal
  );

  const videos: SearchVideo[] = [];

  for (const item of data.items ?? []) {
    const videoId = item.contentDetails?.videoId || item.snippet?.resourceId?.videoId;
    if (!videoId) continue;

    videos.push({
      videoId,
      title: item.snippet?.title?.trim() || 'Untitled video',
      description: item.snippet?.description?.trim() || '',
      publishedAt: item.contentDetails?.videoPublishedAt || item.snippet?.publishedAt,
      thumbnail: bestThumbnail(item.snippet?.thumbnails),
    });
  }

  return videos;
}

async function loadVideoDetails(
  apiKey: string,
  videoIds: string[],
  signal?: AbortSignal
): Promise<Map<string, YouTubeVideoDetailsItem>> {
  if (videoIds.length === 0) return new Map();

  const params = new URLSearchParams({
    part: 'snippet,contentDetails',
    id: videoIds.join(','),
    key: apiKey,
  });

  const data = await fetchYouTubeJson<YouTubeVideoDetailsResponse>(
    `https://www.googleapis.com/youtube/v3/videos?${params.toString()}`,
    signal
  );
  return new Map((data.items ?? []).filter((item) => item.id).map((item) => [item.id!, item]));
}

async function fetchLatestYouTubeVideos({
  apiKey,
  channelId,
  uploadsPlaylistId,
  signal,
}: LoadLatestYouTubeVideosOptions): Promise<YouTubeGalleryVideo[]> {
  const resolvedUploadsPlaylistId = await loadUploadsPlaylistId(apiKey, channelId, uploadsPlaylistId, signal);
  const searchVideos = await loadPlaylistVideos(apiKey, resolvedUploadsPlaylistId, signal);

  let detailsById = new Map<string, YouTubeVideoDetailsItem>();
  try {
    detailsById = await loadVideoDetails(apiKey, searchVideos.map((video) => video.videoId), signal);
  } catch {
    detailsById = new Map();
  }

  const videos = sortByLatest(
    dedupeVideosById(
      searchVideos.map((video) => {
        const details = detailsById.get(video.videoId);
        const duration = details?.contentDetails?.duration;
        const durationSeconds = parseYouTubeDurationToSeconds(duration);

        return {
          title: details?.snippet?.title?.trim() || video.title,
          description: details?.snippet?.description?.trim() || video.description,
          publishedAt: details?.snippet?.publishedAt || video.publishedAt,
          duration,
          durationSeconds,
          videoId: video.videoId,
          videoType:
            durationSeconds == null ? undefined : durationSeconds <= 180 ? 'short' : 'fullLength',
          src: `https://www.youtube.com/embed/${video.videoId}`,
          thumbnail: bestThumbnail(details?.snippet?.thumbnails) || video.thumbnail,
        } satisfies YouTubeGalleryVideo;
      })
    )
  );

  writeCache(channelId, videos, resolvedUploadsPlaylistId);
  return videos;
}

export async function loadLatestYouTubeVideos(options: LoadLatestYouTubeVideosOptions): Promise<YouTubeGalleryVideo[]> {
  const cached = readCache(options.channelId, options.uploadsPlaylistId);
  if (cached) return cached;

  const cacheKey = cacheKeyFor(options.channelId, options.uploadsPlaylistId);
  const inFlight = inFlightRequests.get(cacheKey);
  if (inFlight) return inFlight;

  const request = fetchLatestYouTubeVideos(options).finally(() => {
    inFlightRequests.delete(cacheKey);
  });
  inFlightRequests.set(cacheKey, request);

  return request;
}
