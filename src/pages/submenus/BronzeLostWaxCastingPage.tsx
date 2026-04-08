import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function BronzeLostWaxCastingPage() {
  useEffect(() => {
    document.title = 'Lost-Wax Casting India - Bronze Nataraja Precision';
  }, []);

  return (
    <main className='min-h-screen bg-[#f4ead8] text-[#2b1b17]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[50vh] min-h-[340px]'><img src='/bronze-casting.jpg' alt='Nataraja bronze statue close-up in warm light' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#2b1b17]/82 via-[#2b1b17]/55 to-[#2b1b17]/75' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]'>Metallurgy</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]'>Lost-Wax Casting - The Art of Eternal Metal</h1>
            <p className='mt-3 text-[#f4ead8]/90'>How ancient India created perfect bronze sculptures.</p>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8'>
          <h2 className='text-2xl md:text-3xl font-sans font-semibold'>Introduction</h2>
          <p className='mt-4 text-[#3a231a]/85 leading-relaxed'>
            Lost-wax casting (cire-perdue) in India reached extraordinary refinement, enabling production of bronze icons such as
            Nataraja with precise geometry, expressive balance, and durable metallurgical quality.
          </p>
        </article>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Top Video</p>
          <h3 className='mt-2 text-xl font-semibold font-sans'>Lost Wax Casting Explained - Chola Bronze Mastery</h3>
          <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=lost%20wax%20casting%20explained%20chola%20bronze' title='Lost Wax Casting Explained Chola Bronze Mastery' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <h3 className='text-xl font-semibold font-sans'>Step-by-Step Casting Process</h3>
          <div className='mt-4 grid md:grid-cols-5 gap-3 text-sm'>
            {[
              'Wax model sculpting',
              'Clay mold layering',
              'Wax burnout and cavity creation',
              'Molten bronze pouring',
              'Finishing, polishing, and detailing',
            ].map((step) => (
              <div key={step} className='border border-[#8d4f36]/15 bg-white/55 p-3'>{step}</div>
            ))}
          </div>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>Nataraja Sculpture Significance</h3>
            <p className='mt-3 text-sm text-[#3a231a]/84'>
              Nataraja symbolizes cosmic rhythm, but its making also reflects precise thermal control, alloy behavior, and casting
              foresight to preserve fine features in bronze.
            </p>
          </article>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>Art Meets Engineering</h3>
            <p className='mt-3 text-sm text-[#3a231a]/84'>
              This tradition bridges aesthetics and engineering: wax modeling defines geometry, mold chemistry governs surface quality,
              and metal flow management ensures structural integrity.
            </p>
          </article>
        </section>

        <section className='grid md:grid-cols-3 gap-5'>
          <img src='/bronze-casting.jpg' alt='Nataraja bronze statue traditional style' className='h-56 w-full object-cover object-center border border-[#8d4f36]/20' />
          <img src='/hero-metallurgy.png' alt='Lost wax casting process steps visual' className='h-56 w-full object-cover object-center border border-[#8d4f36]/20' />
          <img src='/wootz-blade.jpg' alt='Molten metal pouring foundry visual' className='h-56 w-full object-cover object-center border border-[#8d4f36]/20' />
        </section>

        <section className='grid md:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Mid Video</p>
            <h3 className='text-lg font-semibold font-sans'>Video: Lost Wax Casting Process</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=lost%20wax%20casting%20process%20bronze' title='Lost Wax Casting Process Bronze' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-lg font-semibold font-sans'>Video: Nataraja Making Documentary</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=nataraja%20making%20documentary' title='Nataraja Making Documentary' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>End Video</p>
          <h3 className='mt-2 text-lg font-semibold font-sans'>Ancient Indian Art & Metallurgy</h3>
          <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=ancient%20indian%20art%20and%20metallurgy' title='Ancient Indian Art and Metallurgy' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#2b1b17] text-[#f4ead8] p-6'>
          <h3 className='text-xl font-semibold font-sans'>Modern Usage</h3>
          <p className='mt-3 text-sm md:text-base text-[#f4ead8]/85'>
            Contemporary sculptors and foundries still adapt lost-wax methods for complex components where detail fidelity and
            sculptural richness matter. The Indian tradition remains both a living craft and a historical benchmark.
          </p>
          <p className='sr-only'>Keywords: lost wax casting india, bronze nataraja</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
