import { useCallback, useState } from 'react';
import { flushSync } from 'react-dom';
import { Play } from 'lucide-react';
import { YouTubePlayModal } from './YouTubePlayModal';
import { youtubeThumbnailUrl, youtubeVideoIdFromEmbedUrl } from '@/lib/youtube';
import { cn } from '@/lib/utils';

export type YouTubeGalleryVideo = {
  title: string;
  src: string;
};

type YouTubeVideoGalleryProps = {
  videos: YouTubeGalleryVideo[];
  variant?: 'dark' | 'light';
  /** Optional section header */
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Extra classes on outer wrapper */
  className?: string;
  /** Grid columns — default responsive grid */
  gridClassName?: string;
  /** Hide eyebrow / title / description block */
  hideHeader?: boolean;
  /** Optional DOM id on the main heading (e.g. for in-page links / aria) */
  titleId?: string;
};

function ThumbnailStack({ videoId, label }: { videoId: string | null; label: string }) {
  const [qualityIndex, setQualityIndex] = useState(0);

  if (!videoId) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#2b1b17] via-[#3a231a] to-[#1a1210]" aria-hidden>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(212,178,106,0.35),transparent_55%)]" />
      </div>
    );
  }

  return (
    <img
      src={youtubeThumbnailUrl(videoId, qualityIndex)}
      alt={label}
      decoding="async"
      loading="lazy"
      fetchPriority="low"
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
      onError={() => setQualityIndex((i) => Math.min(i + 1, 3))}
    />
  );
}

export function YouTubeVideoGallery({
  videos,
  variant = 'dark',
  eyebrow,
  title,
  description,
  className,
  gridClassName,
  hideHeader,
  titleId,
}: YouTubeVideoGalleryProps) {
  const [active, setActive] = useState<YouTubeGalleryVideo | null>(null);

  const close = useCallback(() => setActive(null), []);

  const isDark = variant === 'dark';

  return (
    <div className={className}>
      {!hideHeader && (eyebrow || title || description) && (
        <div className="mb-8 md:mb-10">
          {eyebrow && (
            <p
              className={cn(
                'inline-flex items-center gap-2 text-xs font-body uppercase tracking-[0.16em]',
                isDark ? 'text-[#d4b26a]/90' : 'text-[#8d4f36]'
              )}
            >
              {eyebrow}
            </p>
          )}
          {title && (
            <h2
              id={titleId}
              className={cn(
                'mt-2 text-3xl font-sans font-bold tracking-tight md:text-4xl',
                isDark ? 'text-[#f4ead8]' : 'text-[#2b1b17]'
              )}
            >
              {title}
            </h2>
          )}
          {description && (
            <p className={cn('mt-3 max-w-2xl text-sm leading-relaxed md:text-base', isDark ? 'text-[#f4ead8]/78' : 'text-[#3a231a]/85')}>
              {description}
            </p>
          )}
        </div>
      )}

      <div
        className={cn(
          'grid gap-5 sm:gap-6',
          gridClassName ?? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3',
        )}
      >
        {videos.map((video) => {
          const id = youtubeVideoIdFromEmbedUrl(video.src);
          return (
            <button
              key={video.src}
              type="button"
              onClick={() => {
                flushSync(() => {
                  setActive(video);
                });
              }}
              className={cn(
                'group relative overflow-hidden rounded-xl text-left shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b26a]/70 focus-visible:ring-offset-2',
                isDark ? 'focus-visible:ring-offset-[#2b1b17]' : 'focus-visible:ring-offset-[#f4ead8]',
                'hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)] active:translate-y-0',
                isDark
                  ? 'border border-[#d4b26a]/28 bg-[#3a231a]'
                  : 'border border-[#8d4f36]/22 bg-[#f8f0e3] shadow-[0_8px_28px_rgba(43,27,23,0.08)] hover:shadow-[0_16px_40px_rgba(43,27,23,0.12)]'
              )}
            >
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <ThumbnailStack videoId={id} label={video.title} />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/40 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={cn(
                      'flex h-14 w-14 items-center justify-center rounded-full text-[#2b1b17] shadow-lg transition-all duration-300 ease-out md:h-16 md:w-16',
                      'bg-[#d4b26a] ring-4 ring-black/25 group-hover:scale-110 group-hover:bg-[#e4c77f] group-hover:ring-[#f4ead8]/35'
                    )}
                    aria-hidden
                  >
                    <Play className="ml-0.5 h-6 w-6 fill-current md:h-7 md:w-7" strokeWidth={0} />
                  </span>
                </div>
              </div>
              <div className={cn('p-4 md:p-5', !isDark && 'bg-white/50')}>
                <p className={cn('text-sm font-sans font-semibold leading-snug md:text-[15px]', isDark ? 'text-[#f4ead8]' : 'text-[#2b1b17]')}>
                  {video.title}
                </p>
                <p className={cn('mt-1.5 text-xs font-body', isDark ? 'text-[#d4b26a]/80' : 'text-[#8d4f36]/90')}>Tap to watch</p>
              </div>
            </button>
          );
        })}
      </div>

      <YouTubePlayModal
        open={!!active}
        onOpenChange={(o) => !o && close()}
        title={active?.title ?? ''}
        embedSrc={active?.src ?? ''}
        variant={variant}
      />
    </div>
  );
}
