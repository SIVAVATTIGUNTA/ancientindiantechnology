import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Quote } from 'lucide-react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/free-mode';
import { testimonialsConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  if (!testimonialsConfig.titleRegular && testimonialsConfig.testimonials.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header — slide up
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(
            headerRef.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
          );
        },
        once: true,
      });

      // Carousel — clip-path sweep from bottom + fade
      ScrollTrigger.create({
        trigger: carouselRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(
            carouselRef.current,
            { clipPath: 'inset(8% 0% 0% 0%)', opacity: 0, y: 30 },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              opacity: 1,
              y: 0,
              duration: 1.1,
              ease: 'power3.out',
              delay: 0.15,
            }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="medicine"
      className="relative w-full py-24 md:py-32 bg-[#f4ead8] overflow-hidden"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-20">
        <div ref={headerRef} className="text-center opacity-0">
          {testimonialsConfig.subtitle && (
            <p className="text-[#8d4f36]/85 text-sm font-body uppercase tracking-widest mb-4">
              {testimonialsConfig.subtitle}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-[#2b1b17] tracking-tight">
            {testimonialsConfig.titleRegular} <span className="font-serif italic font-normal text-[#8d4f36]">{testimonialsConfig.titleItalic}</span>
          </h2>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div ref={carouselRef} className="relative opacity-0">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={24}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          speed={800}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 48,
            },
          }}
          className="!px-6"
        >
          {testimonialsConfig.testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="group bg-[#f8f0e3] border border-[#8d4f36]/15 rounded-lg p-8 md:p-10 h-full min-h-[280px] flex flex-col transition-all duration-500 hover:bg-[#2b1b17] hover:text-[#f4ead8]">
                {/* Quote icon */}
                <Quote className="w-10 h-10 text-[#8d4f36]/30 group-hover:text-[#d4b26a]/70 mb-6 flex-shrink-0 transition-colors duration-500" strokeWidth={1} />

                {/* Quote text */}
                <p className="text-[#3a231a]/85 group-hover:text-[#f4ead8]/90 font-body text-base md:text-lg leading-relaxed mb-8 flex-1 transition-colors duration-500">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 flex-shrink-0 mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[#2b1b17] group-hover:text-[#f4ead8] transition-colors duration-500">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#8d4f36]/80 group-hover:text-[#f4ead8]/70 font-body transition-colors duration-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#f4ead8] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#f4ead8] to-transparent z-10 pointer-events-none" />
      </div>

      {/* Bottom divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[#8d4f36]/35 to-transparent" />
      </div>

      {/* Ambient background blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(11,92,92,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </section>
  );
}
