import { List } from 'lucide-react';
import type { TocEntry } from '@/lib/blogUtils';

export function TableOfContents({ entries }: { entries: TocEntry[] }) {
  if (entries.length === 0) return null;

  return (
    <section className="border border-[#8d4f36]/18 bg-white/75 p-5">
      <div className="flex items-center gap-2">
        <List className="h-4 w-4 text-[#8d4f36]" aria-hidden />
        <h2 className="font-sans font-semibold text-[#2b1b17]">Table of contents</h2>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {entries.map((entry) => (
          <li key={entry.id} className={entry.level === 3 ? 'pl-4' : ''}>
            <a
              href={`#${entry.id}`}
              className="text-[#3a231a]/85 hover:text-[#2b1b17] border-b border-transparent hover:border-[#d4b26a]/60 transition-colors"
            >
              {entry.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

