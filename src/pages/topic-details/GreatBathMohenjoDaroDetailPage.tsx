import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

const pageConfig = {
  metaTitle: 'Great Bath of Mohenjo-daro - Public Water Architecture',
  category: 'Urban Planning',
  title: 'Great Bath of Mohenjo-daro - Public Water Architecture',
  summary:
    'The Great Bath is a carefully engineered brick tank in the Mohenjo-daro citadel. Its size, waterproofing, steps, and drainage show planned public water architecture even though its exact social function is still interpreted.',
  heroImage: '/urban-planning.jpg',
  heroAlt: 'Mohenjo-daro ruins associated with the Great Bath precinct',
  framingLabel: 'Hydraulic Lens',
  framingNote:
    'Calling the Great Bath an ancient swimming pool misses the point. The better reading is an engineered civic tank whose technical execution is clear even when scholars still debate whether its use was ritual, political, or both.',
  framingDetails: [
    {
      title: 'What to inspect',
      text: 'Look for the full water loop: well supply, sealed tank, stair access, surrounding rooms, and outlet for cleaning.',
    },
    {
      title: 'Why it matters',
      text: 'The structure proves that public water architecture required material control, maintenance planning, and social organization.',
    },
  ],
  factCards: [
    { label: 'Tank Size', value: 'About 12 x 7 m', note: 'Large enough for public meaning, but precise enough to read as engineered space.' },
    { label: 'Depth', value: 'About 2.4 m', note: 'The depth makes stairs, retaining walls, and water pressure part of the design.' },
    { label: 'Waterproofing', value: 'Bitumen and gypsum mortar', note: 'Sealing is the key technical clue that this was planned to hold water.' },
    { label: 'Setting', value: 'Citadel complex', note: 'Its location suggests collective importance beyond ordinary household bathing.' },
  ],
  keyPoints: [
    'The structure combines fired brickwork, gypsum mortar, and bitumen sealing.',
    'Stairs descend into the tank from both ends, showing controlled access and ceremony of movement.',
    'A nearby well supplied water, and an outlet system helped empty the tank.',
    'The monument belongs to public water architecture, not household sanitation alone.',
    'Its social meaning is interpreted, but its engineering quality is not in doubt.',
  ],
  sections: [
    {
      title: 'Measured and Intentional',
      body:
        'The Great Bath is not just a hollow in the ground. Its proportions, retaining walls, and surrounding rooms show a deliberate public design. The tank sits below pavement level with broad steps descending from both ends, which creates a strong sense of controlled entry and exit.',
    },
    {
      title: 'Why the Structure Is Waterproof',
      body:
        'Archaeologists have long pointed to the combination of well-laid bricks, gypsum mortar, and bitumen as the reason the tank could hold water reliably. This is one of the clearest surviving examples of waterproofing as an architectural problem in the Indus world.',
    },
    {
      title: 'Supply and Drainage',
      body:
        'The bath was linked to a well for water supply and to an outlet arrangement for emptying and cleaning. That hydraulic logic is important because it shows a full system rather than a one-time ceremonial basin. Water had to enter, be managed, and leave again without damaging the structure.',
    },
    {
      title: 'Public Space with an Interpreted Purpose',
      body:
        'Many scholars connect the Great Bath with ritual bathing because of its controlled setting, monumental treatment, and citadel location. Others emphasize civic display or elite use. The safest conclusion is that it held collective significance beyond ordinary domestic washing, even if the exact script of use remains unknown.',
    },
    {
      title: 'What Engineers Notice Today',
      body:
        'Modern readers often notice the monumentality first, but engineers notice the joints, sealing, load-bearing walls, stair geometry, and drainage. Those details are what make the Great Bath useful for teaching ancient water management instead of treating it as only a mystery monument.',
    },
  ],
  gallery: [
    {
      src: '/urban-planning.jpg',
      alt: 'Mohenjo-daro excavation view for public water architecture',
      caption: 'The Great Bath belongs inside a wider planned citadel, not in isolation.',
    },
    {
      src: '/great-bath-plan.svg',
      alt: 'Plan and section diagram of the Great Bath showing steps, well, and drain',
      caption: 'The bath becomes much clearer when shown as a water system with supply, basin, and outflow.',
      fit: 'contain' as const,
    },
  ],
  closingTitle: 'A Tank, a System, and a Public Statement',
  closingText:
    'The Great Bath endures because it joins engineering with civic meaning. Even without overclaiming its exact function, we can see a highly competent public water structure that demanded planning, materials knowledge, and long-term maintenance.',
};

export function GreatBathMohenjoDaroDetailPage() {
  return <TopicShowcasePage {...pageConfig} />;
}
