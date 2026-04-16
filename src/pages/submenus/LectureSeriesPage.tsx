import { useEffect, useMemo, useState } from 'react';
import { ChevronDown, PlayCircle, UserRound } from 'lucide-react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';
import { VideoTopicHighlights } from '../../components/video/VideoTopicHighlights';

type AccordionTopic = {
  id: string;
  title: string;
  summary: string;
  points: string[];
};

type LectureItem = {
  id: string;
  title: string;
  speaker: string;
  role: string;
  duration: string;
  topic: string;
  tags: string[];
  query: string;
  src: string;
  why: string;
  accordionTopics: AccordionTopic[];
};

const lectureCatalog: LectureItem[] = [
  {
    id: 'ancient-astronomy-systems',
    title: 'Ancient Indian Astronomy Systems',
    speaker: 'Dr. Arundhati Rao',
    role: 'History of Science Scholar',
    duration: '58 min',
    topic: 'Astronomy',
    tags: ['astronomy', 'calendars', 'observatories'],
    query: 'ancient indian astronomy lecture',
    src: 'https://www.youtube.com/embed?listType=search&list=ancient%20indian%20astronomy%20lecture',
    why: 'Foundation for sky-science topics',
    accordionTopics: [
      {
        id: 'foundations',
        title: 'Foundations',
        summary: 'Covers nakshatra systems, calendar logic, planetary observation, and why repeatable sky measurements mattered.',
        points: ['Look for how observation becomes calculation.', 'Connect calendars to agriculture, ritual timing, and navigation.', 'Compare naked-eye instruments with later masonry observatories.'],
      },
      {
        id: 'discussion',
        title: 'Discussion Prompts',
        summary: 'Use these questions after the lecture to connect the video with astronomy submenu pages.',
        points: ['What is directly observed and what is mathematically inferred?', 'How do tables and instruments reduce error?', 'Where should the site avoid exaggerated claims?'],
      },
    ],
  },
  {
    id: 'wootz-to-zinc-metallurgy',
    title: 'Metallurgy from Wootz to Zinc',
    speaker: 'Prof. Vivek Menon',
    role: 'Materials Engineer',
    duration: '64 min',
    topic: 'Metallurgy',
    tags: ['metallurgy', 'materials', 'furnaces'],
    query: 'wootz steel academic lecture',
    src: 'https://www.youtube.com/embed?listType=search&list=wootz%20steel%20academic%20lecture',
    why: 'Connects metallurgy submenu pages',
    accordionTopics: [
      {
        id: 'process',
        title: 'Process Chain',
        summary: 'Tracks ore selection, furnace control, crucible chemistry, distillation, forging, and workshop skill.',
        points: ['Follow material transformation from ore to object.', 'Note where heat, oxygen, carbon, and cooling rate change the result.', 'Compare Wootz steel, zinc distillation, bronze casting, and copper smelting.'],
      },
      {
        id: 'evidence',
        title: 'Evidence Lens',
        summary: 'Helps viewers distinguish surviving artifacts, production traces, textual claims, and modern laboratory analysis.',
        points: ['Ask what the slag, furnace remains, or microstructure can prove.', 'Use trade routes to explain spread without overstating invention myths.', 'Connect the lecture to the metallurgy diagrams on the site.'],
      },
    ],
  },
  {
    id: 'ayurveda-texts-evidence',
    title: 'Ayurveda Texts and Evidence',
    speaker: 'Dr. Kavya Nair',
    role: 'Medical Historian',
    duration: '52 min',
    topic: 'Medicine',
    tags: ['ayurveda', 'medicine', 'texts'],
    query: 'charaka samhita lecture',
    src: 'https://www.youtube.com/embed?listType=search&list=charaka%20samhita%20lecture',
    why: 'Context for clinical heritage',
    accordionTopics: [
      {
        id: 'texts',
        title: 'Textual Framework',
        summary: 'Explains how Charaka, Sushruta, and later traditions organize health, diagnosis, procedure, and recovery.',
        points: ['Treat the texts as historical medical systems, not self-treatment manuals.', 'Compare preventive care, surgery, diagnosis, and therapy sequencing.', 'Keep modern safety framing visible throughout the page.'],
      },
      {
        id: 'responsible-reading',
        title: 'Responsible Reading',
        summary: 'Keeps the lecture useful while avoiding medical overclaiming.',
        points: ['Separate cultural history from clinical advice.', 'Flag pregnancy, medication, chronic disease, and procedure safety concerns.', 'Use the lecture to guide respectful, evidence-aware interpretation.'],
      },
    ],
  },
  {
    id: 'indus-urban-engineering',
    title: 'Urban Engineering in Indus Civilization',
    speaker: 'Dr. Rajat Sinha',
    role: 'Archaeology Faculty',
    duration: '49 min',
    topic: 'Urban Planning',
    tags: ['urban planning', 'engineering', 'water'],
    query: 'indus valley urban planning lecture',
    src: 'https://www.youtube.com/embed?listType=search&list=indus%20valley%20urban%20planning%20lecture',
    why: 'Strong civil engineering insight',
    accordionTopics: [
      {
        id: 'systems',
        title: 'Systems Thinking',
        summary: 'Frames sanitation, bathing, streets, docks, reservoirs, and maintenance as connected civic infrastructure.',
        points: ['Read drainage as a distributed network, not one heroic sewer.', 'Connect house-level choices to lane drains and city outfalls.', 'Use Lothal and the Great Bath as case studies for water management debates.'],
      },
      {
        id: 'planning',
        title: 'Planning Questions',
        summary: 'Turns the lecture into a practical urban planning checklist.',
        points: ['Where does water enter, collect, move, and leave?', 'What parts are standardized and what parts adapt to terrain?', 'How do cleaning access and repair shape design quality?'],
      },
    ],
  },
  {
    id: 'temple-geometry-instruments',
    title: 'Temple Geometry and Instrument Design',
    speaker: 'Prof. Neel Joshi',
    role: 'Architectural Historian',
    duration: '43 min',
    topic: 'Architecture',
    tags: ['architecture', 'geometry', 'instruments'],
    query: 'jantar mantar geometry lecture',
    src: 'https://www.youtube.com/embed?listType=search&list=jantar%20mantar%20geometry%20lecture',
    why: 'Links monument design and function',
    accordionTopics: [
      {
        id: 'geometry',
        title: 'Geometry in Use',
        summary: 'Shows how orientation, shadow, angle, sightline, and calibrated surfaces turn architecture into readable information.',
        points: ['Compare symbolic alignment with measurement accuracy.', 'Use Jantar Mantar as a precision-instrument case.', 'Use sun temples as light, procession, and orientation case studies.'],
      },
      {
        id: 'site-reading',
        title: 'Site Reading',
        summary: 'Gives visitors a way to read monuments without falling into sensational claims.',
        points: ['Ask what the structure demonstrably measures.', 'Look for calibrated surfaces, axes, and repeated markings.', 'Explain ritual meaning and scientific function separately when needed.'],
      },
    ],
  },
  {
    id: 'sanskrit-knowledge-transmission',
    title: 'Knowledge Transmission in Sanskrit Texts',
    speaker: 'Dr. Meera Kulkarni',
    role: 'Philology Researcher',
    duration: '55 min',
    topic: 'Texts',
    tags: ['texts', 'knowledge systems', 'manuscripts'],
    query: 'sanskrit scientific texts lecture',
    src: 'https://www.youtube.com/embed?listType=search&list=sanskrit%20scientific%20texts%20lecture',
    why: 'Explains how technical knowledge survived',
    accordionTopics: [
      {
        id: 'transmission',
        title: 'Transmission Chain',
        summary: 'Explains oral memory, manuscripts, commentary, translation, workshop practice, and regional adaptation.',
        points: ['Track how a technical idea moves between teacher, text, craft, and community.', 'Notice where commentary clarifies older technical terms.', 'Connect textual survival with material evidence where possible.'],
      },
      {
        id: 'interpretation',
        title: 'Interpretation Method',
        summary: 'Helps visitors evaluate ancient technical claims carefully.',
        points: ['Do not treat every poetic phrase as literal engineering.', 'Check whether a claim has archaeological, material, or mathematical support.', 'Use uncertainty as part of honest scholarship, not a weakness.'],
      },
    ],
  },
];

