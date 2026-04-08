import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function SushrutaSamhitaPage() {
  useEffect(() => {
    document.title = 'Sushruta Samhita - Surgical Heritage and Case Knowledge';
  }, []);

  return (
    <main className='min-h-screen bg-[#eef4e7] text-[#2a241d]'>
      <SubmenuHeaderNav />

      <section className='relative overflow-hidden'>
        <div className='h-[52vh] min-h-[340px]'><img src='/sushruta-surgery.jpg' alt='Ancient surgical manuscript and herbal medical tools' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#1a2a1c]/80 via-[#2b1b17]/50 to-[#2b1b17]/72' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/35 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-[#f4ead8]'>Surgical Timeline + Case Study UI</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]'>Sushruta Samhita - Foundations of Classical Surgery</h1>
            <p className='mt-3 text-[#f4ead8]/88 text-base md:text-lg'>Structured operative knowledge, instruments, and clinical reasoning from one of the world&apos;s earliest surgical traditions.</p>
            <a href='#healing-science' className='mt-5 inline-flex bg-[#d4b26a] px-5 py-2.5 text-sm font-semibold text-[#2b1b17] hover:bg-[#c69f52] transition-colors'>Explore Healing Science</a>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10 md:space-y-12' id='healing-science'>
        <section className='grid md:grid-cols-3 gap-4'>
          {[
            '300+ Surgical Procedures described',
            'Instrument taxonomies and usage',
            'Clinical training and protocol focus',
          ].map((item) => (
            <article key={item} className='rounded-xl border border-[#8d4f36]/20 bg-white/70 p-5 shadow-sm hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
              <p className='text-sm text-[#3a231a]/84'>{item}</p>
            </article>
          ))}
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8 transition-all duration-300 ease-out'>
          <h2 className='text-2xl font-semibold'>Introduction & Core Concept</h2>
          <p className='mt-3 text-sm text-[#3a231a]/84'>Sushruta Samhita is a clinical-technical compendium emphasizing anatomy, surgical method, patient preparation, and postoperative discipline.</p>
          <p className='mt-2 text-sm text-[#3a231a]/84'>Its system approach - diagnosis, procedure, instrument, and recovery - resembles modern protocol-based care pathways.</p>
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>Surgical Timeline</h3>
          <div className='mt-4 grid md:grid-cols-4 gap-3 text-sm'>
            {['Patient assessment', 'Preparation & cleansing', 'Operative procedure', 'Recovery protocol'].map((step) => (
              <div key={step} className='rounded-lg border border-[#8d4f36]/15 bg-white/60 p-3'>{step}</div>
            ))}
          </div>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h3 className='text-xl font-semibold'>Procedure Breakdown</h3>
            <ul className='mt-3 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Case selection and contraindications</li>
              <li>- Instrument choice and incision planning</li>
              <li>- Tissue handling and blood control</li>
              <li>- Follow-up, diet, and wound-care guidance</li>
            </ul>
          </article>
          <img src='/sushruta-surgery.jpg' alt='Surgical case illustration and instrument layout' className='h-full min-h-[280px] w-full object-cover object-center border border-[#8d4f36]/20' />
        </section>

        <section className='grid md:grid-cols-2 gap-6'>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-white/70 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h3 className='text-lg font-semibold'>Video: Sushruta Samhita Surgical Science</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden rounded-lg border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=sushruta%20samhita%20surgery%20documentary' title='Sushruta Samhita Surgical Science' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-white/70 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h3 className='text-lg font-semibold'>Video: History of Ancient Indian Surgery</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden rounded-lg border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=ancient%20indian%20surgery%20history' title='History of Ancient Indian Surgery' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <h3 className='text-xl font-semibold'>Content & Media Notes</h3>
          <p className='mt-2 text-sm text-[#3a231a]/84'>Hero image: manuscripts + surgical tools. Section images: training, procedure stages, instrument sets. Gallery style: clean 2-column clinical documentary grid. End with one modern reconstructive surgery context video.</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
