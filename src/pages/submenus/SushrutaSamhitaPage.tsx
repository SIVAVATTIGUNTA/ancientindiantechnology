import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function SushrutaSamhitaPage() {
  useEffect(() => {
    document.title = 'Sushruta Samhita - Surgical Heritage and Case Knowledge';
  }, []);

  const surgicalDomains = [
    {
      title: 'Shalya Tantra',
      text: 'The surgical branch covers removal of foreign bodies, wound management, incisions, excisions, probing, drainage, suturing, and operative judgment.',
    },
    {
      title: 'Instrument Knowledge',
      text: 'The text classifies sharp and blunt instruments, emphasizing that tool choice, grip, and purpose matter as much as the operation itself.',
    },
    {
      title: 'Anatomy and Training',
      text: 'Training includes observation, anatomical study, practice models, and staged learning before a student approaches real procedures.',
    },
    {
      title: 'Aftercare',
      text: 'Postoperative care includes wound cleaning, bandaging, diet, rest, monitoring, and management of complications.',
    },
  ];

  const procedureAreas = [
    ['Rhinoplasty', 'Reconstruction of the nose is one of the most famous traditions associated with Sushruta.'],
    ['Lithotomy', 'Removal of urinary stones appears as a carefully described surgical problem.'],
    ['Fractures', 'Bone injury management includes classification, stabilization, and recovery support.'],
    ['Wounds', 'Wound types, cleaning, dressing, and healing signs are treated in detail.'],
    ['Obstetric surgery', 'The text includes difficult birth and fetal extraction discussions within its surgical scope.'],
    ['Ophthalmic procedures', 'Eye disease and cataract-related procedures appear in later surgical reception and discussion.'],
  ];

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

        <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {surgicalDomains.map((item) => (
            <article key={item.title} className='rounded-xl border border-[#8d4f36]/20 bg-white/70 p-5 shadow-sm'>
              <h3 className='font-semibold text-[#8d4f36]'>{item.title}</h3>
              <p className='mt-2 text-sm leading-relaxed text-[#3a231a]/78'>{item.text}</p>
            </article>
          ))}
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 transition-all duration-300 ease-out'>
          <h3 className='text-xl font-semibold'>Surgical Timeline</h3>
          <div className='mt-4 grid md:grid-cols-4 gap-3 text-sm'>
            {['Patient assessment', 'Preparation & cleansing', 'Operative procedure', 'Recovery protocol'].map((step) => (
              <div key={step} className='rounded-lg border border-[#8d4f36]/15 bg-white/60 p-3'>{step}</div>
            ))}
          </div>
        </section>

        <section className='rounded-xl border border-[#8d4f36]/20 bg-white/70 p-6'>
          <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Surgical Scope</p>
          <h2 className='mt-3 text-2xl font-semibold'>Procedure Areas Discussed in the Tradition</h2>
          <p className='mt-4 text-sm md:text-base leading-relaxed text-[#3a231a]/84'>
            Sushruta&apos;s importance is not only that individual operations are mentioned. The stronger point is that surgery is
            organized as a discipline: anatomy, training, instruments, indications, method, risk, and recovery all appear together.
          </p>
          <div className='mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
            {procedureAreas.map(([title, text]) => (
              <article key={title} className='rounded-lg border border-[#8d4f36]/15 bg-[#f8f0e3] p-4'>
                <h3 className='font-semibold'>{title}</h3>
                <p className='mt-2 text-sm leading-relaxed text-[#3a231a]/78'>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]'>
            <h3 className='text-xl font-semibold'>Procedure Breakdown</h3>
            <p className='mt-3 text-sm leading-relaxed text-[#3a231a]/84'>
              This section presents Sushruta&apos;s surgical thinking as a disciplined sequence: deciding whether a procedure is suitable,
              preparing the patient and space, choosing the correct instrument, then managing recovery with the same care as the operation.
            </p>
            <ul className='mt-4 space-y-2 text-sm text-[#3a231a]/84'>
              <li>- Case selection and contraindications</li>
              <li>- Instrument choice and incision planning</li>
              <li>- Tissue handling and blood control</li>
              <li>- Follow-up, diet, and wound-care guidance</li>
            </ul>
            <div className='mt-5 grid sm:grid-cols-2 gap-3'>
              {[
                ['Before', 'Assess strength, age, wound type, season, food habits, and whether surgery is truly needed.'],
                ['During', 'Use clean tools, steady hand control, clear visibility, and measured cutting rather than force.'],
                ['After', 'Protect the wound with dressing, rest, diet guidance, and repeated observation for healing signs.'],
                ['Teaching Value', 'The page should make surgery feel like protocol-based knowledge, not a dramatic one-time act.'],
              ].map(([title, text]) => (
                <div key={title} className='rounded-lg border border-[#8d4f36]/15 bg-white/65 p-3'>
                  <p className='text-sm font-semibold text-[#8d4f36]'>{title}</p>
                  <p className='mt-1 text-xs leading-relaxed text-[#3a231a]/78'>{text}</p>
                </div>
              ))}
            </div>
            <div className='mt-5 rounded-lg border border-[#8d4f36]/15 bg-[#2b1b17] p-4 text-[#f4ead8]'>
              <p className='text-xs uppercase tracking-[0.14em] text-[#d4b26a]'>Historical Focus</p>
              <p className='mt-2 text-sm leading-relaxed text-[#f4ead8]/86'>
                Good content here should emphasize medical history, training, instruments, wound care, and patient safety. It should not
                read like a modern surgical instruction manual.
              </p>
            </div>
          </article>
          <img src='/sushruta-surgery.jpg' alt='Surgical case illustration and instrument layout' className='h-full min-h-[280px] w-full object-cover object-center border border-[#8d4f36]/20' />
        </section>

        <section className='grid lg:grid-cols-[1fr_1fr] gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold'>Training Before Practice</h3>
            <p className='mt-3 text-sm md:text-base leading-relaxed text-[#3a231a]/84'>
              The surgical tradition places unusual emphasis on training. Students are expected to learn anatomy, observe, practice
              cutting and probing on models, understand instruments, and develop steadiness before working on patients.
            </p>
          </article>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold'>Why It Still Matters</h3>
            <p className='mt-3 text-sm md:text-base leading-relaxed text-[#3a231a]/84'>
              Sushruta is useful for history-of-science education because it shows surgery as organized knowledge, not as improvisation.
              The page should highlight method, risk awareness, and disciplined aftercare rather than turning the text into legend.
            </p>
          </article>
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

        <section className='border border-[#8d4f36]/20 bg-[#2b1b17] p-6 text-[#f4ead8]'>
          <h3 className='text-xl font-semibold'>Medical Context Note</h3>
          <p className='mt-2 text-sm md:text-base leading-relaxed text-[#f4ead8]/86'>
            Surgical history should never be read as a how-to guide. These sections explain Sushruta as heritage, medical history, and
            knowledge organization; real surgical care belongs only in qualified clinical settings.
          </p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
