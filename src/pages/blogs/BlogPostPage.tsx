import { type ReactNode, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CalendarDays, ChevronLeft, Clock3, UserRound } from 'lucide-react';
import { Footer } from '@/sections/Footer';
import { SubmenuHeaderNav } from '@/components/SubmenuHeaderNav';
import { blogPosts } from '@/data/blogPosts';
import { estimateReadingTimeMinutes, formatBlogDate, getRelatedPosts, getTableOfContents, toAnchorId } from '@/lib/blogUtils';
import { usePageSeo } from '@/hooks/usePageSeo';
import { Breadcrumbs } from '@/components/blog/Breadcrumbs';
import { EvidenceMeter } from '@/components/blog/EvidenceMeter';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { RelatedArticles } from '@/components/blog/RelatedArticles';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { BlogCta } from '@/components/blog/BlogCta';
import { toAbsoluteUrl } from '@/lib/seo';
import type { BlogContentBlock } from '@/types/blog';

function isSafeInlineHref(href: string) {
  return href.startsWith('https://') || href.startsWith('http://') || href.startsWith('mailto:');
}

function renderTextWithLinks(text: string) {
  const anchorPattern = /<a\s+[^>]*href=(["'])(.*?)\1[^>]*>(.*?)<\/a>/gi;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = anchorPattern.exec(text)) !== null) {
    const [fullMatch, , href, label] = match;
    const before = text.slice(lastIndex, match.index);
    if (before) parts.push(before);

    const cleanLabel = label.replace(/<[^>]+>/g, '').trim();
    if (isSafeInlineHref(href) && cleanLabel) {
      parts.push(
        <a
          key={`${href}-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#8d4f36] underline decoration-[#d4b26a]/55 underline-offset-4 hover:text-[#2b1b17]"
        >
          {cleanLabel}
        </a>
      );
    } else {
      parts.push(cleanLabel || fullMatch);
    }

    lastIndex = match.index + fullMatch.length;
  }

  const after = text.slice(lastIndex);
  if (after) parts.push(after);
  return parts.length > 0 ? parts : text;
}

function ContentBlock({ block }: { block: BlogContentBlock }) {
  if (block.type === 'divider') {
    return <hr className="my-8 border-[#8d4f36]/18" />;
  }

  if (block.type === 'h2') {
    const id = toAnchorId(block.text);
    return (
      <h2 id={id} className="scroll-mt-28 mt-10 text-2xl md:text-3xl font-sans font-semibold text-[#2b1b17]">
        {block.text}
      </h2>
    );
  }

  if (block.type === 'h3') {
    const id = toAnchorId(block.text);
    return (
      <h3 id={id} className="scroll-mt-28 mt-8 text-xl md:text-2xl font-sans font-semibold text-[#2b1b17]">
        {block.text}
      </h3>
    );
  }

  if (block.type === 'p') {
    return <p className="mt-4 text-sm md:text-base leading-relaxed text-[#3a231a]/85">{renderTextWithLinks(block.text)}</p>;
  }

  if (block.type === 'ul') {
    return (
      <ul className="mt-4 space-y-3 text-sm md:text-base text-[#3a231a]/85 leading-relaxed list-disc pl-5">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (block.type === 'quote') {
    return (
      <figure className="mt-6 border-l-4 border-[#d4b26a] bg-[#f8f0e3] px-5 py-4">
        <blockquote className="text-sm md:text-base italic leading-relaxed text-[#2b1b17]">{block.text}</blockquote>
        {block.caption ? <figcaption className="mt-3 text-xs text-[#3a231a]/70">{block.caption}</figcaption> : null}
      </figure>
    );
  }

  if (block.type === 'callout') {
    return (
      <aside className="mt-6 border border-[#8d4f36]/18 bg-white/70 p-5">
        <p className="text-xs uppercase tracking-[0.16em] text-[#8d4f36]">{block.title}</p>
        <p className="mt-3 text-sm md:text-base leading-relaxed text-[#3a231a]/85">{block.body}</p>
      </aside>
    );
  }

  return null;
}

export function BlogPostPage() {
  const params = useParams();
  const slug = params.slug || '';
  const post = blogPosts.find((p) => p.slug === slug);

  const toc = useMemo(() => (post ? getTableOfContents(post.content) : []), [post]);
  const readingMinutes = post ? estimateReadingTimeMinutes(post.content) : 0;
  const related = useMemo(() => (post ? getRelatedPosts(blogPosts, post, 3) : []), [post]);

  const canonicalPath = `/blogs/${slug}`;
  const canonicalAbsolute = toAbsoluteUrl(canonicalPath);

  usePageSeo(
    post
      ? {
          title: `${post.title} | Ancient Indian Technology Blog`,
          description: post.excerpt,
          canonicalPath,
          image: post.featuredImage,
          ogType: 'article',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Blogs', url: '/blogs' },
            { name: post.title, url: canonicalPath },
          ],
          article: {
            authorName: post.author.name,
            publishedAt: post.publishedAt,
            modifiedAt: post.updatedAt,
            section: post.category,
            keywords: post.tags,
          },
        }
      : {
          title: 'Blog Post Not Found | Ancient Indian Technology',
          description: 'The requested article was not found.',
          canonicalPath,
          image: '/hero-metallurgy.png',
          ogType: 'website',
          breadcrumbs: [
            { name: 'Home', url: '/' },
            { name: 'Blogs', url: '/blogs' },
          ],
        }
  );

  if (!post) {
    return (
      <main className="min-h-screen bg-[#f4ead8] text-[#2b1b17]">
        <SubmenuHeaderNav />
        <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
          <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-[#8d4f36] hover:text-[#2b1b17]">
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Back to Blogs
          </Link>
          <h1 className="mt-6 text-3xl md:text-4xl font-sans font-bold">Article not found</h1>
          <p className="mt-3 text-sm md:text-base text-[#3a231a]/80 leading-relaxed">
            The URL may be incorrect, or the article was moved. Use the blog listing page to continue browsing.
          </p>
          <div className="mt-6">
            <Link
              to="/blogs"
              className="inline-flex rounded-full bg-[#d4b26a] px-6 py-3 text-sm font-sans font-semibold text-[#2b1b17] hover:bg-[#c6a055] transition-colors"
            >
              Go to Blogs
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4ead8] text-[#2b1b17]">
      <SubmenuHeaderNav />

      <section className="relative overflow-hidden bg-[#2b1b17]">
        <div className="h-[56vh] min-h-[360px] max-h-[620px]">
          <img src={post.featuredImage} alt={post.featuredImageAlt} className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#140b08]/96 via-[#2b1b17]/78 to-[#2b1b17]/58" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#140b08]/90 via-[#140b08]/30 to-transparent" />
        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 md:pt-12">
            <Breadcrumbs items={[{ label: 'Blogs', to: '/blogs' }, { label: post.title }]} />
          </div>

          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-10 md:pb-14">
              <div className="max-w-4xl">
                <p className="inline-flex rounded-full bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-[#f4ead8]">
                  {post.category}
                </p>
                <h1
                  className="mt-5 text-3xl sm:text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#fff8ea] leading-[1.08]"
                  style={{ textShadow: '0 3px 24px rgba(20, 11, 8, 0.72)' }}
                >
                  {post.title}
                </h1>
                {post.subtitle ? (
                  <p
                    className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-[#fff8ea]/92"
                    style={{ textShadow: '0 2px 18px rgba(20, 11, 8, 0.7)' }}
                  >
                    {post.subtitle}
                  </p>
                ) : null}
                <div className="mt-6 flex flex-wrap items-center gap-2.5 text-sm text-[#fff8ea]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#d4b26a]/25 bg-[#140b08]/72 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                    <UserRound className="h-4 w-4 text-[#d4b26a]" aria-hidden />
                    {post.author.name}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#d4b26a]/25 bg-[#140b08]/72 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                    <CalendarDays className="h-4 w-4 text-[#d4b26a]" aria-hidden />
                    {formatBlogDate(post.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#d4b26a]/25 bg-[#140b08]/72 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                    <Clock3 className="h-4 w-4 text-[#d4b26a]" aria-hidden />
                    {readingMinutes} min read
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid lg:grid-cols-[1.45fr_0.55fr] gap-8 items-start">
          <article className="border border-[#8d4f36]/18 bg-white/70 p-6 md:p-8">
            <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-[#8d4f36] hover:text-[#2b1b17]">
              <ChevronLeft className="h-4 w-4" aria-hidden />
              Back to Blogs
            </Link>

            <div className="mt-6">
              {post.content.map((block, index) => (
                <ContentBlock key={`${block.type}-${index}`} block={block} />
              ))}
            </div>

            <section className="mt-10 border-t border-[#8d4f36]/18 pt-8">
              <p className="text-xs uppercase tracking-[0.16em] text-[#8d4f36]">References / Sources</p>
              <h2 className="mt-3 text-2xl font-sans font-semibold">References</h2>
              <p className="mt-2 text-sm text-[#3a231a]/82 leading-relaxed">
                These references are starting points. For deep study, compare multiple editions/translations and use peer-reviewed archaeometallurgy or history-of-science research.
              </p>
              <ul className="mt-5 space-y-3 text-sm text-[#3a231a]/85 leading-relaxed">
                {post.references.map((ref) => (
                  <li key={ref.label} className="border border-[#8d4f36]/14 bg-[#fcfaf6] px-4 py-3">
                    {ref.url ? (
                      <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-[#8d4f36] font-semibold hover:underline">
                        {ref.label}
                      </a>
                    ) : (
                      <span>{ref.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <div className="space-y-4 lg:sticky lg:top-24">
            <TableOfContents entries={toc} />
            <ShareButtons title={post.title} canonicalUrl={canonicalAbsolute} />
            <BlogSidebar posts={blogPosts} />
          </div>
        </div>

        <div className="mt-10 space-y-6">
          <EvidenceMeter level={post.evidenceLevel} notes={post.evidenceNotes} />
          <RelatedArticles posts={related} />
          <BlogCta />
        </div>
      </section>

      <Footer />
    </main>
  );
}
