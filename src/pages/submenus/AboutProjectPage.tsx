import { CheckCircle2, Target } from 'lucide-react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';
import { ResourceHero } from '../../components/resources/ResourceHero';
import { ResourceImageSupport } from '../../components/resources/ResourceImageSupport';
import { ResourceRelatedSection } from '../../components/resources/ResourceRelatedSection';

export function AboutProjectPage() {
  return (
    <main className='min-h-screen bg-[#f6f2ea] text-[#2b1b17]'>
      <SubmenuHeaderNav />

      <ResourceHero
        eyebrow='Resources - Project Documentation'
        title='About This Project'
        description='An academic-style platform preserving evidence-based narratives of ancient Indian technology through cross-disciplinary research.'
        searchPlaceholder='Search mission, editorial policy, contributors...'
        heroImage='/hero-metallurgy.png'
        heroImageAlt='Ancient Indian technology project documentation and research context'
      />

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <section className='grid md:grid-cols-2 gap-5'>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h2 className='text-xl font-semibold inline-flex items-center gap-2'><Target className='h-5 w-5 text-[#8d4f36]' /> Vision & Mission</h2>
            <p className='mt-2 text-sm text-[#3a231a]/82'>
              Build an accessible but academically grounded knowledge hub on Indian scientific, technical, and engineering heritage.
            </p>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h2 className='text-xl font-semibold'>Why This Project Exists</h2>
            <p className='mt-2 text-sm text-[#3a231a]/82'>
              To replace fragmented, non-cited narratives with structured, source-backed educational resources for students and researchers.
            </p>
          </article>
        </section>

        <section className='grid md:grid-cols-3 gap-4'>
          {[
            'Editorial Principles: transparent sourcing, cautious claims, citation-first writing.',
            'Research Approach: triangulate archaeology, texts, and scientific analysis.',
            'Contributors: historians, domain researchers, educators, and reviewers.',
          ].map((line) => (
            <article key={line} className='border border-[#8d4f36]/20 bg-white p-5 text-sm text-[#3a231a]/84'>
              <CheckCircle2 className='h-4 w-4 text-[#8d4f36]' />
              <p className='mt-2'>{line}</p>
            </article>
          ))}
        </section>

        <ResourceRelatedSection
          title='How the Project Organizes Knowledge'
          description='The platform is designed to make complex heritage topics readable without flattening the evidence. Each page should show what is known, what is debated, and how visitors can continue learning.'
          cards={[
            {
              label: 'Content',
              title: 'Evidence-backed pages',
              body: 'Topic pages combine historical background, visual explanation, careful claims, and related media so readers can learn without chasing scattered notes.',
            },
            {
              label: 'Review',
              title: 'Correction-friendly workflow',
              body: 'The project expects updates. Corrections, better sources, and improved images can be routed through the contribution desk.',
            },
            {
              label: 'Audience',
              title: 'Built for learners',
              body: 'Students, teachers, and general readers should all find a clear path from overview to deeper research resources.',
            },
          ]}
          checklist={[
            'Understanding the purpose of the website.',
            'Seeing how topic pages should be evaluated.',
            'Learning where corrections and suggestions belong.',
            'Explaining the project to collaborators or educators.',
          ]}
        />

        <section className='border border-[#8d4f36]/20 bg-white p-6'>
          <h3 className='text-xl font-semibold'>Future Goals</h3>
          <ul className='mt-3 grid md:grid-cols-2 gap-3 text-sm text-[#3a231a]/84'>
            <li className='border border-[#8d4f36]/15 bg-[#fcfaf6] p-3'>Build citation-linked timelines for each topic stream.</li>
            <li className='border border-[#8d4f36]/15 bg-[#fcfaf6] p-3'>Add multilingual abstracts and glossary support.</li>
            <li className='border border-[#8d4f36]/15 bg-[#fcfaf6] p-3'>Create research pathway maps for students and teachers.</li>
            <li className='border border-[#8d4f36]/15 bg-[#fcfaf6] p-3'>Publish periodic editorial updates and corrections.</li>
          </ul>
        </section>

        <section className='grid md:grid-cols-2 gap-5'>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h3 className='text-lg font-semibold'>Educational Videos</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Title: Building Trustworthy Public History Platforms</li>
              <li>Search: <span className='text-[#8d4f36]'>public history digital project methodology</span></li>
              <li>Why: aligns with editorial and platform credibility goals.</li>
              <li>Placement: mid-page after editorial principles.</li>
            </ul>
            <div className='mt-3 aspect-video bg-black'>
              <iframe data-skip-global-embed='true' src='https://www.youtube.com/embed?listType=search&list=public%20history%20digital%20project%20methodology' title='Project methodology video' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h3 className='text-lg font-semibold'>Additional Suggestions</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Editorial workflows for digital humanities projects</li>
              <li>Search: <span className='text-[#8d4f36]'>digital humanities editorial workflow</span></li>
              <li>- Research communication best practices</li>
              <li>Search: <span className='text-[#8d4f36]'>research communication for public audience</span></li>
              <li>Placement: end.</li>
            </ul>
          </article>
        </section>

        <ResourceImageSupport
          notes={[
            'Use images that communicate research collaboration: review boards, archive desks, editorial notes, source packets, and project planning.',
            'The visual tone should feel scholarly, calm, and transparent rather than promotional or overly cinematic.',
          ]}
          terms={['project mission', 'editorial workflow', 'research review', 'contributors', 'knowledge platform', 'public history']}
        />
      </section>
      <Footer />
    </main>
  );
}
