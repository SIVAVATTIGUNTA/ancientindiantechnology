import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function DelhiIronPillarPage() {
  useEffect(() => {
    document.title = 'Delhi Iron Pillar Mystery - Ancient Rust-Free Technology';
    const meta = document.querySelector('meta[name="description"]');
    const description =
      "Explore the Delhi Iron Pillar's 1,600-year corrosion resistance and the metallurgical science behind this ancient Indian engineering marvel.";
    if (meta) meta.setAttribute('content', description);
  }, []);

  return (
    <main className='min-h-screen bg-[#f4ead8] text-[#2b1b17]'>
      <SubmenuHeaderNav />
      <section className='relative overflow-hidden'>
        <div className='h-[52vh] min-h-[360px]'><img src='/iron-pillar.jpg' alt='Qutub Minar complex iron pillar close-up' className='h-full w-full object-cover object-center' /></div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#2b1b17]/82 via-[#2b1b17]/55 to-[#2b1b17]/75' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]'>Metallurgy</p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]'>The Delhi Iron Pillar - Rust-Free for 1,600 Years</h1>
            <p className='mt-3 text-[#f4ead8]/90'>An ancient Indian metallurgical marvel that still defies modern science.</p>
            <a href='#mystery' className='mt-5 inline-flex bg-[#d4b26a] px-5 py-2.5 text-sm font-semibold text-[#2b1b17] hover:bg-[#c89f4d] transition-colors'>Discover the Mystery</a>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8' id='mystery'>
        <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8'>
          <h2 className='text-2xl md:text-3xl font-sans font-semibold'>Introduction</h2>
          <p className='mt-4 leading-relaxed text-[#3a231a]/85'>
            The Delhi Iron Pillar stands as one of the most remarkable achievements of ancient Indian metallurgy. Dating to the
            4th century CE, this massive forged iron monument has resisted severe corrosion for over 1,600 years in an outdoor
            environment. Its composition and passive surface chemistry continue to attract materials scientists globally.
          </p>
        </article>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Top Video</p>
          <h3 className='mt-2 text-xl font-semibold font-sans'>Mystery of the Rust-Free Iron Pillar of Delhi</h3>
          <div className='mt-3 aspect-video overflow-hidden bg-black border border-[#8d4f36]/20'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=iron%20pillar%20mystery%20rust%20proof%20iron%20india' title='Mystery of Rust-Free Delhi Iron Pillar' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>How Was It Made</h3>
            <ul className='mt-4 space-y-2 text-sm text-[#3a231a]/85'>
              <li>- Built through forge-welding of multiple iron blooms into one monumental shaft.</li>
              <li>- Demonstrates control of large-scale heating, hammer consolidation, and shaping.</li>
              <li>- Reflects advanced iron production tradition in the Gupta-period technological ecosystem.</li>
            </ul>
          </article>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>Why It Doesn&apos;t Rust</h3>
            <ul className='mt-4 space-y-2 text-sm text-[#3a231a]/85'>
              <li>- Elevated phosphorus content supports formation of a protective passive surface layer.</li>
              <li>- This adherent film (often linked with misawite-like compounds) slows deep corrosion.</li>
              <li>- Dry-wet environmental cycling and surface chemistry together stabilize long-term resistance.</li>
            </ul>
          </article>
        </section>

        <section className='grid lg:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>Scientific Analysis</h3>
            <p className='mt-3 text-sm text-[#3a231a]/84'>
              Modern metallography and corrosion studies focus on slag inclusions, phosphorus distribution, and passive film behavior.
              The pillar is now treated as a benchmark case in historical materials durability research.
            </p>
          </article>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-xl font-semibold font-sans'>Historical Significance</h3>
            <p className='mt-3 text-sm text-[#3a231a]/84'>
              Attributed to the Gupta era and associated with King Chandragupta II, the pillar reflects both political symbolism and
              high technological confidence in iron craftsmanship.
            </p>
          </article>
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <h3 className='text-xl font-semibold font-sans'>Myth vs Science</h3>
          <div className='mt-4 grid md:grid-cols-2 gap-4 text-sm'>
            <div className='bg-white/50 p-4 border border-[#8d4f36]/15'>
              <p className='font-semibold'>Myth</p>
              <p className='mt-1 text-[#3a231a]/84'>The pillar never corrodes because of unknown supernatural treatment.</p>
            </div>
            <div className='bg-white/50 p-4 border border-[#8d4f36]/15'>
              <p className='font-semibold'>Science</p>
              <p className='mt-1 text-[#3a231a]/84'>Its resistance is explained by composition, forge quality, and protective passive film formation.</p>
            </div>
          </div>
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <h3 className='text-xl font-semibold font-sans'>Comparison: Modern Iron vs Delhi Iron Pillar</h3>
          <div className='mt-4 grid md:grid-cols-2 gap-4 text-sm'>
            <div className='bg-white/50 p-4 border border-[#8d4f36]/15'>
              <p className='font-semibold'>Typical Modern Mild Iron</p>
              <ul className='mt-2 space-y-1 text-[#3a231a]/84'>
                <li>- Lower phosphorus content</li>
                <li>- Rapid oxidation without coating</li>
                <li>- Requires paint/alloy protection</li>
              </ul>
            </div>
            <div className='bg-white/50 p-4 border border-[#8d4f36]/15'>
              <p className='font-semibold'>Delhi Iron Pillar</p>
              <ul className='mt-2 space-y-1 text-[#3a231a]/84'>
                <li>- Historical high-phosphorus wrought iron</li>
                <li>- Passive corrosion-resistant layer develops naturally</li>
                <li>- Extraordinary long-term atmospheric durability</li>
              </ul>
            </div>
          </div>
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <h3 className='text-xl font-semibold font-sans'>Timeline: Gupta Era to Present</h3>
          <div className='mt-4 grid md:grid-cols-4 gap-3 text-sm'>
            {[
              '4th century CE: Pillar erected in Gupta period',
              'Medieval to early modern era: Survives environmental exposure',
              'Colonial era: Becomes major curiosity in metallurgy',
              'Modern day: Continues to inspire corrosion science',
            ].map((t) => (
              <div key={t} className='bg-white/50 border border-[#8d4f36]/15 p-3'>{t}</div>
            ))}
          </div>
        </section>

        <section className='grid md:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Mid Video</p>
            <h3 className='text-lg font-semibold font-sans'>Video: Why Delhi Iron Pillar Doesn&apos;t Rust</h3>
            <div className='mt-3 aspect-video overflow-hidden bg-black border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=delhi%20iron%20pillar%20science%20documentary' title='Why Delhi Iron Pillar Does Not Rust' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h3 className='text-lg font-semibold font-sans'>Video: Ancient Indian Metallurgy Explained</h3>
            <div className='mt-3 aspect-video overflow-hidden bg-black border border-[#8d4f36]/20'>
              <iframe src='https://www.youtube.com/embed?listType=search&list=iron%20pillar%20india%20metallurgy' title='Ancient Indian Metallurgy Explained' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
          </article>
        </section>

        <section className='grid md:grid-cols-3 gap-5'>
          <img src='/iron-pillar.jpg' alt='Iron pillar Delhi close-up rust-free surface' className='h-64 w-full object-cover object-center border border-[#8d4f36]/20' />
          <img src='/urban-planning.jpg' alt='Qutub complex pillar wide shot context image' className='h-64 w-full object-cover object-center border border-[#8d4f36]/20' />
          <img src='/hero-metallurgy.png' alt='Ancient Indian iron forging process visualization' className='h-64 w-full object-cover object-center border border-[#8d4f36]/20' />
          <img src='/wootz-blade.jpg' alt='Corrosion resistance diagram style visual reference' className='h-64 w-full object-cover object-center border border-[#8d4f36]/20' />
          <img src='/iron-pillar.jpg' alt='Delhi iron pillar inscription and texture close capture' className='h-64 w-full object-cover object-center border border-[#8d4f36]/20' />
          <img src='/urban-planning.jpg' alt='Qutub complex aerial-style contextual composition' className='h-64 w-full object-cover object-center border border-[#8d4f36]/20' />
        </section>

        <section className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
          <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>End Video</p>
          <h3 className='mt-2 text-lg font-semibold font-sans'>Scientific Analysis of Delhi Iron Pillar</h3>
          <div className='mt-3 aspect-video overflow-hidden bg-black border border-[#8d4f36]/20'>
            <iframe src='https://www.youtube.com/embed?listType=search&list=scientific%20analysis%20delhi%20iron%20pillar' title='Scientific Analysis of Delhi Iron Pillar' className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
          </div>
        </section>

        <section className='bg-[#2b1b17] text-[#f4ead8] p-6 border border-[#8d4f36]/20'>
          <h3 className='text-xl font-semibold font-sans'>Conclusion</h3>
          <p className='mt-3 text-sm md:text-base text-[#f4ead8]/85'>
            The Delhi Iron Pillar remains a scientific and historical landmark where metallurgy, monumentality, and long-term material
            performance intersect. It is not merely an artifact, but a durable technological statement from ancient India.
          </p>
          <p className='sr-only'>Keywords: iron pillar delhi, corrosion resistance ancient india</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
