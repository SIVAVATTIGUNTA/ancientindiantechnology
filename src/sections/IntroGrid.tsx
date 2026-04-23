import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { introGridConfig } from '../config';
import { YouTubeVideoGallery, type YouTubeGalleryVideo } from '../components/video/YouTubeVideoGallery';
import { useYouTubeChannelVideos } from '@/hooks/useYouTubeChannelVideos';

gsap.registerPlugin(ScrollTrigger);

// Per-image animation config: unique direction, rotation, parallax depth, stagger order
const imageAnimConfigs = [
  // img0: tall left — sweeps in from the left
  { clipFrom: 'inset(0% 100% 0% 0%)', rotation: -2, parallax: [-6, 6], delay: 0 },
  // img1: top center — drops in from above
  { clipFrom: 'inset(0% 0% 100% 0%)', rotation: 1.5, parallax: [-3, 3], delay: 0.12 },
  // img2: top right — slides in from the right
  { clipFrom: 'inset(0% 0% 0% 100%)', rotation: -1.2, parallax: [-5, 5], delay: 0.08 },
  // img3: tall center — rises from below
  { clipFrom: 'inset(100% 0% 0% 0%)', rotation: 1, parallax: [-4, 4], delay: 0.22 },
  // img4: bottom right — slides in from the right
  { clipFrom: 'inset(0% 0% 0% 100%)', rotation: -1.5, parallax: [-7, 7], delay: 0.18 },
];

const fallbackVideos: YouTubeGalleryVideo[] = [
  {
    title: 'Ancient Indian Technology Documentary',
    src: 'https://www.youtube.com/embed/Xhc-hT71AnA?si=ulBRclKafIvKwxXO',
    videoType: 'fullLength',
  },
  {
    title: 'Astronomy and Scientific Heritage',
    src: 'https://www.youtube.com/embed/HjRBdayDkk0?si=iUZCkzms44H4x9hw',
    videoType: 'fullLength',
  },
];

