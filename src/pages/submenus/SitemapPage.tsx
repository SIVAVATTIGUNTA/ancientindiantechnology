import { InfoPageLayout } from './InfoPageLayout';

export function SitemapPage() {
  return (
    <InfoPageLayout
      category="Legal"
      title="Sitemap"
      intro="Quick access guide to major sections and topic clusters across the Ancient Indian Technology platform."
      heroImage="/astronomy-jantar.jpg"
      sections={[
        {
          title: 'Primary Domains',
          body: 'Metallurgy, Astronomy, Urban Planning, Medicine, Videos, and Resources form the core navigation architecture.',
        },
        {
          title: 'Topic Pages',
          body: 'Each submenu route is mapped to a dedicated page with topic-specific content, media, and related navigation.',
        },
        {
          title: 'Project and Legal Pages',
          body: 'Project overview, editorial standards, contribution paths, and legal pages are available through footer navigation.',
        },
        {
          title: 'Recommended Path',
          body: 'Start with Hero topics, continue through featured sections, then move into deep pages and resource collections.',
        },
      ]}
    />
  );
}
