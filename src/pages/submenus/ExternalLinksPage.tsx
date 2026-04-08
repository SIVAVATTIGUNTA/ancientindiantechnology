import { ExternalLink, ShieldCheck } from 'lucide-react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';
import { ResourceHero } from '../../components/resources/ResourceHero';
import { ResourceImageSupport } from '../../components/resources/ResourceImageSupport';

export function ExternalLinksPage() {
  return (
    <main className='min-h-screen bg-[#f6f2ea] text-[#2b1b17]'>
      <SubmenuHeaderNav />

      <ResourceHero
        eyebrow='Resources · Verified Directory'
        title='External Links'
        description='Curated gateways to museums, digital archives, and educational institutions for reliable cross-verification.'
        searchPlaceholder='Search institutions, archive type, or topic...'
      />

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <section className='border border-[#8d4f36]/20 bg-white p-6'>
          <h2 className='text-xl font-semibold'>How to Use These Links</h2>
          <ul className='mt-3 grid md:grid-cols-3 gap-3 text-sm text-[#3a231a]/84'>
            <li className='border border-[#8d4f36]/15 bg-[#fcfaf6] p-3'>Check author/institution credibility.</li>
            <li className='border border-[#8d4f36]/15 bg-[#fcfaf6] p-3'>Cross-verify claims across at least two sources.</li>
            <li className='border border-[#8d4f36]/15 bg-[#fcfaf6] p-3'>Prefer archived and citable material.</li>
          </ul>
        </section>

        <section className='grid md:grid-cols-2 gap-5'>
          {[
            ['Museums & Institutions', 'National Museum portals, ASI pages, science museums, heritage conservation institutions.'],
            ['Digital Archives', 'Open manuscript repositories, excavation report libraries, university digital catalogues.'],
            ['Educational Platforms', 'University lecture portals, reputable MOOC content, public humanities channels.'],
            ['Verified Resources', 'Peer-reviewed journals, institutional blogs with citations, conference proceedings.'],
          ].map(([title, body]) => (
            <article key={title} className='border border-[#8d4f36]/20 bg-white p-6 transition-all duration-300 hover:-translate-y-1'>
              <p className='inline-flex items-center gap-2 text-[#8d4f36] text-xs uppercase tracking-[0.12em]'><ExternalLink className='h-3.5 w-3.5' /> Link Set</p>
              <h3 className='mt-2 text-lg font-semibold'>{title}</h3>
              <p className='mt-2 text-sm text-[#3a231a]/82'>{body}</p>
            </article>
          ))}
        </section>

        <section className='border border-[#8d4f36]/20 bg-white p-6'>
          <h3 className='text-xl font-semibold inline-flex items-center gap-2'><ShieldCheck className='h-5 w-5 text-[#8d4f36]' /> Link Verification Checklist</h3>
          <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
            <li>• Is the source institutional or peer-reviewed?</li>
            <li>• Are dates, references, and archival IDs clearly mentioned?</li>
            <li>• Does the content separate evidence from interpretation?</li>
            <li>• Are images and diagrams traceable to primary repositories?</li>
          </ul>
        </section>

        <section className='grid md:grid-cols-2 gap-5'>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h3 className='text-lg font-semibold'>Educational Videos</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>• Title: Evaluating Online Historical Sources</li>
              <li>Search: <span className='text-[#8d4f36]'>how to evaluate historical websites</span></li>
              <li>Why: improves research reliability and citation quality.</li>
              <li>Placement: mid-page after verification section.</li>
            </ul>
            <div className='mt-3 aspect-video bg-black'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=how%20to%20evaluate%20historical%20websites' title='Evaluating sources video' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h3 className='text-lg font-semibold'>Additional Video Suggestions</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>• Museums and digital heritage archives overview</li>
              <li>Search: <span className='text-[#8d4f36]'>digital heritage archives explained</span></li>
              <li>• Open-access academic databases tutorial</li>
              <li>Search: <span className='text-[#8d4f36]'>using open access academic databases</span></li>
              <li>Placement: end section.</li>
            </ul>
          </article>
        </section>

        <ResourceImageSupport
          promptsText='AI prompts: institutional museum website dashboard on a study desk; archive terminal with manuscript thumbnails; scholarly portal with metadata tags; library card catalog and notebook in soft daylight.'
          keywordsText='Search keywords: indian museum digital archive, archaeological survey india resources, manuscript digital library india, open heritage database, research institution portal india, history education archive.'
        />
      </section>
      <Footer />
    </main>
  );
}
