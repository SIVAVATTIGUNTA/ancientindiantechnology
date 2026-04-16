import { useCallback, useState } from 'react';
import { flushSync } from 'react-dom';
import { Clock3, PlayCircle } from 'lucide-react';
import { YouTubePlayModal } from './YouTubePlayModal';
import { YouTubeThumbnailCover } from './YouTubeThumbnailCover';

export type VideoCardItem = {
  title: string;
  src: string;
  duration?: string;
  category?: string;
  query?: string;
  reason?: string;
};

type VideoCardProps = {
  item: VideoCardItem;
  aspectClassName?: string;
  className?: string;
  compact?: boolean;
};

export function VideoCard({ item, aspectClassName = 'aspect-video', className = '', compact = false }: VideoCardProps) {
  const [open, setOpen] = useState(false);

  const openVideo = useCallback(() => {
    flushSync(() => {
      setOpen(true);
    });
  }, []);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openVideo();
      }
    },
    [openVideo]
  );

  return (
    <>
      <article
        role="button"
        tabIndex={0}
        onClick={openVideo}
        onKeyDown={onKeyDown}
        aria-label={`Play video: ${item.title}`}
        className={`group cursor-pointer overflow-hidden border border-[#d4b26a]/22 bg-[#101a2f] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_15px_34px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b26a]/70 ${className}`}
      >
        <YouTubeThumbnailCover
          embedSrc={item.src}
          title={item.title}
          aspectClassName={aspectClassName}
          topLeft={
            <span className="inline-flex items-center gap-1 bg-[#0a0f1c]/85 px-2 py-1 text-[11px] text-[#f4ead8]">
              <PlayCircle className="h-3 w-3" />
              Watch
            </span>
          }
          topRight={
            item.duration ? (
              <span className="inline-flex items-center gap-1 bg-[#0a0f1c]/85 px-2 py-1 text-[11px] text-[#f4ead8]">
                <Clock3 className="h-3 w-3" />
                {item.duration}
              </span>
            ) : undefined
          }
        />
        <div className={`${compact ? 'p-3' : 'p-4'}`}>
          {item.category && <p className="text-xs uppercase tracking-[0.1em] text-[#d4b26a]">{item.category}</p>}
          <p className={`${compact ? 'mt-1 text-sm' : 'mt-1 font-semibold'} text-[#f4ead8]`}>{item.title}</p>
          {item.query && <p className="mt-1 text-xs text-[#f4ead8]/68">Search: {item.query}</p>}
          {item.reason && <p className="mt-1 text-xs text-[#d4b26a]">{item.reason}</p>}
        </div>
      </article>

      <YouTubePlayModal open={open} onOpenChange={setOpen} title={item.title} embedSrc={item.src} variant="dark" />
    </>
  );
}
