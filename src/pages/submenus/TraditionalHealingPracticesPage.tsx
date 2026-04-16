import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function TraditionalHealingPracticesPage() {
  useEffect(() => {
    document.title = 'Traditional Healing Practices - Panchakarma and Rasayana';
  }, []);

  const therapyModules = [
    {
      title: 'Abhyanga',
      text:
        'Oil massage is traditionally used to support relaxation, lubrication, circulation, and preparation for deeper cleansing routines.',
    },
    {
      title: 'Shirodhara',
      text:
        'A continuous stream of warm oil over the forehead is presented as a calming therapy focused on rest, sleep, and nervous-system steadiness.',
    },
    {
      title: 'Swedana',
      text:
        'Therapeutic sweating is used as a preparatory measure, often described as helping soften tissues and mobilize accumulated heaviness.',
    },
  ];

  const rasayanaIdeas = [
    'Nourishing diet and digestion support',
    'Rest, sleep, and recovery discipline',
    'Mental calm and ethical conduct',
    'Age, strength, and constitution awareness',
  ];

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
          <p className='mt-4 text-sm md:text-base leading-relaxed text-[#3a231a]/82'>
            Panchakarma is best explained as a supervised therapeutic sequence rather than a generic detox slogan. Classical discussion
            separates preparation, main procedures, and recovery because timing and patient suitability are central to the tradition.
          </p>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h3 className='text-xl font-semibold'>Rasayana Highlight</h3>
            <p className='mt-3 text-sm text-[#3a231a]/84'>Rasayana emphasizes long-term rejuvenation through nutrition, behavior, and restorative formulations tuned to constitution and age.</p>
            <div className='mt-4 grid sm:grid-cols-2 gap-3'>
              {rasayanaIdeas.map((item) => (
                <div key={item} className='rounded-lg border border-[#8d4f36]/15 bg-[#f8f0e3] p-3 text-sm text-[#3a231a]/82'>{item}</div>
              ))}
            </div>
          </article>
          <img src='/medicine-ayurveda.jpg' alt='Ayurvedic therapy and herbal rejuvenation setting' className='h-full min-h-[280px] w-full object-cover object-center rounded-xl border border-[#8d4f36]/20' />
        </section>

        <section className='grid md:grid-cols-3 gap-4'>
          {therapyModules.map((therapy) => (
            <article key={therapy.title} className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-5 shadow-sm hover:-translate-y-1 transition-all duration-300 ease-out hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
              <p className='text-lg font-semibold text-[#8d4f36]'>{therapy.title}</p>
              <p className='mt-2 text-sm leading-relaxed text-[#3a231a]/82'>{therapy.text}</p>
            </article>
          ))}
        </section>

        <section className='grid lg:grid-cols-[1.05fr_0.95fr] gap-6'>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Therapy Logic</p>
            <h2 className='mt-3 text-2xl font-semibold'>Preparation, Main Therapy, Recovery</h2>
            <p className='mt-4 text-sm md:text-base leading-relaxed text-[#3a231a]/84'>
              Traditional healing practices are often misunderstood when only the visible therapy is shown. The fuller sequence includes
              assessment, preparation with oil or heat, the main intervention, and a recovery period with diet and rest.
            </p>
            <div className='mt-5 grid md:grid-cols-3 gap-3 text-sm'>
              <div className='rounded-lg border border-[#8d4f36]/15 bg-white/65 p-4'>Assess constitution, strength, age, and suitability.</div>
              <div className='rounded-lg border border-[#8d4f36]/15 bg-white/65 p-4'>Prepare the body with diet, oiling, sweating, or rest.</div>
              <div className='rounded-lg border border-[#8d4f36]/15 bg-white/65 p-4'>Recover gradually with supervised food and routine.</div>
            </div>
          </article>
          <article className='rounded-xl border border-[#8d4f36]/20 bg-white/75 p-6'>
            <h3 className='text-xl font-semibold'>What Visitors Should Learn</h3>
            <ul className='mt-4 space-y-3 text-sm leading-relaxed text-[#3a231a]/82'>
              <li>- Panchakarma is a clinical sequence, not a weekend wellness trend.</li>
              <li>- Rasayana is about restoration over time, not a single miracle herb.</li>
              <li>- Traditional therapies depend on suitability and supervision.</li>
              <li>- The most useful modern lesson is rhythm, recovery, and individualized care.</li>
            </ul>
          </article>
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

        <section className='rounded-xl border border-[#8d4f36]/20 bg-[#2b1b17] p-6 text-[#f4ead8]'>
          <h3 className='text-xl font-semibold'>Safety and Suitability</h3>
          <p className='mt-2 text-sm md:text-base leading-relaxed text-[#f4ead8]/86'>
            Panchakarma, herbal preparations, fasting, intense heat, and oil therapies may be unsuitable for some people. This page
            should frame the practices as cultural and historical education, not as self-prescribed medical treatment.
          </p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
