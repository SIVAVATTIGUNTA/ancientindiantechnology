import { ChevronLeft, ChevronRight } from 'lucide-react';

export function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const canPrev = safePage > 1;
  const canNext = safePage < totalPages;

  const pages = Array.from({ length: totalPages }, (_, idx) => idx + 1).slice(
    Math.max(0, safePage - 3),
    Math.min(totalPages, safePage + 2)
  );

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
      <button
        type="button"
        onClick={() => canPrev && onPageChange(safePage - 1)}
        disabled={!canPrev}
        className="inline-flex items-center gap-2 border border-[#8d4f36]/22 bg-white px-3 py-2 text-sm text-[#2b1b17] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f8f0e3] transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden />
        Prev
      </button>

      {pages.map((page) => {
        const active = page === safePage;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`min-w-10 border px-3 py-2 text-sm transition-colors ${
              active
                ? 'border-[#d4b26a] bg-[#d4b26a] text-[#2b1b17] font-semibold'
                : 'border-[#8d4f36]/22 bg-white text-[#2b1b17] hover:bg-[#f8f0e3]'
            }`}
            aria-current={active ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => canNext && onPageChange(safePage + 1)}
        disabled={!canNext}
        className="inline-flex items-center gap-2 border border-[#8d4f36]/22 bg-white px-3 py-2 text-sm text-[#2b1b17] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#f8f0e3] transition-colors"
        aria-label="Next page"
      >
        Next
        <ChevronRight className="h-4 w-4" aria-hidden />
      </button>
    </nav>
  );
}

