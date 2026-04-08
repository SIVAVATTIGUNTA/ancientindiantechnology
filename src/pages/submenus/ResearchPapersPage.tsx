import { FileText, FlaskConical, GraduationCap } from 'lucide-react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';
import { ResourceHero } from '../../components/resources/ResourceHero';
import { ResourceImageSupport } from '../../components/resources/ResourceImageSupport';

export function ResearchPapersPage() {
  return (
    <main className='min-h-screen bg-[#f6f2ea] text-[#2b1b17]'>
      <SubmenuHeaderNav />

      <ResourceHero
        eyebrow='Resources · Academic Index'
        title='Research Papers'
        description='Curated academic references on ancient Indian technology with thematic indexing, methodology notes, and modern-science relevance.'
        searchPlaceholder='Search topics: wootz, jantar mantar, sanitation, sushruta...'
      />

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <section className='grid md:grid-cols-3 gap-4'>
          {[
            ['Introduction to Research Area', 'This portal tracks historical technology through peer-reviewed archaeology, materials science, textual criticism, and science history.'],
            ['Key Research Themes', 'Metallurgy, astronomy, medicine, urban engineering, and manuscript-based knowledge transmission.'],
            ['Importance in Modern Science', 'Links ancient techniques to corrosion science, hydrology, instrumentation design, and medical ethics.'],
          ].map(([title, body], i) => (
            <article key={title} className='border border-[#8d4f36]/20 bg-white p-5 transition-all duration-300 hover:-translate-y-1'>
              {i === 0 ? <FileText className='h-5 w-5 text-[#8d4f36]' /> : i === 1 ? <FlaskConical className='h-5 w-5 text-[#8d4f36]' /> : <GraduationCap className='h-5 w-5 text-[#8d4f36]' />}
              <h2 className='mt-2 text-lg font-semibold'>{title}</h2>
              <p className='mt-2 text-sm text-[#3a231a]/82'>{body}</p>
            </article>
          ))}
        </section>

        <section className='border border-[#8d4f36]/20 bg-white p-6'>
          <h3 className='text-2xl font-semibold'>Featured Papers (List Format)</h3>
          <div className='mt-4 space-y-3 text-sm'>
            {[
              'High-phosphorus passive film formation and Delhi Iron Pillar corrosion resistance.',
              'Archaeometallurgical reconstruction studies on Indian crucible steel (Wootz).',
              'Zawar zinc distillation retort analysis and proto-industrial process modeling.',
              'Urban drainage gradients in Indus settlements based on GIS and site plans.',
              'Instrument precision and observational design in Jantar Mantar complexes.',
            ].map((paper) => (
              <div key={paper} className='border border-[#8d4f36]/15 bg-[#fcfaf6] p-3'>
                {paper}
              </div>
            ))}
          </div>
        </section>

        <section className='grid md:grid-cols-2 gap-5'>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h4 className='text-lg font-semibold'>Methodologies Used</h4>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>• Metallographic microscopy and compositional analysis</li>
              <li>• Archaeological context mapping and site stratigraphy</li>
              <li>• Epigraphy and philological reading of Sanskrit/Pali sources</li>
              <li>• Experimental archaeology and process replication</li>
            </ul>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h4 className='text-lg font-semibold'>Further Reading</h4>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>• Indian Journal of History of Science</li>
              <li>• Journal of Archaeological Science</li>
              <li>• Current Science thematic issues on heritage technology</li>
              <li>• Proceedings from archaeometallurgy conferences</li>
            </ul>
          </article>
        </section>

        <section className='grid md:grid-cols-2 gap-5'>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h3 className='text-lg font-semibold'>Educational Videos</h3>
            <p className='mt-2 text-sm text-[#3a231a]/80'>Placement: mid section for methodology orientation.</p>
            <div className='mt-3 aspect-video bg-black'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=research%20methodology%20for%20history%20of%20science' title='Research methodology lecture' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h3 className='text-lg font-semibold'>Video 2 and 3 (Suggested at end)</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>• Title: Archaeometallurgy and Ancient Innovation</li>
              <li>Search: <span className='text-[#8d4f36]'>archaeometallurgy lecture ancient india</span></li>
              <li>Why: bridges field methods and metallurgy case studies.</li>
              <li>• Title: How to Read a Research Paper in Humanities</li>
              <li>Search: <span className='text-[#8d4f36]'>how to read research paper history</span></li>
              <li>Why: improves evidence literacy for non-academic readers.</li>
            </ul>
          </article>
        </section>

        <ResourceImageSupport
          promptsText='AI prompts: archival desk with manuscripts and citation cards; university library shelf with history-of-science books; close-up of annotated research paper and index tabs; archaeological field notebook beside artifact sketches.'
          keywordsText='Search keywords: ancient india research papers, archaeometallurgy journal article, history of science library, manuscript studies india, indus valley academic publication, Delhi iron pillar research.'
        />
      </section>
      <Footer />
    </main>
  );
}
