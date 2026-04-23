import { useEffect, useMemo, useState, type CSSProperties } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroConfig } from '../config';
import { topicPathFromLabel } from '../lib/topicRoutes';

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [homeHeaderHeight, setHomeHeaderHeight] = useState(0);

  const slides = useMemo(() => ([
    {
      image: '/hero-metallurgy.png',
      badge: 'Metal Innovation',
      title: 'Wootz Steel and the Iron Pillar Legacy',
      description: 'Explore how ancient India produced world-famous steel and corrosion-resistant iron that still challenges modern metallurgy.',
      primaryCta: { label: 'Explore Metallurgy', href: '/topic/metallurgy' },
      secondaryCta: { label: 'Read Topics', href: '/topic/urban-planning' },
    },
    {
      image: '/astronomy-jantar.jpg',
      badge: 'Astronomy and Mathematics',
      title: 'From Aryabhata to Precision Observatories',
      description: 'Discover celestial calculations, zero, and monumental instruments like Jantar Mantar that measured the sky with remarkable accuracy.',
      primaryCta: { label: 'Explore Astronomy', href: '/topic/astronomy' },
      secondaryCta: { label: 'View Resources', href: '/topic/resources' },
    },
    {
      image: '/sushruta-surgery.jpg',
      badge: 'Medicine and Knowledge',
      title: 'Sushruta, Ayurveda, and Surgical Excellence',
      description: 'Uncover foundational medical systems, advanced procedures, and healing traditions that shaped healthcare for centuries.',
      primaryCta: { label: 'Explore Medicine', href: '/topic/medicine' },
      secondaryCta: { label: 'Watch Videos', href: '/topic/videos' },
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

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 24);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const header = document.getElementById('ait-home-header');
    if (!header) return;

    const update = () => {
      setHomeHeaderHeight(Math.round(header.getBoundingClientRect().height));
    };

    update();

    if (typeof window.ResizeObserver === 'undefined') {
      window.addEventListener('resize', update, { passive: true });
      return () => window.removeEventListener('resize', update);
    }

    const observer = new ResizeObserver(update);
    observer.observe(header);
    window.addEventListener('resize', update, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollToWithOffset = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const header = document.getElementById('ait-home-header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const top = element.getBoundingClientRect().top + window.scrollY - Math.max(72, headerHeight + 14);

    window.scrollTo({ top, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    scrollToWithOffset(href.replace('#', ''));
  };

  const toHref = (label: string, fallbackHref: string): string => {
    if (label.toLowerCase() === 'home' || fallbackHref === '#home') return '#home';
    if (fallbackHref.startsWith('/')) return fallbackHref;
    return topicPathFromLabel(label);
  };

  const getDescription = (description?: string) =>
    description?.trim() || 'Explore this topic in depth with focused content, visuals, and references.';

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[activeSlide];

  const primaryCtaClass =
    'inline-flex w-full sm:w-auto min-h-[44px] touch-manipulation items-center justify-center rounded-full bg-[#d4b26a] px-7 py-3.5 text-sm font-sans font-semibold text-[#2b1b17] hover:bg-[#c6a055] transition-colors before:content-none after:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b26a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2b1b17]';
  const secondaryCtaClass =
    'inline-flex w-full sm:w-auto min-h-[44px] touch-manipulation items-center justify-center rounded-full border border-[#d4b26a]/60 bg-[#2b1b17]/40 px-7 py-3.5 text-sm font-sans font-semibold text-[#f4ead8] hover:bg-[#3a231a]/70 transition-colors before:content-none after:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b26a]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2b1b17]';

  return (
    <section id="home" className="relative min-h-[100svh] min-h-[100dvh] w-full overflow-hidden bg-[#2b1b17]">
      {slides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          aria-hidden={index !== activeSlide}
        >
          {/* Full-bleed layered hero — same visual system on all breakpoints; scales via responsive typography + padding on copy */}
          <div className="absolute inset-0" aria-hidden>
            <img
              src={slide.image}
              alt=""
              className="hidden md:block h-full w-full object-cover object-center blur-[2px] opacity-30"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <img
              src={slide.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center md:object-contain md:object-center"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2b1b17]/92 via-[#2b1b17]/70 to-[#2b1b17]/88 max-md:from-[#2b1b17]/94 max-md:via-[#2b1b17]/78 max-md:to-[#2b1b17]/90" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-[#2b1b17]/55 max-md:from-black/30 max-md:to-[#2b1b17]/65" />
          </div>
        </div>
      ))}

      <div
        className="absolute inset-0 z-10 flex items-center justify-center px-5 pb-20 pt-[calc(var(--ait-home-header,0px)+22px)] sm:px-6 sm:pb-24 sm:pt-36 sm:items-end sm:justify-start md:px-12 md:pb-16 md:pt-40"
        style={{ '--ait-home-header': `${homeHeaderHeight}px` } as CSSProperties}
      >
        <div key={activeSlide} className="max-w-3xl w-full text-center sm:text-left">
          <p className="inline-flex items-center rounded-full border border-[#d4b26a]/45 bg-[#2b1b17]/40 px-4 py-1.5 text-xs md:text-sm font-body uppercase tracking-[0.16em] text-[#d4b26a] animate-in fade-in slide-in-from-bottom-2 duration-700">
            {currentSlide.badge}
          </p>
          <h1 className="mt-4 text-[clamp(2.35rem,7vw,5.25rem)] leading-[1.04] font-sans font-extrabold tracking-tight text-[#f4ead8] animate-in fade-in slide-in-from-bottom-3 duration-700">
            {currentSlide.title}
          </h1>
          <p className="mt-4 mx-auto sm:mx-0 max-w-2xl text-[0.98rem] sm:text-base md:mt-5 md:text-lg text-[#f4ead8]/82 font-body leading-relaxed animate-in fade-in slide-in-from-bottom-3 duration-700">
            {currentSlide.description}
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 md:mt-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
            {currentSlide.primaryCta.href.startsWith('#') ? (
              <a
                href={currentSlide.primaryCta.href}
                onClick={(e) => handleNavClick(e, currentSlide.primaryCta.href)}
                className={primaryCtaClass}
              >
                <span className="block leading-none whitespace-nowrap">{currentSlide.primaryCta.label}</span>
              </a>
            ) : (
              <Link to={currentSlide.primaryCta.href} className={primaryCtaClass}>
                <span className="block leading-none whitespace-nowrap">{currentSlide.primaryCta.label}</span>
              </Link>
            )}
            {currentSlide.secondaryCta.href.startsWith('#') ? (
              <a
                href={currentSlide.secondaryCta.href}
                onClick={(e) => handleNavClick(e, currentSlide.secondaryCta.href)}
                className={secondaryCtaClass}
              >
                <span className="block leading-none whitespace-nowrap">{currentSlide.secondaryCta.label}</span>
              </a>
            ) : (
              <Link to={currentSlide.secondaryCta.href} className={secondaryCtaClass}>
                <span className="block leading-none whitespace-nowrap">{currentSlide.secondaryCta.label}</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 right-5 z-20 flex items-center gap-3 md:bottom-20 md:right-12">
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

      <nav id="ait-home-header" className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 md:px-10 py-3 sm:py-4">
        <div
          className={`flex items-center justify-between rounded-2xl border px-4 md:px-6 py-2 shadow-[0_8px_28px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-colors duration-300 ${
            isScrolled ? 'border-[#2b1b17]/10 bg-[#f4ead8]/95' : 'border-[#d4b26a]/20 bg-[#2b1b17]/45'
          }`}
        >
          <Link
            to="/"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-[100px] md:w-[100px] p-1.5 shrink-0"
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
              {heroConfig.navLinks.map((link) => {
                const resolved = toHref(link.label, link.href);
                const navClass = `rounded-lg px-3.5 py-2.5 leading-none transition-all duration-200 ${
                  activeDropdown === link.label
                    ? isScrolled
                      ? 'bg-[#d4b26a]/28 text-[#2b1b17]'
                      : 'bg-[#d4b26a]/25 text-[#f4ead8]'
                    : isScrolled
                      ? 'text-[#1f1612] hover:bg-[#2b1b17]/8 hover:text-[#140d0a]'
                      : 'text-[#f4ead8]/90 hover:bg-[#f4ead8]/12 hover:text-[#ffffff]'
                }`;
                const colCount = link.columns?.length ?? 0;
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => link.columns?.length && setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {resolved.startsWith('/') ? (
                      <Link to={resolved} className={navClass} onClick={() => setActiveDropdown(null)}>
                        {link.label}
                      </Link>
                    ) : (
                      <a href={resolved} onClick={(e) => handleNavClick(e, resolved)} className={navClass}>
                        {link.label}
                      </a>
                    )}
                    {activeDropdown === link.label && link.columns && (
                      <div
                        className={`absolute right-0 top-full mt-2.5 z-50 rounded-2xl border p-4 shadow-[0_20px_46px_rgba(0,0,0,0.38)] animate-in fade-in slide-in-from-top-1 duration-200 ${
                          isScrolled ? 'border-[#2b1b17]/12 bg-[#f4ead8]' : 'border-[#d4b26a]/25 bg-[#2b1b17]'
                        } ${colCount > 1 ? 'w-[460px]' : 'w-[300px]'}`}
                      >
                        <div className={`grid gap-2.5 ${colCount > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                          {link.columns.flat().map((item) => (
                            <Link
                              key={item.label}
                              to={topicPathFromLabel(item.label)}
                              className={`rounded-xl px-3 py-2.5 transition-colors duration-200 ${
                                isScrolled ? 'hover:bg-[#2b1b17]/8' : 'hover:bg-[#f4ead8]/10'
                              }`}
                            >
                              <p
                                className={`text-sm font-sans font-semibold leading-tight ${
                                  isScrolled ? 'text-[#2b1b17]' : 'text-[#f4ead8]'
                                }`}
                              >
                                {item.label}
                              </p>
                              <p
                                className={`mt-1.5 text-xs font-body leading-relaxed min-h-[32px] ${
                                  isScrolled ? 'text-[#2b1b17]/85' : 'text-[#f4ead8]/82'
                                }`}
                              >
                                {getDescription(item.description)}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <button
            className={`lg:hidden p-2.5 rounded-lg transition-colors ${
              isScrolled ? 'text-[#2b1b17] hover:bg-[#2b1b17]/8' : 'text-[#f4ead8] hover:bg-[#f4ead8]/10'
            }`}
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
                const resolved = toHref(link.label, link.href);
                const rowClass = 'flex-1 px-6 py-4 hover:bg-[#f4ead8]/10 transition-colors duration-200';

                return (
                  <div key={link.label} className="border-b border-[#d4b26a]/25">
                    <div className="flex items-stretch">
                      {resolved.startsWith('/') ? (
                        <Link to={resolved} onClick={() => setMobileMenuOpen(false)} className={rowClass}>
                          <span className="block text-[#f4ead8]/90 font-body text-[15px] leading-tight">{link.label}</span>
                          {link.subtitle && (
                            <span className="block text-[#d4b26a]/75 text-[10px] font-body mt-0.5 tracking-wide">{link.subtitle}</span>
                          )}
                        </Link>
                      ) : (
                        <a href={resolved} onClick={(e) => handleNavClick(e, resolved)} className={rowClass}>
                          <span className="block text-[#f4ead8]/90 font-body text-[15px] leading-tight">{link.label}</span>
                          {link.subtitle && (
                            <span className="block text-[#d4b26a]/75 text-[10px] font-body mt-0.5 tracking-wide">{link.subtitle}</span>
                          )}
                        </a>
                      )}
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
                          <Link
                            key={item.label}
                            to={topicPathFromLabel(item.label)}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-start gap-3 px-6 py-3 border-b border-[#d4b26a]/20 hover:bg-[#f4ead8]/8 transition-colors duration-150"
                          >
                            <span className="shrink-0 w-1 h-1 rounded-full bg-[#d4b26a]/70 mt-2" />
                            <span>
                              <span className="block text-[#f4ead8]/80 font-body text-[13px] leading-snug">{item.label}</span>
                              <span className="block text-[#f4ead8]/72 font-body text-[11px] mt-0.5 leading-relaxed">
                                {getDescription(item.description)}
                              </span>
                            </span>
                          </Link>
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
