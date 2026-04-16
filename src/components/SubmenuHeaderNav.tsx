import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { heroConfig } from '../config';
import { topicPathFromLabel } from '../lib/topicRoutes';

export function SubmenuHeaderNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const toHref = (label: string, href?: string): string => {
    if (label.toLowerCase() === 'home') return '/';
    if (href?.startsWith('/')) return href;
    return topicPathFromLabel(label);
  };

  const getDescription = (description?: string) =>
    description?.trim() || 'Explore this topic in depth with focused content, visuals, and references.';

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-40 px-4 md:px-10 py-2.5">
        <div className="flex items-center justify-between rounded-2xl border border-[#2b1b17]/10 bg-[#f4ead8]/95 px-4 md:px-6 py-2 shadow-[0_8px_26px_rgba(15,10,8,0.12)]">
          <Link
            to="/"
            className="h-20 w-20 md:h-[84px] md:w-[84px] p-1 shrink-0"
            aria-label="Home"
          >
            <img src="/logo_ait.jpeg" alt="Ancient Indian Technology logo" className="h-full w-full object-cover object-center" />
          </Link>

          <div className="hidden lg:flex items-center gap-1 text-[14px] font-body">
            {heroConfig.navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.columns?.length && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={toHref(link.label, link.href)}
                  className={`rounded-lg px-3.5 py-2.5 leading-none transition-all duration-200 ${
                    activeDropdown === link.label
                      ? 'bg-[#d4b26a]/28 text-[#2b1b17]'
                      : 'text-[#1f1612] hover:bg-[#2b1b17]/8 hover:text-[#140d0a]'
                  }`}
                >
                  {link.label}
                </Link>
                {activeDropdown === link.label && link.columns && (
                  <div
                    className={`absolute right-0 top-full mt-2.5 rounded-2xl border border-[#2b1b17]/12 bg-[#f4ead8] p-4 shadow-[0_20px_45px_rgba(15,10,8,0.18)] animate-in fade-in slide-in-from-top-1 duration-200 ${
                      link.columns.length > 1 ? 'w-[460px]' : 'w-[300px]'
                    }`}
                  >
                    <div className={`grid gap-2.5 ${link.columns.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                      {link.columns.flat().map((item) => (
                        <Link
                          key={item.label}
                          to={topicPathFromLabel(item.label)}
                          className="rounded-xl px-3 py-2.5 hover:bg-[#2b1b17]/8 transition-colors duration-200"
                        >
                          <p className="text-[#2b1b17] text-sm font-sans font-semibold leading-tight">{item.label}</p>
                          <p className="mt-1.5 text-xs text-[#2b1b17]/85 font-body leading-relaxed min-h-[32px]">
                            {getDescription(item.description)}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="lg:hidden text-[#2b1b17] p-2.5 rounded-lg hover:bg-[#2b1b17]/8 transition-colors"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-0 right-0 w-[92%] max-w-[420px] h-full bg-[#2b1b17] border-l border-[#d4b26a]/30 flex flex-col shadow-[-14px_0_40px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#d4b26a]/30 shrink-0">
              <div className="h-12 w-12 rounded-full border border-[#d4b26a]/60 p-1">
                <img src="/logo_ait.jpeg" alt="AIT logo" className="h-full w-full rounded-full object-cover object-center" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#f4ead8]/70 hover:text-[#f4ead8] p-1 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {heroConfig.navLinks.map((link) => {
                const hasDropdown = !!link.columns?.length;
                const isExpanded = mobileExpanded === link.label;
                return (
                  <div key={link.label} className="border-b border-[#d4b26a]/25">
                    <div className="flex items-stretch">
                      <Link
                        to={toHref(link.label, link.href)}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex-1 px-6 py-4 hover:bg-[#f4ead8]/10 transition-colors duration-200"
                      >
                        <span className="block text-[#f4ead8]/90 font-body text-[15px] leading-tight">{link.label}</span>
                        {link.subtitle && (
                          <span className="block text-[#d4b26a]/75 text-[10px] font-body mt-0.5 tracking-wide">{link.subtitle}</span>
                        )}
                      </Link>
                      {hasDropdown && (
                        <button
                          onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                          className="px-4 text-[#f4ead8]/70 hover:text-[#f4ead8] hover:bg-[#f4ead8]/10 transition-colors duration-200 shrink-0"
                          aria-label={isExpanded ? 'Collapse' : 'Expand'}
                          aria-expanded={isExpanded}
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>

                    {isExpanded && link.columns && (
                      <div className="bg-[#3a231a] border-t border-[#d4b26a]/25">
                        {link.columns.flat().map((item) => (
                          <Link
                            key={item.label}
                            to={topicPathFromLabel(item.label)}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-start gap-3 px-6 py-3.5 border-b border-[#d4b26a]/20 text-[#f4ead8] hover:bg-[#f4ead8]/10 transition-colors duration-150"
                          >
                            <span className="shrink-0 w-1 h-1 rounded-full bg-[#d4b26a]/70 mt-2" />
                            <span>
                              <span className="block font-body text-[13px] font-semibold leading-snug" style={{ color: 'rgba(244, 234, 216, 0.92)' }}>{item.label}</span>
                              <span className="block font-body text-[11px] mt-1 leading-relaxed" style={{ color: 'rgba(244, 234, 216, 0.78)' }}>
                                {getDescription(item.description)}
                              </span>
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
