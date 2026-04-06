import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { heroConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

// Ambient glow particles
const PARTICLES = [
  { top: '16%', left: '8%',   size: 240, color: 'rgba(134,239,172,0.12)' },
  { top: '68%', left: '5%',   size: 170, color: 'rgba(251,191,36,0.09)'  },
  { top: '20%', right: '7%',  size: 200, color: 'rgba(147,197,253,0.09)' },
  { top: '74%', right: '11%', size: 140, color: 'rgba(216,180,254,0.08)' },
];

// Infinite marquee strip items
const MARQUEE_ITEMS = [
  'Metallurgy', '✦', 'Astronomy', '✦', 'Urban Planning', '✦',
  'Medicine', '✦', 'Vimana Technology', '✦', 'Iron Pillar', '✦',
  'Aryabhata', '✦', 'Wootz Steel', '✦', 'Jantar Mantar', '✦',
  'Sushruta Samhita', '✦', 'Zinc Distillation', '✦', 'Ayurveda', '✦',
];

export function Hero() {
  const sectionRef     = useRef<HTMLElement>(null);
  const textRef        = useRef<HTMLDivElement>(null);
  const modelRef       = useRef<HTMLDivElement>(null);
  const overlayTextRef = useRef<HTMLDivElement>(null);
  const navRef         = useRef<HTMLElement>(null);
  const scrollRef      = useRef<HTMLDivElement>(null);
  const lineRef        = useRef<HTMLDivElement>(null);
  const marqueeRef     = useRef<HTMLDivElement>(null);
  const badgeRef       = useRef<HTMLDivElement>(null);
  const particleRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const letterRefs     = useRef<(HTMLSpanElement | null)[]>([]);
  const wordRefs       = useRef<(HTMLSpanElement | null)[]>([]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (!heroConfig.backgroundText && !heroConfig.heroImage && heroConfig.navLinks.length === 0) return null;

  // Pre-compute words for tagline split
  const taglineWords = heroConfig.overlayText ? heroConfig.overlayText.split(' ') : [];

  // ── Mount entrance animation ──────────────────────────────────────────
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.1 });

    // 1. Nav slides down
    tl.fromTo(navRef.current,
      { y: -28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }
    )
    // 2. Decorative line extends
    .fromTo(lineRef.current,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.65, ease: 'power2.inOut', transformOrigin: 'left center' },
      '-=0.3'
    );

    // 3. BHARAT: individual letters rise from below (stagger)
    const letters = letterRefs.current.filter(Boolean);
    if (letters.length) {
      tl.to(letters, {
        y: 0,
        duration: 1.15,
        stagger: 0.065,
        ease: 'power4.out',
      }, '-=0.45');
    }

    // 4. Hero image: clip-path curtain reveal (bottom to top — character rises)
    tl.fromTo(modelRef.current,
      { clipPath: 'inset(100% 0% 0% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.45, ease: 'power4.inOut' },
      '-=0.85'
    );

    // 5. Tagline words rise one by one
    const words = wordRefs.current.filter(Boolean);
    if (words.length) {
      tl.to(words, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.06,
        ease: 'power3.out',
      }, '-=0.65');
    }

    // 6. Stat badge floats in
    tl.fromTo(badgeRef.current,
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
      '-=0.5'
    );

    // 7. Scroll indicator
    tl.fromTo(scrollRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.4'
    );

    // Particles: staggered fade-in + float loops
    particleRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 1.5, delay: 0.6 + i * 0.25 });
      gsap.to(el, {
        y: i % 2 === 0 ? -32 : 24,
        x: i % 3 === 0 ? 16 : -12,
        duration: 4.5 + i * 1.1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.6,
      });
    });

    // Stat badge gentle float
    gsap.to(badgeRef.current, {
      y: -8,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 2.2,
    });

    // Scroll indicator bounce
    gsap.to(scrollRef.current, {
      y: 14,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 2.6,
    });

    // Marquee: start scrolling
    if (marqueeRef.current) {
      gsap.fromTo(marqueeRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1.4 }
      );
      gsap.to(marqueeRef.current, {
        x: '-50%',
        duration: 32,
        repeat: -1,
        ease: 'none',
        delay: 1.4,
      });
    }

    return () => { tl.kill(); };
  }, []);

  // ── Parallax ScrollTrigger ────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const triggers: ScrollTrigger[] = [];

      // BHARAT text parallax
      triggers.push(ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (textRef.current) gsap.set(textRef.current, { yPercent: self.progress * 50 });
        },
      }));

      // Hero image parallax
      triggers.push(ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          if (modelRef.current) gsap.set(modelRef.current, { yPercent: self.progress * 20 });
        },
      }));

      // Tagline fade out on scroll
      triggers.push(ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '30% top',
        scrub: 1,
        onUpdate: (self) => {
          if (overlayTextRef.current) gsap.set(overlayTextRef.current, { opacity: 1 - self.progress });
        },
      }));

      // Scroll indicator fades out
      triggers.push(ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '12% top',
        scrub: 1,
        onUpdate: (self) => {
          if (scrollRef.current) gsap.set(scrollRef.current, { opacity: Math.max(0, 1 - self.progress * 2) });
        },
      }));

      return () => triggers.forEach((t) => t.kill());
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ── ESC closes dropdowns & mobile menu ───────────────────────────────
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setActiveDropdown(null); setMobileMenuOpen(false); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // ── Dropdown hover helpers ─────────────────────────────────────────────
  const clearLeaveTimer = () => {
    if (leaveTimerRef.current) { clearTimeout(leaveTimerRef.current); leaveTimerRef.current = null; }
  };
  const scheduleClose = () => {
    clearLeaveTimer();
    leaveTimerRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  // ── Smooth scroll ─────────────────────────────────────────────────────
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (href === '#home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-forest-dark"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-forest-dark to-forest-mid opacity-90" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 35%, rgba(13,19,16,0.78) 100%)',
        }}
      />

      {/* Warm forge-fire glow behind hero image */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[12] pointer-events-none"
        style={{
          width: '48vw',
          height: '65vh',
          maxWidth: '580px',
          background: 'radial-gradient(ellipse at bottom, rgba(251,146,60,0.22) 0%, rgba(234,88,12,0.10) 38%, transparent 68%)',
          filter: 'blur(18px)',
        }}
      />

      {/* Ambient glow particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          ref={(el) => { particleRefs.current[i] = el; }}
          className="absolute rounded-full pointer-events-none will-change-transform z-[2]"
          style={{
            top: p.top,
            left: (p as { left?: string }).left,
            right: (p as { right?: string }).right,
            width: p.size,
            height: p.size,
            background: `radial-gradient(circle, ${p.color} 0%, transparent 70%)`,
            filter: 'blur(52px)',
            opacity: 0,
          }}
        />
      ))}

      {/* ── Layer 1: BHARAT — letter-by-letter stagger rise ── */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center z-10 will-change-transform"
      >
        <h2
          aria-hidden="true"
          className="font-sans font-extrabold text-white tracking-tighter leading-none select-none whitespace-nowrap"
          style={{
            fontSize: 'clamp(80px, 14vw, 220px)',
            textShadow: '0 0 160px rgba(255,255,255,0.06)',
          }}
        >
          {heroConfig.backgroundText.split('').map((char, i) => (
            <span
              key={i}
              className="inline-block overflow-hidden align-bottom"
              style={{ paddingBottom: '0.08em', marginBottom: '-0.08em' }}
            >
              <span
                ref={(el) => { letterRefs.current[i] = el; }}
                className="inline-block will-change-transform"
                style={{ transform: 'translateY(115%)' }}
              >
                {char}
              </span>
            </span>
          ))}
        </h2>
      </div>

      {/* ── Layer 2: Hero image — clip-path curtain reveal ── */}
      {heroConfig.heroImage && (
        <div
          ref={modelRef}
          className="absolute inset-0 flex items-end justify-center z-20 will-change-transform"
          style={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        >
          <div className="relative w-[50vw] md:w-[35vw] lg:w-[28vw] max-w-[500px]">
            <img
              src={heroConfig.heroImage}
              alt={heroConfig.heroImageAlt}
              className="w-full h-auto object-contain"
              loading="eager"
            />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-forest-dark to-transparent" />
          </div>
        </div>
      )}

      {/* ── Layer 3: Tagline — word-by-word stagger ── */}
      {heroConfig.overlayText && (
        <div
          ref={overlayTextRef}
          className="absolute bottom-[15%] right-[8%] md:right-[12%] z-30 will-change-transform max-w-xs md:max-w-sm text-right"
        >
          <p className="font-serif italic text-xl md:text-2xl lg:text-3xl text-white/90 tracking-wide">
            {taglineWords.map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-bottom"
                style={{ paddingBottom: '0.06em', marginBottom: '-0.06em', marginRight: i < taglineWords.length - 1 ? '0.25em' : 0 }}
              >
                <span
                  ref={(el) => { wordRefs.current[i] = el; }}
                  className="inline-block will-change-transform"
                  style={{ transform: 'translateY(115%)', opacity: 0 }}
                >
                  {word}
                </span>
              </span>
            ))}
          </p>
        </div>
      )}

      {/* ── Floating stat badge ── */}
      <div
        ref={badgeRef}
        className="absolute z-30 bottom-[22%] left-[6%] md:left-[8%] will-change-transform"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center gap-2 px-3.5 py-2 bg-white/[0.07] backdrop-blur-md border border-white/[0.12] rounded-full">
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: 'rgba(251,146,60,0.9)', boxShadow: '0 0 6px rgba(251,146,60,0.6)' }}
          />
          <span className="text-white/60 font-body text-[11px] tracking-wider">5,000+ Years of Innovation</span>
        </div>
      </div>

      {/* ── Infinite scrolling marquee ── */}
      <div className="absolute bottom-16 left-0 right-0 z-30 overflow-hidden pointer-events-none">
        <div
          ref={marqueeRef}
          className="flex gap-6 whitespace-nowrap will-change-transform"
          style={{ width: 'max-content', opacity: 0 }}
        >
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className={`font-body text-[9px] uppercase tracking-[0.18em] ${
                item === '✦' ? 'text-white/10' : 'text-white/18'
              }`}
              style={{ color: item === '✦' ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.18)' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 will-change-transform pointer-events-none"
        style={{ opacity: 0 }}
      >
        <span className="text-white/20 font-body text-[8px] uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown className="w-3.5 h-3.5 text-white/20" strokeWidth={1.5} />
      </div>

      {/* ── Navigation ──────────────────────────────────────────────────── */}
      <nav
        ref={navRef}
        className="absolute top-0 left-0 right-0 z-40 px-6 md:px-12 py-6"
        style={{ opacity: 0 }}
      >
        <div className="flex items-center justify-between">

          {/* Brand + decorative line */}
          <div className="flex items-center gap-5 shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-white font-sans font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
            >
              {heroConfig.brandName}
            </a>
            <div
              ref={lineRef}
              className="hidden md:block h-px w-14 bg-gradient-to-r from-white/30 to-transparent"
              style={{ opacity: 0, transform: 'scaleX(0)', transformOrigin: 'left center' }}
            />
          </div>

          {/* ── Desktop nav ── */}
          {heroConfig.navLinks.length > 0 && (
            <div className="hidden lg:flex items-start gap-1 xl:gap-2 text-white/80 text-sm font-body">
              {heroConfig.navLinks.map((link) => {
                const hasDropdown = !!link.columns?.length;
                const isActive = activeDropdown === link.label;
                const isRightEdge = link.label === 'Resources' || link.label === 'Videos';
                const isTwoCol = (link.columns?.length ?? 0) >= 2;
                const panelAlign = isRightEdge ? 'right-0' : isTwoCol ? '-left-12' : 'left-0';
                const panelWidth = isTwoCol ? 'w-[500px]' : 'w-[280px]';

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => { clearLeaveTimer(); if (hasDropdown) setActiveDropdown(link.label); }}
                    onMouseLeave={scheduleClose}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`group relative flex items-center gap-1 px-3 py-2 rounded-md transition-colors duration-200 whitespace-nowrap ${
                        isActive ? 'text-white bg-white/8' : 'hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span className="relative">
                        {link.label}
                        {link.subtitle && (
                          <span className="absolute left-0 top-full mt-0.5 text-[9px] text-white/0 group-hover:text-white/40 transition-colors duration-200 font-body tracking-wide whitespace-nowrap pointer-events-none">
                            {link.subtitle}
                          </span>
                        )}
                      </span>
                      {hasDropdown && (
                        <ChevronDown
                          className={`w-3 h-3 shrink-0 transition-transform duration-200 ${isActive ? 'rotate-180 text-white' : 'text-white/50'}`}
                          strokeWidth={2.5}
                        />
                      )}
                    </a>

                    {/* Dropdown panel */}
                    {isActive && link.columns && (
                      <div
                        className={`absolute top-full pt-1.5 z-50 ${panelAlign}`}
                        onMouseEnter={clearLeaveTimer}
                        onMouseLeave={scheduleClose}
                      >
                        <div className={`${panelWidth} bg-forest-dark/96 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.6)]`}>
                          <div className="px-5 py-3 border-b border-white/[0.07] flex items-center justify-between bg-white/[0.02]">
                            <span className="text-white/40 text-[10px] font-body uppercase tracking-[0.15em]">{link.label}</span>
                            {link.subtitle && (
                              <span className="text-white/20 text-[11px] font-body">{link.subtitle}</span>
                            )}
                          </div>
                          <div className={`${isTwoCol ? 'grid grid-cols-2 divide-x divide-white/[0.05]' : ''}`}>
                            {link.columns.map((col, ci) => (
                              <div key={ci} className="py-2 px-1.5">
                                {col.map((item) => (
                                  <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="group/item block px-3 py-2.5 rounded-lg hover:bg-white/[0.06] transition-colors duration-150 cursor-pointer"
                                  >
                                    <p className="text-white/85 font-sans font-medium text-[13px] leading-snug group-hover/item:text-white transition-colors duration-150">
                                      {item.label}
                                    </p>
                                    <p className="text-white/35 font-body text-[11px] mt-0.5 leading-relaxed group-hover/item:text-white/55 transition-colors duration-150">
                                      {item.description}
                                    </p>
                                  </a>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
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

      {/* ── Mobile slide-out menu ────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="absolute top-0 right-0 w-[85%] max-w-[320px] h-full bg-forest-dark border-l border-white/10 flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 shrink-0">
              <span className="text-white font-sans font-semibold text-base">Navigation</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/70 hover:text-white p-1 transition-colors"
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
                  <div key={link.label} className="border-b border-white/[0.06]">
                    <div className="flex items-stretch">
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="flex-1 px-6 py-4 hover:bg-white/5 transition-colors duration-200"
                      >
                        <span className="block text-white/85 font-body text-[15px] leading-tight">{link.label}</span>
                        {link.subtitle && (
                          <span className="block text-white/30 text-[10px] font-body mt-0.5 tracking-wide">{link.subtitle}</span>
                        )}
                      </a>
                      {hasDropdown && (
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                          className="px-4 text-white/40 hover:text-white/80 hover:bg-white/5 transition-colors duration-200 shrink-0"
                          aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {isExpanded && link.columns && (
                      <div className="bg-forest-mid/40 border-t border-white/[0.05]">
                        {link.columns.flat().map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="flex items-start gap-3 px-6 py-3 border-b border-white/[0.04] hover:bg-white/[0.04] transition-colors duration-150"
                          >
                            <span className="shrink-0 w-1 h-1 rounded-full bg-white/20 mt-2" />
                            <span>
                              <span className="block text-white/65 font-body text-[13px] leading-snug">{item.label}</span>
                              <span className="block text-white/25 font-body text-[11px] mt-0.5 leading-relaxed">{item.description}</span>
                            </span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="px-6 py-4 border-t border-white/10 shrink-0">
              <p className="text-white/30 text-xs font-body">Ancient India Technology</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
