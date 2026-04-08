import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function SiddhanticAstronomyPage() {
  useEffect(() => {
    document.title = 'Siddhantic Astronomy - Mathematical Sky Models';
  }, []);

  return (
    <main className='min-h-screen bg-[#111827] text-[#f4ead8]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[52vh] min-h-[340px]'><img src='/astronomy-jantar.jpg' alt='Siddhantic astronomy model visual' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#0b1020]/90 via-[#111827]/65 to-[#111827]/75' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em]'>Simulation Interface</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight'>Siddhantic Astronomy - India&apos;s Mathematical Sky Models</h1>
            <p className='mt-3 text-[#f4ead8]/88'>Algorithmic astronomy built from parameters, corrections, and precise celestial cycles.</p>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10 md:space-y-12'>
        <section className='grid md:grid-cols-3 gap-4'>
          {['Mean position models', 'Correction algorithms', 'Trigonometric tables'].map((k) => (
            <article key={k} className='border border-[#d4b26a]/20 bg-[#1f2937]/75 p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.28)]'>
              <p className='text-sm text-[#f4ead8]/84'>{k}</p>
            </article>
          ))}
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#d4b26a]/20 bg-[#1f2937]/75 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.28)]'>
            <h2 className='text-2xl font-semibold'>Core Concept</h2>
            <p className='mt-3 text-sm text-[#f4ead8]/84'>Siddhantic texts represent sky motion through parameterized models, enabling repeated calculation of planetary positions.</p>
            <h3 className='mt-4 text-lg font-semibold'>Scientific Layer</h3>
            <p className='mt-2 text-sm text-[#f4ead8]/84'>Computation combines cyclical periods, corrections, and geometric reasoning to approach observed celestial behavior.</p>
          </article>
          <img src='/astronomy-jantar.jpg' alt='Astronomical model diagram and instrument context' className='h-full min-h-[280px] w-full object-cover object-center border border-[#d4b26a]/20' />
        </section>

        <section className='border border-[#d4b26a]/20 bg-[#1f2937]/75 p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>How It Works</h3>
          <div className='mt-4 grid md:grid-cols-4 gap-3 text-sm'>
            {['Choose epoch', 'Apply mean motion', 'Add corrections', 'Generate position'].map((s) => (
              <div key={s} className='border border-[#d4b26a]/20 bg-[#111827]/70 p-3'>{s}</div>
            ))}
          </div>
        </section>

        <section className='border border-[#d4b26a]/20 bg-[#1f2937]/75 p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>Video: Siddhantic Astronomy Explained</h3>
          <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#d4b26a]/20'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=siddhantic%20astronomy%20explained' title='Siddhantic Astronomy Explained' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='border border-[#d4b26a]/20 bg-[#1f2937]/75 p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>Historical Context to Modern Relevance</h3>
          <p className='mt-2 text-sm text-[#f4ead8]/84'>From classical siddhanta schools to modern history-of-science analysis, this tradition demonstrates early algorithmic astronomy with lasting methodological significance.</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
