import { useEffect, useState } from 'react';
import { BookOpen, ChevronRight, X, Play } from 'lucide-react';

// ── Section registry (matches page element IDs) ───────────────────
const TOC = [
  { id: 'home',       label: 'Home',          subtitle: 'होम' },
  { id: 'metallurgy', label: 'Metallurgy',    subtitle: 'धातु विज्ञान' },
  { id: 'advanced',   label: 'Advanced Tech', subtitle: 'प्रौद्योगिकी' },
  { id: 'astronomy',  label: 'Astronomy',     subtitle: 'खगोल शास्त्र' },
  { id: 'urban',      label: 'Urban Planning',subtitle: 'नगर नियोजन' },
  { id: 'medicine',   label: 'Medicine',      subtitle: 'आयुर्वेद' },
  { id: 'resources',  label: 'Resources',     subtitle: 'सन्दर्भ' },
  { id: 'videos',     label: 'Videos',        subtitle: 'मल्टीमीडिया' },
];

// ── Context-aware related topics keyed by active section ─────────
const RELATED: Record<string, { label: string; id: string }[]> = {
  metallurgy: [
    { label: 'Wootz Steel & Damascus Blades', id: 'metallurgy' },
    { label: 'Delhi Iron Pillar',             id: 'metallurgy' },
    { label: 'Zinc Distillation, Rajasthan',  id: 'metallurgy' },
  ],
  advanced: [
    { label: 'Vimana Aerospace Technology',   id: 'advanced' },
    { label: 'Agastya Battery Cells',         id: 'advanced' },
    { label: 'Musical Pillars of Hampi',      id: 'advanced' },
  ],
  astronomy: [
    { label: 'Jantar Mantar Observatories',   id: 'astronomy' },
    { label: 'Aryabhata & the Concept of Zero', id: 'astronomy' },
    { label: 'Siddhantic Eclipse Calculations', id: 'astronomy' },
  ],
  urban: [
    { label: 'Indus Valley Sanitation',       id: 'urban' },
    { label: 'The Great Bath, Mohenjo-daro',  id: 'urban' },
    { label: 'Lothal Dockyard',               id: 'urban' },
  ],
  medicine: [
    { label: 'Sushruta Samhita',              id: 'medicine' },
    { label: 'Charaka Samhita',               id: 'medicine' },
    { label: 'Ayurvedic Panchakarma',         id: 'medicine' },
  ],
  resources: [
    { label: 'Research Papers',               id: 'resources' },
    { label: 'Books & Bibliography',          id: 'resources' },
    { label: 'External Archives',             id: 'resources' },
  ],
};

// ── Categories ───────────────────────────────────────────────────
const CATEGORIES = [
  { label: 'Metallurgy',    id: 'metallurgy' },
  { label: 'Astronomy',     id: 'astronomy' },
  { label: 'Urban Planning',id: 'urban' },
  { label: 'Medicine',      id: 'medicine' },
  { label: 'Advanced Tech', id: 'advanced' },
  { label: 'Resources',     id: 'resources' },
];

// ── Stub recent videos ────────────────────────────────────────────
const RECENT_VIDEOS = [
  { title: 'The Wootz Steel Mystery', duration: '18 min', id: 'metallurgy' },
  { title: 'Jantar Mantar Explained', duration: '24 min', id: 'astronomy' },
  { title: 'Sushruta: Father of Surgery', duration: '31 min', id: 'medicine' },
];

