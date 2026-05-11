import type { ReactNode } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';
import { usePageSeo } from '../../hooks/usePageSeo';

type InfoSection = {
  title: string;
  body: string;
  eyebrow?: string;
  items?: string[];
  note?: string;
  links?: {
    label: string;
    href: string;
    description?: string;
  }[];
};

interface InfoPageLayoutProps {
  category: string;
  title: string;
  intro: string;
  heroImage: string;
  sections: InfoSection[];
  seoDescription?: string;
  summaryCards?: {
    label: string;
    value: string;
  }[];
  closingNote?: {
    title: string;
    body: string;
    linkLabel?: string;
    linkHref?: string;
  };
}

function SmartLink({ href, children }: { href: string; children: ReactNode }) {
  const className =
    'inline-flex items-center gap-2 text-sm font-semibold text-[#8d4f36] transition-colors hover:text-[#2b1b17]';

  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
}

export function InfoPageLayout({
  category,
  title,
  intro,
  heroImage,
  sections,
  seoDescription,
  summaryCards,
  closingNote,
}: InfoPageLayoutProps) {
  const location = useLocation();

  usePageSeo({
    title: `${title} | Ancient Indian Technology`,
    description: seoDescription || intro,
    canonicalPath: location.pathname,
    image: heroImage,
    breadcrumbs: [
      { name: 'Home', url: '/' },
      { name: title, url: location.pathname },
    ],
  });

  return (
    <main className="min-h-screen bg-[#f4ead8] text-[#2b1b17]">
      <SubmenuHeaderNav />
      <section className="relative overflow-hidden">
        <div className="h-[42vh] min-h-[280px]">
          <img src={heroImage} alt={title} className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1b17]/82 via-[#2b1b17]/55 to-[#2b1b17]/75" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="inline-flex rounded-full bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]">
              {category}
            </p>
            <h1 className="mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]">{title}</h1>
            <p className="mt-3 text-[#f4ead8]/85">{intro}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {summaryCards && summaryCards.length > 0 && (
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {summaryCards.map((card, index) => (
              <article
                key={`${card.label}-${card.value}`}
                data-ait-reveal="up"
                data-ait-delay={String(index * 60)}
                className="border border-[#8d4f36]/20 bg-white/75 p-5 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-[#8d4f36]">{card.label}</p>
                <p className="mt-2 text-lg font-sans font-semibold text-[#2b1b17]">{card.value}</p>
              </article>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-5">
          {sections.map((section, index) => (
            <article
              key={section.title}
              data-ait-reveal="up"
              data-ait-delay={String(index * 70)}
              className="rounded-xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-5 md:p-6 shadow-sm"
            >
              {section.eyebrow && (
                <p className="mb-2 text-xs uppercase tracking-[0.16em] text-[#8d4f36]">{section.eyebrow}</p>
              )}
              <h2 className="text-xl font-sans font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm md:text-base text-[#3a231a]/85 leading-relaxed">{section.body}</p>
              {section.items && section.items.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-[#3a231a]/86">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8d4f36]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.links && section.links.length > 0 && (
                <div className="mt-5 grid gap-3">
                  {section.links.map((link) => (
                    <div key={link.href} className="border border-[#8d4f36]/15 bg-white/65 p-4">
                      <SmartLink href={link.href}>
                        {link.label}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </SmartLink>
                      {link.description && <p className="mt-2 text-xs leading-relaxed text-[#3a231a]/70">{link.description}</p>}
                    </div>
                  ))}
                </div>
              )}
              {section.note && (
                <p className="mt-5 border-l-2 border-[#d4b26a] bg-white/60 px-4 py-3 text-sm leading-relaxed text-[#3a231a]/78">
                  {section.note}
                </p>
              )}
            </article>
          ))}
        </div>

        {closingNote && (
          <section
            data-ait-reveal="up"
            className="mt-10 border border-[#8d4f36]/20 bg-[#2b1b17] p-6 text-[#f4ead8] md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-[#d4b26a]">Need help?</p>
            <h2 className="mt-3 text-2xl font-sans font-semibold">{closingNote.title}</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#f4ead8]/78 md:text-base">{closingNote.body}</p>
            {closingNote.linkHref && closingNote.linkLabel && (
              <Link
                to={closingNote.linkHref}
                className="mt-5 inline-flex items-center gap-2 border border-[#d4b26a]/35 px-4 py-2 text-sm font-semibold text-[#f4ead8] transition-colors hover:bg-[#d4b26a]/15"
              >
                {closingNote.linkLabel}
                <ArrowRight className="h-4 w-4 text-[#d4b26a]" />
              </Link>
            )}
          </section>
        )}
      </section>
      <Footer />
    </main>
  );
}
