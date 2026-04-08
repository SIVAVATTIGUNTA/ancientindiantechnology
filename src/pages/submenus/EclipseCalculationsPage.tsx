import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function EclipseCalculationsPage() {
  useEffect(() => {
    document.title = 'Eclipse Calculations - Predicting Shadows in Motion';
  }, []);

  return (
    <main className='min-h-screen bg-[#0c111b] text-[#f4ead8]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[52vh] min-h-[340px]'><img src='/astronomy-jantar.jpg' alt='Solar and lunar eclipse geometry visual' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#05080f]/90 via-[#0c111b]/68 to-[#0c111b]/78' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em]'>Astronomy Lab</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight'>Eclipse Calculations - Predicting Shadows in Motion</h1>
            <p className='mt-3 text-[#f4ead8]/88'>Geometric alignment, orbital nodes, and periodic cycles translated into predictive astronomy.</p>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10 md:space-y-12'>
        <section className='grid md:grid-cols-2 gap-6'>
          <article className='border border-[#d4b26a]/20 bg-[#161c2a]/75 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.28)]'>
            <h2 className='text-2xl font-semibold'>Core Mechanics</h2>
            <ul className='mt-4 space-y-2 text-sm text-[#f4ead8]/84'>
              <li>- Eclipse occurs when Sun-Earth-Moon align near orbital nodes.</li>
              <li>- Solar and lunar events differ by geometry and observer position.</li>
              <li>- Predictive models rely on cyclical periods and correction factors.</li>
            </ul>
          </article>
          <article className='border border-[#d4b26a]/20 bg-[#161c2a]/75 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(0,0,0,0.28)]'>
            <h2 className='text-2xl font-semibold'>Scientific Explanation</h2>
            <p className='mt-3 text-sm text-[#f4ead8]/84'>Ancient calculation frameworks combine periodicity, angular displacement, and observational tables to estimate event timing and visibility windows.</p>
          </article>
        </section>

        <section className='border border-[#d4b26a]/20 bg-[#161c2a]/75 p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>Eclipse Flow Model</h3>
          <div className='mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm'>
            {['Node alignment', 'Solar/Lunar geometry', 'Visibility zone', 'Event prediction'].map((s) => (
              <div key={s} className='border border-[#d4b26a]/20 bg-[#0c111b]/70 p-3'>{s}</div>
            ))}
          </div>
        </section>

        <section className='grid md:grid-cols-2 gap-5'>
          <img src='/astronomy-jantar.jpg' alt='Eclipse geometry and angular tracking visual' className='h-56 w-full object-cover object-center border border-[#d4b26a]/20' />
          <img src='/sun-temple.jpg' alt='Solar shadow and timing observation context' className='h-56 w-full object-cover object-center border border-[#d4b26a]/20' />
        </section>

        <section className='border border-[#d4b26a]/20 bg-[#161c2a]/75 p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>Video: Eclipse Calculation Science</h3>
          <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#d4b26a]/20'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=eclipse%20calculations%20ancient%20india' title='Eclipse Calculations Ancient India' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='border border-[#d4b26a]/20 bg-[#161c2a]/75 p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>Historical to Modern Relevance</h3>
          <p className='mt-2 text-sm text-[#f4ead8]/84'>From calendrical forecasting to science communication, eclipse computation remains a powerful example of mathematical astronomy bridging tradition and modern education.</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
