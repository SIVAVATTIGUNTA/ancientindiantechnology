import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function LothalDockyardPage() {
  useEffect(() => {
    document.title = 'Lothal Dockyard - Maritime Engineering Simulation';
  }, []);

  return (
    <main className='min-h-screen bg-[#14100f] text-[#f4ead8]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[52vh] min-h-[340px]'><img src='/lothal-dockyard.jpg' alt='Lothal dockyard aerial engineering view' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#120d0b]/90 via-[#1e1613]/65 to-[#1e1613]/75' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em]'>Engineering Simulation</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight'>Lothal Dockyard - World&apos;s First Maritime Engineering Marvel</h1>
            <p className='mt-3 text-[#f4ead8]/90'>Interactive dock mechanics, tidal logic, and water-control infrastructure from the Bronze Age.</p>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#d4b26a]/22 bg-[#2b1b17]/72 p-6'>
            <h2 className='text-2xl font-semibold'>Interactive Explanation</h2>
            <ul className='mt-4 space-y-2 text-sm text-[#f4ead8]/84'>
              <li>- <span className='text-[#d4b26a] font-semibold'>Dock Structure:</span> Rectangular basin engineered for loading and anchorage.</li>
              <li>- <span className='text-[#d4b26a] font-semibold'>Tidal Flow Control:</span> Alignment designed to manage fluctuating water levels.</li>
              <li>- <span className='text-[#d4b26a] font-semibold'>Sluice Gate System:</span> Controlled inflow/outflow to reduce silt and maintain operability.</li>
            </ul>
          </article>
          <article className='border border-[#d4b26a]/22 bg-[#2b1b17]/72 p-6'>
            <h3 className='text-xl font-semibold'>Flow Simulation</h3>
            <div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm'>
              {['Sea', 'Dock', 'Gate', 'Water Control'].map((n) => (
                <div key={n} className='border border-[#d4b26a]/20 bg-[#14100f]/78 p-3 text-center hover:bg-[#d4b26a]/14 transition-colors'>
                  {n}
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className='grid md:grid-cols-2 gap-5'>
          <img src='/lothal-dockyard.jpg' alt='Lothal dockyard aerial archaeological context' className='h-60 w-full object-cover object-center border border-[#d4b26a]/22' />
          <img src='/urban-planning.jpg' alt='Ancient port India and trade zone reconstruction' className='h-60 w-full object-cover object-center border border-[#d4b26a]/22' />
        </section>

        <section className='border border-[#d4b26a]/22 bg-[#2b1b17]/72 p-6'>
          <h3 className='text-lg font-semibold'>Video: Lothal Dockyard Engineering</h3>
          <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#d4b26a]/22'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=lothal%20dockyard%20engineering' title='Lothal Dockyard Engineering' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='border border-[#d4b26a]/22 bg-[#2b1b17]/72 p-6'>
          <h3 className='text-xl font-semibold'>Content & Media Notes</h3>
          <div className='mt-4 grid lg:grid-cols-2 gap-6 text-sm'>
            <div>
              <p className='font-semibold text-[#d4b26a]'>What This Section Must Show</p>
              <ul className='mt-2 space-y-2 text-[#f4ead8]/84'>
                <li>- Dock basin geometry and relationship with tidal channels.</li>
                <li>- Gate mechanisms for flow regulation and silt control.</li>
                <li>- Harbor logistics linking dock design to trade movement.</li>
              </ul>
              <p className='mt-4 font-semibold text-[#d4b26a]'>Design Direction</p>
              <p className='mt-2 text-[#f4ead8]/84'>Maintain simulation style: nodes, directional flow, and clear engineering sequence.</p>
            </div>
            <div>
              <p className='font-semibold text-[#d4b26a]'>Recommended Search Focus</p>
              <p className='mt-2 text-[#f4ead8]/84'>Lothal dock aerial, basin excavation plans, tidal dock diagrams, Harappan maritime trade map, ancient port gate control theories.</p>
              <p className='mt-4 font-semibold text-[#d4b26a]'>Video Flow</p>
              <ul className='mt-2 space-y-2 text-[#f4ead8]/84'>
                <li>- Intro engineering explainer on dock structure.</li>
                <li>- Mid segment on maritime trade and navigation use.</li>
                <li>- End segment with simulation-style reconstruction.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
