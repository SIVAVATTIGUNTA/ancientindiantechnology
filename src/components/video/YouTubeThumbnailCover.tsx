import { useState } from 'react';
import { Play } from 'lucide-react';
import { youtubeThumbnailUrl, youtubeVideoIdFromEmbedUrl } from '@/lib/youtube';
import { cn } from '@/lib/utils';

type YouTubeThumbnailCoverProps = {
  embedSrc: string;
  /** Used for image alt text when a video id exists */
  title: string;
  aspectClassName?: string;
  className?: string;
  topLeft?: React.ReactNode;
  topRight?: React.ReactNode;
};

export function YouTubeThumbnailCover({
  embedSrc,
  title,
  aspectClassName = 'aspect-video',
  className,
  topLeft,
  topRight,
}: YouTubeThumbnailCoverProps) {
  const videoId = youtubeVideoIdFromEmbedUrl(embedSrc);
  const [qualityIndex, setQualityIndex] = useState(0);

  return (
    <div className={cn('relative w-full overflow-hidden bg-black', aspectClassName, className)}>
      {videoId ? (
        <img
          src={youtubeThumbnailUrl(videoId, qualityIndex)}
          alt={title}
          decoding="async"
          loading="lazy"
          fetchPriority="low"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          onError={() => setQualityIndex((i) => Math.min(i + 1, 3))}
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c] via-[#101a2f] to-[#060a14]" aria-hidden />
          <span className="sr-only">{title}</span>
        </>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/45 opacity-95 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d4b26a]/95 text-[#0a0f1c] shadow-lg ring-4 ring-black/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e4c77f] md:h-14 md:w-14">
          <Play className="ml-0.5 h-5 w-5 fill-current md:h-6 md:w-6" strokeWidth={0} aria-hidden />
        </span>
      </div>
      {topLeft && <div className="absolute left-2 top-2 z-[1]">{topLeft}</div>}
      {topRight && <div className="absolute right-2 top-2 z-[1]">{topRight}</div>}
    </div>
  );
}
