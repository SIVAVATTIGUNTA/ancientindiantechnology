import { useEffect, useMemo } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import { VideoCard } from '../../components/video/VideoCard';
import { VideoTopicHighlights } from '../../components/video/VideoTopicHighlights';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';
import { useYouTubeChannelVideos } from '@/hooks/useYouTubeChannelVideos';
import { formatDurationLabel } from '@/lib/youtubeVideoFilters';

const shortClipHighlights = [
  {
    label: 'Format',
    title: 'One idea per clip',
    text: 'Short clips should explain a single mechanism, object, or question clearly: one pillar, one instrument, one drainage idea, or one medical text insight.',
  },
  {
    label: 'Retention',
    title: 'Hook with the visible detail',
    text: 'Lead with what viewers can immediately see: a blade pattern, a stepwell section, a sundial shadow, or a dockyard channel before adding context.',
  },
  {
    label: 'Next Step',
    title: 'Bridge to deeper pages',
    text: 'Each clip should point visitors toward the matching detailed page so quick learning turns into structured exploration.',
  },
];

const shortClipTakeaways = [
  'Use clips for quick orientation before the user opens a longer documentary or lecture.',
  'Group clips by theme so mobile users can binge metallurgy, astronomy, medicine, or urban planning in small bursts.',
  'Keep claims narrow and practical: show the object, explain the mechanism, then link to the longer context.',
];

const shortClipTerms = ['micro-learning', 'quick facts', 'visual hooks', 'topic clusters', 'mobile viewing', 'next-watch flow'];

const shortCards = [
  { title: 'Iron Pillar in 90 Seconds', duration: '01:28', query: 'delhi iron pillar quick facts', reason: 'Quick science hook', src: 'https://www.youtube.com/embed?listType=search&list=delhi%20iron%20pillar%20quick%20facts' },
  { title: 'How Stepwells Stay Cool', duration: '02:10', query: 'stepwell cooling system explained short', reason: 'Architecture micro-learning', src: 'https://www.youtube.com/embed?listType=search&list=stepwell%20cooling%20system%20explained%20short' },
  { title: 'Wootz Steel Pattern Secrets', duration: '03:05', query: 'wootz steel pattern short documentary', reason: 'Material science teaser', src: 'https://www.youtube.com/embed?listType=search&list=wootz%20steel%20pattern%20short%20documentary' },
  { title: 'Jantar Mantar Instrument Demo', duration: '02:42', query: 'jantar mantar instrument short', reason: 'Visual astronomy learning', src: 'https://www.youtube.com/embed?listType=search&list=jantar%20mantar%20instrument%20short' },
  { title: 'Sushruta Surgical Legacy', duration: '02:24', query: 'sushruta surgery history short', reason: 'Medicine highlight', src: 'https://www.youtube.com/embed?listType=search&list=sushruta%20surgery%20history%20short' },
  { title: 'Lothal Dock in Motion', duration: '01:55', query: 'lothal dockyard short animation', reason: 'Engineering explain-in-a-minute', src: 'https://www.youtube.com/embed?listType=search&list=lothal%20dockyard%20short%20animation' },
];

const fallbackShortVideos = shortCards.map((card) => ({
  title: card.title,
  src: card.src,
  videoType: 'short' as const,
}));

export function ShortClipsPage() {
  useEffect(() => {
    document.title = 'Short Clips - Ancient Indian Technology Reels';
  }, []);

  const { videos: latestVideos, loading, error } = useYouTubeChannelVideos({
    fallbackVideos: fallbackShortVideos,
    maxResults: 9,
    videoKind: 'short',
  });
  const syncedShortCards = useMemo(
    () =>
      latestVideos.map((video) => ({
        title: video.title,
        src: video.src,
        duration: formatDurationLabel(video.durationSeconds) ?? video.duration ?? 'Short',
        query: 'channel latest',
        reason: 'Auto-synced YouTube Short from channel',
      })),
    [latestVideos]
  );

  return (
    <main className='min-h-screen bg-[#0b1020] text-[#f4ead8]'>
      <SubmenuHeaderNav />

      <section className='relative overflow-hidden'>
        <div className='h-[54vh] min-h-[360px]'>
          <img src='/vimana.jpg' alt='Ancient technology short video stream' className='h-full w-full object-cover object-center' />
        </div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#070b14]/90 via-[#0b1020]/70 to-[#0b1020]/78' />
        <div className='absolute inset-0 flex items-end'>
          <div className='max-w-7xl mx-auto w-full px-6 md:px-12 pb-10'>
            <div className='max-w-3xl'>
              <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em]'>Short-form Stream</p>
              <h1 className='mt-4 text-4xl md:text-6xl font-sans font-bold'>Short Clips</h1>
              <p className='mt-3 text-[#f4ead8]/88'>Fast, vertical-learning clips under 10 minutes. Scroll, preview, and jump into focused knowledge bursts.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10 md:space-y-12'>
        {(loading || error || syncedShortCards.length === 0) && (
          <div className='inline-flex items-center gap-2 rounded-full border border-[#d4b26a]/25 bg-[#121a30]/70 px-3 py-1.5 text-xs text-[#f4ead8]/80'>
            {loading ? <Loader2 className='h-3.5 w-3.5 animate-spin' aria-hidden /> : <AlertCircle className='h-3.5 w-3.5' aria-hidden />}
            <span>{loading ? 'Syncing latest videos...' : error || 'No videos found on the channel yet.'}</span>
          </div>
        )}
        <div className='flex flex-wrap gap-2'>
          {['All', '<10 min', 'Metallurgy', 'Astronomy', 'Medicine', 'Urban Planning'].map((chip) => (
            <button key={chip} className='rounded-full border border-[#d4b26a]/30 bg-[#121a30] px-3 py-1.5 text-xs text-[#f4ead8]/85 hover:bg-[#d4b26a]/15 transition-colors'>
              {chip}
            </button>
          ))}
        </div>

        <section className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {syncedShortCards.map((card) => (
            <VideoCard key={card.title} item={card} aspectClassName='aspect-[9/16]' className='rounded-2xl bg-[#121a30]' />
          ))}
        </section>

        <section className='rounded-2xl border border-[#d4b26a]/22 bg-[#121a30] p-6'>
          <h3 className='text-xl font-semibold'>Recommended Next Watch</h3>
          <div className='mt-4 grid md:grid-cols-2 gap-4 text-sm'>
            <div className='border border-[#d4b26a]/20 bg-[#0b1020]/70 p-4'>
              <p className='font-semibold'>Best placement: after intro</p>
              <p className='mt-1 text-[#f4ead8]/78'>Start with foundational short clips to orient new viewers.</p>
            </div>
            <div className='border border-[#d4b26a]/20 bg-[#0b1020]/70 p-4'>
              <p className='font-semibold'>Best placement: mid-feed and end</p>
              <p className='mt-1 text-[#f4ead8]/78'>Use themed clusters for retention and stronger binge flow.</p>
            </div>
          </div>
        </section>

        <VideoTopicHighlights
          title='Short Clip Learning Guide'
          description='Short-form videos are strongest when they turn one impressive detail into a clear learning moment. This section helps visitors understand how to use quick clips without losing the deeper historical context.'
          highlights={shortClipHighlights}
          takeaways={shortClipTakeaways}
          terms={shortClipTerms}
        />
      </section>
      <Footer />
    </main>
  );
}
