import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

const pageConfig = {
  metaTitle: 'Indus Valley Sanitation - Planned Drainage at City Scale',
  category: 'Urban Planning',
  title: 'Indus Valley Sanitation - Planned Drainage at City Scale',
  summary:
    'The strongest claim about Indus sanitation is not a slogan about being first. It is that Bronze Age cities such as Mohenjo-daro integrated bathrooms, lane drains, covered street channels, and maintenance logic into ordinary urban life.',
  heroImage: '/urban-planning.jpg',
  heroAlt: 'Harappan-style city planning and drainage context',
  framingLabel: 'Engineering Lens',
  framingNote:
    'This page focuses on what excavated evidence actually supports: distributed drainage, standard construction, and maintenance access. That is more useful than turning the story into a vague boast about lost perfection.',
  framingDetails: [
    {
      title: 'Planning takeaway',
      text: 'Sanitation worked because small household drains, lane channels, and covered street drains were designed as one connected system.',
    },
    {
      title: 'Modern relevance',
      text: 'The lesson for dense settlements is maintainable infrastructure: short runs, accessible covers, standard modules, and clear outflow paths.',
    },
  ],
  factCards: [
    { label: 'Mature Phase', value: 'c. 2600-1900 BCE', note: 'The main urban phase when drainage became part of everyday city fabric.' },
    { label: 'Core Units', value: 'House drains and street channels', note: 'Small local runs joined larger public channels instead of relying on one sewer.' },
    { label: 'Maintenance', value: 'Covers and inspection access', note: 'The system was designed to be cleaned, not just built once.' },
    { label: 'Construction', value: 'Standard baked bricks', note: 'Regular brick modules helped with alignment, slope, covers, and repair.' },
  ],
  keyPoints: [
    'Many houses had bathrooms or washing areas connected to brick drains.',
    'Street drains were often covered, which helps with safety, odor control, and maintenance.',
    'The system was distributed: house, lane, street, and outlet worked together.',
    'Standard brick sizes made joints, slopes, and repairs easier to manage.',
    'The achievement is not luxury, but repeatable urban infrastructure.',
  ],
  sections: [
    {
      title: 'From House to Street',
      body:
        'Indus cities treated wastewater as a planning problem from the start. Instead of waiting for one central sewer, many houses connected their bathing areas to local brick-lined drains that fed into larger lane or street channels. That tells us the street and the house were designed as one environmental system.',
    },
    {
      title: 'Covered Drains and Built Slopes',
      body:
        'Covered drains appear repeatedly in excavated Harappan cities. Covers reduce obstruction and protect pedestrians while still allowing the channel underneath to keep flowing. The presence of built gradients means these were not random trenches but controlled pathways for moving wastewater away from living zones.',
    },
    {
      title: 'Maintenance Was Part of the Design',
      body:
        'Urban drainage only works if someone can clean it. Inspection points, removable covers, and accessible junctions suggest that Harappan planners understood this. One reason the system still impresses modern engineers is that it embeds maintenance into design rather than treating upkeep as an afterthought.',
    },
    {
      title: 'Bathrooms, Soak Jars, and Separation',
      body:
        'Excavations show that not every house was identical, but many had bathing platforms, drains, and soak arrangements. That matters because it suggests a nuanced system that separated washing, runoff, and broader street drainage rather than pushing every kind of waste through one improvised channel.',
    },
    {
      title: 'Why Modern Planners Still Study It',
      body:
        'The Indus example is useful because it shows what resilient sanitation looks like at neighbourhood scale: short runs, local treatment or settling points, standard construction, and maintainable access. Those principles still matter in dense settlements today, especially where expensive centralized systems are difficult to extend.',
    },
  ],
  gallery: [
    {
      src: '/urban-planning.jpg',
      alt: 'Urban excavation view suggesting gridded streets and drainage routes',
      caption: 'The planning story is strongest when streets, houses, and drains are shown together.',
    },
    {
      src: '/indus-drainage-network.svg',
      alt: 'Diagram of household drains feeding covered street sewers',
      caption: 'Harappan sanitation worked as a layered network, not as one oversized channel.',
      fit: 'contain' as const,
    },
  ],
  closingTitle: 'Infrastructure Was a Civic Habit',
  closingText:
    'Indus sanitation matters because it shows civic thinking at ordinary scale. Cleanliness was not left to a palace or a monument; it was built into lanes, house fronts, and street sections. That makes the system historically important and still practical as a planning lesson.',
};

export function IndusValleySanitationDetailPage() {
  return <TopicShowcasePage {...pageConfig} />;
}
