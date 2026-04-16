import { useState } from 'react';
import { Instagram, Youtube, Mail, ArrowRight, Check, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerConfig } from '../config';

const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Youtube,
  YouTube: Youtube,
  Mail,
};

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [inputError, setInputError] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@')) {
      setInputError(true);
      return;
    }
    setInputError(false);
    setSubscribed(true);
    window.open('https://www.youtube.com/@Ancientindiantechnology?sub_confirmation=1', '_blank', 'noopener,noreferrer');
  };

  const quickLinks = [
    { label: 'Contact', to: '/contact' },
    { label: 'About This Project', to: '/topic/about-this-project' },
    { label: 'Research Papers', to: '/topic/research-papers' },
    { label: 'Books & Bibliography', to: '/topic/books-and-bibliography' },
    { label: 'Featured Documentaries', to: '/topic/featured-documentaries' },
    { label: 'Contact / Contribute', to: '/topic/contact-contribute' },
  ];

  const topicLinks = [
    { label: 'Metallurgy', to: '/topic/metallurgy' },
    { label: 'Astronomy', to: '/topic/astronomy' },
    { label: 'Urban Planning', to: '/topic/urban-planning' },
    { label: 'Medicine', to: '/topic/medicine' },
    { label: 'Videos', to: '/topic/videos' },
    { label: 'Resources', to: '/topic/resources' },
  ];

  const socialLinks = [
    { label: 'YouTube', iconName: 'YouTube', href: 'https://www.youtube.com/@Ancientindiantechnology' },
    { label: 'Instagram', iconName: 'Instagram', href: 'https://www.instagram.com/ancientindiantechnology/' },
  ];

  return (
    <footer className="w-full bg-[#2b1b17] text-[#f4ead8] border-t border-[#d4b26a]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-14 md:pt-16 pb-8">
        <div className="grid lg:grid-cols-[1.2fr_0.9fr_1.1fr] gap-8 md:gap-10 items-start">
          <div className="max-w-md">
            <Link to="/" className="inline-flex items-center">
              <span className="h-20 w-20 bg-black/20 p-1.5">
                <img src="/logo_ait.jpeg" alt="Ancient Indian Technology logo" className="h-full w-full object-cover object-center" />
              </span>
            </Link>
            <p className="mt-5 text-sm text-[#f4ead8]/80 leading-relaxed whitespace-pre-line">
              {footerConfig.tagline}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = iconMap[social.iconName] || Mail;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="h-10 w-10 border border-[#d4b26a]/35 text-[#f4ead8]/85 hover:bg-[#f4ead8]/10 transition-colors flex items-center justify-center"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="pt-1 grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#d4b26a]/88">Quick Links</p>
              <nav className="mt-4 space-y-2.5">
                {quickLinks.map((link) => (
                  <Link key={link.label} to={link.to} className="inline-flex items-center gap-2 text-sm text-[#f4ead8]/80 hover:text-[#f4ead8] transition-colors">
                    <ArrowRight className="h-3.5 w-3.5 text-[#d4b26a]/90" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[#d4b26a]/88">Topics</p>
              <nav className="mt-4 space-y-2.5">
                {topicLinks.map((link) => (
                  <Link key={link.label} to={link.to} className="inline-flex items-center gap-2 text-sm text-[#f4ead8]/80 hover:text-[#f4ead8] transition-colors">
                    <ArrowRight className="h-3.5 w-3.5 text-[#d4b26a]/90" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="pt-1">
            <p className="text-xs uppercase tracking-[0.14em] text-[#d4b26a]/88">{footerConfig.newsletterLabel}</p>
            <p className="mt-4 font-sans font-semibold text-lg">{footerConfig.newsletterHeadline}</p>
            <p className="mt-2 text-sm text-[#f4ead8]/75 leading-relaxed">{footerConfig.newsletterDescription}</p>
            {subscribed ? (
              <div className="mt-5 flex items-center gap-3 border border-[#d4b26a]/30 bg-[#3a231a] px-4 py-3">
                <span className="h-8 w-8 rounded-full bg-[#d4b26a] text-[#2b1b17] flex items-center justify-center">
                  <Check className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Subscription confirmed</p>
                  <p className="text-xs text-[#f4ead8]/70">You will receive the next digest update.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-5">
                <label htmlFor="footer-email" className="text-xs text-[#f4ead8]/78">
                  Email address
                </label>
                <div className="mt-2 flex overflow-hidden border border-[#d4b26a]/35">
                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setInputError(false);
                    }}
                    placeholder={footerConfig.newsletterPlaceholder}
                    className="flex-1 bg-[#3a231a] px-4 py-3 text-sm text-[#f4ead8] placeholder:text-[#f4ead8]/45 outline-none"
                    aria-invalid={inputError}
                  />
                  <button
                    type="submit"
                    className="px-4 bg-[#d4b26a] text-[#2b1b17] hover:bg-[#c6a055] transition-colors"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                {inputError && <p className="mt-2 text-xs text-[#ffb4b4]">Please enter a valid email address.</p>}
                <p className="mt-2 text-[11px] text-[#f4ead8]/60">{footerConfig.newsletterDisclaimer}</p>
              </form>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-[#d4b26a]/20 pt-5">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {[
              { label: 'Privacy Policy', to: '/topic/privacy-policy' },
              { label: 'Terms of Use', to: '/topic/terms-of-use' },
              { label: 'Accessibility', to: '/topic/accessibility' },
              { label: 'Sitemap', to: '/topic/sitemap' },
            ].map((link) => (
              <Link key={link.label} to={link.to} className="text-xs text-[#f4ead8]/70 hover:text-[#f4ead8] transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#f4ead8]/65">{footerConfig.copyright || `© ${new Date().getFullYear()} Ancient Indian Technology`}</p>
        </div>
      </div>
    </footer>
  );
}
