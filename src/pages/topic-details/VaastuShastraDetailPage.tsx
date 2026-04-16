import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

const pageConfig = {
  metaTitle: 'Vaastu Shastra - Orientation, Site Planning, and Spatial Order',
  category: 'Urban Planning',
  title: 'Vaastu Shastra - Orientation, Site Planning, and Spatial Order',
  summary:
    'Vaastu Shastra is best read as a historical planning tradition about site choice, direction, proportion, environmental response, and spatial hierarchy. It becomes more useful when it is treated as design knowledge instead of as a magic checklist.',
  heroImage: '/vaastu-shastra.jpg',
  heroAlt: 'Vaastu-inspired spatial planning and architectural layout',
  framingLabel: 'Planning Lens',
  framingNote:
    'A modern audience usually benefits from one clarification first: Vaastu is not only about superstition or fortune. Traditional texts discuss land quality, directions, plot design, building type, environmental factors, and spatial order in ways that overlap with real planning concerns.',
  framingDetails: [
    {
      title: 'Translate the principle',
      text: 'Direction can be read through daylight, heat gain, airflow, privacy, noise, entry sequence, and circulation.',
    },
    {
      title: 'Use responsibly',
      text: 'Treat mandalas as planning frameworks for hierarchy and proportion, not as rigid room-by-room guarantees.',
    },
  ],
  factCards: [
    { label: 'Core Grids', value: '64- and 81-square mandalas', note: 'The grids organize center, edge, direction, and proportional hierarchy.' },
    { label: 'Topics', value: 'Land, direction, plot design', note: 'Traditional guidance starts with site response before room placement.' },
    { label: 'Building Types', value: 'Homes, temples, civic uses', note: 'The planning language extends beyond domestic interiors.' },
    { label: 'Modern Value', value: 'Climate-aware planning lens', note: 'Useful when translated into daylight, airflow, heat, privacy, and access.' },
  ],
  keyPoints: [
    'Traditional Vaastu texts cover site selection, soil, water, orientation, and layout.',
    'Mandala grids organize relationships and hierarchy; they are not always literal room-by-room blueprints.',
    'Many principles overlap with practical design concerns such as daylight, airflow, edges, and circulation.',
    'The tradition applies to more than houses; it also addresses temples, settlements, and environmental setting.',
    'The most responsible modern use is interpretive and architectural, not magical.',
  ],
  sections: [
    {
      title: 'What the Texts Actually Cover',
      body:
        'Institutional descriptions of Vaastu teaching still list land quality, soil testing, plot design, directions, building type, trees, and environment as core topics. That is a useful reminder that the tradition is wider than room placement charts. It belongs to the history of architecture and planning as much as to belief.',
    },
    {
      title: 'Mandalas and Spatial Order',
      body:
        'The 64-square and 81-square mandalas provide a conceptual grid for organizing center, edge, threshold, and directional emphasis. Their value lies in proportional thinking and structured layout. They help designers think about balance, access, and hierarchy before they become checklist items.',
    },
    {
      title: 'Land, Water, and Environment',
      body:
        'Traditional Vaastu discussions give notable attention to the quality of land, topography, water, and surrounding environmental conditions. Even if the language is historical, the design concern is familiar: not every site behaves the same, and site response should shape planning decisions from the start.',
    },
    {
      title: 'Direction and Room Logic',
      body:
        'Directional recommendations often make the most sense when translated into daylight, heat gain, ventilation, noise control, and privacy. In that reading, Vaastu becomes a premodern spatial heuristic: it helps allocate functions according to environmental exposure and social importance rather than random placement.',
    },
    {
      title: 'Using Vaastu Responsibly Today',
      body:
        'The strongest modern use of Vaastu is to read it as a cultural and climatic planning framework. That means borrowing lessons about orientation, courtyards, thresholds, and site response while avoiding exaggerated promises about wealth or destiny. Good interpretation keeps the architectural intelligence and drops the hype.',
    },
  ],
  gallery: [
    {
      src: '/vaastu-shastra.jpg',
      alt: 'Spatial planning illustration inspired by Vaastu principles',
      caption: 'Vaastu becomes most useful when it is explained as planning logic with cultural depth.',
    },
    {
      src: '/vastu-mandala-grid.svg',
      alt: 'Diagram of a Vaastu mandala grid with directions and central zone',
      caption: 'The grid is a way of organizing proportion, center, and direction across a plan.',
      fit: 'contain' as const,
    },
  ],
  closingTitle: 'Planning Knowledge, Not a Shortcut',
  closingText:
    'Vaastu Shastra remains worth studying because it preserves a long conversation about how site, direction, environment, and social order shape architecture. Read that way, it becomes clearer, more honest, and far more useful for modern design discussions.',
};

export function VaastuShastraDetailPage() {
  return <TopicShowcasePage {...pageConfig} />;
}
