import { InfoPageLayout } from './InfoPageLayout';

export function AccessibilityPage() {
  return (
    <InfoPageLayout
      category="Legal"
      title="Accessibility"
      intro="We aim to make this platform usable across devices, screen sizes, and assistive technologies."
      heroImage="/sun-temple.jpg"
      sections={[
        {
          title: 'Readable Design',
          body: 'Typography, spacing, and contrast are continuously tuned for long-form reading and clear section hierarchy.',
        },
        {
          title: 'Keyboard and Focus',
          body: 'Interactive elements are designed for keyboard navigation with visible focus states and semantic structure.',
        },
        {
          title: 'Media Accessibility',
          body: 'Embedded video sections and image galleries are paired with contextual text to improve understanding and navigation.',
        },
        {
          title: 'Feedback Loop',
          body: 'If any page presents accessibility barriers, users are encouraged to report details via Contact / Contribute.',
        },
      ]}
    />
  );
}
