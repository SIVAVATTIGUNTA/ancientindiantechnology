import { ArrowRight, CalendarDays, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '@/types/blog';
import { estimateReadingTimeMinutes, formatBlogDate } from '@/lib/blogUtils';

export function BlogCard({ post }: { post: BlogPost }) {
  const readingMinutes = estimateReadingTimeMinutes(post.content);

  return (
    <article
      data-ait-reveal="up"
      className="group border border-[#8d4f36]/18 bg-white/70 overflow-hidden hover:bg-white transition-colors"
    >
      <Link to={`/blogs/${post.slug}`} className="block">
        <div className="relative h-48 md:h-52 overflow-hidden bg-[#f8f0e3]">
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1b17]/55 via-transparent to-transparent opacity-85" />
          <div className="absolute left-4 bottom-4 right-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full bg-[#d4b26a]/92 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#2b1b17]">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#2b1b17]/70 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[#f4ead8]">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden />
              {formatBlogDate(post.publishedAt)}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-5 md:p-6">
        <h2 className="text-xl md:text-2xl font-sans font-semibold leading-snug text-[#2b1b17]">
          <Link to={`/blogs/${post.slug}`} className="hover:underline decoration-[#d4b26a]/70 underline-offset-4">
            {post.title}
          </Link>
        </h2>
        <p className="mt-3 text-sm md:text-[15px] leading-relaxed text-[#3a231a]/84">{post.excerpt}</p>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs text-[#3a231a]/70">
            <span className="inline-flex items-center gap-1">
              <Tag className="h-3.5 w-3.5 text-[#8d4f36]" aria-hidden />
              {post.tags.slice(0, 2).join(' / ')}
            </span>
            <span className="h-3 w-px bg-[#8d4f36]/20" aria-hidden />
            <span>{readingMinutes} min read</span>
          </div>

          <Link
            to={`/blogs/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#8d4f36] hover:text-[#2b1b17] transition-colors"
          >
            Read More
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
