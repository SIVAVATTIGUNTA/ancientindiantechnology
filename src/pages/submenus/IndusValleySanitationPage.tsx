import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function IndusValleySanitationPage() {
  useEffect(() => {
    document.title = 'Indus Valley Sanitation - Ancient Urban Drainage Engineering';
  }, []);

  return (
    <main className='min-h-screen bg-[#16100e] text-[#f4ead8]'>
      <SubmenuHeaderNav />

      <section className='relative overflow-hidden border-b border-[#d4b26a]/25'>
        <div className='h-[52vh] min-h-[340px]'><img src='/urban-planning.jpg' alt='Top view of Mohenjo-daro grid city' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#120d0b]/90 via-[#1e1613]/65 to-[#1e1613]/78' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/25 px-4 py-1.5 text-xs uppercase tracking-[0.16em]'>Urban Planning Dashboard</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight'>Indus Valley Sanitation - The World&apos;s First Urban Drainage System</h1>
            <p className='mt-3 text-[#f4ead8]/90 text-base md:text-lg'>A 4,500-year-old engineering system still superior to many modern cities.</p>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <section className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {[
            { value: '2600 BCE', label: 'Operational Period' },
            { value: 'Covered Drains', label: 'Core Innovation' },
            { value: 'House Connections', label: 'Distributed Network' },
            { value: 'Standard Bricks', label: 'Construction Precision' },
          ].map((stat) => (
            <article key={stat.label} className='border border-[#d4b26a]/25 bg-[#2b1b17]/72 p-5'>
              <p className='text-2xl font-bold text-[#d4b26a]'>{stat.value}</p>
              <p className='mt-1 text-sm text-[#f4ead8]/80'>{stat.label}</p>
            </article>
          ))}
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#d4b26a]/22 bg-[#2b1b17]/72 p-6 md:p-8'>
            <h2 className='text-2xl font-semibold font-sans'>System Breakdown</h2>
            <div className='mt-4 space-y-3 text-sm text-[#f4ead8]/85'>
              <p><span className='font-semibold text-[#d4b26a]'>Household Drainage:</span> Individual homes connected wash areas to small brick-lined channels.</p>
              <p><span className='font-semibold text-[#d4b26a]'>Covered Main Drains:</span> Street-level covered drains moved wastewater through engineered gradients.</p>
              <p><span className='font-semibold text-[#d4b26a]'>Inspection Chambers:</span> Maintenance points enabled cleaning access and long-term usability.</p>
              <p><span className='font-semibold text-[#d4b26a]'>Waste Disposal:</span> Flow was directed away from living areas toward designated outlets.</p>
            </div>
          </article>
          <div className='border border-[#d4b26a]/22 bg-[#2b1b17]/72 p-3'>
            <img src='/urban-planning.jpg' alt='Indus Valley city layout grid and drainage pathways' className='h-full min-h-[280px] w-full object-cover object-center' />
          </div>
        </section>

        <section className='border border-[#d4b26a]/22 bg-[#2b1b17]/72 p-6'>
          <h3 className='text-xl font-semibold font-sans'>Process Flow</h3>
          <div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm'>
            {['House', 'Small Drain', 'Main Drain', 'Disposal'].map((step) => (
              <div key={step} className='border border-[#d4b26a]/20 bg-[#16100e]/80 p-4 text-center hover:bg-[#d4b26a]/12 transition-colors'>
                <p className='font-semibold'>{step}</p>
                <p className='mt-1 text-[#f4ead8]/65'>Flow node</p>
              </div>
            ))}
          </div>
        </section>

        <section className='grid md:grid-cols-2 gap-5'>
          <img src='/urban-planning.jpg' alt='Mohenjo-daro drainage system aerial reconstruction' className='h-56 w-full object-cover object-center border border-[#d4b26a]/22' />
          <img src='/stepwell.jpg' alt='Ancient sewer covered drains conceptual comparison' className='h-56 w-full object-cover object-center border border-[#d4b26a]/22' />
        </section>

        <section className='grid md:grid-cols-2 gap-6'>
          <article className='border border-[#d4b26a]/22 bg-[#2b1b17]/72 p-6'>
            <h3 className='text-lg font-semibold'>Video: Indus Valley Drainage System Explained</h3>
            <div className='mt-3 aspect-video overflow-hidden bg-black border border-[#d4b26a]/22'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=indus%20valley%20drainage%20system%20explained' title='Indus Valley Drainage System Explained' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='border border-[#d4b26a]/22 bg-[#2b1b17]/72 p-6'>
            <h3 className='text-lg font-semibold'>Video: Mohenjo-daro City Planning Documentary</h3>
            <div className='mt-3 aspect-video overflow-hidden bg-black border border-[#d4b26a]/22'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=mohenjo%20daro%20city%20planning%20documentary' title='Mohenjo-daro City Planning Documentary' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
        </section>

        <section className='border border-[#d4b26a]/22 bg-[#2b1b17]/72 p-6'>
          <h3 className='text-xl font-semibold'>Content & Media Notes</h3>
          <div className='mt-4 grid lg:grid-cols-2 gap-5 text-sm'>
            <div>
              <p className='font-semibold text-[#d4b26a]'>What This Section Must Show</p>
              <ul className='mt-2 space-y-2 text-[#f4ead8]/84'>
                <li>- City-scale grid planning with connected household drains.</li>
                <li>- Covered street drains and maintenance inspection points.</li>
                <li>- Practical wastewater routing from homes to disposal zones.</li>
              </ul>
              <p className='mt-4 font-semibold text-[#d4b26a]'>Visual Priority</p>
              <p className='mt-2 text-[#f4ead8]/84'>Use documentary visuals with clear top-view layouts and engineering diagrams rather than decorative images.</p>
            </div>
            <div>
              <p className='font-semibold text-[#d4b26a]'>Recommended Search Focus</p>
              <p className='mt-2 text-[#f4ead8]/84'>Mohenjo-daro drainage aerial, Harappan covered drains, Indus sanitation excavation channels, ancient sewer brick structures, urban wastewater flow archaeology.</p>
              <p className='mt-4 font-semibold text-[#d4b26a]'>Video Flow</p>
              <ul className='mt-2 space-y-2 text-[#f4ead8]/84'>
                <li>- Intro explainer for full drainage system.</li>
                <li>- Middle documentary for city planning context.</li>
                <li>- End segment comparing ancient and modern civil engineering.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
