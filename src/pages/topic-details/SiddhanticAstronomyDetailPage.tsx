import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

const pageConfig = {
  metaTitle: "Siddhantic Astronomy - India's Mathematical Sky Models",
  category: 'Astronomy',
  title: "Siddhantic Astronomy - India's Mathematical Sky Models",
  summary:
    'A siddhanta is not just a sky story. It is a computational framework built from epochs, mean motions, correction rules, and trigonometric tables so that planetary positions, calendars, and eclipses can be generated again and again.',
  heroImage: '/astronomy-jantar.jpg',
  heroAlt: 'Astronomical visual for siddhantic calculation traditions',
  framingLabel: 'Model-Building Lens',
  framingNote:
    'The most useful way to teach siddhantic astronomy is as algorithmic modelling. Different schools debated parameters and constants, but they shared a commitment to turning celestial recurrence into computable results.',
  framingDetails: [
    {
      title: 'Read it as a pipeline',
      text:
        'A siddhanta starts from an epoch, advances mean motion, applies corrections, and produces positions or events. That repeatable sequence is the heart of the topic.',
    },
    {
      title: 'Tables were technology',
      text:
        'Sine tables, motion constants, and correction rules acted like reusable tools. They reduced repeated labor and helped calculators compare results across dates.',
    },
    {
      title: 'Debate improved models',
      text:
        'Different schools used different constants and refinements. The tradition stayed active because astronomers recalculated, commented, and adjusted inherited rules.',
    },
    {
      title: 'Outputs made it useful',
      text:
        'Calendars, conjunctions, rising times, and eclipse estimates show that siddhantic astronomy was not abstract speculation alone; it supported practical public timekeeping.',
    },
  ],
  factCards: [
    { label: 'Core Pattern', value: 'Epoch -> motion -> correction', note: 'A reusable workflow lets calculators solve new dates without starting over.' },
    { label: 'Main Tool', value: 'Sine tables', note: 'Trigonometry connected angles, arcs, shadows, and planetary positions.' },
    { label: 'Outputs', value: 'Planets, calendars, eclipses', note: 'The systems served practical forecasting and calendrical needs.' },
    { label: 'Tradition', value: 'Textual schools, not one text', note: 'Different authors refined constants and rules across centuries.' },
  ],
  keyPoints: [
    'A siddhanta is a rule-based astronomical system, not a single book or institution.',
    'The method usually starts from an epoch and builds forward using mean motions and correction terms.',
    'Trigonometry, especially sine tables, is central to the whole enterprise.',
    'Different astronomers such as Aryabhata and Brahmagupta proposed different parameters and methods.',
    'The products were practical: panchangas, conjunctions, rising times, and eclipse calculations.',
  ],
  sections: [
    {
      title: 'What a Siddhanta Is',
      body:
        'The Sanskrit word siddhanta refers to an established astronomical doctrine or system. In practice it means a structured package of constants, cycles, geometrical assumptions, and procedures. Instead of asking one question once, a siddhanta lets a trained calculator answer many related questions over and over.',
    },
    {
      title: 'The Computation Pipeline',
      body:
        "A typical workflow begins with a reference epoch. From there the calculator advances the mean position of a planet or luminary, then applies corrections for anomalies, latitude, or node position according to the school's rules. This pipeline is what makes siddhantic astronomy feel close to later computational science.",
    },
    {
      title: 'Why Trigonometry Matters',
      body:
        'Indian astronomy used sine tables extensively. Once angles and arcs could be related through tabulated sines, many positional and shadow problems became easier to solve systematically. That is why siddhantic astronomy belongs in the history of mathematics as much as in the history of astronomy.',
    },
    {
      title: 'Many Schools, Shared Ambition',
      body:
        'Texts such as the Surya Siddhanta, Aryabhatiya, and Brahma-sphuta-siddhanta do not always agree. Their constants and assumptions differ, and later commentators refined them further. Yet they share the same larger ambition: make the heavens legible through stable rules and repeated calculation.',
    },
    {
      title: 'Practical Outputs and Long Legacy',
      body:
        'These systems powered calendars, eclipse forecasts, rising and setting times, and the timing of rituals and public life. They also created a culture of commentary, correction, and comparison that kept mathematical astronomy active for centuries rather than freezing it into a single authority.',
    },
  ],
  gallery: [
    {
      src: '/astronomy-jantar.jpg',
      alt: 'Astronomical architecture representing long Indian calculation traditions',
      caption: 'Observatories make sense only because a computational tradition already existed behind them.',
    },
    {
      src: '/siddhantic-computation-flow.svg',
      alt: 'Flow diagram showing epoch, mean motion, corrections, and output tables',
      caption: 'This is the heart of siddhantic astronomy: a reusable calculation pipeline.',
      fit: 'contain' as const,
    },
    {
      src: '/aryabhata.jpg',
      alt: 'Aryabhata-related visual connected to siddhantic astronomy',
      caption: 'Individual astronomers mattered, but the larger achievement was the sustained model-building tradition.',
    },
  ],
  closingTitle: 'A Tradition of Computation',
  closingText:
    'Siddhantic astronomy deserves attention because it shows how deeply mathematical premodern astronomy could be. The real legacy is not one dramatic discovery, but a long-lived culture of models, tables, corrections, and disciplined recalculation.',
};

export function SiddhanticAstronomyDetailPage() {
  return <TopicShowcasePage {...pageConfig} />;
}
