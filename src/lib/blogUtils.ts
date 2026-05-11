import type { BlogContentBlock, BlogPost, EvidenceLevel } from '@/types/blog';

export function formatBlogDate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

export function estimateReadingTimeMinutes(blocks: BlogContentBlock[]): number {
  const text = blocks
    .map((block) => {
      if (block.type === 'p') return block.text;
      if (block.type === 'quote') return block.text;
      if (block.type === 'callout') return `${block.title} ${block.body}`;
      if (block.type === 'ul') return block.items.join(' ');
      if (block.type === 'h2' || block.type === 'h3') return block.text;
      return '';
    })
    .join(' ')
    .trim();

  if (!text) return 1;
  const words = text.split(/\s+/).filter(Boolean).length;
  // 200 wpm is a common reading-time heuristic.
  return Math.max(2, Math.round(words / 200));
}

export function toAnchorId(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export type TocEntry = { id: string; label: string; level: 2 | 3 };

export function getTableOfContents(blocks: BlogContentBlock[]): TocEntry[] {
  const entries: TocEntry[] = [];
  blocks.forEach((block) => {
    if (block.type === 'h2') entries.push({ id: toAnchorId(block.text), label: block.text, level: 2 });
    if (block.type === 'h3') entries.push({ id: toAnchorId(block.text), label: block.text, level: 3 });
  });
  return entries;
}

export function evidenceToScore(level: EvidenceLevel): number {
  switch (level) {
    case 'Strong':
      return 92;
    case 'Moderate':
      return 72;
    case 'Emerging':
      return 52;
    case 'Speculative':
      return 28;
    default:
      return 50;
  }
}

export function getRelatedPosts(allPosts: BlogPost[], current: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = allPosts.filter((post) => post.slug !== current.slug && post.category === current.category);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const byTag = allPosts
    .filter((post) => post.slug !== current.slug)
    .map((post) => {
      const score = post.tags.reduce((acc, tag) => (current.tags.includes(tag) ? acc + 1 : acc), 0);
      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.post);

  const merged: BlogPost[] = [];
  for (const post of [...sameCategory, ...byTag]) {
    if (merged.find((p) => p.slug === post.slug)) continue;
    merged.push(post);
    if (merged.length >= limit) break;
  }
  return merged;
}

