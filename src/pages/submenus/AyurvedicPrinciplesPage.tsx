import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function AyurvedicPrinciplesPage() {
  useEffect(() => {
    document.title = 'Ayurvedic Principles - Interactive Wellness Dashboard';
  }, []);

  return (
    <main className='min-h-screen bg-[#edf5ea] text-[#2a241d]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[52vh] min-h-[340px]'><img src='/medicine-ayurveda.jpg' alt='Calming herbs, wellness space, and Ayurvedic chart' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#234028]/72 via-[#2b1b17]/45 to-[#2b1b17]/65' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/35 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-[#f4ead8]'>Interactive Wellness Dashboard</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]'>Ayurvedic Principles - Body, Mind, Rhythm</h1>
            <p className='mt-3 text-[#f4ead8]/90 text-base md:text-lg'>Tridosha-based balance indicators and practical lifestyle guidance in a modern health-app style layout.</p>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10 md:space-y-12'>
        <section className='grid md:grid-cols-3 gap-4'>
          {[
            { t: 'Vata', d: 'Movement, nervous activity, dryness balance' },
            { t: 'Pitta', d: 'Metabolism, heat, transformation balance' },
            { t: 'Kapha', d: 'Structure, stability, lubrication balance' },
          ].map((d) => (
            <article key={d.t} className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-5 shadow-sm hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
              <p className='text-lg font-semibold text-[#8d4f36]'>{d.t}</p>
              <p className='mt-1 text-sm text-[#3a231a]/82'>{d.d}</p>
            </article>
          ))}
        </section>

        <section className='rounded-xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 transition-all duration-300 ease-out'>
          <h2 className='text-2xl font-semibold'>Balance Dashboard</h2>
          <div className='mt-4 grid md:grid-cols-3 gap-3 text-sm'>
            {['Sleep & recovery', 'Digestion & appetite', 'Stress & clarity'].map((k) => (
              <div key={k} className='rounded-lg border border-[#8d4f36]/15 bg-white/60 p-3'>{k}</div>
            ))}
          </div>
        </section>

        <section className='grid md:grid-cols-2 gap-6'>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h3 className='text-lg font-semibold'>Video: Tridosha Explained Clearly</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden rounded-lg border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=tridosha%20explained%20ayurveda' title='Tridosha Explained Ayurveda' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h3 className='text-lg font-semibold'>Video: Modern Lifestyle and Dosha Balance</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden rounded-lg border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=ayurveda%20dosha%20balance%20modern%20lifestyle' title='Ayurveda Dosha Balance Modern Lifestyle' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
        </section>

        <section className='rounded-xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <h3 className='text-xl font-semibold'>Content & Media Notes</h3>
          <p className='mt-2 text-sm text-[#3a231a]/84'>Use soft cards, wellness indicators, and calm iconography. Hero should feel restorative (herbs, manuscript, morning light). Keep animations subtle: fade-ins and gentle hover lift.</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
