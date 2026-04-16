import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

export function VimanaTechnologyPage() {
  return (
    <TopicShowcasePage
      metaTitle="Vimana Technology - Text, Imagination, and Reconstruction"
      category="Advanced Tech"
      title="Vimana Technology"
      summary="A guided look at vimana traditions through Sanskrit narrative, later speculative literature, and modern reconstruction culture."
      heroImage="/vimana.jpg"
      heroAlt="Concept artwork inspired by vimana traditions"
      framingLabel="Reading Lens"
      framingNote="This topic is best studied by separating mythic-literary imagery, later technical claims, and evidence-based engineering history. The strongest value here comes from understanding how ancient imagination, cosmology, and modern reconstruction efforts interact."
      keyPoints={[
        'Epic and Puranic literature includes aerial vehicles in symbolic, royal, and divine narrative settings.',
        'Modern vimana discussions often mix philology, heritage storytelling, and speculative design work.',
        'There is no archaeological evidence confirming ancient aircraft as demonstrated historical machines.',
      ]}
      sections={[
        {
          title: 'Textual Traditions',
          body: 'References to flying chariots and celestial vehicles appear across layered literary traditions. These descriptions matter historically because they show how motion, altitude, and royal-divine power were imagined, even when the texts are not technical manuals in the modern engineering sense.',
        },
        {
          title: 'Why Designers Revisit It',
          body: 'Artists, animators, and 3D modelers return to vimana motifs because they offer dramatic forms for reimagining ancient mobility. These reconstructions can be educational when they document which parts come from text, which come from interpretation, and which are purely visual extrapolation.',
        },
        {
          title: 'Evidence Boundary',
          body: 'The often-cited Vaimanika Shastra is widely treated as a late and contested source rather than straightforward proof of ancient aerospace technology. Responsible reading asks when a text was composed, how it survives, and whether material evidence supports the claims attached to it.',
        },
        {
          title: 'How to Study It Responsibly',
          body: 'A good workflow is: read the passage in context, identify its literary genre, compare manuscript history, and only then ask whether any engineering interpretation is justified. That keeps cultural curiosity intact without overstating what the record proves.',
        },
      ]}
      gallery={[
        {
          src: '/vimana.jpg',
          alt: 'Vimana concept artwork',
          caption: 'Visual reconstructions often treat vimanas as heritage design studies rather than confirmed historical vehicles.',
        },
        {
          src: '/astronomy-jantar.jpg',
          alt: 'Astronomical observatory at Jantar Mantar',
          caption: 'Ancient Indian scientific achievement is strongest where surviving instruments, texts, and sites can be studied together.',
        },
        {
          src: '/sun-temple.jpg',
          alt: 'Temple architecture associated with solar design',
          caption: 'Monumental architecture provides a reminder that symbolism, science, and sacred design often coexist in the same cultural landscape.',
        },
      ]}
      closingTitle="Why the Topic Still Matters"
      closingText="Vimana technology remains compelling because it sits at the meeting point of myth, visual imagination, and public fascination with ancient science. Treated carefully, it becomes a useful case study in how we read historical texts without flattening them into either blind belief or dismissive skepticism."
    />
  );
}
