import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroConfig } from '../config';
import { topicPathFromLabel } from '../lib/topicRoutes';

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = useMemo(() => ([
    {
      image: '/hero-metallurgy.png',
      badge: 'Metal Innovation',
      title: 'Wootz Steel and the Iron Pillar Legacy',
      description: 'Explore how ancient India produced world-famous steel and corrosion-resistant iron that still challenges modern metallurgy.',
      primaryCta: { label: 'Explore Metallurgy', href: '#metallurgy' },
      secondaryCta: { label: 'Read Topics', href: '#urban' },
    },
    {
      image: '/astronomy-jantar.jpg',
      badge: 'Astronomy and Mathematics',
      title: 'From Aryabhata to Precision Observatories',
      description: 'Discover celestial calculations, zero, and monumental instruments like Jantar Mantar that measured the sky with remarkable accuracy.',
      primaryCta: { label: 'Explore Astronomy', href: '#astronomy' },
      secondaryCta: { label: 'View Resources', href: '#resources' },
    },
    {
      image: '/sushruta-surgery.jpg',
      badge: 'Medicine and Knowledge',
      title: 'Sushruta, Ayurveda, and Surgical Excellence',
      description: 'Uncover foundational medical systems, advanced procedures, and healing traditions that shaped healthcare for centuries.',
      primaryCta: { label: 'Explore Medicine', href: '#medicine' },
      secondaryCta: { label: 'Watch Videos', href: '#videos' },
    },
  ]), []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  const toHref = (label: string, fallbackHref: string): string => {
    if (label.toLowerCase() === 'home' || fallbackHref === '#home') return '#home';
    return topicPathFromLabel(label);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[activeSlide];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#2b1b17]">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={index !== activeSlide}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover object-center scale-110 blur-[2px] opacity-30"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <img
            src={slide.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-contain"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b1b17]/92 via-[#2b1b17]/70 to-[#2b1b17]/88" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#2b1b17]/55" />
        </div>
      ))}

      <div className="absolute inset-0 z-10 px-6 md:px-12 pt-32 md:pt-40 pb-16 flex items-end">
        <div className="max-w-3xl">
          <p className="inline-flex items-center rounded-full border border-[#d4b26a]/45 bg-[#2b1b17]/40 px-4 py-1.5 text-xs md:text-sm font-body uppercase tracking-[0.16em] text-[#d4b26a]">
            {currentSlide.badge}
          </p>
          <h1 className="mt-5 text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold leading-tight tracking-tight text-[#f4ead8]">
            {currentSlide.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-[#f4ead8]/82 font-body leading-relaxed">
            {currentSlide.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={currentSlide.primaryCta.href}
              onClick={(e) => handleNavClick(e, currentSlide.primaryCta.href)}
              className="inline-flex items-center justify-center rounded-full bg-[#d4b26a] px-7 py-3.5 text-sm font-sans font-semibold text-[#2b1b17] hover:bg-[#c6a055] transition-colors before:content-none after:content-none focus-visible:outline-none"
            >
              <span className="block leading-none whitespace-nowrap">{currentSlide.primaryCta.label}</span>
            </a>
            <a
              href={currentSlide.secondaryCta.href}
              onClick={(e) => handleNavClick(e, currentSlide.secondaryCta.href)}
              className="inline-flex items-center justify-center rounded-full border border-[#d4b26a]/60 bg-[#2b1b17]/40 px-7 py-3.5 text-sm font-sans font-semibold text-[#f4ead8] hover:bg-[#3a231a]/70 transition-colors before:content-none after:content-none focus-visible:outline-none"
            >
              <span className="block leading-none whitespace-nowrap">{currentSlide.secondaryCta.label}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-6 md:right-12 bottom-20 z-20 flex items-center gap-3">
        <button
          onClick={handlePrev}
          className="h-10 w-10 rounded-full border border-[#d4b26a]/45 bg-[#2b1b17]/60 text-[#f4ead8] hover:bg-[#3a231a] transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="mx-auto h-4 w-4" />
        </button>
        <button
          onClick={handleNext}
          className="h-10 w-10 rounded-full border border-[#d4b26a]/45 bg-[#2b1b17]/60 text-[#f4ead8] hover:bg-[#3a231a] transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="mx-auto h-4 w-4" />
        </button>
      </div>

      {/* <div className="absolute left-6 md:left-12 bottom-20 z-20 flex items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              activeSlide === index ? 'w-10 bg-[#d4b26a]' : 'w-2.5 bg-[#f4ead8]/45 hover:bg-[#f4ead8]/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div> */}

      <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[#d4b26a]/70 font-body text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#d4b26a]/70" strokeWidth={1.5} />
      </div>

      <nav className="absolute top-0 left-0 right-0 z-30 px-4 md:px-10 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-[#d4b26a]/20 bg-[#2b1b17]/45 px-4 md:px-6 py-2 shadow-[0_8px_28px_rgba(0,0,0,0.24)]">
          <Link
            to="/"
            className="h-24 w-24 md:h-[100px] md:w-[100px] p-1.5 shrink-0"
            aria-label="Home"
          >
            <img
              src="/logo_ait.jpeg"
              alt="Ancient Indian Technology logo"
              className="h-full w-full object-cover object-center"
            />
          </Link>

          {heroConfig.navLinks.length > 0 && (
            <div className="hidden lg:flex items-center gap-1 text-[14px] font-body">
              {heroConfig.navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.columns?.length && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={toHref(link.label, link.href)}
                    onClick={(e) => {
                      if (toHref(link.label, link.href) === '#home') handleNavClick(e, '#home');
                    }}
                    className={`rounded-lg px-3.5 py-2.5 leading-none transition-all duration-200 ${
                      activeDropdown === link.label
                        ? 'bg-[#d4b26a]/25 text-[#f4ead8]'
                        : 'text-[#f4ead8]/90 hover:bg-[#f4ead8]/12 hover:text-[#ffffff]'
                    }`}
                  >
                    {link.label}
                  </a>
                  {activeDropdown === link.label && link.columns && (
                    <div className="absolute right-0 top-full mt-2.5 w-[460px] rounded-2xl border border-[#d4b26a]/25 bg-[#2b1b17]/96 p-4 shadow-[0_20px_46px_rgba(0,0,0,0.38)] backdrop-blur-sm animate-in fade-in slide-in-from-top-1 duration-200">
                      <div className="grid grid-cols-2 gap-2.5">
                        {link.columns.flat().map((item) => (
                          <a
                            key={item.label}
                            href={topicPathFromLabel(item.label)}
                            className="rounded-xl px-3 py-2.5 hover:bg-[#f4ead8]/10 transition-colors duration-200"
                          >
                            <p className="text-[#f4ead8] text-sm font-sans font-semibold leading-tight">{item.label}</p>
                            <p className="mt-1.5 text-xs text-[#f4ead8]/68 font-body leading-relaxed">{item.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <button
            className="lg:hidden text-[#f4ead8] p-2.5 rounded-lg hover:bg-[#f4ead8]/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute top-0 right-0 w-[88%] max-w-[340px] h-full bg-[#2b1b17] border-l border-[#d4b26a]/30 flex flex-col shadow-[-14px_0_40px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#d4b26a]/30 shrink-0">
              <div className="h-12 w-12 rounded-full border border-[#d4b26a]/60 p-1">
                <img src="/logo_ait.jpeg" alt="AIT logo" className="h-full w-full rounded-full object-cover object-center" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#f4ead8]/70 hover:text-[#f4ead8] p-1 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {heroConfig.navLinks.map((link) => {
                const hasDropdown = !!link.columns?.length;
                const isExpanded = mobileExpanded === link.label;

                return (
                  <div key={link.label} className="border-b border-[#d4b26a]/25">
                    <div className="flex items-stretch">
                      <a
                        href={toHref(link.label, link.href)}
                        onClick={(e) => {
                          if (toHref(link.label, link.href) === '#home') handleNavClick(e, '#home');
                        }}
                        className="flex-1 px-6 py-4 hover:bg-[#f4ead8]/10 transition-colors duration-200"
                      >
                        <span className="block text-[#f4ead8]/90 font-body text-[15px] leading-tight">{link.label}</span>
                        {link.subtitle && (
                          <span className="block text-[#d4b26a]/75 text-[10px] font-body mt-0.5 tracking-wide">{link.subtitle}</span>
                        )}
                      </a>
                      {hasDropdown && (
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                          className="px-4 text-[#f4ead8]/50 hover:text-[#f4ead8] hover:bg-[#f4ead8]/10 transition-colors duration-200 shrink-0"
                          aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {isExpanded && link.columns && (
                      <div className="bg-[#3a231a]/90 border-t border-[#d4b26a]/25">
                        {link.columns.flat().map((item) => (
                          <a
                            key={item.label}
                            href={topicPathFromLabel(item.label)}
                            className="flex items-start gap-3 px-6 py-3 border-b border-[#d4b26a]/20 hover:bg-[#f4ead8]/8 transition-colors duration-150"
                          >
                            <span className="shrink-0 w-1 h-1 rounded-full bg-[#d4b26a]/70 mt-2" />
                            <span>
                              <span className="block text-[#f4ead8]/80 font-body text-[13px] leading-snug">{item.label}</span>
                              <span className="block text-[#f4ead8]/55 font-body text-[11px] mt-0.5 leading-relaxed">{item.description}</span>
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="px-6 py-4 border-t border-[#d4b26a]/30 shrink-0" />
          </div>
        </div>
      )}
    </section>
  );
}
