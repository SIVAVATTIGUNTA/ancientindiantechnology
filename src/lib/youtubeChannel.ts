import type { YouTubeGalleryVideo } from '@/components/video/YouTubeVideoGallery';

type LoadLatestYouTubeVideosOptions = {
  apiKey: string;
  channelId: string;
  maxResults: number;
  signal?: AbortSignal;
};

type YouTubeSearchResponse = {
  items?: Array<{
    id?: {
      kind?: string;
      videoId?: string;
    };
    snippet?: {
      title?: string;
    };
  }>;
};

type CachePayload = {
  expiresAt: number;
  videos: YouTubeGalleryVideo[];
};

const CACHE_TTL_MS = 10 * 60 * 1000;
const CACHE_PREFIX = 'yt-home-latest-videos:';

const cacheKeyFor = (channelId: string, maxResults: number) => `${CACHE_PREFIX}${channelId}:${maxResults}`;

function readCache(channelId: string, maxResults: number): YouTubeGalleryVideo[] | null {
  try {
    const raw = window.sessionStorage.getItem(cacheKeyFor(channelId, maxResults));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachePayload;
    if (!Array.isArray(parsed.videos) || typeof parsed.expiresAt !== 'number') return null;
    if (Date.now() > parsed.expiresAt) return null;
    return parsed.videos;
  } catch {
    return null;
  }
}

function writeCache(channelId: string, maxResults: number, videos: YouTubeGalleryVideo[]) {
  try {
    const payload: CachePayload = {
      expiresAt: Date.now() + CACHE_TTL_MS,
      videos,
    };
    window.sessionStorage.setItem(cacheKeyFor(channelId, maxResults), JSON.stringify(payload));
  } catch {
    // Ignore storage errors.
  }
}

export async function loadLatestYouTubeVideos({
  apiKey,
  channelId,
  maxResults,
  signal,
}: LoadLatestYouTubeVideosOptions): Promise<YouTubeGalleryVideo[]> {
  const cached = readCache(channelId, maxResults);
  if (cached) return cached;

  const params = new URLSearchParams({
    part: 'snippet',
    channelId,
    maxResults: String(maxResults),
    order: 'date',
    type: 'video',
    key: apiKey,
  });

  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?${params.toString()}`, { signal });
  if (!response.ok) {
    throw new Error(`YouTube API request failed (${response.status})`);
  }

  const data = (await response.json()) as YouTubeSearchResponse;
  const videos =
    data.items
      ?.filter((item) => item.id?.kind === 'youtube#video' && !!item.id?.videoId)
      .map((item) => ({
        title: item.snippet?.title?.trim() || 'Untitled video',
        src: `https://www.youtube.com/embed/${item.id?.videoId}`,
      })) ?? [];

  writeCache(channelId, maxResults, videos);
  return videos;
}
