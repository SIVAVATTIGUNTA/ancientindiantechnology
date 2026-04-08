import { useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';

type VideoItem = {
  title: string;
  src: string;
};

const videos: VideoItem[] = [
  {
    title: 'Ancient Indian Technology - Featured Documentary I',
    src: 'https://www.youtube.com/embed/Xhc-hT71AnA?si=ulBRclKafIvKwxXO',
  },
  {
    title: 'Ancient Indian Technology - Featured Documentary II',
    src: 'https://www.youtube.com/embed/HjRBdayDkk0?si=iUZCkzms44H4x9hw',
  },
  {
    title: 'Ancient Indian Technology - Featured Documentary III',
    src: 'https://www.youtube.com/embed/WZzK1sQoeHo?si=Q1Zf4KXtEzkZt44B',
  },
  {
    title: 'Ancient Indian Technology - Featured Documentary IV',
    src: 'https://www.youtube.com/embed/GwUtRso7aNw?si=wxrUkvCRDGUnBhHk',
  },
  {
    title: 'Ancient Indian Technology - Featured Documentary V',
    src: 'https://www.youtube.com/embed/ixrQqNogOwc?si=HKuGzodkRdexBQ9B',
  },
];

export function HomeVideoSlides() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = useMemo(() => {
    if (typeof window === 'undefined') return 0;
    if (window.innerWidth >= 1024) return 520;
    if (window.innerWidth >= 768) return 460;
    return 320;
  }, []);

  const updateActiveFromScroll = () => {
    if (!scrollRef.current || !cardWidth) return;
    const nextIndex = Math.round(scrollRef.current.scrollLeft / cardWidth);
    setActiveIndex(Math.max(0, Math.min(videos.length - 1, nextIndex)));
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current || !cardWidth) return;
    scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const handlePrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const handleNext = () => scrollToIndex(Math.min(videos.length - 1, activeIndex + 1));

  return (
    <section id="home-video-slides" className="bg-[#2b1b17] text-[#f4ead8] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#d4b26a]/90">
              <PlayCircle className="h-3.5 w-3.5" />
              Channel Highlights
            </p>
            <h2 className="mt-2 text-3xl md:text-4xl font-sans font-bold">
              Ancient Indian Technology Documentary Series
            </h2>
            <p className="mt-3 text-[#f4ead8]/78 max-w-2xl">
              Scroll through curated videos from the Ancient Indian Technology channel. Use arrows or horizontal swipe to navigate each slide.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="h-10 w-10 border border-[#d4b26a]/45 text-[#f4ead8] disabled:opacity-40 hover:bg-[#f4ead8]/10 transition-colors"
              aria-label="Previous video"
            >
              <ChevronLeft className="h-4 w-4 mx-auto" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={activeIndex === videos.length - 1}
              className="h-10 w-10 border border-[#d4b26a]/45 text-[#f4ead8] disabled:opacity-40 hover:bg-[#f4ead8]/10 transition-colors"
              aria-label="Next video"
            >
              <ChevronRight className="h-4 w-4 mx-auto" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={updateActiveFromScroll}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'thin' }}
        >
          {videos.map((video) => (
            <article
              key={video.src}
              className="snap-start shrink-0 w-[320px] md:w-[460px] lg:w-[520px] border border-[#d4b26a]/25 bg-[#3a231a]"
            >
              <div className="aspect-video bg-black">
                <iframe
                  width="560"
                  height="315"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-semibold">{video.title}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {videos.map((video, index) => (
            <button
              key={video.src}
              onClick={() => scrollToIndex(index)}
              className={`h-2.5 transition-all ${
                activeIndex === index ? 'w-9 bg-[#d4b26a]' : 'w-2.5 bg-[#f4ead8]/40 hover:bg-[#f4ead8]/70'
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