// ── Shared scroll helper ──────────────────────────────────────────
function scrollToSection(id: string) {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

// ─────────────────────────────────────────────────────────────────
export function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [readingProgress, setReadingProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // ── Reading progress ────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop || document.body.scrollTop;
      const total = doc.scrollHeight - doc.clientHeight;
      setReadingProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Active section tracking ────────────────────────────────────
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    TOC.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25, rootMargin: '-8% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const relatedTopics = RELATED[activeSection] ?? [];
  const circumference = 2 * Math.PI * 20; // radius = 20

  // ── Shared TOC nav ────────────────────────────────────────────
  const TocNav = ({ onClick }: { onClick?: () => void }) => (
    <nav aria-label="Page sections">
      {TOC.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => { scrollToSection(section.id); onClick?.(); }}
            className={`group w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-left transition-colors duration-150 ${
              isActive
                ? 'bg-[#d4b26a]/20 text-[#2b1b17]'
                : 'text-[#3a231a]/70 hover:bg-[#8d4f36]/10 hover:text-[#2b1b17]'
            }`}
          >
            <span
              className={`shrink-0 w-1.5 h-1.5 rounded-full transition-colors duration-150 ${
                isActive ? 'bg-[#0b5c5c]' : 'bg-[#8d4f36]/35 group-hover:bg-[#8d4f36]/55'
              }`}
            />
            <span>
              <span className="block font-sans text-[13px] font-medium leading-tight">
                {section.label}
              </span>
              <span className="block font-body text-[10px] text-[#8d4f36]/85 mt-0.5">
                {section.subtitle}
              </span>
            </span>
            {isActive && (
              <span className="ml-auto shrink-0 w-1 h-4 rounded-full bg-[#0b5c5c]/60" />
            )}
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          DESKTOP SIDEBAR  (xl+)
      ════════════════════════════════════════════════════════════ */}
      <div className="hidden xl:block fixed right-0 top-0 h-full z-30 pointer-events-none">

        {/* Reading progress rail */}
        <div className="absolute right-0 top-0 w-[3px] h-full bg-[#8d4f36]/20 pointer-events-none">
          <div
            className="w-full bg-[#0b5c5c]/80 transition-all duration-200"
            style={{ height: `${readingProgress}%` }}
          />
        </div>

        {/* Sidebar panel */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-auto">
          {isExpanded ? (
            /* ── Expanded panel ── */
            <div className="w-[256px] max-h-[82vh] bg-[#f4ead8]/98 backdrop-blur-xl border border-[#8d4f36]/20 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-y-auto">

              {/* Panel header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-[#f4ead8]/98 backdrop-blur-xl border-b border-[#8d4f36]/20">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#8d4f36]/80" strokeWidth={1.5} />
                  <span className="text-[10px] font-body uppercase tracking-[0.15em] text-[#8d4f36]/80">
                    Contents
                  </span>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-1 text-[#8d4f36]/80 hover:text-[#2b1b17] transition-colors"
                  aria-label="Collapse sidebar"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* TOC */}
              <div className="px-2.5 py-3">
                <p className="text-[9px] font-body uppercase tracking-[0.15em] text-softblack/30 px-2 mb-1.5">
                  Table of Contents
                </p>
                <TocNav />
              </div>

              {/* Related Topics */}
              {relatedTopics.length > 0 && (
                <div className="px-2.5 py-3 border-t border-softblack/[0.07]">
                  <p className="text-[9px] font-body uppercase tracking-[0.15em] text-softblack/30 px-2 mb-1.5">
                    Related Topics
                  </p>
                  <div className="space-y-0.5">
                    {relatedTopics.map((topic) => (
                      <button
                        key={topic.label}
                        onClick={() => scrollToSection(topic.id)}
                        className="group w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-left text-softblack/55 hover:text-softblack/85 hover:bg-softblack/[0.04] transition-colors duration-150"
                      >
                        <ChevronRight className="w-3 h-3 shrink-0 text-softblack/25 group-hover:text-softblack/50" strokeWidth={2} />
                        <span className="font-body text-[12px] leading-snug">{topic.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Categories */}
              <div className="px-2.5 py-3 border-t border-softblack/[0.07]">
                <p className="text-[9px] font-body uppercase tracking-[0.15em] text-softblack/30 px-2 mb-2">
                  Categories
                </p>
                <div className="flex flex-wrap gap-1.5 px-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.label}
                      onClick={() => scrollToSection(cat.id)}
                      className="px-2.5 py-1 text-[11px] font-body text-softblack/55 bg-softblack/[0.05] rounded-full hover:bg-forest-dark hover:text-white transition-all duration-200"
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Videos */}
              <div className="px-2.5 py-3 border-t border-softblack/[0.07]">
                <p className="text-[9px] font-body uppercase tracking-[0.15em] text-softblack/30 px-2 mb-2">
                  Recent Videos
                </p>
                <div className="space-y-0.5">
                  {RECENT_VIDEOS.map((video) => (
                    <button
                      key={video.title}
                      onClick={() => scrollToSection(video.id)}
                      className="group w-full flex items-start gap-2.5 px-2 py-2 rounded-lg text-left hover:bg-softblack/[0.04] transition-colors duration-150"
                    >
                      <div className="shrink-0 w-7 h-7 mt-0.5 rounded-md bg-forest-dark/8 flex items-center justify-center group-hover:bg-forest-dark group-hover:text-white transition-all duration-200">
                        <Play className="w-3 h-3 text-forest-dark group-hover:text-white" strokeWidth={2} />
                      </div>
                      <span>
                        <span className="block font-sans text-[12px] font-medium text-softblack/70 group-hover:text-softblack/90 leading-snug">
                          {video.title}
                        </span>
                        <span className="block font-body text-[10px] text-softblack/30 mt-0.5">
                          {video.duration}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Reading progress inside panel */}
              <div className="px-4 py-3 border-t border-softblack/[0.07]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[9px] font-body uppercase tracking-[0.15em] text-softblack/30">Reading Progress</span>
                  <span className="text-[10px] font-body text-softblack/40">{Math.round(readingProgress)}%</span>
                </div>
                <div className="h-1 bg-softblack/8 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-forest-dark/50 rounded-full transition-all duration-300"
                    style={{ width: `${readingProgress}%` }}
                  />
                </div>
              </div>
            </div>
          ) : (
            /* ── Collapsed trigger tab ── */
            <button
              onClick={() => setIsExpanded(true)}
              className="flex flex-col items-center gap-2.5 px-2.5 py-4 bg-white/90 backdrop-blur-xl border border-softblack/10 border-r-0 rounded-l-xl shadow-sm text-softblack/35 hover:text-softblack/65 hover:bg-white transition-all duration-200"
              aria-label="Open table of contents"
            >
              <BookOpen className="w-4 h-4 shrink-0" strokeWidth={1.5} />
              <span
                className="text-[9px] font-body uppercase tracking-[0.14em] select-none"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Contents
              </span>
              {/* Mini progress pip */}
              <span className="w-1.5 h-1.5 rounded-full bg-forest-dark/30 mt-1" />
            </button>
          )}
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          MOBILE: floating FAB + bottom sheet  (< xl)
      ════════════════════════════════════════════════════════════ */}
      <div className="xl:hidden">

        {/* FAB with progress ring */}
        <button
          onClick={() => setIsMobileOpen(true)}
          className="fixed bottom-6 right-6 z-30 w-12 h-12 bg-[#2b1b17] text-[#f4ead8] rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.35)] flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          aria-label="Open table of contents"
        >
          <BookOpen className="w-5 h-5 relative z-10" strokeWidth={1.5} />
          {/* Progress SVG ring */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
            <circle
              cx="24" cy="24" r="20" fill="none"
              stroke="rgba(212,178,106,0.95)" strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - readingProgress / 100)}
              strokeLinecap="round"
              className="transition-all duration-200"
            />
          </svg>
        </button>

        {/* Bottom sheet */}
        {isMobileOpen && (
          <div className="fixed inset-0 z-50">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/45 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Sheet */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#f4ead8] rounded-t-2xl max-h-[78vh] flex flex-col shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">

              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-1 shrink-0">
                <div className="w-10 h-1 rounded-full bg-softblack/15" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-softblack/[0.08] shrink-0">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-softblack/50" strokeWidth={1.5} />
                  <span className="font-sans font-semibold text-softblack text-sm">
                    Table of Contents
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-1 text-softblack/40 hover:text-softblack transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto px-3 py-3">

                {/* TOC */}
                <div className="mb-5">
                  <TocNav onClick={() => setIsMobileOpen(false)} />
                </div>

                {/* Related Topics */}
                {relatedTopics.length > 0 && (
                  <div className="border-t border-softblack/[0.08] pt-4 mb-4">
                    <p className="text-[10px] font-body uppercase tracking-[0.13em] text-softblack/35 px-2 mb-2">
                      Related Topics
                    </p>
                    <div className="space-y-0.5">
                      {relatedTopics.map((topic) => (
                        <button
                          key={topic.label}
                          onClick={() => { scrollToSection(topic.id); setIsMobileOpen(false); }}
                          className="group w-full flex items-center gap-2 px-2 py-2 rounded-lg text-left text-softblack/60 hover:bg-softblack/5 transition-colors duration-150"
                        >
                          <ChevronRight className="w-3.5 h-3.5 shrink-0 text-softblack/25" strokeWidth={2} />
                          <span className="font-body text-sm">{topic.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Categories */}
                <div className="border-t border-softblack/[0.08] pt-4 mb-4">
                  <p className="text-[10px] font-body uppercase tracking-[0.13em] text-softblack/35 px-2 mb-3">
                    Categories
                  </p>
                  <div className="flex flex-wrap gap-2 px-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.label}
                        onClick={() => { scrollToSection(cat.id); setIsMobileOpen(false); }}
                        className="px-3 py-1.5 text-sm font-body text-softblack/60 bg-softblack/[0.06] rounded-full hover:bg-forest-dark hover:text-white transition-all duration-200"
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Recent Videos */}
                <div className="border-t border-softblack/[0.08] pt-4">
                  <p className="text-[10px] font-body uppercase tracking-[0.13em] text-softblack/35 px-2 mb-2">
                    Recent Videos
                  </p>
                  {RECENT_VIDEOS.map((video) => (
                    <button
                      key={video.title}
                      onClick={() => { scrollToSection(video.id); setIsMobileOpen(false); }}
                      className="group w-full flex items-center gap-3 px-2 py-3 rounded-xl text-left hover:bg-softblack/[0.04] transition-colors duration-150"
                    >
                      <div className="shrink-0 w-9 h-9 rounded-xl bg-forest-dark/8 flex items-center justify-center group-hover:bg-forest-dark transition-all duration-200">
                        <Play className="w-4 h-4 text-forest-dark group-hover:text-white" strokeWidth={2} />
                      </div>
                      <span>
                        <span className="block font-sans text-sm font-medium text-softblack/75 group-hover:text-softblack">
                          {video.title}
                        </span>
                        <span className="block font-body text-xs text-softblack/35 mt-0.5">
                          {video.duration}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>

                {/* Reading progress */}
                <div className="border-t border-softblack/[0.08] pt-4 mt-2 px-2">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-body text-softblack/35 uppercase tracking-widest">Reading Progress</span>
                    <span className="text-[11px] font-body text-softblack/50">{Math.round(readingProgress)}%</span>
                  </div>
                  <div className="h-1.5 bg-softblack/8 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-forest-dark/50 rounded-full transition-all duration-300"
                      style={{ width: `${readingProgress}%` }}
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
