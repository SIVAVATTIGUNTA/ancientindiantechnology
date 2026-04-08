import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function ZincDistillationPage() {
  useEffect(() => {
    document.title = 'Zinc Distillation India - Zawar Industrial Breakthrough';
  }, []);

  return (
    <main className='min-h-screen bg-[#f4ead8] text-[#2b1b17]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[50vh] min-h-[340px]'><img src='/zinc-distillation.jpg' alt='Zawar mines Rajasthan historic zinc distillation context' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#2b1b17]/82 via-[#2b1b17]/55 to-[#2b1b17]/75' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]'>Metallurgy</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]'>Zinc Distillation - India&apos;s Forgotten Industrial Breakthrough</h1>
            <p className='mt-3 text-[#f4ead8]/90'>The world&apos;s first large-scale zinc production technology.</p>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8'>
          <h2 className='text-2xl md:text-3xl font-sans font-semibold'>Introduction</h2>
          <p className='mt-4 text-[#3a231a]/85 leading-relaxed'>
            Ancient India pioneered zinc extraction through distillation centuries before Europe. At the Zawar mining complex in
            Rajasthan, metallurgists developed efficient ceramic retort systems to condense metallic zinc from ore at controlled
            temperatures - a documented world first in industrial non-ferrous metallurgy.
          </p>
        </article>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Top Video</p>
          <h3 className='mt-2 text-xl font-semibold font-sans'>World&apos;s First Zinc Distillation - India&apos;s Forgotten Technology</h3>
          <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=worlds%20first%20zinc%20distillation%20india' title='World First Zinc Distillation India' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>The Zawar Mines</h3>
            <ul className='mt-4 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- One of the oldest large zinc-production sites known globally.</li>
              <li>- Integrated mining, ore preparation, and furnace-retort operations.</li>
              <li>- Demonstrates organized industrial workflow rather than isolated artisanal output.</li>
            </ul>
          </article>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>Why Zinc Was Difficult</h3>
            <ul className='mt-4 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Zinc vaporizes at high temperature before easy open-furnace collection.</li>
              <li>- Distillation demanded sealed pathways and condensation control.</li>
              <li>- Zawar engineers solved this with inverted retort-condensation setups.</li>
            </ul>
          </article>
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <h3 className='text-xl font-semibold font-sans'>Distillation Process Explained</h3>
          <div className='mt-4 grid md:grid-cols-4 gap-3 text-sm'>
            {[
              'Ore roasting and preparation',
              'Charging sealed retorts',
              'Controlled furnace heating',
              'Vapor condensation to metallic zinc',
            ].map((step) => (
              <div key={step} className='border border-[#8d4f36]/15 bg-white/55 p-3'>{step}</div>
            ))}
          </div>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>Global Impact</h3>
            <p className='mt-3 text-sm text-[#3a231a]/84'>
              India&apos;s early control over zinc extraction contributed to alloy traditions and trade value. The technology
              demonstrates a deep understanding of process engineering and thermal chemistry in pre-modern industry.
            </p>
          </article>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>Archaeological Evidence</h3>
            <p className='mt-3 text-sm text-[#3a231a]/84'>
              Excavated furnace remains, retort fragments, and production debris at Zawar provide material confirmation of sustained
              high-volume zinc distillation.
            </p>
          </article>
        </section>

        <section className='grid md:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Mid Video</p>
            <h3 className='text-lg font-semibold font-sans'>Video: Zinc Distillation in Ancient India</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=zinc%20distillation%20ancient%20india' title='Zinc Distillation Ancient India' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-lg font-semibold font-sans'>Video: Zawar Mines Documentary</h3>
            <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=zawar%20mines%20history%20documentary' title='Zawar Mines Documentary' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
        </section>

        <section className='grid md:grid-cols-3 gap-5'>
          <img src='/zinc-distillation.jpg' alt='Zawar mines Rajasthan view' className='h-56 w-full object-cover object-center border border-[#8d4f36]/20' />
          <img src='/hero-metallurgy.png' alt='Ancient zinc furnace concept visual' className='h-56 w-full object-cover object-center border border-[#8d4f36]/20' />
          <img src='/wootz-blade.jpg' alt='Zinc distillation process diagram style visual' className='h-56 w-full object-cover object-center border border-[#8d4f36]/20' />
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>End Video</p>
          <h3 className='mt-2 text-lg font-semibold font-sans'>How Zinc is Extracted - Ancient vs Modern</h3>
          <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=how%20zinc%20is%20extracted%20ancient%20vs%20modern' title='How Zinc is Extracted Ancient vs Modern' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='bg-[#2b1b17] text-[#f4ead8] p-6 border border-[#8d4f36]/20'>
          <h3 className='text-xl font-semibold font-sans'>Industrial Legacy</h3>
          <p className='mt-3 text-sm md:text-base text-[#f4ead8]/85'>
            Zinc distillation at Zawar represents a rare case where archaeology, process engineering, and industrial history align to
            prove that ancient India pioneered a difficult metallurgical technology at scale.
          </p>
          <p className='sr-only'>Keywords: zinc distillation india, zawar mines</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
