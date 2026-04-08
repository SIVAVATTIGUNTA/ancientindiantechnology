import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function StepwellsPage() {
  useEffect(() => {
    document.title = 'Stepwells India - Underground Water Architecture';
  }, []);

  return (
    <main className='min-h-screen bg-[#f4ead8] text-[#2b1b17]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[52vh] min-h-[340px]'><img src='/stepwell.jpg' alt='Stepwells underground water architecture' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#2b1b17]/82 via-[#2b1b17]/55 to-[#2b1b17]/75' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]'>Architecture Showcase</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]'>Stepwells - India&apos;s Underground Water Architecture</h1>
            <p className='mt-3 text-[#f4ead8]/90'>Visual-first heritage engineering: geometry, cooling, and community design.</p>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <section className='columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]'>
          {[
            { src: '/stepwell.jpg', alt: 'Rani ki Vav style stepped geometry' },
            { src: '/urban-planning.jpg', alt: 'Adalaj-inspired carved stepwell court' },
            { src: '/stepwell.jpg', alt: 'Chand Baori depth and repeating staircase' },
            { src: '/sun-temple.jpg', alt: 'Architectural symmetry and shadow lines' },
            { src: '/lothal-dockyard.jpg', alt: 'Historic water architecture context frame' },
            { src: '/stepwell.jpg', alt: 'Community and ritual use atmosphere' },
          ].map((item) => (
            <figure key={item.alt} className='mb-4 break-inside-avoid border border-[#8d4f36]/20 bg-[#f8f0e3] p-2 group'>
              <img src={item.src} alt={item.alt} className='w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.03]' loading='lazy' />
              <figcaption className='p-2 text-sm text-[#3a231a]/82'>{item.alt}</figcaption>
            </figure>
          ))}
        </section>

        <section className='grid md:grid-cols-2 gap-6'>
          <article className='bg-[#f8f0e3] border border-[#8d4f36]/20 p-6'>
            <h3 className='text-xl font-semibold'>Architecture Details</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Symmetry-driven descending geometry for water access at seasonal depths.</li>
              <li>- Repetitive steps and landings improving circulation and thermal comfort.</li>
              <li>- Passive cooling through subterranean stone mass and airflow channels.</li>
            </ul>
          </article>
          <article className='bg-[#f8f0e3] border border-[#8d4f36]/20 p-6'>
            <h3 className='text-xl font-semibold'>Cultural Significance</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Ritual and spiritual water engagement.</li>
              <li>- Social gathering points and civic identity markers.</li>
              <li>- Heritage expressions of engineering and artistry.</li>
            </ul>
          </article>
        </section>

        <section className='bg-[#f8f0e3] border border-[#8d4f36]/20 p-6'>
          <h3 className='text-lg font-semibold'>Video: Stepwells India Architecture Documentary</h3>
          <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=stepwells%20india%20architecture%20documentary' title='Stepwells India Architecture Documentary' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='bg-[#f8f0e3] border border-[#8d4f36]/20 p-6'>
          <h3 className='text-xl font-semibold'>Content & Media Notes</h3>
          <div className='mt-4 grid lg:grid-cols-2 gap-6 text-sm'>
            <div>
              <p className='font-semibold text-[#8d4f36]'>What This Section Must Show</p>
              <ul className='mt-2 space-y-2 text-[#3a231a]/84'>
                <li>- Visual depth, symmetry, and repeated stair geometry.</li>
                <li>- Cooling and water-access logic across seasonal levels.</li>
                <li>- Relationship between architecture, ritual, and community life.</li>
              </ul>
              <p className='mt-4 font-semibold text-[#8d4f36]'>Design Direction</p>
              <p className='mt-2 text-[#3a231a]/84'>Keep this page image-first: masonry gallery, subtle zoom on hover, minimal text blocks.</p>
            </div>
            <div>
              <p className='font-semibold text-[#8d4f36]'>Recommended Search Focus</p>
              <p className='mt-2 text-[#3a231a]/84'>Rani ki Vav depth shots, Adalaj column details, Chand Baori top view, baoli cooling architecture, stepwell heritage restoration imagery.</p>
              <p className='mt-4 font-semibold text-[#8d4f36]'>Video Flow</p>
              <ul className='mt-2 space-y-2 text-[#3a231a]/84'>
                <li>- One central architecture documentary after gallery.</li>
                <li>- Optional short visual clip for craftsmanship details near the end.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
