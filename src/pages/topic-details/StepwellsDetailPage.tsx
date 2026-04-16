import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

const pageConfig = {
  metaTitle: 'Stepwells - Seasonal Water Access Built Underground',
  category: 'Urban Planning',
  title: 'Stepwells - Seasonal Water Access Built Underground',
  summary:
    'Stepwells solved several problems at once: how to reach a fluctuating water table, how to create shade and thermal comfort, and how to turn water access into civic and ritual space. Over time, infrastructure became architecture.',
  heroImage: '/stepwell.jpg',
  heroAlt: 'Indian stepwell descending toward water',
  framingLabel: 'Climate Lens',
  framingNote:
    'The best way to teach stepwells is to begin with climate and hydrology. Once that is clear, the astonishing sculpture, geometry, and atmosphere make even more sense because they grow out of a practical water problem.',
  framingDetails: [
    {
      title: 'Climate response',
      text: 'Depth, shade, and stone mass help turn water access into a cooler microclimate below the hot ground surface.',
    },
    {
      title: 'Design lesson',
      text: 'Stepwells combine access, storage, gathering, and ritual movement, making infrastructure feel like civic space.',
    },
  ],
  factCards: [
    { label: 'Tradition', value: 'Since the 3rd millennium BCE', note: 'Early forms developed into elaborate civic architecture over time.' },
    { label: 'Master Example', value: 'Rani ki Vav, 11th century', note: 'UNESCO frames it as a peak of stepwell construction and sculptural design.' },
    { label: 'Vertical Logic', value: 'Seven stair levels', note: 'Descent keeps water reachable as seasonal levels rise and fall.' },
    { label: 'Main Benefits', value: 'Water, shade, cooling', note: 'The same section solves access, comfort, and public gathering needs.' },
  ],
  keyPoints: [
    'Stepwells allowed access to water as the level rose and fell through the year.',
    'Their descending section creates cooler microclimates than the ground above.',
    'Pavilions, landings, and sculpture turned necessary infrastructure into public architecture.',
    'Rani ki Vav shows the type at a technically and artistically mature stage.',
    'Stepwells remain relevant in conversations about heat, water scarcity, and heritage reuse.',
  ],
  sections: [
    {
      title: 'Why Stepwells Evolved',
      body:
        'In regions with strong seasonal variation, a simple well was often not enough. As the water table shifted, users needed a safe way to descend to changing depths. Stepwells solved that by stretching access into a long architectural section rather than treating water as a single fixed point.',
    },
    {
      title: 'How the Section Works',
      body:
        'Stairs, landings, retaining walls, and pavilions create a stable descent while helping distribute structural loads into the surrounding soil. The geometry also slows the visitor, which makes the encounter with water feel deliberate. In engineering terms it is a circulation system; in human terms it becomes a sequence of spaces.',
    },
    {
      title: 'Rani ki Vav as a Benchmark',
      body:
        'UNESCO describes Rani ki Vav as a peak achievement of stepwell construction and Maru-Gurjara architecture. It is organized as an inverted temple and divided into seven levels of stairs before reaching the deep tank and well shaft. That description is useful because it keeps hydraulic logic and sacred meaning together.',
    },
    {
      title: 'Cooling, Rest, and Social Life',
      body:
        'The stone mass, shade, and depth create temperatures that are often noticeably lower than the surface. Stepwells therefore worked as social environments as well as water infrastructure. Rest, worship, trade, and gathering could all happen in the same cooled architectural volume.',
    },
    {
      title: 'Why They Matter Again Today',
      body:
        'As cities rethink water resilience and heat adaptation, stepwells offer a valuable historical precedent. They show how access, storage, cooling, and public space can be integrated rather than solved through separate systems. The goal is not to copy them literally but to learn from their environmental intelligence.',
    },
  ],
  gallery: [
    {
      src: '/stepwell.jpg',
      alt: 'Deep symmetrical Indian stepwell with layered stairs',
      caption: 'The power of a stepwell comes from the section: it makes depth usable, social, and beautiful.',
    },
    {
      src: '/stepwell-section.svg',
      alt: 'Section diagram showing stairs, pavilions, and changing water levels in a stepwell',
      caption: 'The type solves a seasonal water problem by turning vertical descent into architecture.',
      fit: 'contain' as const,
    },
  ],
  closingTitle: 'Infrastructure Became Civic Space',
  closingText:
    'Stepwells deserve attention because they make environmental design visible. They are not just old water structures; they are lessons in how one piece of infrastructure can also provide comfort, ritual meaning, and shared urban life.',
};

export function StepwellsDetailPage() {
  return <TopicShowcasePage {...pageConfig} />;
}
