import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

export function MusicalPillarsOfHampiPage() {
  return (
    <TopicShowcasePage
      metaTitle="Musical Pillars of Hampi - Resonance in Stone"
      category="Advanced Tech"
      title="Musical Pillars of Hampi"
      summary="An introduction to the resonant granite pillars of the Vittala Temple and the acoustic intelligence embedded in sacred architecture."
      heroImage="/musical-pillars.jpg"
      heroAlt="Musical pillars at Hampi"
      framingLabel="Conservation Context"
      framingNote="The pillars are protected heritage elements, so modern understanding depends on careful observation, acoustic analysis, and conservation-sensitive study rather than repeated physical striking."
      keyPoints={[
        'The pillar clusters at Hampi are associated with distinct tonal responses when excited.',
        'Resonance depends on geometry, stone continuity, support conditions, and the surrounding architectural frame.',
        'The site shows that material science, ritual design, and sonic experience were not separate domains.',
      ]}
      sections={[
        {
          title: 'Temple Setting',
          body: 'The musical pillars belong to the Vittala Temple complex, one of the most celebrated monuments of Hampi. Their significance comes not only from sound production, but from how acoustics were integrated into an architectural environment designed for movement, ceremony, and performance.',
        },
        {
          title: 'How Resonance Works',
          body: 'Stone columns can respond differently depending on length, thickness, internal continuity, and how energy travels through attached members. Even without turning the pillars into a modern instrument in the usual sense, the design reflects a sophisticated awareness of how vibration behaves in carved granite.',
        },
        {
          title: 'Why Protection Matters',
          body: 'Because the site is fragile, direct striking is restricted. This makes non-destructive testing, careful measurement, and conservation science especially important. The goal is to understand the phenomenon while preserving the monument for future generations.',
        },
        {
          title: 'Why Hampi Stands Out',
          body: 'The musical pillars capture a larger truth about ancient Indian engineering: design was often multi-sensory. Structure, ornament, circulation, ritual, and sound could all be coordinated into one environment rather than treated as separate disciplines.',
        },
      ]}
      gallery={[
        {
          src: '/musical-pillars.jpg',
          alt: 'Stone pillars at the Vittala Temple',
          caption: 'The pillars are most impressive when read as part of a full architectural and ritual system.',
        },
        {
          src: '/sun-temple.jpg',
          alt: 'Monumental temple design',
          caption: 'Other temple complexes also show how architecture in India often fused symbolic design with precise physical behavior.',
        },
        {
          src: '/acoustic-levitation.jpg',
          alt: 'Acoustic experiment visual',
          caption: 'Modern vibration experiments help explain why sound, frequency, and material response remain powerful teaching tools for this topic.',
        },
      ]}
      closingTitle="Stone, Sound, and Design Thinking"
      closingText="The musical pillars of Hampi deserve attention not as a novelty alone, but as evidence that pre-modern builders could work with structure, texture, and sonic response in highly intentional ways. They remain one of the strongest home-page topics for showing how art and engineering meet."
    />
  );
}
