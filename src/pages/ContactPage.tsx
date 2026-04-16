import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock3, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import { Footer } from '../sections/Footer';
import { SubmenuHeaderNav } from '../components/SubmenuHeaderNav';
import { ResourceHero } from '../components/resources/ResourceHero';
import { ResourceRelatedSection } from '../components/resources/ResourceRelatedSection';

const CONTACT_EMAIL = 'contact@ancientindiatechnology.com';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`AIT website - message from ${name || 'visitor'}`);
    const body = encodeURIComponent(`${message}\n\n---\nFrom: ${name || '(not provided)'}\nReply-to: ${email || '(not provided)'}\nPhone: ${phone || '(not provided)'}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#f6f2ea] text-[#2b1b17]">
      <SubmenuHeaderNav />

      <ResourceHero
        eyebrow="Get in touch"
        title="Contact"
        description="Reach the Ancient Indian Technology project for general inquiries, media requests, or partnership ideas. For research submissions and editorial contributions, use the dedicated contribution desk."
        heroImage="/hero-metallurgy.png"
        heroImageAlt="Ancient Indian technology contact and collaboration desk"
      />

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14">
          <div className="space-y-6">
            <article className="border border-[#8d4f36]/20 bg-white p-6 md:p-7">
              <h2 className="text-lg font-sans font-semibold inline-flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#8d4f36]" aria-hidden />
                Email
              </h2>
              <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
                Prefer email for longer messages or attachments. We aim to respond within a few working days.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-4 inline-block text-[#8d4f36] font-semibold text-sm border-b border-[#8d4f36]/40 hover:border-[#8d4f36] transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </article>

            <article className="border border-[#8d4f36]/20 bg-white p-6 md:p-7">
              <h2 className="text-lg font-sans font-semibold inline-flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-[#8d4f36]" aria-hidden />
                Contribute
              </h2>
              <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
                Citations, corrections, and topic proposals go through the contribution guidelines and review flow.
              </p>
              <Link
                to="/topic/contact-contribute"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8d4f36] border-b border-[#8d4f36]/40 hover:border-[#8d4f36] transition-colors"
              >
                Contact / Contribute desk
              </Link>
            </article>

            <article className="border border-[#8d4f36]/20 bg-white p-6 md:p-7">
              <h2 className="text-lg font-sans font-semibold inline-flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#8d4f36]" aria-hidden />
                Social
              </h2>
              <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">Follow updates and new releases on our channels.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.youtube.com/@Ancientindiantechnology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8d4f36] font-medium hover:underline"
                  >
                    YouTube - @Ancientindiantechnology
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/ancientindiantechnology/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8d4f36] font-medium hover:underline"
                  >
                    Instagram - @ancientindiantechnology
                  </a>
                </li>
              </ul>
            </article>

            <article className="border border-[#8d4f36]/20 bg-white p-6 md:p-7">
              <h2 className="text-lg font-sans font-semibold inline-flex items-center gap-2">
                <Clock3 className="h-5 w-5 text-[#8d4f36]" aria-hidden />
                Response Guide
              </h2>
              <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
                Short questions are easiest by email. Research corrections should include the page URL, claim text, and source link so the team can review quickly.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-[#3a231a]/78">
                <div className="border border-[#8d4f36]/15 bg-[#fcfaf6] p-3">General inquiry: 2-4 working days</div>
                <div className="border border-[#8d4f36]/15 bg-[#fcfaf6] p-3">Research review: 5-10 working days</div>
              </div>
            </article>
          </div>

          <div className="border border-[#8d4f36]/20 bg-white p-6 md:p-8">
            <h2 className="text-xl font-sans font-semibold">Send a message</h2>
            <p className="mt-2 text-sm text-[#3a231a]/80">
              Opens your email app with your text filled in. No data is stored on this page.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium uppercase tracking-wide text-[#8d4f36]/90">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  className="mt-1.5 w-full border border-[#8d4f36]/25 bg-[#fcfaf6] px-4 py-3 text-sm outline-none focus:border-[#8d4f36]/55"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium uppercase tracking-wide text-[#8d4f36]/90">
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  className="mt-1.5 w-full border border-[#8d4f36]/25 bg-[#fcfaf6] px-4 py-3 text-sm outline-none focus:border-[#8d4f36]/55"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-xs font-medium uppercase tracking-wide text-[#8d4f36]/90">
                  Phone number
                </label>
                <div className="mt-1.5 flex items-center border border-[#8d4f36]/25 bg-[#fcfaf6] px-4 focus-within:border-[#8d4f36]/55">
                  <Phone className="h-4 w-4 text-[#8d4f36]" aria-hidden />
                  <input
                    id="contact-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    placeholder="Optional, for callback requests"
                    className="w-full bg-transparent px-3 py-3 text-sm outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium uppercase tracking-wide text-[#8d4f36]/90">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="mt-1.5 w-full border border-[#8d4f36]/25 bg-[#fcfaf6] px-4 py-3 text-sm outline-none focus:border-[#8d4f36]/55 resize-y min-h-[140px]"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#8d4f36] px-6 py-3.5 text-sm font-sans font-semibold text-white hover:bg-[#7a4430] transition-colors"
              >
                <Send className="h-4 w-4" aria-hidden />
                Open in email
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10">
          <ResourceRelatedSection
            eyebrow="Contact Help"
            title="What to Include in Your Message"
            description="Clear context helps the team route your note correctly, especially when you are reporting a correction, suggesting a source, or proposing collaboration."
            cards={[
              {
                label: 'General',
                title: 'Questions and media requests',
                body: 'Mention the topic, deadline if any, and the kind of response you need: interview, clarification, permission, or partnership note.',
              },
              {
                label: 'Research',
                title: 'Corrections and sources',
                body: 'Include the page URL, the exact claim, your correction, and a reliable source link or publication reference.',
              },
              {
                label: 'Collaboration',
                title: 'Contributor proposals',
                body: 'Share your area of expertise, sample references, and whether you want to review, write, translate, or suggest media.',
              },
            ]}
            checklist={[
              'Name and preferred reply email.',
              'Phone number if a callback is useful.',
              'Topic page or section you are referring to.',
              'Links, citations, or attachments you want reviewed.',
            ]}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
