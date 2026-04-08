import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function JantarMantarObservatoriesPage() {
  useEffect(() => {
    document.title = 'Jantar Mantar - Stone Instruments Precision Skies';
  }, []);

  return (
    <main className='min-h-screen bg-[#0f1420] text-[#f4ead8]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[54vh] min-h-[360px]'><img src='/astronomy-jantar.jpg' alt='Samrat Yantra geometry at sunrise' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#0b0f18]/90 via-[#0f1420]/68 to-[#0f1420]/78' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em]'>Astronomy Dashboard</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight'>Jantar Mantar - Stone Instruments, Precision Skies</h1>
            <p className='mt-3 text-[#f4ead8]/88 text-base md:text-lg'>Masonry observatories that converted architecture into astronomical computation.</p>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10 md:space-y-12'>
        <section className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {[
            { v: '1724-1734', l: 'Major Build Period' },
            { v: '5', l: 'Observatory Cities' },
            { v: 'Masonry', l: 'Instrument Type' },
            { v: 'Solar & Stellar', l: 'Measurement Scope' },
          ].map((s) => (
            <article key={s.l} className='border border-[#d4b26a]/25 bg-[#1b2333]/75 p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)]'>
              <p className='text-xl font-semibold text-[#d4b26a]'>{s.v}</p>
              <p className='text-sm text-[#f4ead8]/78 mt-1'>{s.l}</p>
            </article>
          ))}
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#d4b26a]/22 bg-[#1b2333]/75 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)]'>
            <h2 className='text-2xl font-semibold'>Instrument Atlas</h2>
            <ul className='mt-4 space-y-2 text-sm text-[#f4ead8]/84'>
              <li>- <span className='text-[#d4b26a] font-semibold'>Samrat Yantra:</span> giant sundial for local solar time.</li>
              <li>- <span className='text-[#d4b26a] font-semibold'>Jai Prakash:</span> celestial coordinate mapping through hemispheric geometry.</li>
              <li>- <span className='text-[#d4b26a] font-semibold'>Ram Yantra:</span> altitude and azimuth readings through cylindrical structures.</li>
            </ul>
          </article>
          <img src='/astronomy-jantar.jpg' alt='Jantar Mantar instrument geometry and shadows' className='h-full min-h-[280px] w-full object-cover object-center border border-[#d4b26a]/22' />
        </section>

        <section className='grid md:grid-cols-3 gap-4'>
          {[
            'How it works: shadow, angle, declination.',
            'Scientific basis: geometry + calibrated scale marks.',
            'Modern relevance: heritage science education.',
          ].map((t) => (
            <article key={t} className='border border-[#d4b26a]/22 bg-[#1b2333]/75 p-5 hover:bg-[#d4b26a]/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)]'>
              <p className='text-sm text-[#f4ead8]/84'>{t}</p>
            </article>
          ))}
        </section>

        <section className='border border-[#d4b26a]/22 bg-[#1b2333]/75 p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>Video: Jantar Mantar Scientific Instruments Explained</h3>
          <div className='mt-3 aspect-video bg-black border border-[#d4b26a]/20 overflow-hidden'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=jantar%20mantar%20explained%20scientific%20instruments' title='Jantar Mantar Explained' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='grid md:grid-cols-2 gap-5'>
          <img src='/astronomy-jantar.jpg' alt='Samrat yantra close angle measurement view' className='h-56 w-full object-cover object-center border border-[#d4b26a]/22' />
          <img src='/sun-temple.jpg' alt='Astronomical architecture alignment visual' className='h-56 w-full object-cover object-center border border-[#d4b26a]/22' />
        </section>

        <section className='border border-[#d4b26a]/22 bg-[#1b2333]/75 p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>Timeline</h3>
          <div className='mt-4 grid md:grid-cols-4 gap-3 text-sm'>
            {[
              'Court astronomy reforms under Sawai Jai Singh II',
              'Construction of major observatories',
              'Operational use for celestial and calendrical observations',
              'Modern conservation and public science interpretation',
            ].map((item) => (
              <div key={item} className='border border-[#d4b26a]/20 bg-[#0f1420]/70 p-3'>{item}</div>
            ))}
          </div>
        </section>

        <section className='border border-[#d4b26a]/22 bg-[#1b2333]/75 p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>Curator Notes</h3>
          <p className='mt-2 text-sm text-[#f4ead8]/84'>Use diagrams and real instrument photography to keep this page technical and evidence-led, not ornamental.</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
