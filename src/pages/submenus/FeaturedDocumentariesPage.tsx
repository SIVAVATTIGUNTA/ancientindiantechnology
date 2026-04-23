import { useEffect, useMemo } from 'react';
import { AlertCircle, Flame, Film, Loader2, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';
import { VideoCard } from '../../components/video/VideoCard';
import { VideoRowCarousel } from '../../components/video/VideoRowCarousel';
import { VideoTopicHighlights } from '../../components/video/VideoTopicHighlights';
import { useYouTubeChannelVideos } from '@/hooks/useYouTubeChannelVideos';
import { formatDurationLabel } from '@/lib/youtubeVideoFilters';

const CHANNEL_URL = 'https://www.youtube.com/@Ancientindiantechnology';

const documentaryHighlights = [
  {
    label: 'Watch Path',
    title: 'Start broad, then go technical',
    text: 'Begin with overview documentaries, then move into metallurgy, astronomy, medicine, and urban planning so viewers understand both story and evidence.',
  },
  {
    label: 'Research Lens',
    title: 'Compare claims with sources',
    text: 'Use each film as a conversation starter. Strong documentaries should separate archaeology, textual tradition, material analysis, and later interpretation.',
  },
  {
    label: 'Learning Outcome',
    title: 'Turn viewing into topic pages',
    text: 'After a long-form video, guide visitors toward related subpages where diagrams, timelines, and page-specific explanations make the topic more usable.',
  },
];

const documentaryTakeaways = [
  'Best first stop for new visitors who want the whole Ancient Indian Technology theme.',
  'Useful for classroom introductions before assigning focused pages like Wootz, Jantar Mantar, Ayurveda, or Lothal.',
  'Long-form viewing should lead to evidence questions: what is excavated, what is textual, and what is reconstructed?',
];

const documentaryTerms = ['overview films', 'metallurgy stories', 'astronomy heritage', 'urban engineering', 'medical history', 'evidence-based viewing'];

const docs = [
  { title: 'Ancient Indian Technology Documentary', query: 'Ancient Indian Technology Documentary', category: 'documentary', duration: '30-60 min', reason: 'Gateway film for first-time users', placement: 'hero', src: 'https://www.youtube.com/embed/Xhc-hT71AnA?si=ulBRclKafIvKwxXO' },
  { title: 'Astronomy and Scientific Heritage', query: 'Astronomy and Scientific Heritage India documentary', category: 'documentary', duration: '20-45 min', reason: 'Strong observatory and math context', placement: 'featured', src: 'https://www.youtube.com/embed/HjRBdayDkk0?si=iUZCkzms44H4x9hw' },
  { title: 'Engineering in Ancient Civilizations of India', query: 'ancient india engineering documentary', category: 'documentary', duration: '20-45 min', reason: 'Cross-topic technical depth', placement: 'grid', src: 'https://www.youtube.com/embed/WZzK1sQoeHo?si=Q1Zf4KXtEzkZt44B' },
  { title: 'Knowledge Systems and Text Traditions', query: 'ancient indian knowledge systems documentary', category: 'documentary', duration: '15-30 min', reason: 'Textual and research framing', placement: 'grid', src: 'https://www.youtube.com/embed/GwUtRso7aNw?si=wxrUkvCRDGUnBhHk' },
  { title: 'Metallurgy of Wootz and Zinc', query: 'wootz steel zinc distillation documentary', category: 'documentary', duration: '15-30 min', reason: 'Premium metallurgy narrative', placement: 'grid', src: 'https://www.youtube.com/embed/ixrQqNogOwc?si=HKuGzodkRdexBQ9B' },
  { title: 'Urban Planning and Hydraulic Intelligence', query: 'indus valley drainage system documentary', category: 'documentary', duration: '15-25 min', reason: 'Infrastructure lens for urban pages', placement: 'carousel', src: 'https://www.youtube.com/embed?listType=search&list=indus%20valley%20drainage%20system%20documentary' },
  { title: 'Ayurveda: Texts, Practice, and Modern Relevance', query: 'ayurveda history documentary india', category: 'documentary', duration: '20-40 min', reason: 'Medical legacy playlist anchor', placement: 'carousel', src: 'https://www.youtube.com/embed?listType=search&list=ayurveda%20history%20documentary%20india' },
];

const fallbackDocumentaryVideos = docs.slice(0, 6).map((doc) => ({
  title: doc.title,
  src: doc.src,
  videoType: 'fullLength' as const,
}));

export function FeaturedDocumentariesPage() {
  useEffect(() => {
    document.title = 'Featured Documentaries - Ancient Indian Technology';
  }, []);

  const { videos: latestVideos, loading, error } = useYouTubeChannelVideos({
    fallbackVideos: fallbackDocumentaryVideos,
    maxResults: 9,
    videoKind: 'fullLength',
  });
  const docsFromChannel = useMemo(
    () =>
      latestVideos.map((video, index) => ({
        title: video.title,
        src: video.src,
        category: 'documentary',
        duration: formatDurationLabel(video.durationSeconds) ?? 'Latest upload',
        reason: 'Auto-synced full-length video from channel',
        query: 'channel latest',
        placement: index === 0 ? 'hero' : index < 4 ? 'featured' : 'grid',
      })),
    [latestVideos]
  );

  return (
    <main className="min-h-screen bg-[#070d17] text-[#f4ead8]">
      <SubmenuHeaderNav />

      <section className="relative overflow-hidden">
        <div className="h-[58vh] min-h-[390px]">
          <img src="/hero-metallurgy.png" alt="" className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#03060d]/92 via-[#070d17]/74 to-[#070d17]/84" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-10 md:pb-14">
            <div className="max-w-3xl border border-[#d4b26a]/25 bg-[#101a2f]/82 p-6 md:p-8">
              <p className="inline-flex items-center gap-2 border border-[#d4b26a]/45 bg-[#070d17]/80 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[#d4b26a]">
                <Film className="h-3.5 w-3.5" />
                Netflix Documentary Grid
              </p>
              <h1 className="mt-4 text-4xl md:text-6xl font-sans font-bold tracking-tight leading-[1.1]">
                Featured Documentaries
              </h1>
              <p className="mt-4 text-base md:text-lg text-[#f4ead8]/88 font-body leading-relaxed">
                Explore Ancient Indian Science Through Visual Stories - a premium long-form video library with trending rows, recommendations, and curated watch paths.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 bg-[#d4b26a] px-5 py-2.5 text-sm font-semibold text-[#1a120f] hover:bg-[#c8a455] transition-colors">
                  <PlayCircle className="h-4 w-4" />
                  Play Featured
                </button>
                <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#f4ead8]/50 px-5 py-2.5 text-sm font-semibold hover:bg-[#f4ead8]/10 transition-colors">
                  Open YouTube Channel
                </a>
                <Link to="/topic/short-clips" className="inline-flex items-center gap-2 border border-[#d4b26a]/45 px-5 py-2.5 text-sm font-semibold text-[#d4b26a] hover:bg-[#d4b26a]/12 transition-colors">
                  Go to Shorts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10">
        {(loading || error || docsFromChannel.length === 0) && (
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4b26a]/25 bg-[#101a2f]/50 px-3 py-1.5 text-xs text-[#f4ead8]/80">
            {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden /> : <AlertCircle className="h-3.5 w-3.5" aria-hidden />}
            <span>{loading ? 'Syncing latest videos...' : error || 'No videos found on the channel yet.'}</span>
          </div>
        )}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Flame className="h-5 w-5 text-[#d4b26a]" />
            <h2 className="text-2xl font-bold">Trending Now</h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {docsFromChannel.slice(1).map((video) => (
              <VideoCard key={video.title} item={video} />
            ))}
          </div>
        </section>

        <VideoRowCarousel title="Category Rows" items={docsFromChannel} />

        <VideoTopicHighlights
          title="Documentary Watch Guide"
          description="These videos work best as guided entry points. The goal is not passive viewing, but helping visitors connect visual stories to the site's deeper topic pages and evidence-based explanations."
          highlights={documentaryHighlights}
          takeaways={documentaryTakeaways}
          terms={documentaryTerms}
        />
      </section>

      <Footer />
    </main>
  );
}
