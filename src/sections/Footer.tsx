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

const CUSTOM_GPT_URL = 'https://chatgpt.com/g/g-69e73277b9b481919eee92ce6dc87dcf-ancient-india-technology-guide';

function ChatGptIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729ZM13.2599 22.4292a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944Zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464ZM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872Zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042 4.4724 4.4724 0 0 1-2.3654 1.9728v-5.676a.7664.7664 0 0 0-.3927-.6813Zm2.0107-3.0231-.142-.0852-4.7782-2.763a.7759.7759 0 0 0-.7854 0L9.4095 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66ZM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805-4.7782 2.7582a.7948.7948 0 0 0-.3927.6813Zm1.0976-2.3654 2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
      />
    </svg>
  );
}

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
    { label: 'Blogs', to: '/blogs' },
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
    { label: 'AIT GPT', iconName: 'ChatGPT', href: CUSTOM_GPT_URL },
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
                    {social.iconName === 'ChatGPT' ? <ChatGptIcon /> : <Icon className="h-5 w-5" />}
                  </a>
                );
              })}
            </div>
            <a
              href={CUSTOM_GPT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 border border-[#d4b26a]/35 bg-[#3a231a]/70 px-4 py-2 text-sm font-semibold text-[#f4ead8] transition-colors hover:bg-[#d4b26a]/15"
            >
              <ChatGptIcon className="h-4 w-4 text-[#d4b26a]" />
              Ask Ancient India Technology GPT
              <ArrowRight className="h-3.5 w-3.5 text-[#d4b26a]/90" />
            </a>
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
