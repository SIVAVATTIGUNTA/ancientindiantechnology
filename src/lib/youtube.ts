/** Pull `src` from a full iframe snippet, or return the string if it is already a URL. */
export function parseYoutubeIframeSrc(input: string): string {
  const m = input.match(/src=["']([^"']+)["']/i);
  return m?.[1] ?? input;
}

/** YouTube embed `/embed/VIDEO_ID` — returns null for search/list embeds. */
export function youtubeVideoIdFromEmbedUrl(embedUrl: string): string | null {
  const m = embedUrl.match(/youtube\.com\/embed\/([^?&/]+)/i);
  return m?.[1] ?? null;
}

const THUMB_QUALITIES = ['maxresdefault', 'hqdefault', 'mqdefault', 'default'] as const;

export function youtubeThumbnailUrl(videoId: string, qualityIndex: number): string {
  const q = THUMB_QUALITIES[Math.min(qualityIndex, THUMB_QUALITIES.length - 1)];
  return `https://i.ytimg.com/vi/${videoId}/${q}.jpg`;
}

/**
 * Embed URL for the modal player after the user opens it from a click.
 * No `mute=1` — audio is allowed when the parent opens the iframe in the same user-activation turn (see flushSync on open).
 */
export function withYoutubeModalEmbed(embedUrl: string): string {
  const id = youtubeVideoIdFromEmbedUrl(embedUrl);
  const base =
    id != null
      ? `https://www.youtube.com/embed/${id}`
      : embedUrl.split('#')[0];

  try {
    const url = new URL(base, 'https://www.youtube.com');
    url.searchParams.set('autoplay', '1');
    url.searchParams.delete('mute');
    url.searchParams.set('playsinline', '1');
    url.searchParams.set('rel', '0');
    return url.toString();
  } catch {
    const join = base.includes('?') ? '&' : '?';
    return `${base}${join}autoplay=1&playsinline=1&rel=0`;
  }
}
