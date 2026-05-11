import { BookOpen, Flame, LibraryBig, Tags } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogCategory, BlogPost, EvidenceLevel } from '@/types/blog';
import { formatBlogDate } from '@/lib/blogUtils';

function countBy<T extends string>(items: T[]) {
  const map = new Map<T, number>();
  items.forEach((item) => map.set(item, (map.get(item) ?? 0) + 1));
  return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
}

export function BlogSidebar({
  posts,
  featuredResearch = [
    { label: 'Research Papers', to: '/topic/research-papers' },
    { label: 'Books & Bibliography', to: '/topic/books-and-bibliography' },
    { label: 'Lecture Series', to: '/topic/lecture-series' },
    { label: '3D Reconstructions', to: '/topic/3d-reconstructions' },
  ],
}: {
  posts: BlogPost[];
  featuredResearch?: { label: string; to: string }[];
}) {
  const recent = posts.slice(0, 4);
  const topics = countBy(posts.map((p) => p.category as BlogCategory)).slice(0, 6);
  const evidence = countBy(posts.map((p) => p.evidenceLevel as EvidenceLevel));

  return (
    <aside className="space-y-4">
      <section className="border border-[#8d4f36]/18 bg-white/75 p-5">
        <div className="flex items-center gap-2">
          <Flame className="h-4 w-4 text-[#8d4f36]" aria-hidden />
          <h2 className="font-sans font-semibold text-[#2b1b17]">Recent posts</h2>
        </div>
        <div className="mt-4 space-y-3">
          {recent.map((post) => (
            <Link key={post.slug} to={`/blogs/${post.slug}`} className="block border border-[#8d4f36]/14 bg-[#fcfaf6] hover:bg-[#f8f0e3] transition-colors p-3">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#8d4f36]">{post.category}</p>
              <p className="mt-1.5 text-sm font-sans font-semibold text-[#2b1b17] leading-snug">{post.title}</p>
              <p className="mt-1 text-xs text-[#3a231a]/70">{formatBlogDate(post.publishedAt)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border border-[#8d4f36]/18 bg-white/75 p-5">
        <div className="flex items-center gap-2">
          <Tags className="h-4 w-4 text-[#8d4f36]" aria-hidden />
          <h2 className="font-sans font-semibold text-[#2b1b17]">Popular topics</h2>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
          {topics.map(([topic, count]) => (
            <span key={topic} className="inline-flex items-center justify-between border border-[#8d4f36]/14 bg-[#fcfaf6] px-3 py-2">
              <span className="text-[#2b1b17]">{topic}</span>
              <span className="text-xs text-[#8d4f36] font-semibold">{count}</span>
            </span>
          ))}
        </div>
      </section>

      <section className="border border-[#8d4f36]/18 bg-white/75 p-5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-[#8d4f36]" aria-hidden />
          <h2 className="font-sans font-semibold text-[#2b1b17]">Featured research</h2>
        </div>
        <div className="mt-4 space-y-2 text-sm">
          {featuredResearch.map((item) => (
            <Link key={item.to} to={item.to} className="block border border-[#8d4f36]/14 bg-[#fcfaf6] hover:bg-[#f8f0e3] transition-colors px-3 py-2">
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="border border-[#8d4f36]/18 bg-white/75 p-5">
        <div className="flex items-center gap-2">
          <LibraryBig className="h-4 w-4 text-[#8d4f36]" aria-hidden />
          <h2 className="font-sans font-semibold text-[#2b1b17]">Evidence categories</h2>
        </div>
        <div className="mt-4 space-y-2 text-sm">
          {evidence.map(([level, count]) => (
            <div key={level} className="flex items-center justify-between border border-[#8d4f36]/14 bg-[#fcfaf6] px-3 py-2">
              <span className="text-[#2b1b17]">{level}</span>
              <span className="text-xs text-[#8d4f36] font-semibold">{count}</span>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}

