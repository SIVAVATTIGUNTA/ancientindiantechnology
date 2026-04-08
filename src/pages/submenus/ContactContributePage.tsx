import { Mail, MessageSquare, Users } from 'lucide-react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';
import { ResourceHero } from '../../components/resources/ResourceHero';
import { ResourceImageSupport } from '../../components/resources/ResourceImageSupport';

export function ContactContributePage() {
  return (
    <main className='min-h-screen bg-[#f6f2ea] text-[#2b1b17]'>
      <SubmenuHeaderNav />

      <ResourceHero
        eyebrow='Resources · Participation Desk'
        title='Contact / Contribute'
        description='Collaborate with the project through corrections, source submissions, peer review support, and educational contributions.'
        searchPlaceholder='Search contribution type, guidelines, or FAQ...'
      />

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <section className='grid md:grid-cols-2 gap-5'>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h2 className='text-xl font-semibold inline-flex items-center gap-2'><Users className='h-5 w-5 text-[#8d4f36]' /> Contribution Guidelines</h2>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>• Submit verifiable sources with publication details.</li>
              <li>• Distinguish between interpretation and factual evidence.</li>
              <li>• Keep academic tone and avoid speculative claims.</li>
              <li>• Provide image/video attribution where applicable.</li>
            </ul>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h2 className='text-xl font-semibold'>Types of Contributions</h2>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>• Citation corrections and bibliography additions</li>
              <li>• Topic-specific content reviews</li>
              <li>• Educational media recommendations</li>
              <li>• Translation and glossary support</li>
            </ul>
          </article>
        </section>

        <section className='grid md:grid-cols-2 gap-5'>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h3 className='text-lg font-semibold inline-flex items-center gap-2'><Mail className='h-4 w-4 text-[#8d4f36]' /> Contact Information</h3>
            <p className='mt-3 text-sm text-[#3a231a]/84'>Use the project email listed in footer for formal submissions and collaboration requests.</p>
            <p className='mt-2 text-sm text-[#3a231a]/84'>Expected response cycle: 5-10 working days for review acknowledgment.</p>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h3 className='text-lg font-semibold'>Submission Process</h3>
            <ol className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>1. Prepare your source packet with links/citations.</li>
              <li>2. Add a brief rationale (why this improves the page).</li>
              <li>3. Submit with topic slug and proposed section placement.</li>
              <li>4. Editorial review and decision note.</li>
            </ol>
          </article>
        </section>

        <section className='border border-[#8d4f36]/20 bg-white p-6'>
          <h3 className='text-xl font-semibold inline-flex items-center gap-2'><MessageSquare className='h-5 w-5 text-[#8d4f36]' /> FAQ (Accordion Style Content)</h3>
          <div className='mt-4 space-y-3 text-sm'>
            {[
              ['Can I submit unpublished material?', 'Only if supported by verifiable institutional or field documentation.'],
              ['Do you accept media-only contributions?', 'Yes, with source traceability, context notes, and suggested placement.'],
              ['How do I report factual errors?', 'Send section URL, claim text, corrective source, and a short explanation.'],
            ].map(([q, a]) => (
              <div key={q} className='border border-[#8d4f36]/15 bg-[#fcfaf6] p-4'>
                <p className='font-semibold'>{q}</p>
                <p className='mt-1 text-[#3a231a]/82'>{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='grid md:grid-cols-2 gap-5'>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h3 className='text-lg font-semibold'>Educational Videos (2-3)</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>• Title: How to Contribute to Open Knowledge Projects</li>
              <li>Search: <span className='text-[#8d4f36]'>how to contribute to open knowledge projects</span></li>
              <li>Why: contributor onboarding and quality standards.</li>
              <li>Placement: mid-page after submission process.</li>
            </ul>
            <div className='mt-3 aspect-video bg-black'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=how%20to%20contribute%20to%20open%20knowledge%20projects' title='Contribution process video' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h3 className='text-lg font-semibold'>Additional Video Suggestions</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>• Peer review basics for contributors</li>
              <li>Search: <span className='text-[#8d4f36]'>peer review process explained for beginners</span></li>
              <li>• Academic citation integrity</li>
              <li>Search: <span className='text-[#8d4f36]'>citation ethics academic writing</span></li>
              <li>Placement: end.</li>
            </ul>
          </article>
        </section>

        <ResourceImageSupport
          promptsText='AI prompts: collaborative academic workspace with source review sheets; neutral contact desk with laptop and manuscript scan; contributor workflow board with checklists; editorial inbox interface in minimal beige palette.'
          keywordsText='Search keywords: academic collaboration workspace, research submission process, editorial review meeting, citation checking desk, scholarly communication platform, knowledge project contributors.'
        />
      </section>
      <Footer />
    </main>
  );
}
