import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

const pageConfig = {
  metaTitle: 'Lothal - Basin, Trade, and Maritime Engineering',
  category: 'Urban Planning',
  title: 'Lothal - Basin, Trade, and Maritime Engineering',
  summary:
    'Lothal was a trade-oriented Harappan town with a major basin, warehouse area, drains, and industrial activity. Many archaeologists interpret the basin as a dockyard, while others question that reading, so the most useful page is one that shows both the engineering evidence and the debate.',
  heroImage: '/lothal-dockyard.jpg',
  heroAlt: 'Lothal archaeological basin and maritime heritage context',
  framingLabel: 'Evidence with Debate',
  framingNote:
    "Lothal is most interesting when it is presented honestly. The maritime interpretation is strong enough to teach, but the basin's function is not beyond dispute. Public history should therefore explain the argument rather than flatten it into certainty.",
  framingDetails: [
    {
      title: 'Certain evidence',
      text: 'The town had trade markers, craft production, drainage, a warehouse zone, and a large engineered basin.',
    },
    {
      title: 'Honest interpretation',
      text: 'The dockyard reading is useful, but the reservoir debate should stay visible because it teaches how archaeology evaluates function.',
    },
  ],
  factCards: [
    { label: 'Date Range', value: 'c. 2400-1600 BCE', note: 'Places the town within the wider Harappan trade and craft network.' },
    { label: 'Basin Size', value: 'About 217 x 26 m', note: 'Its scale is central to both dockyard and reservoir interpretations.' },
    { label: 'Trade Evidence', value: 'Warehouse, seals, bead industry', note: 'Commerce is secure even where the basin function remains debated.' },
    { label: 'Open Question', value: 'Dockyard or reservoir?', note: 'The best page explains the evidence and the scholarly caution together.' },
  ],
  keyPoints: [
    'Lothal was unquestionably part of a larger Harappan trade and craft network.',
    'The basin, channels, and nearby warehouse support the dockyard interpretation used in many heritage accounts.',
    'Some scholars argue that the basin may instead have functioned as a reservoir or irrigation structure.',
    'Even within the debate, hydraulic planning and water control remain central to the site.',
    'The page becomes stronger when it presents evidence, uncertainty, and what remains certain.',
  ],
  sections: [
    {
      title: 'A Trade Town with Industry',
      body:
        "Lothal was not an isolated basin in empty land. It included habitation areas, craft production, seals, bead-making activity, and a warehouse platform. That broader context matters because any argument about the basin has to fit the town's clearly commercial character.",
    },
    {
      title: 'Why Many Call It a Dockyard',
      body:
        'The classic dockyard interpretation points to the large brick-lined basin, inlet and outlet arrangements, the settlement relation to an ancient tidal channel, and the presence of warehousing and trade goods nearby. In heritage writing, the basin often stands as one of the earliest known examples of planned maritime infrastructure in South Asia.',
    },
    {
      title: 'Why Some Scholars Disagree',
      body:
        'Not everyone accepts the dockyard theory. Critics question whether the basin could have functioned effectively for seagoing craft under the local geomorphological conditions and suggest it may have served as a reservoir or irrigation installation instead. Including this disagreement does not weaken the site; it makes interpretation more credible.',
    },
    {
      title: 'Hydraulic Control Still Matters',
      body:
        'Whether for berthing, water storage, or a combination of uses, the basin required planning for flooding, silt, water level changes, and durable retaining walls. That means the hydraulic intelligence of the site remains important even if scholars continue to debate its exact operational role.',
    },
    {
      title: 'What Remains Certain',
      body:
        'Lothal connected water management to trade. It belonged to a civilization that understood standardization, drainage, craft specialization, and regional exchange. The basin debate should therefore be taught as a question inside a larger success story, not as a reason to dismiss the site.',
    },
  ],
  gallery: [
    {
      src: '/lothal-dockyard.jpg',
      alt: 'Archaeological view of the Lothal basin and surrounding remains',
      caption: 'The basin must be read together with the warehouse zone, channels, and commercial town plan around it.',
    },
    {
      src: '/lothal-basin-layout.svg',
      alt: 'Diagram of Lothal basin, channels, warehouse area, and trade context',
      caption: 'Showing the basin in plan makes the engineering claim and the debate easier to understand.',
      fit: 'contain' as const,
    },
  ],
  closingTitle: 'The Debate Is Part of the Story',
  closingText:
    'Lothal remains a major engineering and trade site whether one emphasizes dockyard, reservoir, or mixed hydraulic use. Presenting that nuance helps the page feel serious, evidence-based, and genuinely useful to visitors who want more than a slogan.',
};

export function LothalDockyardDetailPage() {
  return <TopicShowcasePage {...pageConfig} />;
}
