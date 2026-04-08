import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function VaastuShastraPage() {
  useEffect(() => {
    document.title = 'Vaastu Shastra - Science of Space and Energy';
  }, []);

  return (
    <main className='min-h-screen bg-[#f6efe5] text-[#2b1b17]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[50vh] min-h-[340px]'><img src='/vaastu-shastra.jpg' alt='Vaastu-inspired modern home spatial layout' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#2b1b17]/82 via-[#2b1b17]/55 to-[#2b1b17]/75' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]'>Interior + Spiritual Guide</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]'>Vaastu Shastra - The Science of Space and Energy</h1>
            <p className='mt-3 text-[#f4ead8]/90'>A premium blend of directional planning, elemental balance, and modern spatial design.</p>
          </div>
        </div>
      </section>
      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8'>
        <section className='grid md:grid-cols-5 gap-4'>
          {[
            'Earth',
            'Water',
            'Fire',
            'Air',
            'Space',
          ].map((el) => (
            <article key={el} className='border border-[#8d4f36]/20 bg-white/75 p-5 text-center'>
              <p className='text-sm uppercase tracking-[0.12em] text-[#8d4f36]'>Element</p>
              <p className='mt-2 text-lg font-semibold'>{el}</p>
            </article>
          ))}
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-white/75 p-6'>
            <h2 className='text-2xl font-semibold'>Core Principles</h2>
            <ul className='mt-4 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Directional orientation for light, airflow, and thermal comfort.</li>
              <li>- Spatial hierarchy balancing private, shared, and sacred zones.</li>
              <li>- Elemental alignment guiding material and room function choices.</li>
            </ul>
          </article>
          <article className='border border-[#8d4f36]/20 bg-white/75 p-6'>
            <h2 className='text-2xl font-semibold'>House Layout Guide</h2>
            <ul className='mt-4 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Entry orientation and circulation path management.</li>
              <li>- Recommended zones for kitchen, rest, and focus spaces.</li>
              <li>- Energy flow arrows for layout refinement in apartments and offices.</li>
            </ul>
          </article>
        </section>

        <section className='grid md:grid-cols-2 gap-6'>
          <img src='/vaastu-shastra.jpg' alt='Vaastu house plan concept' className='h-60 w-full object-cover object-center border border-[#8d4f36]/20' />
          <img src='/sun-temple.jpg' alt='Compass and directional planning visual' className='h-60 w-full object-cover object-center border border-[#8d4f36]/20' />
        </section>

        <section className='border border-[#8d4f36]/20 bg-white/75 p-6'>
          <h3 className='text-lg font-semibold'>Video: Vaastu Shastra Explained for Modern Homes</h3>
          <div className='mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=vastu%20shastra%20explained%20modern%20homes' title='Vaastu Shastra Explained Modern Homes' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='border border-[#8d4f36]/20 bg-white/75 p-6'>
          <h3 className='text-xl font-semibold'>Content & Media Notes</h3>
          <div className='mt-4 grid lg:grid-cols-2 gap-6 text-sm'>
            <div>
              <p className='font-semibold text-[#8d4f36]'>What This Section Must Show</p>
              <ul className='mt-2 space-y-2 text-[#3a231a]/84'>
                <li>- Direction-based planning translated into modern usable layouts.</li>
                <li>- Five-element framework connected to room behavior and comfort.</li>
                <li>- Energy flow explained with practical apartment and office examples.</li>
              </ul>
              <p className='mt-4 font-semibold text-[#8d4f36]'>Design Direction</p>
              <p className='mt-2 text-[#3a231a]/84'>Keep it soft and premium: minimal cards, calm palette, and clear directional visuals.</p>
            </div>
            <div>
              <p className='font-semibold text-[#8d4f36]'>Recommended Search Focus</p>
              <p className='mt-2 text-[#3a231a]/84'>Vaastu compass diagram, room placement charts, modern Vaastu apartment plans, interior directional lighting layouts, workspace Vaastu zoning.</p>
              <p className='mt-4 font-semibold text-[#8d4f36]'>Video Flow</p>
              <ul className='mt-2 space-y-2 text-[#3a231a]/84'>
                <li>- Intro explainer for core Vaastu principles.</li>
                <li>- Mid practical examples for homes and apartments.</li>
                <li>- End application guidance for office and lifestyle spaces.</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
