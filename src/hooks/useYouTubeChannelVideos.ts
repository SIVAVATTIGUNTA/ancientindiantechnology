import { useEffect, useMemo, useState } from 'react';
import type { YouTubeGalleryVideo } from '@/components/video/YouTubeVideoGallery';
import { loadLatestYouTubeVideos } from '@/lib/youtubeChannel';
import { filterVideosByKind, type YouTubeVideoKind } from '@/lib/youtubeVideoFilters';

type UseYouTubeChannelVideosOptions = {
  fallbackVideos: YouTubeGalleryVideo[];
  maxResults?: number;
  videoKind?: YouTubeVideoKind;
};

type UseYouTubeChannelVideosResult = {
  videos: YouTubeGalleryVideo[];
  loading: boolean;
  error: string | null;
  isConfigured: boolean;
};

export function useYouTubeChannelVideos({
  fallbackVideos,
  maxResults = 6,
  videoKind = 'all',
}: UseYouTubeChannelVideosOptions): UseYouTubeChannelVideosResult {
  const [videos, setVideos] = useState<YouTubeGalleryVideo[]>(() =>
    filterVideosByKind(fallbackVideos, videoKind).slice(0, maxResults)
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY as string | undefined;
  const youtubeChannelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID as string | undefined;
  const youtubeUploadsPlaylistId = import.meta.env.VITE_YOUTUBE_UPLOADS_PLAYLIST_ID as string | undefined;
  const youtubeSourceId = youtubeChannelId || youtubeUploadsPlaylistId;
  const isConfigured = Boolean(youtubeApiKey && youtubeSourceId);

  const safeMaxResults = useMemo(() => {
    const n = Number.isFinite(maxResults) ? maxResults : 6;
    return Math.min(Math.max(n, 1), 24);
  }, [maxResults]);

  const fetchMaxResults = useMemo(() => {
    if (videoKind === 'all') return safeMaxResults;
    return Math.min(Math.max(safeMaxResults * 4, 12), 50);
  }, [safeMaxResults, videoKind]);

  useEffect(() => {
    const fallbackList = filterVideosByKind(fallbackVideos, videoKind).slice(0, safeMaxResults);

    if (!isConfigured) {
      setVideos(fallbackList);
      setLoading(false);
      setError('Live channel sync is not configured yet. Showing curated videos.');
      return;
    }

    const controller = new AbortController();

    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const latest = await loadLatestYouTubeVideos({
          apiKey: youtubeApiKey!,
          channelId: youtubeSourceId!,
          uploadsPlaylistId: youtubeUploadsPlaylistId,
          maxResults: fetchMaxResults,
          signal: controller.signal,
        });
        setVideos(filterVideosByKind(latest, videoKind).slice(0, safeMaxResults));
      } catch (fetchError) {
        if (controller.signal.aborted) return;
        setError(fetchError instanceof Error ? fetchError.message : 'Failed to load latest videos.');
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void run();
    return () => controller.abort();
  }, [
    fallbackVideos,
    fetchMaxResults,
    isConfigured,
    safeMaxResults,
    videoKind,
    youtubeApiKey,
    youtubeSourceId,
    youtubeUploadsPlaylistId,
  ]);

  return { videos, loading, error, isConfigured };
}
