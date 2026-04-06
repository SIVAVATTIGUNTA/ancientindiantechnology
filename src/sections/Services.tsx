import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Diamond, Users, Sparkles, Zap, BookOpen, type LucideIcon } from 'lucide-react';
import { servicesConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
  Camera,
  Diamond,
  Users,
  Sparkles,
  Zap,
  BookOpen,
};

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  if (!servicesConfig.titleLine1 && servicesConfig.services.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading — stagger subtitle, title, description
      ScrollTrigger.create({
        trigger: headingRef.current,
        start: 'top 85%',
        onEnter: () => {
          const subtitle = headingRef.current?.querySelector('.heading-subtitle');
          const title    = headingRef.current?.querySelector('.heading-title');
          const desc     = headingRef.current?.querySelector('.heading-desc');
          const tl = gsap.timeline();
          if (subtitle) tl.fromTo(subtitle, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' });
          if (title)    tl.fromTo(title,    { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.4');
          if (desc)     tl.fromTo(desc,     { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, '-=0.5');
        },
        once: true,
      });

      // Service cards — staggered slide up + icon bounce
      const cards = gridRef.current?.querySelectorAll('.service-card');
      if (cards) {
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: 'top 78%',
          onEnter: () => {
            gsap.fromTo(
              cards,
              { y: 60, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                ease: 'power3.out',
                stagger: 0.12,
              }
            );

            // Icon scale-bounce per card, staggered after card reveal
            cards.forEach((card, i) => {
              const icon = card.querySelector('svg');
              if (icon) {
                gsap.fromTo(
                  icon,
                  { scale: 0.4, rotate: -20, opacity: 0 },
                  {
                    scale: 1,
                    rotate: 0,
                    opacity: 1,
                    duration: 0.65,
                    ease: 'back.out(2.2)',
                    delay: i * 0.12 + 0.25,
                  }
                );
              }
            });
          },
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="advanced"
      className="relative w-full py-24 md:py-32 bg-forest-dark"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Column - Heading */}
          <div ref={headingRef}>
            {servicesConfig.subtitle && (
              <p className="heading-subtitle text-white/50 text-sm font-body uppercase tracking-widest mb-4 opacity-0">
                {servicesConfig.subtitle}
              </p>
            )}
            <h2 className="heading-title text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-white tracking-tight leading-tight opacity-0">
              {servicesConfig.titleLine1}
              <br />
              <span className="font-serif italic font-normal text-white/80">
                {servicesConfig.titleLine2Italic}
              </span>
            </h2>
            {servicesConfig.description && (
              <p className="heading-desc mt-6 text-white/60 font-body text-base md:text-lg max-w-md leading-relaxed opacity-0">
                {servicesConfig.description}
              </p>
            )}
          </div>

          {/* Right Column - Services Grid */}
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {servicesConfig.services.map((service, index) => {
              const Icon = iconMap[service.iconName] || Camera;
              return (
                <div
                  key={index}
                  className="service-card group bg-forest-dark p-6 md:p-8 opacity-0 transition-all duration-500 hover:bg-forest-mid cursor-pointer"
                >
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-white/70 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-sans font-semibold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/50 font-body leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      className="w-5 h-5 text-white/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative ambient glow — top right */}
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(100,200,150,0.07) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Decorative ambient glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[360px] h-[360px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(251,191,36,0.05) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
