import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function CharakaSamhitaPage() {
  useEffect(() => {
    document.title = 'Charaka Samhita - Medical Knowledge System';
  }, []);

  const sthanas = [
    ['Sutra', 'Foundational principles, diet, regimen, and therapeutic orientation.'],
    ['Nidana', 'Causes, symptoms, and diagnostic features of major disease groups.'],
    ['Vimana', 'Clinical method, measurement, classification, and standards of medical knowledge.'],
    ['Sharira', 'Body, development, constitution, pregnancy, and embodied life.'],
    ['Indriya', 'Prognostic signs and sensory indicators used to judge outcomes.'],
    ['Chikitsa', 'Therapeutic management and treatment reasoning.'],
    ['Kalpa', 'Preparations and procedures used in purification therapies.'],
    ['Siddhi', 'Execution, results, and complications of therapeutic procedures.'],
  ];

  const clinicalLenses = [
    {
      title: 'Cause and Context',
      text:
        'Charaka asks why a condition emerges: diet, season, behavior, constitution, environment, and mental state all become part of case reasoning.',
    },
    {
      title: 'Patient-Specific Assessment',
      text:
        'The text repeatedly values individualized judgment, including strength, age, habit, digestion, disease stage, and response to intervention.',
    },
    {
      title: 'Prevention and Recovery',
      text:
        'Health is not limited to curing disease. Daily regimen, seasonal adaptation, diet, sleep, and conduct are presented as preventive foundations.',
    },
  ];

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

        <section className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-6 md:p-8'>
          <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Text Architecture</p>
          <h2 className='mt-3 text-2xl font-semibold'>The Eight Sthanas of Charaka Samhita</h2>
          <p className='mt-4 text-sm md:text-base leading-relaxed text-[#3a231a]/84'>
            Charaka Samhita is not a loose collection of remedies. It is organized as a medical knowledge system, moving from
            foundations and diagnosis to prognosis, therapeutics, pharmaceutical preparation, and procedural outcomes.
          </p>
          <div className='mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3'>
            {sthanas.map(([name, text]) => (
              <article key={name} className='rounded-lg border border-[#8d4f36]/15 bg-[#f8f0e3] p-4'>
                <h3 className='font-semibold text-[#8d4f36]'>{name} Sthana</h3>
                <p className='mt-2 text-sm leading-relaxed text-[#3a231a]/78'>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h2 className='text-2xl font-semibold'>Diagnosis to Treatment Flow</h2>
            <div className='mt-4 grid md:grid-cols-4 gap-3 text-sm'>
              {['Observation', 'Classification', 'Etiology', 'Treatment Plan'].map((s) => (
                <div key={s} className='rounded-lg border border-[#8d4f36]/15 bg-white/60 p-3'>{s}</div>
              ))}
            </div>
            <p className='mt-4 text-sm leading-relaxed text-[#3a231a]/84'>
              Charaka&apos;s framework emphasizes reasoning: cause, constitution, stage, strength, digestion, season, and response. The
              goal is to understand the whole case before choosing diet, regimen, medicine, or procedure.
            </p>
            <div className='mt-5 grid sm:grid-cols-2 gap-3'>
              {[
                ['Observe', 'Read signs through history, appetite, sleep, elimination, pain pattern, and visible change.'],
                ['Classify', 'Place the condition within disease type, dosha pattern, tissue involvement, and severity.'],
                ['Find Cause', 'Trace diet, behavior, season, environment, stress, and constitution as possible contributors.'],
                ['Plan Care', 'Match therapy intensity to patient strength, disease stage, medicine quality, and support.'],
              ].map(([title, text]) => (
                <div key={title} className='rounded-lg border border-[#8d4f36]/15 bg-white/65 p-3'>
                  <p className='text-sm font-semibold text-[#8d4f36]'>{title}</p>
                  <p className='mt-1 text-xs leading-relaxed text-[#3a231a]/78'>{text}</p>
                </div>
              ))}
            </div>
            <div className='mt-5 rounded-lg border border-[#8d4f36]/15 bg-white/70 p-4'>
              <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Useful Learning Angle</p>
              <p className='mt-2 text-sm leading-relaxed text-[#3a231a]/82'>
                Present Charaka as clinical logic: observe carefully, explain cause, adapt treatment to the person, and keep checking
                whether the response confirms the plan.
              </p>
            </div>
          </article>
          <img src='/medicine-ayurveda.jpg' alt='Ayurvedic clinical notes and herbal diagnosis visual' className='h-full min-h-[280px] w-full object-cover object-center border border-[#8d4f36]/20 rounded-xl' />
        </section>

        <section className='grid md:grid-cols-3 gap-4'>
          {clinicalLenses.map((item) => (
            <article key={item.title} className='rounded-xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-5'>
              <h3 className='font-semibold'>{item.title}</h3>
              <p className='mt-2 text-sm leading-relaxed text-[#3a231a]/80'>{item.text}</p>
            </article>
          ))}
        </section>

        <section className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-6'>
          <h2 className='text-2xl font-semibold'>The Four Supports of Care</h2>
          <p className='mt-3 text-sm md:text-base leading-relaxed text-[#3a231a]/84'>
            Classical Ayurvedic teaching often frames successful care as a collaboration between physician, medicine, attendant or
            care support, and patient. That is a surprisingly modern idea: outcomes depend not only on a prescription, but on skill,
            preparation quality, follow-through, and the patient&apos;s condition.
          </p>
          <div className='mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm'>
            {['Qualified physician', 'Appropriate medicine', 'Reliable care support', 'Prepared patient'].map((item) => (
              <div key={item} className='rounded-lg border border-[#8d4f36]/15 bg-[#f8f0e3] p-4'>{item}</div>
            ))}
          </div>
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

        <section className='rounded-xl border border-[#8d4f36]/20 bg-[#2b1b17] p-6 text-[#f4ead8]'>
          <h3 className='text-xl font-semibold'>Responsible Reading</h3>
          <p className='mt-2 text-sm md:text-base leading-relaxed text-[#f4ead8]/86'>
            Charaka Samhita is valuable as medical history and as a record of systematic clinical reasoning. This page should avoid
            presenting ancient prescriptions as direct self-treatment guidance, especially for chronic disease, pregnancy, children, or
            medication interactions.
          </p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
