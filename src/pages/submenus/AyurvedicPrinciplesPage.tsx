import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function AyurvedicPrinciplesPage() {
  useEffect(() => {
    document.title = 'Ayurvedic Principles - Interactive Wellness Dashboard';
  }, []);

  const doshaDetails = [
    {
      t: 'Vata',
      d: 'Movement, nervous activity, dryness balance',
      detail: 'Traditionally linked with motion, breathing, circulation, elimination, speech, and sensory activity.',
    },
    {
      t: 'Pitta',
      d: 'Metabolism, heat, transformation balance',
      detail: 'Used to explain digestion, body heat, visual processing, appetite, and biochemical transformation.',
    },
    {
      t: 'Kapha',
      d: 'Structure, stability, lubrication balance',
      detail: 'Associated with tissue stability, joint lubrication, endurance, cohesion, and grounded physical strength.',
    },
  ];

  const balanceFactors = [
    {
      title: 'Agni - Digestive Capacity',
      text:
        'Ayurveda gives digestion a central role. Agni is the principle used to discuss appetite, assimilation, energy, and whether food is being processed cleanly.',
    },
    {
      title: 'Dhatus - Body Tissues',
      text:
        'The classical model describes seven tissue layers, from nutritive fluid and blood through muscle, fat, bone, marrow, and reproductive tissue.',
    },
    {
      title: 'Mala - Waste Pathways',
      text:
        'Elimination is treated as part of health, not an afterthought. Stool, urine, sweat, and other waste routes are read as signs of internal balance.',
    },
    {
      title: 'Ojas - Resilience',
      text:
        'Ojas is used as a traditional idea of vitality and resilience, often discussed in relation to rest, nourishment, immunity, and recovery.',
    },
  ];

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
          {doshaDetails.map((d) => (
            <article key={d.t} className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-5 shadow-sm hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
              <p className='text-lg font-semibold text-[#8d4f36]'>{d.t}</p>
              <p className='mt-1 text-sm text-[#3a231a]/82'>{d.d}</p>
              <p className='mt-3 text-sm leading-relaxed text-[#3a231a]/72'>{d.detail}</p>
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

        <section className='grid lg:grid-cols-[0.95fr_1.05fr] gap-6'>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-6 shadow-sm'>
            <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Core Framework</p>
            <h2 className='mt-3 text-2xl font-semibold'>How Ayurveda Reads Health</h2>
            <p className='mt-4 text-sm md:text-base leading-relaxed text-[#3a231a]/84'>
              Ayurveda presents health as a dynamic relationship between constitution, digestion, sleep, environment, season, mental state,
              and daily routine. The tridosha model is a teaching framework for pattern recognition, not a replacement for modern diagnosis.
            </p>
            <p className='mt-3 text-sm md:text-base leading-relaxed text-[#3a231a]/80'>
              A useful page should therefore show how the system organizes observations: what changes, what stays stable, what aggravates a
              pattern, and what kind of support is traditionally considered restorative.
            </p>
          </article>

          <div className='grid sm:grid-cols-2 gap-4'>
            {balanceFactors.map((item) => (
              <article key={item.title} className='rounded-xl border border-[#8d4f36]/18 bg-[#f8f0e3] p-5'>
                <h3 className='font-semibold text-[#2b1b17]'>{item.title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-[#3a231a]/78'>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-6'>
          <h2 className='text-2xl font-semibold'>Daily and Seasonal Rhythm</h2>
          <div className='mt-5 grid md:grid-cols-3 gap-4'>
            <article className='rounded-lg border border-[#8d4f36]/15 bg-[#f8f0e3] p-4'>
              <h3 className='font-semibold'>Dinacharya</h3>
              <p className='mt-2 text-sm leading-relaxed text-[#3a231a]/78'>
                Daily routine is used to stabilize sleep, meals, movement, hygiene, and mental steadiness.
              </p>
            </article>
            <article className='rounded-lg border border-[#8d4f36]/15 bg-[#f8f0e3] p-4'>
              <h3 className='font-semibold'>Ritucharya</h3>
              <p className='mt-2 text-sm leading-relaxed text-[#3a231a]/78'>
                Seasonal routine explains why food, activity, and rest may be adjusted as heat, cold, dryness, and humidity change.
              </p>
            </article>
            <article className='rounded-lg border border-[#8d4f36]/15 bg-[#f8f0e3] p-4'>
              <h3 className='font-semibold'>Sadvritta</h3>
              <p className='mt-2 text-sm leading-relaxed text-[#3a231a]/78'>
                Ethical and mental conduct is treated as part of health, linking emotional balance with behavior and community life.
              </p>
            </article>
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

        <section className='rounded-xl border border-[#8d4f36]/20 bg-[#2b1b17] p-6 text-[#f4ead8]'>
          <h3 className='text-xl font-semibold'>Educational Safety Note</h3>
          <p className='mt-2 text-sm md:text-base leading-relaxed text-[#f4ead8]/86'>
            This page explains Ayurveda as a historical and cultural knowledge system. It should not present herbs, detox routines, or
            dosha advice as medical treatment. Visitors should consult qualified clinicians for health conditions, pregnancy, medicines,
            or supplement safety.
          </p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
