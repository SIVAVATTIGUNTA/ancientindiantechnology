import { Copy, Linkedin, Share2, Twitter } from 'lucide-react';
import { useMemo, useState } from 'react';

function buildShareUrl(platform: 'linkedin' | 'twitter', url: string, title: string) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  if (platform === 'linkedin') return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
}

export function ShareButtons({ title, canonicalUrl }: { title: string; canonicalUrl: string }) {
  const [copied, setCopied] = useState(false);
  const shareLinks = useMemo(
    () => ({
      linkedin: buildShareUrl('linkedin', canonicalUrl, title),
      twitter: buildShareUrl('twitter', canonicalUrl, title),
    }),
    [canonicalUrl, title]
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(canonicalUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      // Clipboard might be blocked; fallback to prompt.
      window.prompt('Copy link:', canonicalUrl);
    }
  };

  return (
    <section className="border border-[#8d4f36]/18 bg-white/75 p-5">
      <div className="flex items-center gap-2">
        <Share2 className="h-4 w-4 text-[#8d4f36]" aria-hidden />
        <h2 className="font-sans font-semibold text-[#2b1b17]">Share</h2>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-[#8d4f36]/22 bg-[#f8f0e3] px-3 py-2 text-sm font-semibold text-[#2b1b17] hover:bg-[#d4b26a]/35 transition-colors"
        >
          <Linkedin className="h-4 w-4" aria-hidden />
          LinkedIn
        </a>
        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-[#8d4f36]/22 bg-[#f8f0e3] px-3 py-2 text-sm font-semibold text-[#2b1b17] hover:bg-[#d4b26a]/35 transition-colors"
        >
          <Twitter className="h-4 w-4" aria-hidden />
          X
        </a>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="mt-2 inline-flex w-full items-center justify-center gap-2 border border-[#8d4f36]/22 bg-white px-3 py-2 text-sm font-semibold text-[#2b1b17] hover:bg-[#f8f0e3] transition-colors"
      >
        <Copy className="h-4 w-4" aria-hidden />
        {copied ? 'Copied' : 'Copy link'}
      </button>
    </section>
  );
}

