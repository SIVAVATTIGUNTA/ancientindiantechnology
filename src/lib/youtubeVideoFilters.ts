import { youtubeVideoIdFromEmbedUrl } from './youtube';

export type YouTubeVideoKind = 'all' | 'short' | 'fullLength';

export type YouTubeVideoMetadata = {
  title: string;
  src: string;
  description?: string;
  publishedAt?: string;
  duration?: string;
  durationSeconds?: number;
  videoId?: string;
  videoType?: 'short' | 'fullLength';
};

const SHORT_MAX_SECONDS = 180;

export function parseYouTubeDurationToSeconds(duration?: string): number | undefined {
  if (!duration) return undefined;

  const match = duration.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (!match) return undefined;

  const hours = Number(match[1] ?? 0);
  const minutes = Number(match[2] ?? 0);
  const seconds = Number(match[3] ?? 0);
  const total = hours * 3600 + minutes * 60 + seconds;

  return Number.isFinite(total) && total > 0 ? total : undefined;
}

export function formatDurationLabel(seconds?: number): string | undefined {
  if (!Number.isFinite(seconds) || !seconds) return undefined;

  const total = Math.max(0, Math.round(seconds));
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const remainingSeconds = total % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }

  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
}

export function getVideoIdentity(video: Pick<YouTubeVideoMetadata, 'src' | 'videoId'>): string {
  return video.videoId || youtubeVideoIdFromEmbedUrl(video.src) || video.src;
}

function hasShortSignal(video: YouTubeVideoMetadata): boolean {
  const text = `${video.title} ${video.description ?? ''} ${video.src}`.toLowerCase();
  return text.includes('#shorts') || text.includes('/shorts/') || /\bshorts?\b/.test(text);
}

export function isShortVideo(video: YouTubeVideoMetadata): boolean {
  if (video.videoType === 'short') return true;
  if (video.videoType === 'fullLength') return false;
  if (Number.isFinite(video.durationSeconds)) return Number(video.durationSeconds) <= SHORT_MAX_SECONDS;
  if (hasShortSignal(video)) return true;
  return false;
}

export function isFullLengthVideo(video: YouTubeVideoMetadata): boolean {
  if (video.videoType === 'fullLength') return true;
  if (video.videoType === 'short') return false;
  if (Number.isFinite(video.durationSeconds)) return Number(video.durationSeconds) > SHORT_MAX_SECONDS;
  if (hasShortSignal(video)) return false;
  return false;
}

export function sortByLatest<T extends YouTubeVideoMetadata>(videos: T[]): T[] {
  return [...videos].sort((a, b) => {
    const bTime = Date.parse(b.publishedAt ?? '');
    const aTime = Date.parse(a.publishedAt ?? '');

    if (!Number.isNaN(bTime) && !Number.isNaN(aTime) && bTime !== aTime) {
      return bTime - aTime;
    }

    if (!Number.isNaN(bTime) && Number.isNaN(aTime)) return -1;
    if (Number.isNaN(bTime) && !Number.isNaN(aTime)) return 1;

    return a.title.localeCompare(b.title);
  });
}

export function dedupeVideosById<T extends YouTubeVideoMetadata>(videos: T[]): T[] {
  const seen = new Set<string>();
  const unique: T[] = [];

  for (const video of videos) {
    const key = getVideoIdentity(video);
    if (seen.has(key)) continue;
    seen.add(key);
    unique.push(video);
  }

  return unique;
}

export function filterVideosByKind<T extends YouTubeVideoMetadata>(videos: T[], kind: YouTubeVideoKind): T[] {
  const latestUnique = sortByLatest(dedupeVideosById(videos));

  if (kind === 'short') return latestUnique.filter(isShortVideo);
  if (kind === 'fullLength') return latestUnique.filter(isFullLengthVideo);

  return latestUnique;
}