export function IntroGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { videos: introVideos } = useYouTubeChannelVideos({ fallbackVideos, maxResults: 2, videoKind: 'fullLength' });
  if (!introGridConfig.titleLine1 && !introGridConfig.titleLine2 && introGridConfig.portfolioImages.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Title: reliable fade/slide reveal (no hidden blank area) ──
      const titleWrap = titleLine1Ref.current?.parentElement;
      if (titleWrap && titleLine1Ref.current && titleLine2Ref.current) {
        ScrollTrigger.create({
          trigger: titleWrap,
          start: 'top 85%',
          onEnter: () => {
            gsap.fromTo(
              [titleLine1Ref.current, titleLine2Ref.current],
              { y: 24, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12 }
            );
          },
          once: true,
        });
      }

      // ── Description: gentle reveal ──
      if (textRef.current) {
        ScrollTrigger.create({
          trigger: textRef.current,
          start: 'top 85%',
          onEnter: () => {
            gsap.fromTo(
              textRef.current,
              { y: 10, opacity: 0.85 },
              { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
            );
          },
          once: true,
        });
      }

      // ── Grid images: per-image directional reveal + rotation + scale + parallax ──
      const gridItems = gridRef.current?.querySelectorAll('.grid-item');
      if (gridItems) {
        gridItems.forEach((item, i) => {
          const img = item.querySelector('img');
          const cfg = imageAnimConfigs[i];
          if (!cfg) return;

          // One-shot reveal on scroll-enter
          ScrollTrigger.create({
            trigger: item,
            start: 'top 90%',
            onEnter: () => {
              // Unhide (Tailwind opacity-0 used as pre-GSAP fallback)
              gsap.set(item, { opacity: 1 });

              // Clip-path directional reveal
              gsap.fromTo(
                item,
                { clipPath: cfg.clipFrom },
                {
                  clipPath: 'inset(0% 0% 0% 0%)',
                  duration: 1.3,
                  ease: 'power4.inOut',
                  delay: cfg.delay,
                }
              );

              if (img) {
                // Scale zoom-out (Ken Burns)
                gsap.fromTo(
                  img,
                  { scale: 1.18, rotate: cfg.rotation },
                  {
                    scale: 1,
                    rotate: 0,
                    duration: 1.8,
                    ease: 'power3.out',
                    delay: cfg.delay,
                  }
                );
              }
            },
            once: true,
          });

          // Continuous parallax (varied depth per image → layered 3D feel)
          if (img) {
            gsap.fromTo(
              img,
              { yPercent: cfg.parallax[0] },
              {
                yPercent: cfg.parallax[1],
                ease: 'none',
                scrollTrigger: {
                  trigger: item,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 1.2,
                },
              }
            );
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="metallurgy"
      className="relative w-full py-14 md:py-18 bg-[#f4ead8]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ── Intro block ───────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto text-center mb-10 md:mb-12">
          <div className="mb-4 md:mb-5">
            <span
              ref={titleLine1Ref}
              className="block text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#2b1b17] tracking-tight leading-tight"
            >
              {introGridConfig.titleLine1}
            </span>
            <span
              ref={titleLine2Ref}
              className="block text-3xl md:text-4xl lg:text-5xl font-serif italic font-normal text-[#8d4f36] leading-tight"
            >
              {introGridConfig.titleLine2}
            </span>
          </div>

          <p
            ref={textRef}
            className="mx-auto max-w-3xl text-sm md:text-[17px] text-[#2b1b17] font-body leading-relaxed opacity-100"
          
          >
            {introGridConfig.description || 'Explore documented insights into ancient Indian technology across metallurgy, astronomy, medicine, and urban systems.'}
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-3 md:gap-4 text-left">
            {[
              { k: 'Metallurgy', v: 'Wootz steel, zinc distillation, corrosion science' },
              { k: 'Astronomy', v: 'Precision observatories and mathematical models' },
              { k: 'Medicine', v: 'Surgical texts and long-standing healing systems' },
            ].map((item) => (
              <div key={item.k} className="border border-[#8d4f36]/20 bg-white/60 px-4 py-3.5 min-h-[96px]">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]" >{item.k}</p>
                <p className="mt-1.5 text-sm text-[#3a231a]/88 leading-relaxed"   style={{
              color: 'rgb(43 27 23 / var(--tw-text-opacity, 1))',
            }}>{item.v}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Masonry Grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 auto-rows-[190px] sm:auto-rows-[220px] md:auto-rows-[270px]"
        >
          {introGridConfig.portfolioImages.map((image, index) => (
            <div
              key={index}
              className={`grid-item relative overflow-hidden rounded-lg group cursor-pointer opacity-0 bg-[#e5d9c8] ${
                index === 0 ? 'row-span-2 md:col-span-1' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain object-center will-change-transform"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#2b1b17]/0 group-hover:bg-[#2b1b17]/35 transition-colors duration-500" />

              {/* Viewfinder corners on hover */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#d4b26a]/0 group-hover:border-[#d4b26a]/85 transition-all duration-500" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#d4b26a]/0 group-hover:border-[#d4b26a]/85 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#d4b26a]/0 group-hover:border-[#d4b26a]/85 transition-all duration-500" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#d4b26a]/0 group-hover:border-[#d4b26a]/85 transition-all duration-500" />
            </div>
          ))}
        </div>

        <YouTubeVideoGallery
          className="mt-9"
          variant="light"
          hideHeader
          gridClassName="grid-cols-1 md:grid-cols-2 gap-5"
          videos={introVideos}
        />

        {/* Floating accent text */}
        {introGridConfig.accentText && (
          <div className="mt-7 md:mt-8 flex justify-end">
            <p className="text-sm text-[#8d4f36]/80 font-body tracking-wider uppercase">
              {introGridConfig.accentText}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
