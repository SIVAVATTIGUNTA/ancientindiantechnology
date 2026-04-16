import { useMemo } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { withYoutubeModalEmbed, youtubeVideoIdFromEmbedUrl } from '@/lib/youtube';

export type YouTubePlayModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  embedSrc: string;
  /** Dark chrome matches home video section; light matches IntroGrid */
  variant?: 'dark' | 'light';
};

export function YouTubePlayModal({ open, onOpenChange, title, embedSrc, variant = 'dark' }: YouTubePlayModalProps) {
  const src = useMemo(() => (open ? withYoutubeModalEmbed(embedSrc) : ''), [open, embedSrc]);
  const playerKey = useMemo(() => youtubeVideoIdFromEmbedUrl(embedSrc) ?? embedSrc, [embedSrc]);

  const chrome =
    variant === 'dark'
      ? 'border-[#d4b26a]/25 bg-[#1a1210] text-[#f4ead8]'
      : 'border-[#8d4f36]/25 bg-[#fcfaf6] text-[#2b1b17]';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        data-lenis-prevent
        overlayClassName="bg-black/70 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50"
        className={cn(
          'max-h-[min(92vh,860px)] max-w-[min(100vw-1.25rem,960px)] w-full translate-x-[-50%] translate-y-[-50%] gap-0 overflow-hidden rounded-xl p-0 shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:max-w-[min(100vw-2rem,960px)]',
          chrome
        )}
      >
        <div
          className={cn(
            'flex items-start justify-between gap-3 border-b px-4 py-3',
            variant === 'dark' ? 'border-white/10' : 'border-[#8d4f36]/15'
          )}
        >
          <DialogTitle className={cn('pr-2 text-left text-base font-sans font-semibold leading-snug', variant === 'light' && 'text-[#2b1b17]')}>
            {title}
          </DialogTitle>
          <DialogClose asChild>
            <button
              type="button"
              className={cn(
                'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b26a]/60',
                variant === 'dark' ? 'text-[#f4ead8]/85 hover:bg-white/10 hover:text-[#f4ead8]' : 'text-[#2b1b17]/75 hover:bg-[#8d4f36]/10'
              )}
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogClose>
        </div>
        <div className="aspect-video w-full bg-black">
          {open && src ? (
            <iframe
              key={playerKey}
              data-skip-global-embed="true"
              src={src}
              title={title}
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
