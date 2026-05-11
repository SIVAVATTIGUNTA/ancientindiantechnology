import { useEffect, useMemo, useState, useDeferredValue } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Sparkles } from 'lucide-react';
import { Footer } from '@/sections/Footer';
import { SubmenuHeaderNav } from '@/components/SubmenuHeaderNav';
import { ResourceHero } from '@/components/resources/ResourceHero';
import { blogCategories, blogPosts } from '@/data/blogPosts';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogPagination } from '@/components/blog/BlogPagination';
import { BlogSidebar } from '@/components/blog/BlogSidebar';
import { BlogCta } from '@/components/blog/BlogCta';
import { usePageSeo } from '@/hooks/usePageSeo';

const PAGE_SIZE = 6;

function normalizeCategory(raw: string | null) {
  if (!raw) return 'All';
  const candidate = raw.trim().replace(/\+/g, ' ');
  if (!candidate || candidate.toLowerCase() === 'all') return 'All';
  return blogCategories.find((category) => category.toLowerCase() === candidate.toLowerCase()) ?? 'All';
}

export function BlogListingPage() {
  usePageSeo({
    title: 'Blogs | Ancient Indian Technology',
    description:
      'Explore evidence-led articles on ancient Indian science and technology across metallurgy, astronomy, medicine, mathematics, urban engineering, archaeology, and Sanskrit texts.',
    canonicalPath: '/blogs',
    image: '/hero-metallurgy.png',
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: 'Blogs', url: '/blogs' },
    ],
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const category = normalizeCategory(searchParams.get('category'));
  const pageParam = Number(searchParams.get('page') || '1');
  const safePage = Number.isFinite(pageParam) && pageParam > 0 ? Math.floor(pageParam) : 1;

  const [qLocal, setQLocal] = useState(searchParams.get('q') || '');
  const qDeferred = useDeferredValue(qLocal);

  useEffect(() => {
    setQLocal(searchParams.get('q') || '');
  }, [searchParams]);

  const filtered = useMemo(() => {
    const query = qDeferred.trim().toLowerCase();
    const byCategory =
      category === 'All'
        ? blogPosts
        : blogPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase());
    if (!query) return byCategory;
    return byCategory.filter((post) => {
      const haystack = `${post.title} ${post.subtitle ?? ''} ${post.excerpt} ${post.tags.join(' ')}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [category, qDeferred]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, safePage), totalPages);
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const setCategory = (next: string) => {
    setSearchParams((prev) => {
      const sp = new URLSearchParams(prev);
      if (next === 'All') sp.delete('category');
      else sp.set('category', next);
      sp.delete('page');
      return sp;
    });
  };

  const setPage = (nextPage: number) => {
    setSearchParams((prev) => {
      const sp = new URLSearchParams(prev);
      if (nextPage <= 1) sp.delete('page');
      else sp.set('page', String(nextPage));
      return sp;
    });
  };

  const commitQuery = (next: string) => {
    setSearchParams((prev) => {
      const sp = new URLSearchParams(prev);
      const trimmed = next.trim();
      if (!trimmed) sp.delete('q');
      else sp.set('q', trimmed);
      sp.delete('page');
      return sp;
    });
  };

  return (
    <main className="min-h-screen bg-[#f4ead8] text-[#2b1b17]">
      <SubmenuHeaderNav />

      <ResourceHero
        eyebrow="Scholarly Blog"
        title="Blogs"
        description="Modern, evidence-led articles that connect ancient Indian science with artifacts, texts, diagrams, and responsible interpretation. Use the filters to study one domain at a time."
        heroImage="/sun-temple.jpg"
        heroImageAlt="Ancient Indian temple architecture used as an instrument of time"
      />

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <div className="grid lg:grid-cols-[1.45fr_0.55fr] gap-8 items-start">
          <div>
            <section className="border border-[#8d4f36]/18 bg-white/70 p-5 md:p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#8d4f36]" aria-hidden />
                  <h2 className="text-xl md:text-2xl font-sans font-semibold">Browse Articles</h2>
                </div>
                <div className="relative w-full md:max-w-sm">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8d4f36]" aria-hidden />
                  <input
                    value={qLocal}
                    onChange={(e) => {
                      const next = e.target.value;
                      setQLocal(next);
                      // Live-update URL for shareable filtering without requiring submit.
                      commitQuery(next);
                    }}
                    placeholder="Search articles..."
                    className="w-full border border-[#8d4f36]/22 bg-[#fcfaf6] pl-10 pr-3 py-2.5 text-sm outline-none focus:border-[#8d4f36]/55"
                    aria-label="Search blog posts"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {['All', ...blogCategories].map((cat) => {
                  const active = cat === category;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`px-4 py-2 text-xs uppercase tracking-[0.14em] border transition-colors ${
                        active
                          ? 'bg-[#2b1b17] text-[#f4ead8] border-[#2b1b17]'
                          : 'bg-white text-[#2b1b17] border-[#8d4f36]/22 hover:bg-[#f8f0e3]'
                      }`}
                      aria-pressed={active}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              <p className="mt-4 text-xs text-[#3a231a]/70">
                Showing <span className="font-semibold text-[#2b1b17]">{filtered.length}</span> result{filtered.length === 1 ? '' : 's'}
                {category !== 'All' ? (
                  <>
                    {' '}
                    in <span className="font-semibold text-[#2b1b17]">{category}</span>
                  </>
                ) : null}
                {qDeferred.trim() ? (
                  <>
                    {' '}
                    for <span className="font-semibold text-[#2b1b17]">&quot;{qDeferred.trim()}&quot;</span>
                  </>
                ) : null}
              </p>
            </section>

            <section className="mt-6 grid md:grid-cols-2 gap-5">
              {paged.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </section>

            {paged.length === 0 && (
              <div className="mt-8 border border-[#8d4f36]/18 bg-white/70 p-6">
                <h3 className="text-lg font-sans font-semibold">No matching articles yet</h3>
                <p className="mt-2 text-sm text-[#3a231a]/82 leading-relaxed">
                  Try clearing search filters or switching categories. New posts will appear automatically once added to the blog catalog.
                </p>
              </div>
            )}

            <div className="mt-8">
              <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setPage} />
            </div>

            <div className="mt-10">
              <BlogCta />
            </div>
          </div>

          <div className="lg:sticky lg:top-24">
            <BlogSidebar posts={blogPosts} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
