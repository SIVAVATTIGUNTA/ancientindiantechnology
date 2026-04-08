import { InfoPageLayout } from './InfoPageLayout';

export function EditorialPrinciplesPage() {
  return (
    <InfoPageLayout
      category="Project"
      title="Editorial Principles"
      intro="Our content framework prioritizes clarity, evidence, and responsible interpretation when presenting ancient Indian scientific knowledge."
      heroImage="/sun-temple.jpg"
      sections={[
        {
          title: 'Evidence First',
          body: 'Claims are framed around textual, archaeological, or material references. Where evidence is debated, the page language remains transparent about uncertainty.',
        },
        {
          title: 'Contextual Interpretation',
          body: 'Technological ideas are read within historical context, avoiding anachronism while still connecting them to modern scientific questions where appropriate.',
        },
        {
          title: 'Readable for All',
          body: 'Every page is designed for students, general readers, and researchers with balanced structure: overview, key points, visual support, and next-step links.',
        },
        {
          title: 'Continuous Revision',
          body: 'Editorial updates are expected as new scholarship appears. The platform treats knowledge as evolving and invites corrections with source support.',
        },
      ]}
    />
  );
}
