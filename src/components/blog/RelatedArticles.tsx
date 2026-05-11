import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '@/types/blog';
import { formatBlogDate } from '@/lib/blogUtils';

export function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="border border-[#8d4f36]/18 bg-white/75 p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[#8d4f36]">Related articles</p>
          <h2 className="mt-2 text-2xl font-sans font-semibold text-[#2b1b17]">Keep reading</h2>
        </div>
        <Link to="/blogs" className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-[#8d4f36] hover:text-[#2b1b17] transition-colors">
          All blogs <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <div className="mt-5 grid md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blogs/${post.slug}`}
            className="border border-[#8d4f36]/18 bg-[#fcfaf6] hover:bg-[#f8f0e3] transition-colors p-4"
          >
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#8d4f36]">{post.category}</p>
            <p className="mt-2 font-sans font-semibold text-[#2b1b17] leading-snug">{post.title}</p>
            <p className="mt-2 text-xs text-[#3a231a]/70">{formatBlogDate(post.publishedAt)}</p>
          </Link>
        ))}
      </div>

      <div className="mt-5 sm:hidden">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-[#8d4f36] hover:text-[#2b1b17] transition-colors">
          View all blogs <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

