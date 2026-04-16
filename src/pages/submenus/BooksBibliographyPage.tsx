import { BookOpen, ScrollText } from 'lucide-react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';
import { ResourceHero } from '../../components/resources/ResourceHero';
import { ResourceImageSupport } from '../../components/resources/ResourceImageSupport';
import { ResourceRelatedSection } from '../../components/resources/ResourceRelatedSection';

export function BooksBibliographyPage() {
  return (
    <main className='min-h-screen bg-[#f6f2ea] text-[#2b1b17]'>
      <SubmenuHeaderNav />

      <ResourceHero
        eyebrow='Resources - Knowledge Library'
        title='Books & Bibliography'
        description='A guided reading system combining primary Sanskrit sources, modern scholarship, and practical reading sequences.'
        searchPlaceholder='Search books, authors, or themes...'
        heroImage='/medicine-ayurveda.jpg'
        heroImageAlt='Manuscripts and study materials for ancient Indian scientific bibliography'
      />

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <section className='grid md:grid-cols-2 gap-5'>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h2 className='text-xl font-semibold inline-flex items-center gap-2'><ScrollText className='h-5 w-5 text-[#8d4f36]' /> Primary Sources (Ancient Texts)</h2>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Charaka Samhita - medical philosophy and diagnosis.</li>
              <li>- Sushruta Samhita - surgery, instruments, operative methods.</li>
              <li>- Surya Siddhanta - astronomical calculations and time systems.</li>
              <li>- Arthashastra - governance, economy, and technical administration.</li>
            </ul>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h2 className='text-xl font-semibold inline-flex items-center gap-2'><BookOpen className='h-5 w-5 text-[#8d4f36]' /> Secondary Sources (Modern Works)</h2>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Histories of Indian science and technology.</li>
              <li>- Archaeometallurgy monographs and excavation reports.</li>
              <li>- Urban archaeology and water-management studies.</li>
              <li>- Scholarly commentaries on Sanskrit technical literature.</li>
            </ul>
          </article>
        </section>

        <section className='border border-[#8d4f36]/20 bg-white p-6'>
          <h3 className='text-2xl font-semibold'>Recommended Reading Path</h3>
          <div className='mt-4 grid md:grid-cols-4 gap-3 text-sm'>
            {['Begin with overviews', 'Read one primary text', 'Pair with modern analysis', 'Track bibliography notes'].map((step) => (
              <div key={step} className='border border-[#8d4f36]/15 bg-[#fcfaf6] p-3'>
                {step}
              </div>
            ))}
          </div>
        </section>

        <ResourceRelatedSection
          title='Build a Balanced Bibliography'
          description='A strong reading list should not depend on one type of source. Pair primary texts with critical editions, modern scholarship, archaeology, and topic-specific technical studies.'
          cards={[
            {
              label: 'Primary',
              title: 'Read the text carefully',
              body: 'Use translations and commentaries to understand terminology, genre, and the difference between technical instruction and literary framing.',
            },
            {
              label: 'Secondary',
              title: 'Add scholarly interpretation',
              body: 'Modern books and papers explain chronology, manuscript history, excavation context, and where expert disagreement exists.',
            },
            {
              label: 'Practical',
              title: 'Track notes by topic',
              body: 'Keep separate notes for metallurgy, medicine, astronomy, urban planning, and advanced-technology narratives to avoid mixing evidence types.',
            },
          ]}
          checklist={[
            'Designing a student reading list.',
            'Choosing reliable books before deeper research.',
            'Pairing ancient texts with modern analysis.',
            'Avoiding selective or out-of-context quotations.',
          ]}
        />

        <section className='grid md:grid-cols-2 gap-5'>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h4 className='text-lg font-semibold'>Notable Authors</h4>
            <p className='mt-2 text-sm text-[#3a231a]/82'>
              Prioritize authors with philological rigor, transparent citations, and engagement with archaeological evidence.
            </p>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Historians of science in South Asia</li>
              <li>- Archaeologists with field-based publications</li>
              <li>- Sanskritists specializing in technical treatises</li>
            </ul>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h4 className='text-lg font-semibold'>Summary</h4>
            <p className='mt-2 text-sm text-[#3a231a]/82'>
              A balanced bibliography should include translations, critical editions, and peer-reviewed interpretations to avoid selective reading.
            </p>
          </article>
        </section>

        <section className='grid md:grid-cols-2 gap-5'>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h3 className='text-lg font-semibold'>Educational Videos (2-3)</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Title: How to Build an Academic Bibliography</li>
              <li>Search: <span className='text-[#8d4f36]'>how to build bibliography for research</span></li>
              <li>Why: teaches citation strategy and source selection.</li>
              <li>Placement: mid-page after reading path.</li>
            </ul>
            <div className='mt-3 aspect-video bg-black'>
              <iframe data-skip-global-embed='true' src='https://www.youtube.com/embed?listType=search&list=how%20to%20build%20bibliography%20for%20research' title='Bibliography methodology video' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h3 className='text-lg font-semibold'>Additional Video Suggestions</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Academic reading strategies lecture</li>
              <li>Search: <span className='text-[#8d4f36]'>how to read academic books effectively</span></li>
              <li>- History of Indian scientific texts overview</li>
              <li>Search: <span className='text-[#8d4f36]'>history of indian scientific literature lecture</span></li>
              <li>Placement: end of page as next-step learning.</li>
            </ul>
          </article>
        </section>

        <ResourceImageSupport
          notes={[
            'Use library, manuscript, book-stack, and reading-desk imagery that supports the bibliography theme.',
            'Images should make source comparison visible: old text, modern notes, citation cards, and archival context together.',
          ]}
          terms={['bibliography', 'primary texts', 'critical editions', 'manuscripts', 'reading path', 'source notes']}
        />
      </section>
      <Footer />
    </main>
  );
}
