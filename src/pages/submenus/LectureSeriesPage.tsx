import { useEffect, useState } from 'react';
import { ChevronDown, PlayCircle, UserRound } from 'lucide-react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function LectureSeriesPage() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    document.title = 'Lecture Series - Ancient Indian Technology Academy';
  }, []);

  const lectures = [
    { title: 'Ancient Indian Astronomy Systems', speaker: 'Dr. Arundhati Rao', role: 'History of Science Scholar', duration: '58 min', tags: ['astronomy', 'calendars'], query: 'ancient indian astronomy lecture', src: 'https://www.youtube.com/embed?listType=search&list=ancient%20indian%20astronomy%20lecture', why: 'Foundation for sky-science topics' },
    { title: 'Metallurgy from Wootz to Zinc', speaker: 'Prof. Vivek Menon', role: 'Materials Engineer', duration: '64 min', tags: ['metallurgy', 'materials'], query: 'wootz steel academic lecture', src: 'https://www.youtube.com/embed?listType=search&list=wootz%20steel%20academic%20lecture', why: 'Connects metallurgy submenu pages' },
    { title: 'Ayurveda Texts and Evidence', speaker: 'Dr. Kavya Nair', role: 'Medical Historian', duration: '52 min', tags: ['ayurveda', 'medicine'], query: 'charaka samhita lecture', src: 'https://www.youtube.com/embed?listType=search&list=charaka%20samhita%20lecture', why: 'Context for clinical heritage' },
    { title: 'Urban Engineering in Indus Civilization', speaker: 'Dr. Rajat Sinha', role: 'Archaeology Faculty', duration: '49 min', tags: ['urban planning', 'engineering'], query: 'indus valley urban planning lecture', src: 'https://www.youtube.com/embed?listType=search&list=indus%20valley%20urban%20planning%20lecture', why: 'Strong civil engineering insight' },
    { title: 'Temple Geometry and Instrument Design', speaker: 'Prof. Neel Joshi', role: 'Architectural Historian', duration: '43 min', tags: ['architecture', 'geometry'], query: 'jantar mantar geometry lecture', src: 'https://www.youtube.com/embed?listType=search&list=jantar%20mantar%20geometry%20lecture', why: 'Links monument design and function' },
    { title: 'Knowledge Transmission in Sanskrit Texts', speaker: 'Dr. Meera Kulkarni', role: 'Philology Researcher', duration: '55 min', tags: ['texts', 'knowledge systems'], query: 'sanskrit scientific texts lecture', src: 'https://www.youtube.com/embed?listType=search&list=sanskrit%20scientific%20texts%20lecture', why: 'Explains how technical knowledge survived' },
  ];

  return (
    <main className='min-h-screen bg-[#0a0f1c] text-[#f4ead8]'>
      <SubmenuHeaderNav />

      <section className='relative overflow-hidden'>
        <div className='h-[54vh] min-h-[360px]'>
          <img src='/astronomy-jantar.jpg' alt='Lecture series hero' className='h-full w-full object-cover object-center' />
        </div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#060a12]/92 via-[#0a0f1c]/78 to-[#0a0f1c]/82' />
        <div className='absolute inset-0 flex items-end'>
          <div className='max-w-7xl mx-auto w-full px-6 md:px-12 pb-10'>
            <p className='inline-flex bg-[#d4b26a]/28 px-4 py-1.5 text-xs uppercase tracking-[0.16em]'>Educational Playlist UI</p>
            <h1 className='mt-4 text-4xl md:text-6xl font-sans font-bold'>Lecture Series</h1>
            <p className='mt-3 max-w-3xl text-[#f4ead8]/88'>Long-form sessions designed like a premium learning platform with topic tags, speaker cards, and structured playlists.</p>
          </div>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-10'>
        <div className='grid lg:grid-cols-[1.3fr_0.7fr] gap-6'>
          <article className='rounded-2xl border border-[#d4b26a]/24 bg-[#121a30] overflow-hidden'>
            <div className='aspect-video bg-black'>
              <iframe src={lectures[active].src} title={lectures[active].title} className='h-full w-full' loading='lazy' referrerPolicy='strict-origin-when-cross-origin' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen />
            </div>
            <div className='p-5'>
              <p className='text-xs text-[#d4b26a]'>Now playing</p>
              <h2 className='mt-1 text-2xl font-semibold'>{lectures[active].title}</h2>
              <p className='mt-1 text-sm text-[#f4ead8]/80'>{lectures[active].speaker} · {lectures[active].role}</p>
              <p className='mt-1 text-xs text-[#f4ead8]/70'>Search query: {lectures[active].query}</p>
            </div>
          </article>

          <aside className='rounded-2xl border border-[#d4b26a]/24 bg-[#121a30] p-5'>
            <h3 className='text-lg font-semibold'>Topic Filters</h3>
            <div className='mt-3 flex flex-wrap gap-2'>
              {['Astronomy', 'Metallurgy', 'Medicine', 'Architecture', 'Texts'].map((t) => (
                <span key={t} className='border border-[#d4b26a]/30 bg-[#0a0f1c]/80 px-2.5 py-1 text-xs'>{t}</span>
              ))}
            </div>
            <h4 className='mt-6 text-sm font-semibold text-[#d4b26a]'>Accordion Topics</h4>
            <div className='mt-2 space-y-2 text-sm'>
              {['Foundations', 'Methods', 'Comparisons', 'Modern relevance'].map((item) => (
                <button key={item} className='w-full flex items-center justify-between border border-[#d4b26a]/20 bg-[#0a0f1c]/70 p-3 text-left'>
                  {item}
                  <ChevronDown className='h-4 w-4 text-[#d4b26a]' />
                </button>
              ))}
            </div>
          </aside>
        </div>

        <section>
          <h3 className='text-xl font-semibold mb-4'>Playlist Queue</h3>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
            {lectures.map((video, index) => (
              <button
                key={video.title}
                onClick={() => setActive(index)}
                className={`text-left border p-4 transition-all duration-300 ease-out hover:-translate-y-1 ${
                  active === index ? 'border-[#d4b26a] bg-[#1a2442]' : 'border-[#d4b26a]/20 bg-[#121a30] hover:border-[#d4b26a]/45'
                }`}
              >
                <p className='inline-flex items-center gap-2 text-xs text-[#d4b26a]'><PlayCircle className='h-3.5 w-3.5' /> {video.duration}</p>
                <p className='mt-2 font-semibold'>{video.title}</p>
                <p className='mt-1 text-xs text-[#f4ead8]/72 inline-flex items-center gap-1'><UserRound className='h-3 w-3' /> {video.speaker}</p>
                <p className='mt-2 text-xs text-[#f4ead8]/66'>{video.why}</p>
                <div className='mt-2 flex flex-wrap gap-1'>
                  {video.tags.map((tag) => (
                    <span key={tag} className='border border-[#d4b26a]/25 px-2 py-0.5 text-[10px] uppercase tracking-wide'>
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className='border border-[#d4b26a]/24 bg-[#121a30] p-6 text-sm'>
          <h3 className='text-lg font-semibold'>Thumbnail and Discovery Pack</h3>
          <p className='mt-2 text-[#f4ead8]/78'>
            AI prompts: lecture hall with Sanskrit manuscripts and digital hologram overlays, professor silhouette explaining Jantar Mantar geometry board, split-frame metallurgy furnace and microscope texture, calm Ayurveda classroom with anatomical chart visuals, ancient city map projected as educational dashboard.
          </p>
          <p className='mt-2 text-[#f4ead8]/78'>
            Search keywords: ancient india lecture thumbnail, indian science history lecture cover, wootz steel lecture poster, ayurveda academic talk visual, indus planning seminar video, astronomy heritage lecture banner.
          </p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
