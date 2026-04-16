import { useEffect, useMemo, useState } from 'react';
import type { YouTubeGalleryVideo } from '@/components/video/YouTubeVideoGallery';
import { loadLatestYouTubeVideos } from '@/lib/youtubeChannel';

type UseYouTubeChannelVideosOptions = {
  fallbackVideos: YouTubeGalleryVideo[];
  maxResults?: number;
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
}: UseYouTubeChannelVideosOptions): UseYouTubeChannelVideosResult {
  const [videos, setVideos] = useState<YouTubeGalleryVideo[]>(fallbackVideos);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY as string | undefined;
  const youtubeChannelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID as string | undefined;
  const isConfigured = Boolean(youtubeApiKey && youtubeChannelId);

  const safeMaxResults = useMemo(() => {
    const n = Number.isFinite(maxResults) ? maxResults : 6;
    return Math.min(Math.max(n, 1), 12);
  }, [maxResults]);

  useEffect(() => {
    if (!isConfigured) {
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
          channelId: youtubeChannelId!,
          maxResults: safeMaxResults,
          signal: controller.signal,
        });
        setVideos(latest.length > 0 ? latest : []);
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
  }, [isConfigured, safeMaxResults, youtubeApiKey, youtubeChannelId]);

  return { videos, loading, error, isConfigured };
}
