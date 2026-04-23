import { Link } from 'react-router-dom';
import { BookOpen, FlaskConical, Landmark, Microscope, PlayCircle, Sparkles } from 'lucide-react';
import { findTopicBySlug, topicItems } from '../lib/topicRoutes';
import { Footer } from '../sections/Footer';

interface TopicPageLayoutProps {
  slug: string;
}

export function TopicPageLayout({ slug }: TopicPageLayoutProps) {
  const topic = findTopicBySlug(slug);

  if (!topic) {
    return (
      <main className="min-h-screen bg-[#f4ead8] text-[#2b1b17] px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-[#8d4f36] hover:text-[#2b1b17] font-body">
            ← Back to Home
          </Link>
          <h1 className="mt-8 text-4xl font-sans font-bold">Topic not found</h1>
        </div>
      </main>
    );
  }

  const related = topicItems.filter((item) => item.slug !== topic.slug && item.category === topic.category).slice(0, 6);
  const iconMap = {
    metallurgy: FlaskConical,
    astronomy: Sparkles,
    urban: Landmark,
    medicine: Microscope,
    resources: BookOpen,
    videos: PlayCircle,
    general: BookOpen,
  } as const;
  const Icon = iconMap[topic.pageStyle];

  const styleMap = {
    metallurgy: 'from-[#3a231a]/80 via-[#2b1b17]/55 to-[#2b1b17]/75',
    astronomy: 'from-[#0b5c5c]/75 via-[#2b1b17]/55 to-[#2b1b17]/75',
    urban: 'from-[#8d4f36]/75 via-[#2b1b17]/55 to-[#2b1b17]/75',
    medicine: 'from-[#35563f]/70 via-[#2b1b17]/55 to-[#2b1b17]/75',
    resources: 'from-[#6d4c1f]/75 via-[#2b1b17]/55 to-[#2b1b17]/75',
    videos: 'from-[#4f2e59]/75 via-[#2b1b17]/55 to-[#2b1b17]/75',
    general: 'from-[#2b1b17]/82 via-[#2b1b17]/55 to-[#2b1b17]/75',
  } as const;

  return (
    <main className="min-h-screen bg-[#f4ead8] text-[#2b1b17]">
      <header className="sticky top-0 z-30 border-b border-[#8d4f36]/20 bg-[#f4ead8]/92 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-3.5 flex items-center justify-between">
          <Link
            to="/"
            className="h-14 w-14 rounded-full border border-[#d4b26a]/60 bg-white/50 shadow-[0_8px_28px_rgba(43,27,23,0.12)] p-1.5"
            aria-label="Home"
          >
            <img src="/logo_ait.jpeg" alt="AIT logo" className="h-full w-full rounded-full object-cover object-center" />
          </Link>
          <Link to="/" className="text-sm font-body text-[#8d4f36] hover:text-[#2b1b17]">
            Back to Home
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="h-[46vh] min-h-[320px] max-h-[520px]">
          <img src={topic.image} alt={topic.title} className="h-full w-full object-cover object-center" />
        </div>
        <div className={`absolute inset-0 bg-gradient-to-r ${styleMap[topic.pageStyle]}`} />
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="inline-flex rounded-full bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]">
              {topic.category}
            </p>
            <h1 className="mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]">{topic.title}</h1>
            <p className="mt-4 text-[#f4ead8]/85 leading-relaxed font-body">{topic.intro}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-16">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8">
          <div
            data-ait-reveal="left"
            className="rounded-2xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8"
          >
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-[#0b5c5c]" />
              <h2 className="text-2xl font-sans font-semibold">Topic Overview</h2>
            </div>
            <p className="mt-4 text-[#3a231a]/85 leading-relaxed font-body">{topic.description}</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {topic.sections.map((section) => (
                <article key={section.title} className="rounded-xl bg-white/50 border border-[#8d4f36]/15 p-4">
                  <h3 className="font-sans font-semibold text-[#2b1b17]">{section.title}</h3>
                  <p className="mt-2 text-sm text-[#3a231a]/80 leading-relaxed font-body">{section.body}</p>
                </article>
              ))}
            </div>
          </div>

          <aside
            data-ait-reveal="right"
            data-ait-delay="80"
            className="rounded-2xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-7"
          >
            <h3 className="text-xl font-sans font-semibold">Key Highlights</h3>
            <ul className="mt-4 space-y-3">
              {topic.highlights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#d4b26a] shrink-0" />
                  <p className="text-sm text-[#3a231a]/85 leading-relaxed font-body">{point}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div
          data-ait-reveal
          data-ait-delay="40"
          className="mt-10 rounded-2xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8"
        >
          <h2 className="text-2xl font-sans font-semibold">Timeline</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {topic.timeline.map((step) => (
              <article key={step.label} className="rounded-xl border border-[#8d4f36]/15 bg-white/50 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-[#8d4f36] font-body">{step.label}</p>
                <p className="mt-2 text-sm text-[#3a231a]/82 leading-relaxed font-body">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div data-ait-reveal data-ait-delay="60" className="mt-10 grid md:grid-cols-2 gap-6">
          {topic.gallery.map((img, idx) => (
            <div key={`${img}-${idx}`} className="rounded-2xl overflow-hidden border border-[#8d4f36]/20 bg-white/40">
              <img src={img} alt={`${topic.title} visual ${idx + 1}`} className="h-64 w-full object-cover object-center" loading="lazy" />
            </div>
          ))}
        </div>

        <div data-ait-reveal data-ait-delay="60" className="mt-10 rounded-2xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8">
          <h2 className="text-2xl font-sans font-semibold">Featured Video</h2>
          <p className="mt-3 text-[#3a231a]/80 font-body">A curated visual reference to complement this topic.</p>
          <div className="mt-5 overflow-hidden rounded-xl border border-[#8d4f36]/20 bg-black">
            <div className="aspect-video">
              <iframe
                src={topic.videoUrl}
                title={`${topic.title} video`}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div
          data-ait-reveal="scale"
          data-ait-delay="60"
          className="mt-10 rounded-2xl border border-[#8d4f36]/20 bg-gradient-to-r from-[#2b1b17] to-[#3a231a] p-6 md:p-8"
        >
          <h3 className="text-2xl font-sans font-semibold text-[#f4ead8]">{topic.ctaTitle}</h3>
          <p className="mt-3 text-[#f4ead8]/80 max-w-3xl font-body">{topic.ctaText}</p>
          <div className="mt-5">
            <Link
              to="/"
              className="inline-flex rounded-full bg-[#d4b26a] px-6 py-3 text-sm font-sans font-semibold text-[#2b1b17] hover:bg-[#c6a055] transition-colors"
            >
              Go to Homepage Sections
            </Link>
          </div>
        </div>

        {related.length > 0 && (
          <div data-ait-reveal data-ait-delay="80" className="mt-12">
            <h3 className="text-2xl font-sans font-semibold mb-5">Related Topics</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/topic/${item.slug}`}
                  className="rounded-xl border border-[#8d4f36]/20 bg-white/40 p-4 hover:bg-[#d4b26a]/15 transition-colors"
                >
                  <p className="text-xs uppercase tracking-[0.12em] text-[#8d4f36] font-body">{item.category}</p>
                  <p className="mt-2 font-sans font-semibold text-[#2b1b17]">{item.title}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
