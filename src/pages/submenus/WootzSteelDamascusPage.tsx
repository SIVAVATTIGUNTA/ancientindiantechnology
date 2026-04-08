import { useEffect, useRef } from 'react';
import { FlaskConical, ShieldCheck, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function WootzSteelDamascusPage() {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.title = "Wootz Steel & Damascus Blades - Ancient India's Advanced Metallurgy";
    const meta = document.querySelector('meta[name="description"]');
    const description =
      'Discover how ancient Indian Wootz steel created the legendary Damascus blades known for strength, sharpness, and unique patterns.';

    if (meta) {
      meta.setAttribute('content', description);
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = description;
      document.head.appendChild(m);
    }
  }, []);

  const highlightCards = [
    {
      title: 'Extreme Edge Retention',
      body: 'High-carbon crucible steel enabled hard cutting edges with remarkable retention under battlefield use.',
      icon: Sparkles,
    },
    {
      title: 'Balanced Toughness',
      body: 'Controlled carbide networks and forging practice helped preserve flexibility while maintaining strength.',
      icon: ShieldCheck,
    },
    {
      title: 'Advanced Metallurgical Control',
      body: 'The crucible route required temperature discipline, sealed environments, and carefully selected carbon sources.',
      icon: FlaskConical,
    },
  ];

  const timeline = [
    {
      period: 'c. 500 BCE onwards',
      title: 'Early Indian crucible steel traditions',
      text: 'South Indian production centers began refining high-carbon ingot steel that later became known as Wootz.',
    },
    {
      period: 'Early centuries CE',
      title: 'Indian ingots enter long-distance trade',
      text: 'Wootz moved through maritime and overland routes into West Asia where specialist smiths forged elite blades.',
    },
    {
      period: 'Medieval era',
      title: 'Damascus reputation peaks',
      text: 'Wave-patterned swords forged from Wootz gained renown for cutting ability, durability, and visual identity.',
    },
    {
      period: '18th-19th centuries',
      title: 'Transmission weakens and declines',
      text: 'Political disruption, industrial competition, and the loss of workshop secrecy reduced consistent Wootz production.',
    },
    {
      period: '20th century to present',
      title: 'Scientific rediscovery efforts',
      text: 'Metallurgists and bladesmiths attempt to reconstruct historical recipes and forging cycles from surviving evidence.',
    },
  ];

  const gallery = [
    { src: '/wootz-blade.jpg', alt: 'Damascus blade pattern close-up' },
    { src: '/hero-metallurgy.png', alt: 'Historic sword and metallurgical craft visual' },
    { src: '/iron-pillar.jpg', alt: 'Indian metallurgical mastery and corrosion resistance' },
    { src: '/bronze-casting.jpg', alt: 'Ancient furnace craftsmanship context' },
  ];

  const scrollGallery = (direction: 'left' | 'right') => {
    if (!galleryRef.current) return;
    const amount = Math.round(galleryRef.current.clientWidth * 0.85);
    galleryRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <main className='min-h-screen bg-[#f4ead8] text-[#2b1b17]'>
      <SubmenuHeaderNav />

      <section className='relative overflow-hidden'>
        <div className='h-[52vh] min-h-[360px]'>
          <img src='/wootz-blade.jpg' alt='Damascus steel blade pattern close up' className='h-full w-full object-cover object-center' />
        </div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#1d120f]/85 via-[#2b1b17]/55 to-[#2b1b17]/78' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 md:pb-14 flex items-end'>
          <div className='max-w-4xl'>
            <p className='inline-flex bg-[#d4b26a]/25 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]'>
              Metallurgy
            </p>
            <h1 className='mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]'>
              Wootz Steel - The Legendary Metal Behind Damascus Blades
            </h1>
            <p className='mt-4 max-w-3xl text-[#f4ead8]/90 text-base md:text-lg'>
              A 2,000-year-old Indian innovation that revolutionized metallurgy and created the world&apos;s sharpest swords.
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <a href='#science' className='px-5 py-2.5 bg-[#d4b26a] text-[#2b1b17] text-sm font-semibold hover:bg-[#c6a055] transition-colors'>
                Explore the Science
              </a>
              <a href='#legacy' className='px-5 py-2.5 border border-[#f4ead8]/40 text-[#f4ead8] text-sm font-semibold hover:bg-[#f4ead8]/10 transition-colors'>
                Discover the Legacy
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16'>
        <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8'>
          <h2 className='text-2xl md:text-3xl font-sans font-semibold'>Introduction</h2>
          <p className='mt-4 text-[#3a231a]/88 leading-relaxed'>
            Wootz steel was among the earliest known forms of high-carbon steel developed in ancient India, with roots reaching
            at least the mid-1st millennium BCE. Produced through a sophisticated crucible process, Wootz commonly carried roughly
            1-2% carbon, enabling a rare combination of hardness, resilience, and cutting performance. These ingots travelled from
            South India into West Asian workshops, where expert smiths forged the celebrated Damascus blades recognized for flowing
            watered patterns and exceptional sharpness.
          </p>
          <p className='mt-3 text-[#3a231a]/82 leading-relaxed'>
            Historical and metallurgical studies point to a deeply skilled production culture: ore and carbon-bearing inputs were
            sealed in crucibles, heated under controlled conditions, then cooled carefully to preserve internal structures that later
            expressed as distinctive blade patterns.
          </p>
        </article>

        <section className='mt-8'>
          <h2 className='text-2xl md:text-3xl font-sans font-semibold'>Key Highlights</h2>
          <div className='mt-5 grid md:grid-cols-3 gap-4'>
            {highlightCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.title}
                  className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-5 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(43,27,23,0.12)] transition-all'
                >
                  <div className='h-10 w-10 flex items-center justify-center bg-[#d4b26a]/25 text-[#2b1b17]'>
                    <Icon className='h-5 w-5' />
                  </div>
                  <h3 className='mt-4 font-sans font-semibold text-lg'>{card.title}</h3>
                  <p className='mt-2 text-sm text-[#3a231a]/80 leading-relaxed'>{card.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className='mt-10 grid lg:grid-cols-2 gap-6 items-stretch'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-7 hover:shadow-[0_10px_24px_rgba(43,27,23,0.12)] transition-shadow'>
            <h2 className='text-2xl font-sans font-semibold'>How Wootz Steel Was Made</h2>
            <p className='mt-4 text-[#3a231a]/85 leading-relaxed'>
              Indian metallurgists used a crucible method: selected iron, carbon-rich matter (such as charcoal and plant
              materials), and flux-like additives were sealed in small vessels. These crucibles were heated for prolonged periods so
              carbon diffused into the metal. Slow cooling yielded dense ingots with internal carbide networks that later supported
              patterned blade surfaces after forging.
            </p>
            <ul className='mt-4 space-y-2 text-sm text-[#3a231a]/82'>
              <li>- Sealed crucible heating restricted oxygen and protected composition.</li>
              <li>- Carbon enrichment targeted high-performance steel chemistry.</li>
              <li>- Controlled cooling preserved microstructural pattern potential.</li>
            </ul>
          </article>
          <div className='min-h-[280px]'>
            <img src='/hero-metallurgy.png' alt='Ancient Indian steel making furnace' className='h-full w-full object-cover object-center border border-[#8d4f36]/20' />
          </div>
        </section>

        <section className='mt-8 border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-7' id='science'>
          <h2 className='text-2xl font-sans font-semibold'>The Science Behind the Strength</h2>
          <p className='mt-4 text-[#3a231a]/85 leading-relaxed'>
            Wootz steel&apos;s high carbon range (often around 1-2%) contributed to hard edges and strong cutting performance.
            Microscopic carbide-rich structures helped sustain sharpness and generated characteristic patterning after forging and
            etching. Some modern studies discuss nanostructural features, including carbon nanotube-like observations in specific
            historical samples, though replication remains complex and context-dependent.
          </p>
          <div className='mt-5 grid md:grid-cols-2 gap-5'>
            <img src='/wootz-blade.jpg' alt='Wootz steel ingots and patterned blade surface' className='h-60 w-full object-cover object-center border border-[#8d4f36]/20' />
            <img src='/iron-pillar.jpg' alt='Carbon nanotube steel microstructure diagram concept visual' className='h-60 w-full object-cover object-center border border-[#8d4f36]/20' />
          </div>
        </section>

        <section className='mt-8 border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-7'>
          <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Top Video</p>
          <h3 className='text-xl font-sans font-semibold'>Video: How Damascus Steel Was Made</h3>
          <div className='mt-4 aspect-video bg-black border border-[#8d4f36]/20 overflow-hidden'>
            <iframe
              src='https://www.youtube.com/embed?listType=search&list=wootz%20steel%20damascus%20documentary'
              title='How Damascus Steel Was Made'
              className='h-full w-full'
              loading='lazy'
              referrerPolicy='strict-origin-when-cross-origin'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
        </section>

        <section className='mt-8 grid lg:grid-cols-2 gap-6 items-stretch'>
          <div className='min-h-[280px]'>
            <img src='/wootz-blade.jpg' alt='Damascus sword historical artifact' className='h-full w-full object-cover object-center border border-[#8d4f36]/20' />
          </div>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-7'>
            <h2 className='text-2xl font-sans font-semibold'>Global Trade & Influence</h2>
            <p className='mt-4 text-[#3a231a]/85 leading-relaxed'>
              Wootz ingots left Indian ports and workshops for Arabia and Persia, and knowledge of these superior steels spread
              further into European awareness. In several records, Indian steel appears with prestige identifiers such as
              &ldquo;Hinduwani&rdquo; steel. Its reputation shaped military procurement and elite weapon culture across regions.
            </p>
            <h3 className='mt-5 text-lg font-sans font-semibold'>Damascus Blades - The Final Product</h3>
            <p className='mt-2 text-[#3a231a]/82 leading-relaxed'>
              Middle Eastern bladesmiths forged imported Wootz into famous Damascus swords noted for wave-like surfaces, resilient
              bodies, and razor-like edges.
            </p>
          </article>
        </section>

        <section className='mt-8 border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-7'>
          <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>Mid Video</p>
          <h3 className='text-xl font-sans font-semibold'>Video: Secrets of Ancient Indian Steel</h3>
          <div className='mt-4 aspect-video bg-black border border-[#8d4f36]/20 overflow-hidden'>
            <iframe
              src='https://www.youtube.com/embed?listType=search&list=ancient%20Indian%20metallurgy%20wootz%20steel'
              title='Secrets of Ancient Indian Steel'
              className='h-full w-full'
              loading='lazy'
              referrerPolicy='strict-origin-when-cross-origin'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
        </section>

        <section className='mt-8 border-l-4 border-[#8d4f36] bg-[#2b1b17] text-[#f4ead8] p-6 md:p-7'>
          <p className='text-xl md:text-2xl leading-relaxed font-sans'>
            &ldquo;Nothing could surpass the edge of Indian steel.&rdquo;
          </p>
          <p className='mt-2 text-sm text-[#f4ead8]/75'>A recurring sentiment in historical accounts of premium sword-making traditions.</p>
        </section>

        <section className='mt-8 border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-7'>
          <h2 className='text-2xl font-sans font-semibold'>Timeline: Origin to Rediscovery</h2>
          <div className='mt-5 space-y-4'>
            {timeline.map((step) => (
              <article key={step.period} className='grid md:grid-cols-[160px_1fr] gap-4 border border-[#8d4f36]/15 bg-white/40 p-4'>
                <p className='text-xs font-semibold tracking-[0.12em] uppercase text-[#8d4f36]'>{step.period}</p>
                <div>
                  <h3 className='font-sans font-semibold'>{step.title}</h3>
                  <p className='mt-1 text-sm text-[#3a231a]/80'>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className='mt-8' id='legacy'>
          <div className='flex items-center justify-between gap-3'>
            <h2 className='text-2xl font-sans font-semibold'>Gallery: Pattern Variations & Blade Legacy</h2>
            <div className='flex items-center gap-2'>
              <button onClick={() => scrollGallery('left')} className='h-10 w-10 border border-[#8d4f36]/30 bg-[#f8f0e3] text-[#2b1b17] flex items-center justify-center hover:bg-[#eadbc5] transition-colors' aria-label='Scroll gallery left'>
                <ChevronLeft className='h-5 w-5' />
              </button>
              <button onClick={() => scrollGallery('right')} className='h-10 w-10 border border-[#8d4f36]/30 bg-[#f8f0e3] text-[#2b1b17] flex items-center justify-center hover:bg-[#eadbc5] transition-colors' aria-label='Scroll gallery right'>
                <ChevronRight className='h-5 w-5' />
              </button>
            </div>
          </div>
          <div ref={galleryRef} className='mt-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2'>
            {gallery.map((item) => (
              <figure key={item.alt} className='min-w-[78vw] md:min-w-[42vw] lg:min-w-[30vw] snap-start border border-[#8d4f36]/20 bg-[#f8f0e3] p-2'>
                <img src={item.src} alt={item.alt} className='h-64 w-full object-cover object-center' loading='lazy' />
                <figcaption className='p-3 text-sm text-[#3a231a]/80'>{item.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className='mt-8 grid md:grid-cols-2 gap-6'>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h2 className='text-2xl font-sans font-semibold'>Why the Technology Was Lost</h2>
            <p className='mt-4 text-[#3a231a]/84 leading-relaxed'>
              Colonial-era economic shifts, disruption of artisan ecosystems, and fragmented transfer of tacit workshop knowledge
              reduced continuity. The process depended on tight control of raw materials, furnace atmospheres, and forging sequences,
              making it difficult to preserve without stable craft lineages.
            </p>
          </article>
          <article className='border border-[#8d4f36]/20 bg-[#f8f0e3] p-6'>
            <h2 className='text-2xl font-sans font-semibold'>Modern Relevance & Fun Facts</h2>
            <ul className='mt-4 space-y-2 text-[#3a231a]/84'>
              <li>- Wootz remains central to discussions of early advanced materials engineering.</li>
              <li>- Pattern contrast in Damascus blades can reflect both composition and forging history.</li>
              <li>- Modern smiths continue experimental reconstruction using historical texts and metallography.</li>
            </ul>
          </article>
        </section>

        <section className='mt-8 border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-7'>
          <p className='text-xs uppercase tracking-[0.14em] text-[#8d4f36]'>End Video</p>
          <h3 className='text-xl font-sans font-semibold'>Video: Recreating Damascus Steel Today</h3>
          <div className='mt-4 aspect-video bg-black border border-[#8d4f36]/20 overflow-hidden'>
            <iframe
              src='https://www.youtube.com/embed?listType=search&list=modern%20damascus%20steel%20forging%20process'
              title='Recreating Damascus Steel Today'
              className='h-full w-full'
              loading='lazy'
              referrerPolicy='strict-origin-when-cross-origin'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
        </section>

        <section className='mt-8 border border-[#8d4f36]/20 bg-[#2b1b17] text-[#f4ead8] p-6 md:p-8'>
          <h2 className='text-2xl md:text-3xl font-sans font-semibold'>Conclusion</h2>
          <p className='mt-3 text-[#f4ead8]/86 leading-relaxed'>
            Wootz steel demonstrates that ancient India developed a highly sophisticated metallurgical tradition combining chemistry,
            thermal control, and global commercial reach. Its legacy survives in the enduring fascination with Damascus blades and in
            modern scientific attempts to recover lost process intelligence.
          </p>
          <a href='#science' className='mt-5 inline-flex px-5 py-2.5 bg-[#d4b26a] text-[#2b1b17] text-sm font-semibold hover:bg-[#c6a055] transition-colors'>
            Revisit the Science
          </a>
        </section>
      </section>

      <section className='sr-only'>
        <h2>SEO Keywords</h2>
        <p>Wootz steel, Damascus blades, Indian metallurgy, ancient steel technology, crucible steel India, history of steel</p>
      </section>

      <section className='sr-only' aria-hidden='true'>
        <p>SEO Title: Wootz Steel &amp; Damascus Blades - Ancient India&apos;s Advanced Metallurgy</p>
        <p>
          Meta Description: Discover how ancient Indian Wootz steel created the legendary Damascus blades known for strength,
          sharpness, and unique patterns.
        </p>
      </section>
      <Footer />
    </main>
  );
}
