import { useMemo } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import { YouTubeVideoGallery, type YouTubeGalleryVideo } from '../components/video/YouTubeVideoGallery';
import { useYouTubeChannelVideos } from '@/hooks/useYouTubeChannelVideos';

const fallbackVideos: YouTubeGalleryVideo[] = [
  {
    title: 'Ancient Indian Technology — Featured Documentary I',
    src: 'https://www.youtube.com/embed/Xhc-hT71AnA?si=ulBRclKafIvKwxXO',
    videoType: 'fullLength',
  },
  {
    title: 'Ancient Indian Technology — Featured Documentary II',
    src: 'https://www.youtube.com/embed/HjRBdayDkk0?si=iUZCkzms44H4x9hw',
    videoType: 'fullLength',
  },
  {
    title: 'Ancient Indian Technology — Featured Documentary III',
    src: 'https://www.youtube.com/embed/WZzK1sQoeHo?si=Q1Zf4KXtEzkZt44B',
    videoType: 'fullLength',
  },
  {
    title: 'Ancient Indian Technology — Featured Documentary IV',
    src: 'https://www.youtube.com/embed/GwUtRso7aNw?si=wxrUkvCRDGUnBhHk',
    videoType: 'fullLength',
  },
  {
    title: 'Ancient Indian Technology — Featured Documentary V',
    src: 'https://www.youtube.com/embed/ixrQqNogOwc?si=HKuGzodkRdexBQ9B',
    videoType: 'fullLength',
  },
];

export function HomeVideoSlides() {
  const latestCount = Number(import.meta.env.VITE_YOUTUBE_HOMEPAGE_LIMIT ?? 6);
  const { videos, loading, error } = useYouTubeChannelVideos({
    fallbackVideos,
    maxResults: latestCount,
    videoKind: 'fullLength',
  });

  const syncState = useMemo(() => {
    if (loading) {
      return {
        icon: <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden />,
        text: 'Loading latest channel videos...',
      };
    }
    if (error) {
      return {
        icon: <AlertCircle className="h-3.5 w-3.5" aria-hidden />,
        text: error,
      };
    }
    if (videos.length === 0) {
      return {
        icon: <AlertCircle className="h-3.5 w-3.5" aria-hidden />,
        text: 'No videos found on the channel yet.',
      };
    }
    return null;
  }, [loading, error, videos.length]);

  return (
    <section id="videos" className="relative overflow-hidden bg-[#2b1b17] py-16 text-[#f4ead8] md:py-24" aria-labelledby="videos-heading">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4b26a]/45 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-[#d4b26a]/[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-[#0f6b5c]/[0.12] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="rounded-2xl border border-[#f4ead8]/[0.06] bg-[#2b1b17]/40 p-1 shadow-[inset_0_1px_0_rgba(244,234,216,0.04)] md:rounded-3xl md:p-2">
          <div className="rounded-[14px] bg-[#241812]/90 px-4 py-8 md:rounded-[22px] md:px-8 md:py-10">
            {syncState && (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4b26a]/25 bg-[#2b1b17]/50 px-3 py-1.5 text-xs text-[#f4ead8]/80">
                {syncState.icon}
                <span>{syncState.text}</span>
              </div>
            )}
            <YouTubeVideoGallery
              variant="dark"
              titleId="videos-heading"
              eyebrow="Channel highlights"
              title="Ancient Indian Technology documentary series"
              description="Latest uploads from the channel in a focused showcase. Tap a card to watch in the player; nothing loads until you choose."
              videos={videos}
              gridClassName="grid-flow-col auto-cols-[88%] gap-5 overflow-x-auto pb-2 pr-1 snap-x snap-mandatory sm:auto-cols-[48%] lg:auto-cols-[32%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
