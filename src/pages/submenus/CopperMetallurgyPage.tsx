import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function CopperMetallurgyPage() {
  useEffect(() => {
    document.title = 'Copper Metallurgy - Indus Valley Metal Innovation';
  }, []);

  return (
    <main className='min-h-screen bg-[#f4ead8] text-[#2b1b17]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[50vh] min-h-[340px]'><img src='/urban-planning.jpg' alt='Indus Valley archaeological landscape and metallurgy context' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#2b1b17]/82 via-[#2b1b17]/55 to-[#2b1b17]/75' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]'>Metallurgy</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]'>Copper Metallurgy - The Foundation of Early Civilization</h1>
            <p className='mt-3 text-[#f4ead8]/90'>How the Indus Valley shaped metal technology.</p>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8'>
          <h2 className='text-2xl md:text-3xl font-sans font-semibold'>Introduction</h2>
          <p className='mt-4 text-[#3a231a]/85 leading-relaxed'>
            Copper was one of the first transformative metals in human history, and the Indus Valley Civilization developed mature
            methods for extraction, working, alloying, and long-distance circulation of copper goods. Their metallurgy supported tools,
            craft economies, and early urban systems.
          </p>
        </article>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Top Video</p>
          <h3 className='mt-2 text-xl font-semibold font-sans'>Copper in Indus Valley Civilization</h3>
          <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=copper%20in%20indus%20valley%20civilization' title='Copper in Indus Valley Civilization' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>Indus Valley Innovations</h3>
            <ul className='mt-4 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Standardized casting and shaping of copper implements.</li>
              <li>- Specialized artisan production linked to urban centers.</li>
              <li>- Integration of metallurgy with planned settlement economies.</li>
            </ul>
          </article>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>Tools & Weapons</h3>
            <ul className='mt-4 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Utility tools for agriculture, craftwork, and household functions.</li>
              <li>- Select weapon forms reflecting both defense and status.</li>
              <li>- Metal typology indicates consistent workshop traditions.</li>
            </ul>
          </article>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>Trade Networks</h3>
            <p className='mt-3 text-sm text-[#3a231a]/84'>
              Copper and copper-based goods moved through interconnected regional routes, linking raw material zones with production
              centers and distribution hubs across the Indus domain and beyond.
            </p>
          </article>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>Alloy Development (Bronze)</h3>
            <p className='mt-3 text-sm text-[#3a231a]/84'>
              Controlled alloying with tin and related practices expanded mechanical possibilities, enabling harder and more durable
              objects than pure copper alone.
            </p>
          </article>
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <h3 className='text-xl font-semibold font-sans'>Archaeological Discoveries Timeline</h3>
          <div className='mt-4 grid md:grid-cols-4 gap-3 text-sm'>
            {[
              'Early settlement phases: copper use emerges',
              'Mature urban phase: tool diversity and craft specialization',
              'Regional exchange period: trade-linked metal flow',
              'Modern archaeology: artifacts reconstruct production systems',
            ].map((entry) => (
              <div key={entry} className='border border-[#8d4f36]/15 bg-white/55 p-3'>{entry}</div>
            ))}
          </div>
        </section>

        <section className='grid md:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Mid Video</p>
            <h3 className='text-lg font-semibold font-sans'>Video: Indus Valley Copper Metallurgy</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=indus%20valley%20metallurgy%20copper' title='Indus Valley Metallurgy Copper' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-lg font-semibold font-sans'>Video: Ancient Copper Smelting Process</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=ancient%20copper%20smelting%20process' title='Ancient Copper Smelting Process' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
        </section>

        <section className='grid md:grid-cols-3 gap-5'>
          <img src='/urban-planning.jpg' alt='Indus Valley archaeological artifacts landscape' className='h-56 w-full object-cover object-center border border-[#8d4f36]/20' />
          <img src='/bronze-casting.jpg' alt='Harappa copper tools and casting context' className='h-56 w-full object-cover object-center border border-[#8d4f36]/20' />
          <img src='/hero-metallurgy.png' alt='Ancient copper smelting process visual' className='h-56 w-full object-cover object-center border border-[#8d4f36]/20' />
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>End Video</p>
          <h3 className='mt-2 text-lg font-semibold font-sans'>Evolution of Metallurgy in India</h3>
          <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=evolution%20of%20metallurgy%20in%20india' title='Evolution of Metallurgy in India' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='bg-[#2b1b17] text-[#f4ead8] p-6 border border-[#8d4f36]/20'>
          <h3 className='text-xl font-semibold font-sans'>Conclusion</h3>
          <p className='mt-3 text-sm md:text-base text-[#f4ead8]/85'>
            Copper metallurgy formed a technological backbone of early South Asian civilization, combining extraction skill, alloy
            development, and trade infrastructure. The archaeological record confirms a deeply organized metal economy.
          </p>
          <p className='sr-only'>Keywords: copper metallurgy indus valley, ancient india metals</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
