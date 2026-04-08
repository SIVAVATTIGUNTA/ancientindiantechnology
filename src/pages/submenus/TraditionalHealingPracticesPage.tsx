import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function TraditionalHealingPracticesPage() {
  useEffect(() => {
    document.title = 'Traditional Healing Practices - Panchakarma and Rasayana';
  }, []);

  return (
    <main className='min-h-screen bg-[#f6efe5] text-[#2b1b17]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[52vh] min-h-[340px]'><img src='/medicine-ayurveda.jpg' alt='Luxury spa and Ayurvedic therapy environment' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#1e3a2a]/70 via-[#2b1b17]/50 to-[#2b1b17]/72' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/35 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-[#f4ead8]'>Luxury Spa + Therapy Experience UI</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]'>Traditional Healing Practices - Restorative Ayurveda Pathways</h1>
            <p className='mt-3 text-[#f4ead8]/88 text-base md:text-lg'>Experience-oriented therapies, Panchakarma sequencing, and Rasayana rejuvenation in a premium wellness interface.</p>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10 md:space-y-12'>
        <section className='rounded-xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 transition-all duration-300 ease-out'>
          <h2 className='text-2xl font-semibold'>Panchakarma Journey</h2>
          <div className='mt-4 grid md:grid-cols-5 gap-3 text-sm'>
            {['Preparation', 'Oleation', 'Sudation', 'Elimination', 'Recovery'].map((p) => (
              <div key={p} className='rounded-lg border border-[#8d4f36]/15 bg-white/60 p-3 text-center'>{p}</div>
            ))}
          </div>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h3 className='text-xl font-semibold'>Rasayana Highlight</h3>
            <p className='mt-3 text-sm text-[#3a231a]/84'>Rasayana emphasizes long-term rejuvenation through nutrition, behavior, and restorative formulations tuned to constitution and age.</p>
          </article>
          <img src='/medicine-ayurveda.jpg' alt='Ayurvedic therapy and herbal rejuvenation setting' className='h-full min-h-[280px] w-full object-cover object-center rounded-xl border border-[#8d4f36]/20' />
        </section>

        <section className='grid md:grid-cols-3 gap-4'>
          {['Abhyanga', 'Shirodhara', 'Swedana'].map((t) => (
            <article key={t} className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-5 shadow-sm hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
              <p className='text-lg font-semibold text-[#8d4f36]'>{t}</p>
              <p className='mt-1 text-sm text-[#3a231a]/82'>Experience-focused therapeutic module with targeted intent.</p>
            </article>
          ))}
        </section>

        <section className='grid md:grid-cols-2 gap-6'>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h3 className='text-lg font-semibold'>Video: Panchakarma Explained</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden rounded-lg border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=panchakarma%20therapy%20explained' title='Panchakarma Therapy Explained' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h3 className='text-lg font-semibold'>Video: Ayurvedic Rejuvenation and Rasayana</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden rounded-lg border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=rasayana%20ayurveda%20rejuvenation' title='Rasayana Ayurveda Rejuvenation' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
        </section>

        <section className='rounded-xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <h3 className='text-xl font-semibold'>Content & Media Notes</h3>
          <p className='mt-2 text-sm text-[#3a231a]/84'>Keep this page spa-luxury and narrative-driven: soft cards, flowing sections, and carousel-friendly therapy visuals. Use warm green-beige-gold palette with subtle hover glow and fade transitions.</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
