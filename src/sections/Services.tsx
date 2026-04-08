import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Diamond, Users, Sparkles, Zap, BookOpen, ChevronLeft, ChevronRight, type LucideIcon } from 'lucide-react';
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
  const sliderRef = useRef<HTMLDivElement>(null);

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

  const scrollCards = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.querySelector('.service-card') as HTMLDivElement | null;
    const step = (card?.offsetWidth ?? 320) + 12;
    sliderRef.current.scrollBy({ left: direction === 'next' ? step : -step, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="advanced"
      className="relative w-full py-14 md:py-18 bg-[#2b1b17]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header first */}
        <div ref={headingRef} className="max-w-4xl mb-7 md:mb-9">
          <h2 className="heading-title text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#f4ead8] tracking-tight leading-tight opacity-0">
            {servicesConfig.titleLine1}
            <br />
            <span className="font-serif italic font-normal text-[#d4b26a]">
              {servicesConfig.titleLine2Italic}
            </span>
          </h2>
          {servicesConfig.subtitle && (
            <p className="heading-subtitle mt-3 text-[#d4b26a]/75 text-xs font-body uppercase tracking-[0.16em] opacity-0">
              {servicesConfig.subtitle}
            </p>
          )}
          {servicesConfig.description && (
            <p className="heading-desc mt-4 text-[#f4ead8]/78 font-body text-sm md:text-base max-w-2xl leading-relaxed opacity-0">
              {servicesConfig.description}
            </p>
          )}
        </div>

        {/* Slider below heading */}
        <div ref={gridRef}>
          <div className="mb-3 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => scrollCards('prev')}
              className="h-9 w-9 border border-[#d4b26a]/35 text-[#f4ead8] hover:bg-[#f4ead8]/10 transition-colors"
              aria-label="Previous service card"
            >
              <ChevronLeft className="h-4 w-4 mx-auto" />
            </button>
            <button
              type="button"
              onClick={() => scrollCards('next')}
              className="h-9 w-9 border border-[#d4b26a]/35 text-[#f4ead8] hover:bg-[#f4ead8]/10 transition-colors"
              aria-label="Next service card"
            >
              <ChevronRight className="h-4 w-4 mx-auto" />
            </button>
          </div>

          <div
            ref={sliderRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3 pr-1"
            style={{ scrollbarWidth: 'thin' }}
          >
            {servicesConfig.services.map((service, index) => {
              const Icon = iconMap[service.iconName] || Camera;
              return (
                <div
                  key={index}
                  className="service-card snap-start shrink-0 w-[85vw] sm:w-[62vw] md:w-[44vw] lg:w-[31vw] xl:w-[24vw] border border-[#d4b26a]/20 bg-[#3a231a] p-5 md:p-6 opacity-0 transition-all duration-500 hover:bg-[#4a2e23] cursor-pointer"
                >
                  <div className="mb-3">
                    <Icon className="w-8 h-8 text-[#d4b26a]/85 transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base md:text-lg font-sans font-semibold text-[#f4ead8] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#f4ead8]/70 font-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-7 grid md:grid-cols-3 gap-4">
          {[
            {
              title: 'Material Innovation',
              text: 'From crucible steel to anti-corrosion ironwork, metallurgical precision appears across regions.',
              image: '/wootz-blade.jpg',
            },
            {
              title: 'Knowledge Architecture',
              text: 'Observatories, temples, and urban systems reveal applied mathematics and engineering design.',
              image: '/sun-temple.jpg',
            },
            {
              title: 'Medical Intelligence',
              text: 'Surgical literature and therapeutic frameworks show systematic experimentation and transmission.',
              image: '/sushruta-surgery.jpg',
            },
          ].map((item) => (
            <article key={item.title} className="border border-[#d4b26a]/25 bg-[#3a231a] overflow-hidden">
              <div className="h-36 md:h-40 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover object-center" loading="lazy" />
              </div>
              <div className="p-3.5">
                <h3 className="text-[#f4ead8] font-sans font-semibold text-base">{item.title}</h3>
                <p className="mt-1.5 text-sm text-[#f4ead8]/72 leading-relaxed">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Decorative ambient glow — top right */}
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at top right, rgba(11,92,92,0.16) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Decorative ambient glow — bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[360px] h-[360px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(212,178,106,0.12) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4b26a]/35 to-transparent" />
    </section>
  );
}
