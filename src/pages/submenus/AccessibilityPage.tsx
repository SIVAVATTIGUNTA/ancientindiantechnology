import { InfoPageLayout } from './InfoPageLayout';

export function AccessibilityPage() {
  return (
    <InfoPageLayout
      category="Accessibility"
      title="Accessibility Statement"
      intro="Ancient Indian Technology is committed to making scholarly heritage content readable, navigable, and usable for as many visitors as possible."
      seoDescription="Read the Ancient Indian Technology accessibility statement covering responsive design, keyboard support, screen reader compatibility, readability, contrast, and issue reporting."
      heroImage="/sun-temple.jpg"
      summaryCards={[
        { label: 'Commitment', value: 'Inclusive access to educational heritage content' },
        { label: 'Design focus', value: 'Readable, responsive, keyboard-friendly pages' },
        { label: 'Feedback', value: 'Accessibility issues can be reported through Contact' },
      ]}
      sections={[
        {
          eyebrow: 'Commitment',
          title: 'Our Accessibility Commitment',
          body: 'We want Ancient Indian Technology to be useful to students, teachers, researchers, general readers, and visitors using assistive technologies. Accessibility is treated as an ongoing responsibility across page structure, typography, contrast, mobile layouts, navigation, and media context.',
        },
        {
          eyebrow: 'Devices',
          title: 'Responsive and Mobile-Friendly Design',
          body: 'The website is designed to adapt across mobile, tablet, laptop, and desktop screens. Content blocks, menus, cards, hero sections, videos, and long-form articles are structured to reduce overflow and maintain comfortable reading space.',
          items: [
            'Layouts are built with responsive grids and flexible spacing.',
            'Buttons and navigation elements are designed to remain usable on small screens.',
            'Images and embedded media are sized to preserve page readability wherever possible.',
          ],
        },
        {
          eyebrow: 'Navigation',
          title: 'Keyboard Navigation Support',
          body: 'Interactive elements such as links, buttons, filters, accordions, menus, and forms should be reachable through keyboard navigation where supported by the browser and current component structure.',
          items: [
            'Navigation links use semantic link elements where possible.',
            'Buttons are used for interactive controls rather than non-semantic clickable text.',
            'Visible focus behavior is considered when styling important interactions.',
          ],
        },
        {
          eyebrow: 'Assistive tech',
          title: 'Screen Reader Compatibility',
          body: 'Pages are structured with headings, sections, lists, labels, and descriptive text to help screen reader users understand the page hierarchy. Images and media should include useful alternative text or nearby explanatory context when they support learning.',
          items: [
            'Pages use a single visible main content area with meaningful section headings.',
            'Forms should include labels and validation feedback.',
            'Educational diagrams and images are paired with surrounding explanations where possible.',
          ],
        },
        {
          eyebrow: 'Reading',
          title: 'Readability Improvements',
          body: 'The website presents complex history-of-science topics in a structured way so readers can move from overview to deeper detail without being overwhelmed.',
          items: [
            'Long pages are divided into readable sections, cards, lists, and supporting notes.',
            'Important disclaimers and evidence context are separated from ordinary body text.',
            'Scholarly wording is balanced with clear explanations for general audiences.',
          ],
        },
        {
          eyebrow: 'Visual design',
          title: 'Color Contrast Considerations',
          body: 'The website uses an ancient Indian inspired palette with warm parchment, dark brown, gold, and terracotta tones. We aim to maintain sufficient contrast between text and backgrounds, especially in hero sections, cards, buttons, and footer links.',
          note: 'If a color combination is difficult to read on your screen, please report the page and device details so it can be improved.',
        },
        {
          eyebrow: 'Media',
          title: 'Images, Videos, and Educational Media',
          body: 'Many pages include diagrams, historical images, video embeds, and visual explainers. We aim to make these materials understandable through titles, captions, nearby explanation, and topic context rather than relying only on the visual asset.',
          items: [
            'Videos are embedded from third-party platforms and may depend on their accessibility features.',
            'Image-heavy pages should still provide textual learning value.',
            'Decorative animation should not be required to understand the page.',
          ],
        },
        {
          eyebrow: 'Progress',
          title: 'Ongoing Improvements',
          body: 'Accessibility work is continuous. As new blog pages, resource pages, lecture topics, video sections, and research features are added, we will keep improving semantic structure, mobile behavior, performance, contrast, and assistive technology support.',
        },
        {
          eyebrow: 'Feedback',
          title: 'Reporting Accessibility Issues',
          body: 'If you experience an accessibility barrier, please contact us with the page URL, device or browser details, assistive technology used if relevant, and a short description of the issue. This helps us reproduce and fix the problem more reliably.',
          links: [
            {
              label: 'Report an Accessibility Issue',
              href: '/contact',
              description: 'Send page-specific accessibility feedback through the contact form.',
            },
          ],
        },
        {
          eyebrow: 'Support',
          title: 'Contact Support',
          body: 'If a page, video, article, or resource is difficult to access, we will try to provide clarification, alternate direction, or a content correction where feasible.',
        },
      ]}
      closingNote={{
        title: 'Help us make the archive easier to use',
        body: 'Accessibility feedback from real visitors is one of the most useful ways to improve a research-heavy website. Please share specific barriers when you find them.',
        linkLabel: 'Contact Support',
        linkHref: '/contact',
      }}
    />
  );
}
