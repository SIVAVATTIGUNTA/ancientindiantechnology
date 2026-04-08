import { useEffect } from 'react';
import { PlayCircle, Flame, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';
import { VideoCard } from '../../components/video/VideoCard';
import { VideoRowCarousel } from '../../components/video/VideoRowCarousel';

const CHANNEL_URL = 'https://www.youtube.com/@Ancientindiantechnology';

export function FeaturedDocumentariesPage() {
  useEffect(() => {
    document.title = 'Featured Documentaries - Ancient Indian Technology';
  }, []);

  const docs = [
    { title: 'Ancient Indian Technology Documentary', query: 'Ancient Indian Technology Documentary', category: 'documentary', duration: '30-60 min', reason: 'Gateway film for first-time users', placement: 'hero', src: 'https://www.youtube.com/embed/Xhc-hT71AnA?si=ulBRclKafIvKwxXO' },
    { title: 'Astronomy and Scientific Heritage', query: 'Astronomy and Scientific Heritage India documentary', category: 'documentary', duration: '20-45 min', reason: 'Strong observatory and math context', placement: 'featured', src: 'https://www.youtube.com/embed/HjRBdayDkk0?si=iUZCkzms44H4x9hw' },
    { title: 'Engineering in Ancient Civilizations of India', query: 'ancient india engineering documentary', category: 'documentary', duration: '20-45 min', reason: 'Cross-topic technical depth', placement: 'grid', src: 'https://www.youtube.com/embed/WZzK1sQoeHo?si=Q1Zf4KXtEzkZt44B' },
    { title: 'Knowledge Systems and Text Traditions', query: 'ancient indian knowledge systems documentary', category: 'documentary', duration: '15-30 min', reason: 'Textual and research framing', placement: 'grid', src: 'https://www.youtube.com/embed/GwUtRso7aNw?si=wxrUkvCRDGUnBhHk' },
    { title: 'Metallurgy of Wootz and Zinc', query: 'wootz steel zinc distillation documentary', category: 'documentary', duration: '15-30 min', reason: 'Premium metallurgy narrative', placement: 'grid', src: 'https://www.youtube.com/embed/ixrQqNogOwc?si=HKuGzodkRdexBQ9B' },
    { title: 'Urban Planning and Hydraulic Intelligence', query: 'indus valley drainage system documentary', category: 'documentary', duration: '15-25 min', reason: 'Infrastructure lens for urban pages', placement: 'carousel', src: 'https://www.youtube.com/embed?listType=search&list=indus%20valley%20drainage%20system%20documentary' },
    { title: 'Ayurveda: Texts, Practice, and Modern Relevance', query: 'ayurveda history documentary india', category: 'documentary', duration: '20-40 min', reason: 'Medical legacy playlist anchor', placement: 'carousel', src: 'https://www.youtube.com/embed?listType=search&list=ayurveda%20history%20documentary%20india' },
  ];

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
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Flame className="h-5 w-5 text-[#d4b26a]" />
            <h2 className="text-2xl font-bold">Trending Now</h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {docs.slice(1).map((video) => (
              <VideoCard key={video.title} item={video} />
            ))}
          </div>
        </section>

        <VideoRowCarousel title="Category Rows" items={docs} />

        <section className="border border-[#d4b26a]/22 bg-[#101a2f] p-5 text-sm">
          <h3 className="text-lg font-semibold">Thumbnail Support</h3>
          <p className="mt-2 text-[#f4ead8]/78">
            AI thumbnail prompts: dramatic steel blade macro with wave patterns; moonlit observatory silhouette with instrument shadows; copper furnace sparks in dark workshop; manuscript and compass cinematic desk shot; wide ancient dockyard sunset with ships.
          </p>
          <p className="mt-2 text-[#f4ead8]/78">
            Search keywords: ancient india documentary thumbnail, indian metallurgy documentary poster, jantar mantar cinematic still, ayurveda manuscript visual, indus valley engineering footage, harappan city reconstruction scene, damascus blade texture.
          </p>
        </section>
      </section>

      <Footer />
    </main>
  );
}
