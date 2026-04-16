import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

const pageConfig = {
  metaTitle: 'Sun Temples - Architecture Tuned to Light and Time',
  category: 'Astronomy',
  title: 'Sun Temples - Architecture Tuned to Light and Time',
  summary:
    'Indian sun temples are best understood as solar architecture. They encode orientation, ritual movement, seasonal light, and symbolic timekeeping. They are not observatories in the Jantar Mantar sense, but they do preserve a rich archaeoastronomical vocabulary.',
  heroImage: '/sun-temple.jpg',
  heroAlt: 'Sun temple architecture aligned with sunlight',
  framingLabel: 'Archaeoastronomy Lens',
  framingNote:
    'This page treats solar temples carefully: strong on orientation, light, and symbolism, but cautious about overclaiming precision measurement. That makes the story more trustworthy and more useful for students.',
  framingDetails: [
    {
      title: 'Orientation is the strongest claim',
      text:
        'East-facing axes, sunrise experience, and controlled movement through light are easier to support than claims of instrument-grade astronomical precision.',
    },
    {
      title: 'Light teaches through sequence',
      text:
        'Approach paths, courtyards, mandapas, and sanctum spaces guide how visitors encounter brightness, shadow, and solar imagery over time.',
    },
    {
      title: 'Symbolism still carries knowledge',
      text:
        'Wheels, horses, axes, and Surya imagery communicate ordered time and cosmic motion even when they are not used as calibrated measuring devices.',
    },
    {
      title: 'Best honest framing',
      text:
        'Present these temples as solar architecture: a meeting point of ritual, design, season, direction, and public memory rather than a substitute for observatories.',
    },
  ],
  factCards: [
    { label: 'Modhera', value: '1026-27 CE', note: 'Best taught through axis, approach, Surya Kund, and sunrise interpretation.' },
    { label: 'Konark', value: '13th century', note: 'The temple turns Surya imagery into a monumental chariot form.' },
    { label: 'Solar Symbolism', value: '24 wheels and 7 horses', note: 'The imagery communicates time, motion, and sacred solar order.' },
    { label: 'Best Reading', value: 'Solar architecture, not observatory math', note: 'This keeps the claim impressive without overstating measurement precision.' },
  ],
  keyPoints: [
    'East-facing axes and calibrated light effects matter more here than instrument-grade angle reading.',
    'Modhera is widely interpreted through sunrise alignment and carefully staged movement toward the sanctum.',
    'Konark turns the solar chariot into full architectural form with wheels, horses, and axial planning.',
    'Some Konark wheels are popularly read as sundial-like teaching devices, but the temple is not a Jantar Mantar-style observatory.',
    'These sites are strongest when presented as intersections of ritual, architecture, and time-conscious design.',
  ],
  sections: [
    {
      title: 'Architecture as Solar Theatre',
      body:
        "Sun temples organize approach, orientation, and illumination so that sunlight becomes part of the visitor's experience. The building does not merely face the Sun; it stages the Sun through sequence, shadow, and symbolic program. That is why these monuments are so important to archaeoastronomy.",
    },
    {
      title: 'Modhera and Morning Light',
      body:
        'The Modhera Sun Temple in Gujarat is often discussed for its eastward orientation and for heritage interpretations linking the sanctum to equinox sunrise illumination. Even where exact reconstruction is limited by damage to the original sanctum, the solar intention of the plan is clear in the axis, the Surya Kund, and the sequence of movement.',
    },
    {
      title: 'Konark as a Solar Chariot',
      body:
        'The Archaeological Survey of India describes Konark as a gigantic solar chariot with twelve pairs of ornate wheels drawn by seven horses. The whole monument turns cosmology into structure. It is useful because visitors can immediately see how time, direction, and sacred narrative have been built into one coordinated form.',
    },
    {
      title: 'Instrument, Metaphor, or Both?',
      body:
        'Calling these temples instruments is meaningful only if we explain the sense carefully. They are not precision observatories for repeated angular measurement. They are better described as buildings tuned to solar orientation, seasonal lighting, and symbolic time. That framing keeps the claim real instead of overstretched.',
    },
    {
      title: 'Why the Topic Still Matters',
      body:
        'Sun temples remind us that scientific awareness does not always appear as a detached laboratory. Sometimes it appears as architecture that teaches direction, season, and daylight through lived experience. That makes these sites powerful for both heritage interpretation and design education.',
    },
  ],
  gallery: [
    {
      src: '/sun-temple.jpg',
      alt: 'Indian sun temple with strong axial and sculptural solar imagery',
      caption: 'Solar temples are best read through orientation, procession, and the choreography of light.',
    },
    {
      src: '/sun-temple-alignment.svg',
      alt: 'Diagram connecting east-west temple axis, sunrise, and symbolic timekeeping',
      caption: 'The useful claim is alignment and solar experience, not instrument-like precision in every detail.',
      fit: 'contain' as const,
    },
  ],
  closingTitle: 'Useful, Cautious, and Still Impressive',
  closingText:
    'When sun temples are explained without hype, they become more valuable, not less. They show how architecture can encode direction, season, and sacred time while still remaining distinct from later scientific observatories built for direct measurement.',
};

export function SunTemplesInstrumentsDetailPage() {
  return <TopicShowcasePage {...pageConfig} />;
}
