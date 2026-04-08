import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function GreatBathMohenjoDaroPage() {
  useEffect(() => {
    document.title = 'Great Bath Mohenjo-daro - Public Water Architecture';
  }, []);

  return (
    <main className='min-h-screen bg-[#f4ead8] text-[#2b1b17]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[54vh] min-h-[360px]'><img src='/urban-planning.jpg' alt='Cinematic Great Bath reconstruction' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#2b1b17]/82 via-[#2b1b17]/55 to-[#2b1b17]/75' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]'>Museum Experience</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]'>The Great Bath - Ancient World&apos;s First Public Water Architecture</h1>
            <p className='mt-3 text-[#f4ead8]/90 text-base md:text-lg'>A sacred structure built with precision, waterproofing, and purpose.</p>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <section className='bg-[#f8f0e3] border border-[#8d4f36]/20 p-6 md:p-8'>
          <h2 className='text-2xl md:text-3xl font-sans font-semibold'>Story</h2>
          <p className='mt-4 text-[#3a231a]/85 leading-relaxed'>
            Imagine stepping into a 4,000-year-old city where civic design, ritual intent, and hydrological engineering converge in one
            monumental public structure. The Great Bath is not just architecture; it is an urban experience engineered through proportion,
            waterproofing, and controlled water circulation.
          </p>
        </section>

        <section className='relative'>
          <img src='/urban-planning.jpg' alt='Great Bath top view and structure details' className='h-[380px] w-full object-cover object-center border border-[#8d4f36]/20' />
          <div className='absolute inset-0 bg-gradient-to-t from-[#2b1b17]/78 via-transparent to-transparent' />
          <div className='absolute bottom-0 left-0 p-6 text-[#f4ead8] max-w-2xl'>
            <h3 className='text-2xl font-semibold'>Structure Breakdown</h3>
            <p className='mt-2 text-sm md:text-base text-[#f4ead8]/86'>Dimensions, waterproof bricks, bitumen sealing, and engineered inlet-outlet control reveal advanced public water architecture.</p>
          </div>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='bg-[#f8f0e3] border border-[#8d4f36]/20 p-6'>
            <h3 className='text-xl font-semibold'>Experience Narrative</h3>
            <p className='mt-3 text-[#3a231a]/84'>
              Entering the Great Bath likely involved a deliberate ritual movement through steps, platforms, and controlled water depth.
              The design suggests shared public use structured by order, visibility, and symbolic meaning.
            </p>
          </article>
          <article className='bg-[#f8f0e3] border border-[#8d4f36]/20 p-6'>
            <h3 className='text-xl font-semibold'>Cinematic Evidence</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=great%20bath%20mohenjo%20daro%20documentary' title='Great Bath Mohenjo-daro Documentary' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
        </section>

        <section className='bg-[#f8f0e3] border border-[#8d4f36]/20 p-6'>
          <h3 className='text-xl font-semibold'>Content & Media Notes</h3>
          <div className='mt-4 grid lg:grid-cols-2 gap-6 text-sm'>
            <div>
              <p className='font-semibold text-[#8d4f36]'>What This Section Must Show</p>
              <ul className='mt-2 space-y-2 text-[#3a231a]/84'>
                <li>- Public water architecture at monumental civic scale.</li>
                <li>- Waterproofing strategy: brick courses plus sealing layers.</li>
                <li>- Controlled inlet and outlet logic, not ornamental-only design.</li>
              </ul>
              <p className='mt-4 font-semibold text-[#8d4f36]'>Narrative Tone</p>
              <p className='mt-2 text-[#3a231a]/84'>Keep museum-walkthrough storytelling: immersive, calm, and evidence-led.</p>
            </div>
            <div>
              <p className='font-semibold text-[#8d4f36]'>Recommended Search Focus</p>
              <p className='mt-2 text-[#3a231a]/84'>Great Bath top view, Mohenjo-daro bath excavation details, bitumen sealing archaeology, Harappan water architecture plans, public ritual bath design.</p>
              <p className='mt-4 font-semibold text-[#8d4f36]'>Video Flow</p>
              <ul className='mt-2 space-y-2 text-[#3a231a]/84'>
                <li>- Start with a cinematic site documentary.</li>
                <li>- Continue with structural explanation and hydraulics.</li>
                <li>- End with historical interpretation and civic function.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
