import { TopicShowcasePage } from '../../components/resources/TopicShowcasePage';

export function AncientBatteryTechnologyPage() {
  return (
    <TopicShowcasePage
      metaTitle="Ancient Battery Technology - Text and Experimental Reconstruction"
      category="Advanced Tech"
      title="Ancient Battery Technology"
      summary="A cautious exploration of electrochemical interpretations linked with the Agastya Samhita and later reconstruction experiments."
      heroImage="/ancient-battery.jpg"
      heroAlt="Illustration of an ancient battery reconstruction setup"
      framingLabel="Evidence Note"
      framingNote="This topic is most useful when read as a comparison between textual translation, laboratory-style reconstruction, and the absence of direct archaeological proof for battery systems in ancient India. Reconstruction can be interesting without automatically proving historical use."
      keyPoints={[
        'Modern readers often connect Agastya Samhita passages with vessel-and-metal arrangements that resemble simple cells.',
        'Experimental reconstructions can generate small voltages when copper, zinc, electrolyte, and container systems are arranged appropriately.',
        'No securely identified archaeological battery workshops or operational electrical systems have yet confirmed large-scale historical use.',
      ]}
      sections={[
        {
          title: 'Textual Basis',
          body: 'Interpretations usually begin with verses attributed to the Agastya Samhita. The challenge is that translation choices matter: terms for metals, fluids, vessel forms, and process verbs must be read carefully before they are treated as technical instructions for electrochemistry.',
        },
        {
          title: 'Experimental Reconstruction',
          body: 'When researchers assemble copper, zinc, electrolyte, and container combinations inspired by later readings of the text, they can often produce measurable electrical output. That makes the topic educationally rich, because it shows how ancient descriptions can be tested through experimental archaeology and classroom science.',
        },
        {
          title: 'What Is Still Missing',
          body: 'To move from suggestive interpretation to strong historical proof, we would want corroborating evidence such as surviving device remains, production tools, workshop contexts, or unambiguous textual chains explaining purpose and use. That evidentiary bridge is still incomplete.',
        },
        {
          title: 'Why the Debate Matters',
          body: 'The battery question helps students learn how history of science works in practice. It teaches that plausible reconstruction, textual imagination, and material proof are related but not identical forms of evidence.',
        },
      ]}
      gallery={[
        {
          src: '/ancient-battery.jpg',
          alt: 'Ancient battery concept image',
          caption: 'Battery reconstructions are usually presented as interpretive experiments, not settled historical facts.',
        },
        {
          src: '/zinc-distillation.jpg',
          alt: 'Zinc distillation context image',
          caption: 'Ancient Indian metallurgy provides the material backdrop for discussions involving metals, vessels, and process control.',
        },
        {
          src: '/bronze-casting.jpg',
          alt: 'Bronze casting and metalworking',
          caption: 'Skilled metalworking traditions make this topic more meaningful when linked to broader craft and furnace knowledge.',
        },
      ]}
      closingTitle="A Strong Way to Present the Topic"
      closingText="Ancient battery technology is most convincing as a structured inquiry: what the text says, what a reconstruction can show, and what additional proof would still be required. That approach preserves curiosity while keeping the page academically grounded."
    />
  );
}
