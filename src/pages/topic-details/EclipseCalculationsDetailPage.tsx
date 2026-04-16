import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

const pageConfig = {
  metaTitle: 'Eclipse Calculations - Predicting Shadows in Motion',
  category: 'Astronomy',
  title: 'Eclipse Calculations - Predicting Shadows in Motion',
  summary:
    'Classical Indian astronomers treated eclipses as geometry: Sun, Earth, Moon, orbital nodes, and shadow cones. The goal was not wonder alone, but the timed prediction of contacts, magnitude, and visibility.',
  heroImage: '/astronomy-jantar.jpg',
  heroAlt: 'Astronomical observatory image for eclipse prediction',
  framingLabel: 'Computational Lens',
  framingNote:
    'Useful public explanation begins by replacing myth with geometry. Indian eclipse calculation traditions worked with alignments, nodes, and tabulated corrections, showing that prediction was part of mainstream astronomical practice.',
  framingDetails: [
    {
      title: 'Begin with node geometry',
      text:
        'New moon or full moon alone is not enough. The event becomes possible only when the Moon is close to an orbital node, where the lunar path crosses the Sun-Earth plane.',
    },
    {
      title: 'Prediction is layered',
      text:
        'Astronomers combined mean positions, node positions, and corrections before judging timing and visibility. The method was procedural, not a single lucky observation.',
    },
    {
      title: 'Explain visibility carefully',
      text:
        'A solar eclipse is local because the Moon shadow touches a narrow path on Earth. A lunar eclipse is visible from the night side because Earth shadow falls on the Moon.',
    },
    {
      title: 'Why it matters today',
      text:
        'Eclipse calculation is an excellent bridge between observation and mathematics: students can see how repeated sky motion becomes a forecast with testable results.',
    },
  ],
  factCards: [
    { label: 'Solar Eclipse', value: 'New moon near a node', note: 'The Moon must cross the Sun-Earth plane while it is between Earth and Sun.' },
    { label: 'Lunar Eclipse', value: 'Full moon near a node', note: 'Earth blocks sunlight when the full Moon passes through the shadow path.' },
    { label: 'Shadow Zones', value: 'Umbra and penumbra', note: 'These explain why some places see totality while others see only partial coverage.' },
    { label: 'Main Output', value: 'Timed event prediction', note: 'The useful result is contact timing, maximum phase, and likely visibility.' },
  ],
  keyPoints: [
    'Solar and lunar eclipses involve different shadows and different visibility patterns.',
    "Because the Moon's orbit is tilted, alignments must happen near nodes; that is why eclipses do not occur every month.",
    'Indian astronomers combined mean motions, node positions, and correction terms to predict events.',
    'Aryabhata explicitly described eclipses through shadow geometry rather than supernatural swallowing.',
    'Prediction mattered for calendars, ritual timing, and scientific prestige.',
  ],
  sections: [
    {
      title: 'Two Different Eclipses',
      body:
        "A solar eclipse occurs when the Moon passes between Earth and the Sun so that the Moon's shadow reaches Earth. A lunar eclipse occurs when Earth comes between the Sun and the Moon and Earth's shadow darkens the Moon. The geometry is different, so the visibility footprint and the prediction problems are different too.",
    },
    {
      title: 'Why Eclipses Are Not Monthly',
      body:
        "The Moon reaches new moon and full moon every month, but its orbit is tilted relative to the Sun-Earth plane. Eclipses happen only when those lunar phases occur close to the orbital nodes, the crossing points between the two planes. Any serious explanation of eclipse prediction has to start with that node logic.",
    },
    {
      title: 'How Traditional Computation Worked',
      body:
        "A calculator first established the current positions of the Sun, Moon, and nodes from a chosen epoch. Mean motions were then corrected using the astronomical school's parameters and tables. The result gave the possibility of an eclipse, its approximate timing, and in stronger systems its extent or magnitude.",
    },
    {
      title: 'What Could Actually Be Predicted',
      body:
        'The most useful outputs were first contact, maximum obscuration, final contact, and rough visibility by location. Precision varied by period and text, but the underlying ambition is clear: convert repeated sky motion into a repeatable forecast rather than a one-off omen.',
    },
    {
      title: 'Why the Topic Still Teaches Well',
      body:
        'Eclipse calculation is one of the best ways to show how astronomy joins observation with mathematics. It also helps students see why tables, notation, and correction procedures mattered so much in pre-telescope science. The human achievement is not the eclipse itself, but the confidence to predict it.',
    },
  ],
  gallery: [
    {
      src: '/astronomy-jantar.jpg',
      alt: 'Observatory architecture associated with positional astronomy',
      caption: 'Observatories and eclipse tables belong to the same culture of measured sky watching.',
    },
    {
      src: '/eclipse-geometry.svg',
      alt: 'Diagram of solar and lunar eclipse geometry with nodes and shadows',
      caption: 'The key teaching move is simple: replace the monster story with orbital geometry.',
      fit: 'contain' as const,
    },
    {
      src: '/aryabhata.jpg',
      alt: 'Aryabhata-related visual linked to eclipse explanation',
      caption: 'Classical Indian astronomy already framed eclipses as mathematically predictable alignments.',
    },
  ],
  closingTitle: 'Prediction Is the Point',
  closingText:
    'Ancient eclipse knowledge becomes most impressive when it is shown as working science. Tables, nodes, and shadow geometry allowed scholars to move from spectacle to prediction, and that is what still makes the subject feel useful today.',
};

export function EclipseCalculationsDetailPage() {
  return <TopicShowcasePage {...pageConfig} />;
}
