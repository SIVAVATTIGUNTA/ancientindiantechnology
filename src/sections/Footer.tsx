import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, Twitter, Linkedin, Mail, ArrowRight, Check, type LucideIcon } from 'lucide-react';
import { footerConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
};

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [inputError, setInputError] = useState(false);

  if (!footerConfig.logoText && footerConfig.aboutLinks.length === 0) return null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: logoRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(
            logoRef.current,
            { y: 80, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
          );
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 88%',
        onEnter: () => {
          gsap.fromTo(
            contentRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
          );
        },
        once: true,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@')) {
      setInputError(true);
      return;
    }
    setInputError(false);
    setSubscribed(true);
  };

  return (
    <footer
      ref={footerRef}
      id="videos"
      className="relative w-full bg-white pt-24 md:pt-32 pb-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Massive logo ─────────────────────────────────────────── */}
        {footerConfig.logoText && (
          <div ref={logoRef} className="opacity-0 mb-16 md:mb-24">
            <svg
              viewBox="0 0 600 100"
              className="w-full h-auto max-h-[22vh]"
              preserveAspectRatio="xMidYMid meet"
              aria-label={footerConfig.logoText}
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="#1a1a1a"
                style={{ fontSize: '90px', fontFamily: 'Manrope, sans-serif', fontWeight: 800, letterSpacing: '-0.03em' }}
              >
                {footerConfig.logoText}
              </text>
            </svg>
            {footerConfig.tagline && (
              <p className="text-center text-softblack/40 font-body text-sm mt-4 whitespace-pre-line leading-relaxed">
                {footerConfig.tagline}
              </p>
            )}
          </div>
        )}

        {/* ── Three-column body ─────────────────────────────────────── */}
        <div ref={contentRef} className="opacity-0">
          <div className="grid md:grid-cols-3 gap-12 md:gap-10 lg:gap-16 mb-16 md:mb-20">

            {/* ── Col 1: About ── */}
            <div>
              {footerConfig.aboutLabel && (
                <p className="text-softblack/40 text-xs font-body uppercase tracking-[0.12em] mb-5">
                  {footerConfig.aboutLabel}
                </p>
              )}
              <nav aria-label="Footer — About" className="space-y-1">
                {footerConfig.aboutLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-2 py-1.5 text-softblack/70 hover:text-softblack font-body text-[15px] transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 shrink-0">
                      <ArrowRight className="w-3 h-3 shrink-0" strokeWidth={2} />
                    </span>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* ── Col 2: Connect ── */}
            <div>
              {footerConfig.connectLabel && (
                <p className="text-softblack/40 text-xs font-body uppercase tracking-[0.12em] mb-5">
                  {footerConfig.connectLabel}
                </p>
              )}
              <nav aria-label="Footer — Connect" className="space-y-1">
                {footerConfig.connectLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-2 py-1.5 text-softblack/70 hover:text-softblack font-body text-[15px] transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 shrink-0">
                      <ArrowRight className="w-3 h-3 shrink-0" strokeWidth={2} />
                    </span>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* ── Col 3: Newsletter ── */}
            <div>
              {footerConfig.newsletterLabel && (
                <p className="text-softblack/40 text-xs font-body uppercase tracking-[0.12em] mb-5">
                  {footerConfig.newsletterLabel}
                </p>
              )}

              {footerConfig.newsletterHeadline && (
                <p className="font-sans font-semibold text-softblack text-lg mb-2">
                  {footerConfig.newsletterHeadline}
                </p>
              )}
              {footerConfig.newsletterDescription && (
                <p className="font-body text-softblack/55 text-sm leading-relaxed mb-6">
                  {footerConfig.newsletterDescription}
                </p>
              )}

              {subscribed ? (
                /* Success state */
                <div className="flex items-center gap-3 p-4 rounded-lg bg-forest-dark/5 border border-forest-dark/10">
                  <div className="w-8 h-8 rounded-full bg-forest-dark flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-softblack text-sm">You're subscribed</p>
                    <p className="font-body text-softblack/50 text-xs mt-0.5">
                      Welcome to the Research Digest.
                    </p>
                  </div>
                </div>
              ) : (
                /* Signup form */
                <form onSubmit={handleSubscribe} noValidate>
                  <label htmlFor="footer-email" className="block font-body text-softblack/60 text-xs mb-2">
                    Email address
                  </label>
                  <div className="flex items-stretch gap-0 rounded-lg overflow-hidden border border-softblack/15 focus-within:border-softblack/40 transition-colors duration-200">
                    <input
                      id="footer-email"
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setInputError(false); }}
                      placeholder={footerConfig.newsletterPlaceholder}
                      className="flex-1 px-4 py-3 font-body text-sm text-softblack placeholder-softblack/30 bg-transparent outline-none"
                      aria-describedby="footer-email-hint"
                      aria-invalid={inputError}
                    />
                    <button
                      type="submit"
                      className="px-4 py-3 bg-forest-dark text-white hover:bg-forest-mid transition-colors duration-200 shrink-0"
                      aria-label="Subscribe"
                    >
                      <ArrowRight className="w-4 h-4" strokeWidth={2} />
                    </button>
                  </div>
                  {inputError && (
                    <p className="mt-2 text-red-500 font-body text-xs">Please enter a valid email address.</p>
                  )}
                  {footerConfig.newsletterDisclaimer && (
                    <p id="footer-email-hint" className="mt-2.5 font-body text-softblack/35 text-xs">
                      {footerConfig.newsletterDisclaimer}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>

          {/* ── Divider ──────────────────────────────────────────────── */}
          <div className="h-px bg-gradient-to-r from-transparent via-softblack/10 to-transparent mb-6" />

          {/* ── Legal strip ──────────────────────────────────────────── */}
          {footerConfig.bottomLinks.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6">
              {footerConfig.bottomLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-softblack/35 text-xs hover:text-softblack/60 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* ── Bottom bar: copyright + social ───────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-softblack/35 font-body text-xs text-center sm:text-left">
              {footerConfig.copyright || `© ${new Date().getFullYear()} All rights reserved.`}
            </p>

            {footerConfig.socialLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {footerConfig.socialLinks.map((social) => {
                  const Icon = iconMap[social.iconName] || Mail;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-8 h-8 rounded-full bg-offwhite flex items-center justify-center text-softblack/50 hover:bg-forest-dark hover:text-white transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-offwhite/60 to-transparent pointer-events-none" />
    </footer>
  );
}
