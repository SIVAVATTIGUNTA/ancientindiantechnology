import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function CharakaSamhitaPage() {
  useEffect(() => {
    document.title = 'Charaka Samhita - Medical Knowledge System';
  }, []);

  return (
    <main className='min-h-screen bg-[#f4ead8] text-[#2b1b17]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[52vh] min-h-[340px]'><img src='/medicine-ayurveda.jpg' alt='Ayurvedic manuscripts and diagnostic charts' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#1d2f20]/78 via-[#2b1b17]/55 to-[#2b1b17]/72' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/35 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-[#f4ead8]'>Medical Knowledge System UI</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]'>Charaka Samhita - Clinical Intelligence in Ayurveda</h1>
            <p className='mt-3 text-[#f4ead8]/88 text-base md:text-lg'>Disease theory, diagnostic logic, and treatment pathways arranged like a complete medical framework.</p>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10 md:space-y-12'>
        <section className='grid md:grid-cols-3 gap-4'>
          {['Disease classification', 'Diagnosis protocol', 'Therapy selection'].map((x) => (
            <article key={x} className='rounded-xl border border-[#8d4f36]/20 bg-white/70 p-5 shadow-sm hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
              <p className='text-sm text-[#3a231a]/84'>{x}</p>
            </article>
          ))}
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h2 className='text-2xl font-semibold'>Diagnosis to Treatment Flow</h2>
            <div className='mt-4 grid md:grid-cols-4 gap-3 text-sm'>
              {['Observation', 'Classification', 'Etiology', 'Treatment Plan'].map((s) => (
                <div key={s} className='rounded-lg border border-[#8d4f36]/15 bg-white/60 p-3'>{s}</div>
              ))}
            </div>
            <p className='mt-4 text-sm text-[#3a231a]/84'>Charaka&apos;s framework emphasizes reasoning: cause, constitution, stage, and response.</p>
          </article>
          <img src='/medicine-ayurveda.jpg' alt='Ayurvedic clinical notes and herbal diagnosis visual' className='h-full min-h-[280px] w-full object-cover object-center border border-[#8d4f36]/20 rounded-xl' />
        </section>

        <section className='grid md:grid-cols-2 gap-6'>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-white/70 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h3 className='text-lg font-semibold'>Video: Charaka Samhita Explained</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden rounded-lg border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=charaka%20samhita%20explained' title='Charaka Samhita Explained' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-white/70 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h3 className='text-lg font-semibold'>Video: Ayurvedic Diagnosis Methods</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden rounded-lg border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=ayurvedic%20diagnosis%20methods' title='Ayurvedic Diagnosis Methods' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
        </section>

        <section className='rounded-xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <h3 className='text-xl font-semibold'>Content & Media Notes</h3>
          <p className='mt-2 text-sm text-[#3a231a]/84'>Use medical-diagram style cards and icon boxes. Hero should combine manuscript and herbal diagnostics. Mid-page should show classification grids, and end with modern integrative-care relevance.</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
