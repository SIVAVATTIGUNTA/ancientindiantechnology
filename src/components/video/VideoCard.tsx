import { Clock3, PlayCircle } from 'lucide-react';

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
  return (
    <article
      className={`border border-[#d4b26a]/22 bg-[#101a2f] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_15px_34px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className={`${aspectClassName} bg-black relative`}>
        <iframe
          src={item.src}
          title={item.title}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        <span className="absolute left-2 top-2 inline-flex items-center gap-1 bg-[#0a0f1c]/85 px-2 py-1 text-[11px] text-[#f4ead8]">
          <PlayCircle className="h-3 w-3" />
          Watch
        </span>
        {item.duration && (
          <span className="absolute right-2 top-2 inline-flex items-center gap-1 bg-[#0a0f1c]/85 px-2 py-1 text-[11px] text-[#f4ead8]">
            <Clock3 className="h-3 w-3" />
            {item.duration}
          </span>
        )}
      </div>
      <div className={`${compact ? 'p-3' : 'p-4'}`}>
        {item.category && <p className="text-xs uppercase tracking-[0.1em] text-[#d4b26a]">{item.category}</p>}
        <p className={`${compact ? 'mt-1 text-sm' : 'mt-1 font-semibold'} text-[#f4ead8]`}>{item.title}</p>
        {item.query && <p className="mt-1 text-xs text-[#f4ead8]/68">Search: {item.query}</p>}
        {item.reason && <p className="mt-1 text-xs text-[#d4b26a]">{item.reason}</p>}
      </div>
    </article>
  );
}
