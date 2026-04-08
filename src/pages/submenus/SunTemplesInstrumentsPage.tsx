import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function SunTemplesInstrumentsPage() {
  useEffect(() => {
    document.title = 'Sun Temples as Instruments - Architecture Measures Time';
  }, []);

  return (
    <main className='min-h-screen bg-[#1a140f] text-[#f4ead8]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[54vh] min-h-[360px]'><img src='/sun-temple.jpg' alt='Sun temple architectural alignment' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#140f0a]/90 via-[#1a140f]/65 to-[#1a140f]/78' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em]'>Cinematic Sacred Science</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight'>Sun Temples as Instruments - Architecture that Measures Time</h1>
            <p className='mt-3 text-[#f4ead8]/88'>Sacred geometry aligned to solar paths, seasonal light, and time-marking through built form.</p>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10 md:space-y-12'>
        <section className='relative overflow-hidden border border-[#d4b26a]/20 bg-[#2b1b17]/75 p-8 transition-all duration-300 ease-out'>
          <h2 className='text-2xl font-semibold'>Core Concept</h2>
          <p className='mt-3 text-sm text-[#f4ead8]/84'>Sun temples can be interpreted as calibrated spaces where orientation, light shafts, and shadow behavior perform time and season signaling.</p>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <img src='/sun-temple.jpg' alt='Solar axis and temple alignment' className='h-full min-h-[280px] w-full object-cover object-center border border-[#d4b26a]/20' />
          <article className='border border-[#d4b26a]/20 bg-[#2b1b17]/75 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.28)]'>
            <h3 className='text-xl font-semibold'>Scientific Explanation</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#f4ead8]/84'>
              <li>- Orientation to cardinal directions and sunrise pathways.</li>
              <li>- Shadow behavior as a natural time marker.</li>
              <li>- Seasonal light patterns tied to ritual calendars.</li>
            </ul>
          </article>
        </section>

        <section className='border border-[#d4b26a]/20 bg-[#2b1b17]/75 p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>Seasonal Timeline</h3>
          <div className='mt-4 grid md:grid-cols-4 gap-3 text-sm'>
            {['Equinox alignment', 'Solstice shift', 'Daily solar arc', 'Ceremonial timing'].map((i) => (
              <div key={i} className='border border-[#d4b26a]/20 bg-[#1a140f]/70 p-3'>{i}</div>
            ))}
          </div>
        </section>

        <section className='border border-[#d4b26a]/20 bg-[#2b1b17]/75 p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>Video: Sun Temple Astronomy Explained</h3>
          <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#d4b26a]/20'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=sun%20temple%20astronomy%20explained' title='Sun Temple Astronomy Explained' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='border border-[#d4b26a]/20 bg-[#2b1b17]/75 p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>Modern Relevance</h3>
          <p className='mt-2 text-sm text-[#f4ead8]/84'>These sites provide a living classroom for archaeo-astronomy, heritage engineering, and the integration of symbolic and technical design languages.</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
