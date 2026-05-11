import { InfoPageLayout } from './InfoPageLayout';

export function SitemapPage() {
  return (
    <InfoPageLayout
      category="Navigation"
      title="Sitemap"
      intro="A structured guide to the major pages, technology domains, evidence resources, speculative topics, and policy pages on Ancient Indian Technology."
      seoDescription="Explore the Ancient Indian Technology sitemap with links to main pages, metallurgy, astronomy, medicine, urban engineering, evidence resources, speculative topics, blogs, videos, and legal pages."
      heroImage="/astronomy-jantar.jpg"
      summaryCards={[
        { label: 'Core areas', value: 'Domains, videos, blogs, resources, and contact pages' },
        { label: 'Best for', value: 'Readers, students, teachers, researchers, and contributors' },
        { label: 'Navigation style', value: 'Clickable cards grouped by topic hierarchy' },
      ]}
      sections={[
        {
          eyebrow: 'Primary',
          title: 'Main Pages',
          body: 'Start here for the website overview, project information, blog articles, video collections, and contact pathways.',
          links: [
            { label: 'Home', href: '/', description: 'Main landing page with featured topics, documentary series, testimonials, and resource entry points.' },
            { label: 'About', href: '/topic/about-this-project', description: 'Project mission, editorial direction, and knowledge-organization approach.' },
            { label: 'Blogs', href: '/blogs', description: 'Scholarly blog articles with categories, evidence notes, references, and related reading.' },
            { label: 'Videos', href: '/topic/videos', description: 'Video hub for documentaries, short clips, lecture series, and visual learning resources.' },
            { label: 'Contact', href: '/contact', description: 'Contact form for questions, corrections, collaborations, and general support.' },
          ],
        },
        {
          eyebrow: 'Domains',
          title: 'Technology Domains',
          body: 'Explore the main knowledge domains used to organize ancient Indian science and technology topics.',
          links: [
            { label: 'Metallurgy', href: '/topic/metallurgy', description: 'Wootz steel, Delhi Iron Pillar, zinc distillation, lost-wax casting, and copper metallurgy.' },
            { label: 'Astronomy', href: '/topic/astronomy', description: 'Aryabhata, Jantar Mantar, siddhantic astronomy, eclipse calculations, and sun temple alignment.' },
            { label: 'Medicine', href: '/topic/medicine', description: 'Sushruta, Charaka, Ayurveda principles, traditional healing, and medical history context.' },
            { label: 'Mathematics', href: '/blogs?category=Mathematics', description: 'Articles on computation, place value, zero, tables, measurement, and mathematical traditions.' },
            { label: 'Urban Engineering', href: '/topic/urban-planning', description: 'Drainage, Great Bath, stepwells, Lothal basin, Vaastu, and historic spatial planning.' },
          ],
        },
        {
          eyebrow: 'Sources',
          title: 'Evidence Library',
          body: 'Use these pathways when you want source-oriented reading, research leads, and evidence-aware interpretation.',
          links: [
            { label: 'Archaeology', href: '/blogs?category=Archaeology', description: 'Material culture, site evidence, excavation context, and archaeological interpretation.' },
            { label: 'Research Papers', href: '/topic/research-papers', description: 'Curated research pathways for archaeometallurgy, astronomy, medicine, and heritage science.' },
            { label: 'Textual Sources', href: '/blogs?category=Sanskrit%20Texts', description: 'Articles and references related to Sanskrit texts, translations, terminology, and interpretation.' },
          ],
        },
        {
          eyebrow: 'Critical reading',
          title: 'Speculation Lab',
          body: 'A careful reading zone for debated, legendary, or exploratory topics that require clear distinction between evidence, interpretation, and imagination.',
          links: [
            { label: 'Vimanas', href: '/topic/vimana-technology', description: 'A source-aware reading of vimana narratives, textual traditions, and modern interpretations.' },
            { label: 'Magnetic Levitation', href: '/topic/magnetic-levitation', description: 'Examines magnetic legends, physics comparisons, and responsible claim boundaries.' },
            { label: 'Myth vs Physics', href: '/blogs?category=Speculation%20Lab', description: 'Speculation Lab articles that separate symbolic narratives from testable scientific claims.' },
          ],
        },
        {
          eyebrow: 'Policies',
          title: 'Resources',
          body: 'Important website policy and support pages for privacy, terms, accessibility, and navigation.',
          links: [
            { label: 'Privacy Policy', href: '/topic/privacy-policy', description: 'How visitor data, contact forms, newsletter details, comments, cookies, and analytics may be handled.' },
            { label: 'Terms of Use', href: '/topic/terms-of-use', description: 'Rules for using website content, educational disclaimers, fair use, copyright, and external resources.' },
            { label: 'Accessibility', href: '/topic/accessibility', description: 'Accessibility commitment, mobile usability, keyboard support, screen reader considerations, and reporting support.' },
          ],
        },
        {
          eyebrow: 'Suggested path',
          title: 'Recommended Learning Route',
          body: 'If you are new to the website, begin with a domain overview, open one detailed topic page, watch a related video, then continue through research papers or blog references.',
          items: [
            'Start with Metallurgy, Astronomy, Medicine, or Urban Engineering.',
            'Use videos and diagrams to understand mechanisms and site layouts.',
            'Move to blogs for evidence discussion, sources, and related articles.',
            'Use the contact page to suggest corrections, missing sources, or collaboration ideas.',
          ],
        },
      ]}
      closingNote={{
        title: 'Looking for a specific topic?',
        body: 'The sitemap is a quick index. For deeper learning, use the topic pages, blog filters, resource pages, and video sections together.',
        linkLabel: 'Explore Blogs',
        linkHref: '/blogs',
      }}
    />
  );
}
