import { BookOpen, ScrollText } from 'lucide-react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';
import { ResourceHero } from '../../components/resources/ResourceHero';
import { ResourceImageSupport } from '../../components/resources/ResourceImageSupport';

export function BooksBibliographyPage() {
  return (
    <main className='min-h-screen bg-[#f6f2ea] text-[#2b1b17]'>
      <SubmenuHeaderNav />

      <ResourceHero
        eyebrow='Resources · Knowledge Library'
        title='Books & Bibliography'
        description='A guided reading system combining primary Sanskrit sources, modern scholarship, and practical reading sequences.'
        searchPlaceholder='Search books, authors, or themes...'
      />

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <section className='grid md:grid-cols-2 gap-5'>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h2 className='text-xl font-semibold inline-flex items-center gap-2'><ScrollText className='h-5 w-5 text-[#8d4f36]' /> Primary Sources (Ancient Texts)</h2>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>• Charaka Samhita - medical philosophy and diagnosis.</li>
              <li>• Sushruta Samhita - surgery, instruments, operative methods.</li>
              <li>• Surya Siddhanta - astronomical calculations and time systems.</li>
              <li>• Arthashastra - governance, economy, and technical administration.</li>
            </ul>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h2 className='text-xl font-semibold inline-flex items-center gap-2'><BookOpen className='h-5 w-5 text-[#8d4f36]' /> Secondary Sources (Modern Works)</h2>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>• Histories of Indian science and technology.</li>
              <li>• Archaeometallurgy monographs and excavation reports.</li>
              <li>• Urban archaeology and water-management studies.</li>
              <li>• Scholarly commentaries on Sanskrit technical literature.</li>
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

        <section className='grid md:grid-cols-2 gap-5'>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h4 className='text-lg font-semibold'>Notable Authors</h4>
            <p className='mt-2 text-sm text-[#3a231a]/82'>
              Prioritize authors with philological rigor, transparent citations, and engagement with archaeological evidence.
            </p>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>• Historians of science in South Asia</li>
              <li>• Archaeologists with field-based publications</li>
              <li>• Sanskritists specializing in technical treatises</li>
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
              <li>• Title: How to Build an Academic Bibliography</li>
              <li>Search: <span className='text-[#8d4f36]'>how to build bibliography for research</span></li>
              <li>Why: teaches citation strategy and source selection.</li>
              <li>Placement: mid-page after reading path.</li>
            </ul>
            <div className='mt-3 aspect-video bg-black'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=how%20to%20build%20bibliography%20for%20research' title='Bibliography methodology video' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white p-6'>
            <h3 className='text-lg font-semibold'>Additional Video Suggestions</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>• Academic reading strategies lecture</li>
              <li>Search: <span className='text-[#8d4f36]'>how to read academic books effectively</span></li>
              <li>• History of Indian scientific texts overview</li>
              <li>Search: <span className='text-[#8d4f36]'>history of indian scientific literature lecture</span></li>
              <li>Placement: end of page as next-step learning.</li>
            </ul>
          </article>
        </section>

        <ResourceImageSupport
          promptsText='AI prompts: quiet university library with manuscript facsimiles; close-up of citation cards and old bindings; reading desk with Sanskrit text and modern notebook; archival shelf labels in soft daylight.'
          keywordsText='Search keywords: ancient indian manuscripts library, bibliography desk setup, history of science books india, sanskrit text critical edition, academic reading room, traditional manuscript archive.'
        />
      </section>
      <Footer />
    </main>
  );
}
