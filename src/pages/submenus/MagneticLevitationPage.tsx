import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

export function MagneticLevitationPage() {
  return (
    <TopicShowcasePage
      metaTitle="Magnetic Levitation - Legend, Physics, and Evidence"
      category="Advanced Tech"
      title="Magnetic Levitation"
      summary="An exploratory page on historical levitation claims, magnetic lore, and the modern physics that helps separate possibility from legend."
      heroImage="/levitation.jpg"
      heroAlt="Magnetic levitation concept visual"
      framingLabel="Physics First"
      framingNote="Magnetic levitation is a real physical phenomenon, but historical claims require direct evidence before they can be treated as demonstrated ancient technologies. This page treats the topic as a bridge between legend, materials science, and critical inquiry."
      keyPoints={[
        'Historical retellings sometimes describe suspended objects in temples or sacred spaces using magnets or special stones.',
        'Modern magnetic levitation depends on carefully balanced forces, stable control, and known material behavior.',
        'A believable historical claim would need architectural remains, device evidence, or tightly sourced documentation that can be independently checked.',
      ]}
      sections={[
        {
          title: 'Where the Claims Come From',
          body: 'Magnetic levitation stories often appear in later retellings, travel literature, or public-history narratives about temple marvels. These accounts are culturally interesting, but they vary in detail and reliability, so they need careful source checking before being repeated as technological fact.',
        },
        {
          title: 'Physics in Brief',
          body: 'Levitation can happen through magnetic attraction, repulsion, diamagnetism, superconductivity, or actively stabilized control systems. That matters because the word levitation sounds extraordinary, but the underlying physics is well understood and can be discussed without exaggeration.',
        },
        {
          title: 'What Would Count as Evidence',
          body: 'Strong evidence would include surviving structural features designed for magnetic suspension, clearly associated materials, or primary technical descriptions with reproducible details. Without that, the topic should remain in the category of informed speculation rather than demonstrated historical engineering.',
        },
        {
          title: 'Why the Idea Persists',
          body: 'Levitation claims endure because they combine wonder, sacred architecture, and modern fascination with hidden technology. Used well, the topic can actually improve scientific literacy by teaching how to move from a dramatic claim to a disciplined evidence test.',
        },
      ]}
      gallery={[
        {
          src: '/levitation.jpg',
          alt: 'Magnetic levitation concept artwork',
          caption: 'Levitation imagery is compelling, which is exactly why source discipline matters when historical claims are discussed.',
        },
        {
          src: '/acoustic-levitation.jpg',
          alt: 'Acoustic levitation experiment',
          caption: 'Modern demonstrations show that levitation is physically possible, but the mechanism and evidence still need to match the claim being made.',
        },
        {
          src: '/vimana.jpg',
          alt: 'Advanced technology concept art',
          caption: 'This topic sits beside other high-imagination themes that benefit from a careful distinction between cultural narrative and confirmed engineering history.',
        },
      ]}
      closingTitle="A Better Question Than 'Did It Happen?'"
      closingText="Magnetic levitation becomes more valuable when the page asks how the claim is sourced, what physics would be required, and what material evidence would settle the question. That makes the topic both exciting and intellectually honest."
    />
  );
}
