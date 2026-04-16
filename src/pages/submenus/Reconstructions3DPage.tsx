import { useEffect } from 'react';
import { Play, ScanLine } from 'lucide-react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';
import { VideoCard } from '../../components/video/VideoCard';
import { VideoRowCarousel } from '../../components/video/VideoRowCarousel';
import { VideoTopicHighlights } from '../../components/video/VideoTopicHighlights';

const reconstructionHighlights = [
  {
    label: 'Spatial Reading',
    title: 'Show the plan before the spectacle',
    text: 'Good reconstructions first orient the viewer: site layout, water route, furnace chamber, instrument scale, or temple axis before adding cinematic movement.',
  },
  {
    label: 'Evidence Layer',
    title: 'Separate remains from inference',
    text: 'A useful 3D model should make clear what is archaeologically visible, what is reconstructed from comparison, and what is interpretive visualization.',
  },
  {
    label: 'Engineering Value',
    title: 'Explain function through motion',
    text: 'Animations are most helpful when they show how water drains, shadows move, retorts condense vapor, or a city network connects buildings and streets.',
  },
];

const reconstructionTakeaways = [
  'Use 3D videos to teach scale, sequence, and spatial relationships that flat images cannot show well.',
  'Pair every reconstruction with a question: what physical evidence supports this model?',
  'The strongest simulations reveal function, not just appearance.',
];

const reconstructionTerms = ['site layout', 'before-after model', 'functional simulation', 'archaeology layers', 'cutaway view', 'spatial learning'];

export function Reconstructions3DPage() {
  useEffect(() => {
    document.title = '3D Reconstructions - Ancient Indian Technology';
  }, []);

  const showcaseVideos = [
    { title: 'Mohenjo-daro 3D Walkthrough', query: 'mohenjo daro 3d reconstruction', duration: '10-20 min', why: 'City planning visualization', src: 'https://www.youtube.com/embed?listType=search&list=mohenjo%20daro%203d%20reconstruction' },
    { title: 'Lothal Dockyard Simulation', query: 'lothal dockyard 3d animation', duration: '5-12 min', why: 'Hydraulic engineering demonstration', src: 'https://www.youtube.com/embed?listType=search&list=lothal%20dockyard%203d%20animation' },
    { title: 'Jantar Mantar Geometry Model', query: 'jantar mantar 3d model', duration: '8-15 min', why: 'Instrument-scale explanation', src: 'https://www.youtube.com/embed?listType=search&list=jantar%20mantar%203d%20model' },
    { title: 'Stepwell Structure Reconstruction', query: 'rani ki vav 3d reconstruction', duration: '6-12 min', why: 'Architectural section depth', src: 'https://www.youtube.com/embed?listType=search&list=rani%20ki%20vav%203d%20reconstruction' },
    { title: 'Sun Temple Alignment Simulation', query: 'sun temple astronomy simulation', duration: '10-18 min', why: 'Ritual + astronomy modeling', src: 'https://www.youtube.com/embed?listType=search&list=sun%20temple%20astronomy%20simulation' },
    { title: 'Ancient Furnace Technical Rebuild', query: 'ancient indian furnace reconstruction 3d', duration: '7-15 min', why: 'Material process reconstruction', src: 'https://www.youtube.com/embed?listType=search&list=ancient%20indian%20furnace%20reconstruction%203d' },
  ];

  return (
    <main className='min-h-screen bg-[#070d17] text-[#f4ead8]'>
      <SubmenuHeaderNav />

      <section className='relative overflow-hidden'>
        <div className='h-[56vh] min-h-[380px]'>
          <img src='/lothal-dockyard.jpg' alt='3D reconstructions hero' className='h-full w-full object-cover object-center' />
        </div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#04070f]/90 via-[#070d17]/72 to-[#070d17]/84' />
        <div className='absolute inset-0 flex items-end'>
          <div className='max-w-7xl mx-auto w-full px-6 md:px-12 pb-12'>
            <p className='inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em]'>Interactive Showcase UI</p>
            <h1 className='mt-4 text-4xl md:text-6xl font-sans font-bold'>3D Reconstructions</h1>
            <p className='mt-3 max-w-3xl text-[#f4ead8]/85'>Immersive reconstruction videos that convert archaeology into spatial, engineering-grade visual narratives.</p>
            <button className='mt-5 inline-flex items-center gap-2 bg-[#d4b26a] px-5 py-2.5 text-sm font-semibold text-[#1d130f] hover:bg-[#c59e50] transition-colors'>
              <Play className='h-4 w-4' />
              Play Featured Simulation
            </button>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10 md:space-y-12'>
        <div className='grid lg:grid-cols-[1.35fr_0.65fr] gap-6'>
          <article className='border border-[#d4b26a]/22 bg-[#101a2f] overflow-hidden'>
            <div className='aspect-video bg-black'>
              <iframe data-skip-global-embed='true' src={showcaseVideos[0].src} title={showcaseVideos[0].title} className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
            <div className='p-5'>
              <p className='text-xs uppercase tracking-wide text-[#d4b26a]'>Hero video</p>
              <h2 className='mt-1 text-2xl font-semibold'>{showcaseVideos[0].title}</h2>
              <p className='mt-1 text-sm text-[#f4ead8]/75'>Search query: {showcaseVideos[0].query}</p>
            </div>
          </article>

          <aside className='border border-[#d4b26a]/22 bg-[#101a2f] p-5'>
            <h3 className='text-lg font-semibold'>Before / After Vision</h3>
            <div className='mt-4 grid gap-3'>
              {['Archaeological remains', 'Reconstructed model', 'Functional simulation'].map((step) => (
                <div key={step} className='border border-[#d4b26a]/22 bg-[#070d17]/78 p-3 text-sm flex items-center gap-2'>
                  <ScanLine className='h-4 w-4 text-[#d4b26a]' />
                  {step}
                </div>
              ))}
            </div>
            <p className='mt-4 text-sm text-[#f4ead8]/76'>Use this block as an interactive slider area in the next polish pass.</p>
          </aside>
        </div>

        <VideoRowCarousel title='Model Preview Cards' items={showcaseVideos} />

        <section className='grid md:grid-cols-2 gap-5'>
          {showcaseVideos.slice(0, 2).map((video) => (
            <VideoCard key={`focus-${video.title}`} item={video} className='bg-[#101a2f]' />
          ))}
        </section>

        <VideoTopicHighlights
          eyebrow='Topic Highlights'
          title='How to Read a Reconstruction'
          description='These videos are most useful when viewers understand what the model is explaining: layout, function, sequence, and the boundary between evidence and interpretation.'
          highlights={reconstructionHighlights}
          takeaways={reconstructionTakeaways}
          terms={reconstructionTerms}
        />
      </section>
      <Footer />
    </main>
  );
}
