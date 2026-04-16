import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

const pageConfig = {
  metaTitle: 'Aryabhata, Place Value, and the Zero Tradition',
  category: 'Astronomy',
  title: 'Aryabhata, Place Value, and the Zero Tradition',
  summary:
    "Aryabhata's 499 CE Aryabhatiya shows how positional thinking, trigonometry, and astronomical calculation worked together in classical India. It also sits inside the longer Indian story in which zero matured from a placeholder into a full arithmetic number.",
  heroImage: '/aryabhata.jpg',
  heroAlt: 'Aryabhata-themed visual for mathematical astronomy',
  framingLabel: 'Evidence Lens',
  framingNote:
    "This page separates three linked but different achievements: Aryabhata's own 499 CE mathematics, the wider Indian place-value tradition, and the later 7th-century arithmetic of zero formalized by Brahmagupta. Making that distinction improves both accuracy and appreciation.",
  framingDetails: [
    {
      title: 'Keep the timeline honest',
      text:
        'Aryabhata belongs to the place-value and computational astronomy tradition, while Brahmagupta is the safer landmark for explicit arithmetic rules involving zero.',
    },
    {
      title: 'Why astronomy needed notation',
      text:
        'Planetary cycles, eclipse intervals, and sine tables require compact numbers that can be checked and reused. Place value made long calculation far more manageable.',
    },
    {
      title: 'Zero as a working idea',
      text:
        'A placeholder keeps digit positions meaningful; a number can then enter arithmetic rules. Showing both stages prevents the story from becoming a simple invention myth.',
    },
    {
      title: 'Useful classroom takeaway',
      text:
        'The achievement is a culture of calculation: positional notation, trigonometry, table making, and later zero arithmetic reinforcing one another across centuries.',
    },
  ],
  factCards: [
    { label: 'Treatise', value: '499 CE', note: 'The Aryabhatiya compresses arithmetic, geometry, and sky models into verse rules.' },
    { label: 'Pi Value', value: '3.1416', note: 'Aryabhata used a close approximation useful for circular and astronomical calculation.' },
    { label: 'Core Tool', value: 'Place-value numeration', note: 'Position made large cycles and repeated table work easier to write and verify.' },
    { label: 'Later Zero Rules', value: 'Brahmagupta, 628 CE', note: 'This keeps the zero story accurate while still showing the Indian continuity.' },
  ],
  keyPoints: [
    'Aryabhata worked with positional numeration and compact numerical encoding for astronomy.',
    'He belongs to the zero tradition, but the full arithmetic treatment of zero is usually credited to Brahmagupta in 628 CE.',
    'The same mathematical culture supported sine tables, calendar making, and eclipse prediction.',
    "Aryabhata argued that Earth's rotation explains the apparent westward motion of the stars.",
    'His methods travelled into later Sanskrit and Arabic scientific traditions.',
  ],
  sections: [
    {
      title: 'What Aryabhata Actually Wrote',
      body:
        'Aryabhata composed the Aryabhatiya in 499 CE. The text is short but extremely dense: it covers arithmetic, geometry, time reckoning, and spherical astronomy in rule form. Its importance lies not only in individual results but in its style of compressing calculation into reusable algorithms.',
    },
    {
      title: 'Zero, Placeholder, and Shunya',
      body:
        'The page title often tempts people to say that Aryabhata invented zero. That is too simple. Aryabhata described a positional system whose logic depends on place and placeholder thinking, but the explicit arithmetic rules for zero as a number are associated with Brahmagupta more than a century later. The real achievement is the continuity of the Indian computational tradition across both milestones.',
    },
    {
      title: 'Why Place Value Changed Astronomy',
      body:
        'Astronomy needs very large cycles, many intermediate steps, and frequent table lookups. Positional notation makes those operations dramatically easier to write, check, and transmit. It is one reason Indian astronomy could support durable traditions of ephemerides, calendrical work, and eclipse prediction.',
    },
    {
      title: 'Sines, Pi, and Calculation Culture',
      body:
        'Aryabhata used pi as 62,832 divided by 20,000, which is about 3.1416, and he worked with sine values rather than the full chord methods preferred in some older traditions. That shift matters because sines make many astronomical calculations more systematic and easier to tabulate.',
    },
    {
      title: 'Earth in Motion and Eclipse Explanation',
      body:
        "Aryabhata explained that the apparent daily motion of the heavens is produced by Earth's rotation. He also described eclipses in terms of shadows and alignments rather than mythic swallowing. That combination of mathematical abstraction and physical explanation is why his work still feels modern to many readers.",
    },
  ],
  gallery: [
    {
      src: '/aryabhata.jpg',
      alt: 'Portrait-style visual for Aryabhata and Indian mathematical astronomy',
      caption: 'Aryabhata is best understood as a mathematical astronomer working inside a larger Indian place-value tradition.',
    },
    {
      src: '/aryabhata-place-value.svg',
      alt: 'Diagram showing positional notation, placeholder logic, and later zero arithmetic',
      caption: 'The strongest telling links Aryabhata positional methods with the later formal arithmetic of zero.',
      fit: 'contain' as const,
    },
    {
      src: '/astronomy-jantar.jpg',
      alt: 'Architectural astronomy image connecting calculation to observation',
      caption: 'Indian astronomy always depended on both calculation and observation, not on symbols alone.',
    },
  ],
  closingTitle: 'Why This Page Matters',
  closingText:
    'Aryabhata does not need an exaggerated legend to remain impressive. When we present him accurately, we still see a foundational scientific culture: place value, trigonometry, algorithmic astronomy, and the intellectual path that helped make zero central to world mathematics.',
};

export function AryabhataZeroDetailPage() {
  return <TopicShowcasePage {...pageConfig} />;
}
