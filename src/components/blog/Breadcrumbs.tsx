import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export type BreadcrumbItem = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-[#f4ead8]/82">
      <Link to="/" className="inline-flex items-center gap-1 hover:text-[#f4ead8] transition-colors">
        <Home className="h-3.5 w-3.5" aria-hidden />
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          <ChevronRight className="h-3.5 w-3.5 text-[#d4b26a]/80" aria-hidden />
          {item.to ? (
            <Link to={item.to} className="hover:text-[#f4ead8] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#f4ead8]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