const lectureHighlights = [
  {
    label: 'Study Method',
    title: 'Choose a theme, then follow the queue',
    text: 'The filters help viewers focus on one knowledge domain at a time while keeping the full series available through the All view.',
  },
  {
    label: 'Accordion Use',
    title: 'Open the active lecture guide',
    text: 'Each lecture has its own dynamic topic guide with discussion prompts, evidence lenses, and practical reading notes.',
  },
  {
    label: 'Learning Outcome',
    title: 'Move from video to page evidence',
    text: 'The lecture page should guide visitors from long-form viewing into the matching subpages, diagrams, and historical explanations.',
  },
];

const lectureTakeaways = [
  'Use All for browsing the full academy playlist, then switch to a domain filter for focused study.',
  'The active video, queue state, and accordion content now stay synchronized.',
  'Accordion notes help convert a lecture into questions visitors can apply across the site.',
];

const lectureTerms = ['guided study', 'topic filters', 'accordion notes', 'evidence lens', 'lecture queue', 'academy pathway'];

const getLecturesForFilter = (filter: string) =>
  filter === 'All' ? lectureCatalog : lectureCatalog.filter((lecture) => lecture.topic === filter);

export function LectureSeriesPage() {
  const filters = useMemo(() => ['All', ...Array.from(new Set(lectureCatalog.map((lecture) => lecture.topic)))], []);
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeLectureId, setActiveLectureId] = useState(lectureCatalog[0].id);
  const [openTopicId, setOpenTopicId] = useState<string | null>(lectureCatalog[0].accordionTopics[0].id);

  useEffect(() => {
    document.title = 'Lecture Series - Ancient Indian Technology Academy';
  }, []);

  const filteredLectures = useMemo(() => getLecturesForFilter(activeFilter), [activeFilter]);
  const activeLecture = filteredLectures.find((lecture) => lecture.id === activeLectureId) ?? filteredLectures[0] ?? lectureCatalog[0];
  const accordionTopics = activeLecture.accordionTopics;

  const handleFilterChange = (filter: string) => {
    const nextLectures = getLecturesForFilter(filter);
    const nextLecture = nextLectures[0] ?? lectureCatalog[0];
    setActiveFilter(filter);
    setActiveLectureId(nextLecture.id);
    setOpenTopicId(nextLecture.accordionTopics[0]?.id ?? null);
  };

  const handleLectureChange = (lecture: LectureItem) => {
    setActiveLectureId(lecture.id);
    setOpenTopicId(lecture.accordionTopics[0]?.id ?? null);
  };

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
              <iframe
                data-skip-global-embed='true'
                src={activeLecture.src}
                title={activeLecture.title}
                className='h-full w-full'
                loading='lazy'
                referrerPolicy='strict-origin-when-cross-origin'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </div>
            <div className='p-5'>
              <p className='text-xs text-[#d4b26a]'>Now playing</p>
              <h2 className='mt-1 text-2xl font-semibold'>{activeLecture.title}</h2>
              <p className='mt-1 text-sm text-[#f4ead8]/80'>{activeLecture.speaker} - {activeLecture.role}</p>
              <p className='mt-1 text-xs text-[#f4ead8]/70'>Search query: {activeLecture.query}</p>
              <div className='mt-3 flex flex-wrap gap-1'>
                {activeLecture.tags.map((tag) => (
                  <span key={tag} className='border border-[#d4b26a]/25 px-2 py-0.5 text-[10px] uppercase tracking-wide text-[#f4ead8]/78'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <aside className='rounded-2xl border border-[#d4b26a]/24 bg-[#121a30] p-5'>
            <h3 className='text-lg font-semibold'>Topic Filters</h3>
            <div className='mt-3 flex flex-wrap gap-2' aria-label='Lecture topic filters'>
              {filters.map((filter) => (
                <button
                  key={filter}
                  type='button'
                  aria-pressed={activeFilter === filter}
                  onClick={() => handleFilterChange(filter)}
                  className={`border px-3 py-1.5 text-xs transition-colors ${
                    activeFilter === filter
                      ? 'border-[#d4b26a] bg-[#d4b26a] text-[#1a120f]'
                      : 'border-[#d4b26a]/30 bg-[#0a0f1c]/80 text-[#f4ead8]/86 hover:bg-[#d4b26a]/12'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
            <p className='mt-3 text-xs text-[#f4ead8]/64'>{filteredLectures.length} lecture{filteredLectures.length === 1 ? '' : 's'} shown</p>
            <h4 className='mt-6 text-sm font-semibold text-[#d4b26a]'>Accordion Topics</h4>
            <div className='mt-2 space-y-2 text-sm'>
              {accordionTopics.map((topic) => {
                const isOpen = openTopicId === topic.id;
                const triggerId = `lecture-topic-trigger-${activeLecture.id}-${topic.id}`;
                const panelId = `lecture-topic-panel-${activeLecture.id}-${topic.id}`;

                return (
                  <article key={topic.id} className='border border-[#d4b26a]/20 bg-[#0a0f1c]/70'>
                    <button
                      id={triggerId}
                      type='button'
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenTopicId(isOpen ? null : topic.id)}
                      className='w-full flex items-center justify-between gap-3 p-3 text-left text-[#f4ead8] transition-colors hover:bg-[#d4b26a]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b26a]/70'
                    >
                      <span>{topic.title}</span>
                      <ChevronDown className={`h-4 w-4 text-[#d4b26a] transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden />
                    </button>
                    <div
                      id={panelId}
                      role='region'
                      aria-labelledby={triggerId}
                      hidden={!isOpen}
                      className='border-t border-[#d4b26a]/15 p-3 text-[#f4ead8]/76'
                    >
                      <p className='leading-relaxed'>{topic.summary}</p>
                      <ul className='mt-3 space-y-2 text-xs leading-relaxed'>
                        {topic.points.map((point) => (
                          <li key={point}>- {point}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </aside>
        </div>

        <section>
          <div className='mb-4 flex flex-wrap items-end justify-between gap-3'>
            <div>
              <h3 className='text-xl font-semibold'>Playlist Queue</h3>
              <p className='mt-1 text-sm text-[#f4ead8]/68'>Currently filtering: {activeFilter}</p>
            </div>
          </div>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
            {filteredLectures.map((video) => (
              <button
                key={video.id}
                type='button'
                aria-pressed={activeLecture.id === video.id}
                onClick={() => handleLectureChange(video)}
                className={`text-left border p-4 transition-all duration-300 ease-out hover:-translate-y-1 ${
                  activeLecture.id === video.id ? 'border-[#d4b26a] bg-[#1a2442]' : 'border-[#d4b26a]/20 bg-[#121a30] hover:border-[#d4b26a]/45'
                }`}
              >
                <p className='inline-flex items-center gap-2 text-xs text-[#d4b26a]'><PlayCircle className='h-3.5 w-3.5' aria-hidden /> {video.duration} - {video.topic}</p>
                <p className='mt-2 font-semibold'>{video.title}</p>
                <p className='mt-1 text-xs text-[#f4ead8]/72 inline-flex items-center gap-1'><UserRound className='h-3 w-3' aria-hidden /> {video.speaker}</p>
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

        <VideoTopicHighlights
          title='Lecture Series Study Guide'
          description='Use the lecture series as an academy pathway: filter by domain, choose a focused session, then use the accordion guide to turn the video into questions, comparisons, and topic-page exploration.'
          highlights={lectureHighlights}
          takeaways={lectureTakeaways}
          terms={lectureTerms}
        />
      </section>
      <Footer />
    </main>
  );
}
