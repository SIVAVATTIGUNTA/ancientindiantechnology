import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

const pageConfig = {
  metaTitle: 'Jantar Mantar - Stone Instruments, Precision Skies',
  category: 'Astronomy',
  title: 'Jantar Mantar - Stone Instruments, Precision Skies',
  summary:
    'The Jantar Mantar observatories built for Sawai Jai Singh II in the early 18th century turned geometry into architecture. Their masonry instruments were designed for naked-eye astronomy, timekeeping, and improved celestial tables.',
  heroImage: '/astronomy-jantar.jpg',
  heroAlt: 'Jantar Mantar observatory with monumental astronomical geometry',
  framingLabel: 'Heritage Science',
  framingNote:
    'These structures should be read as working instruments before they are treated as monuments. Their size, calibration, and orientation show an attempt to reduce error and stabilize observation in an age before modern telescopes became standard in South Asia.',
  framingDetails: [
    {
      title: 'Start with the instrument question',
      text:
        'Ask what each form measures: time, altitude, azimuth, declination, or celestial coordinates. The monument becomes easier to understand once the measurement task is clear.',
    },
    {
      title: 'Scale reduces reading error',
      text:
        'Large masonry surfaces made tiny changes in shadow or angle easier to see. The size was not spectacle alone; it supported more stable naked-eye readings.',
    },
    {
      title: 'Observation needed trained practice',
      text:
        'The instruments still required observers who understood markings, alignment, timing, and local horizon conditions. Jantar Mantar was a working knowledge system, not a self-reading machine.',
    },
    {
      title: 'Best teaching link',
      text:
        'Connect the stone forms to tables and calendars. The site makes sense as the visible half of a larger culture of calculation, correction, and record keeping.',
    },
  ],
  factCards: [
    { label: 'Builder', value: 'Sawai Jai Singh II', note: 'A ruler-scholar who sponsored observatories to improve astronomical tables.' },
    { label: 'Main Phase', value: '1724-1734', note: 'The Jaipur complex belongs to a wider program of early modern sky measurement.' },
    { label: 'Instrument Scale', value: '~20 fixed devices', note: 'Large masonry instruments reduce handling error and make small angles readable.' },
    { label: 'Status', value: 'UNESCO World Heritage', note: 'Jaipur is valued as the most complete and best-preserved Jantar Mantar site.' },
  ],
  keyPoints: [
    'Jantar Mantar instruments are not decorative forms; each one solves a measurement problem.',
    'Large masonry scale reduces some handling and alignment errors seen in smaller portable tools.',
    'The Samrat Yantra measures local solar time and helps estimate declination.',
    'The Jai Prakash and Ram Yantra translate celestial coordinates into readable geometry.',
    'The observatories belong to a cross-cultural history linking Sanskrit, Islamic, and European astronomical traditions.',
  ],
  sections: [
    {
      title: 'Why Jai Singh Built Them',
      body:
        'Jai Singh II was dissatisfied with inaccuracies in current astronomical tables and wanted better observational control. The observatories were therefore practical state projects connected to astronomy, astrology, calendars, and royal administration, not merely symbolic monuments.',
    },
    {
      title: 'The Main Instrument Families',
      body:
        'The Samrat Yantra is effectively a giant sundial with precise surfaces for reading solar time. The Jai Prakash uses hemispherical geometry to map celestial coordinates into a readable interior bowl. The Ram Yantra uses cylindrical forms to read altitude and azimuth. Together they form a whole observatory rather than a single giant clock.',
    },
    {
      title: 'Why Masonry Matters',
      body:
        'Stone and masonry allowed large, stable surfaces aligned to the Earth and sky. The size of the instruments made markings easier to read and small angle differences easier to detect. The design logic is similar to making a ruler larger when fine measurement matters.',
    },
    {
      title: 'Knowledge from Many Traditions',
      body:
        "Jai Singh's project drew on Sanskrit astronomy, Islamic zij traditions, and information from Europe. That exchange is one reason Jantar Mantar feels modern: it is a site of synthesis, revision, and instrument design rather than passive preservation.",
    },
    {
      title: 'Why the Jaipur Site Endures',
      body:
        'UNESCO highlights Jaipur as the most significant and best-preserved of the historic observatories. It survives as a public lesson in how architecture can become a scientific interface. Visitors do not just look at the sky from here; they learn how previous generations measured it.',
    },
  ],
  gallery: [
    {
      src: '/astronomy-jantar.jpg',
      alt: 'Monumental instrument surfaces at Jantar Mantar',
      caption: 'Shadow, angle, and calibrated stone surfaces are the core language of the observatory.',
    },
    {
      src: '/jantar-mantar-instruments.svg',
      alt: 'Diagram introducing the Samrat Yantra, Jai Prakash, and Ram Yantra',
      caption: 'The best entry point is to show what each instrument measures and why its shape differs.',
      fit: 'contain' as const,
    },
  ],
  closingTitle: 'Architecture as Measurement',
  closingText:
    'Jantar Mantar proves that science can be built at civic scale. The observatories make astronomy visible, walkable, and measurable, which is exactly why they remain so effective for education today.',
};

export function JantarMantarObservatoriesDetailPage() {
  return <TopicShowcasePage {...pageConfig} />;
}
