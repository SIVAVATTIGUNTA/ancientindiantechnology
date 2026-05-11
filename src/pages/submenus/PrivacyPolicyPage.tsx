import { InfoPageLayout } from './InfoPageLayout';

export function PrivacyPolicyPage() {
  return (
    <InfoPageLayout
      category="Legal"
      title="Privacy Policy"
      intro="How Ancient Indian Technology handles visitor information while supporting research articles, blogs, videos, newsletter updates, and contact workflows."
      seoDescription="Read the Ancient Indian Technology privacy policy covering analytics, cookies, contact forms, newsletters, third-party embeds, data security, and user rights."
      heroImage="/urban-planning.jpg"
      summaryCards={[
        { label: 'Last reviewed', value: 'May 2026' },
        { label: 'Applies to', value: 'Website visitors, subscribers, contributors, and commenters' },
        { label: 'Primary purpose', value: 'Educational publishing, support, security, and site improvement' },
      ]}
      sections={[
        {
          eyebrow: 'Overview',
          title: 'Introduction',
          body: 'Ancient Indian Technology is a scholarly public-history website focused on ancient Indian science, engineering, medicine, astronomy, architecture, videos, books, and research resources. This policy explains what information may be collected when visitors read articles, browse blogs, submit forms, subscribe to updates, or interact with embedded media.',
          note: 'This policy is written for transparency. It is not intended to replace legal advice for users or contributors with specific privacy obligations.',
        },
        {
          eyebrow: 'Collection',
          title: 'Information We Collect',
          body: 'We collect limited information needed to operate the website, understand reader interest, respond to messages, and improve educational content.',
          items: [
            'Contact form details such as name, email address, subject, message text, and any research notes or correction details voluntarily submitted.',
            'Newsletter subscription details such as email address and subscription preferences when a visitor signs up for updates.',
            'Blog interaction data such as comments, display name, timestamp, moderation status, and the article being discussed if comments are enabled.',
            'Technical information such as browser type, approximate location, device category, referring pages, pages visited, and performance logs.',
            'Research contribution details such as source suggestions, bibliography notes, media recommendations, or contributor identity when shared voluntarily.',
          ],
        },
        {
          eyebrow: 'Use',
          title: 'How We Use Information',
          body: 'Collected information is used only for legitimate website, editorial, security, and communication purposes.',
          items: [
            'To respond to contact requests, contribution proposals, corrections, citation suggestions, and collaboration inquiries.',
            'To send newsletter or research digest updates when a visitor has chosen to subscribe.',
            'To moderate comments, reduce spam, and keep scholarly discussion respectful and relevant.',
            'To improve page structure, topic coverage, search usability, mobile responsiveness, and reading experience.',
            'To detect technical issues, prevent misuse, monitor site reliability, and protect the website from abuse.',
          ],
        },
        {
          eyebrow: 'Cookies',
          title: 'Cookies Policy',
          body: 'The website may use cookies or similar browser technologies to remember preferences, support analytics, improve performance, and help embedded services function correctly.',
          items: [
            'Essential cookies may support core site behavior and security.',
            'Analytics cookies may help measure page views, visitor flow, and content performance.',
            'Third-party embeds, including video players, may set their own cookies under their own privacy policies.',
          ],
          note: 'Visitors can usually control cookies through browser settings, though disabling some cookies may affect embedded media or analytics accuracy.',
        },
        {
          eyebrow: 'Partners',
          title: 'Third-Party Services',
          body: 'Some pages may include services operated by external providers. These services may process data according to their own terms and privacy policies.',
          items: [
            'YouTube or similar video platforms for documentaries, short clips, lectures, and embedded educational media.',
            'Email or newsletter tools used to manage subscriptions and deliver updates.',
            'Analytics tools used to understand content performance and website reliability.',
            'External archives, libraries, journals, museums, or research repositories linked for further reading.',
          ],
        },
        {
          eyebrow: 'Measurement',
          title: 'Analytics and Tracking',
          body: 'Analytics may be used to understand which subjects are most useful to readers, such as metallurgy, astronomy, medicine, urban planning, videos, resources, and blogs. Analytics reports are reviewed in aggregate whenever possible and are used to improve educational value rather than to identify individual readers.',
          items: [
            'Popular page and topic trends may guide future article planning.',
            'Search and navigation patterns may help improve menus and internal links.',
            'Device and browser data may help fix mobile or performance issues.',
          ],
        },
        {
          eyebrow: 'Protection',
          title: 'Data Security',
          body: 'We use reasonable administrative, technical, and organizational measures to protect submitted information. No website can guarantee absolute security, but we aim to minimize collection, restrict access, and keep only information that supports website operations or communication needs.',
          items: [
            'Form submissions are used for the purpose for which they were provided.',
            'Spam, malicious content, and abusive submissions may be filtered or removed.',
            'Access to operational data should be limited to people responsible for maintaining the website or responding to users.',
          ],
        },
        {
          eyebrow: 'Navigation',
          title: 'External Links',
          body: 'The website links to third-party resources such as research papers, archives, books, museum records, video platforms, and educational references. We are not responsible for the privacy practices, accuracy, availability, or security of external websites.',
          note: 'Readers should review the privacy notices of external websites before submitting personal information there.',
        },
        {
          eyebrow: 'Safety',
          title: "Children's Privacy",
          body: 'Ancient Indian Technology is an educational website, but it is not designed to knowingly collect personal information from children without appropriate consent. If a parent, guardian, or teacher believes a child has submitted personal information, they may contact us so the issue can be reviewed.',
        },
        {
          eyebrow: 'Control',
          title: 'User Rights',
          body: 'Depending on location and applicable law, visitors may have rights to request access, correction, deletion, restriction, or withdrawal of consent for personal information they have provided.',
          items: [
            'Newsletter subscribers may unsubscribe from future communications.',
            'Commenters may request review or removal of submitted comments where technically possible.',
            'Contact form users may request correction or deletion of submitted personal details.',
          ],
        },
        {
          eyebrow: 'Updates',
          title: 'Updates to This Policy',
          body: 'This Privacy Policy may be updated as the website adds new features, publishing workflows, comment tools, newsletter systems, analytics tools, or contribution processes. The latest version will be posted on this page with updated review information where appropriate.',
        },
        {
          eyebrow: 'Contact',
          title: 'Contact Information',
          body: 'For privacy questions, correction requests, data concerns, or newsletter issues, please use the contact page and include enough detail for the team to identify the relevant submission or interaction.',
          links: [
            {
              label: 'Contact Ancient Indian Technology',
              href: '/contact',
              description: 'Use this page for privacy questions, corrections, contribution inquiries, and support requests.',
            },
          ],
        },
      ]}
      closingNote={{
        title: 'Privacy questions or correction requests',
        body: 'If you notice a privacy issue, incorrect contributor detail, or unwanted public-facing information, please contact us with the page URL and a short explanation.',
        linkLabel: 'Contact Us',
        linkHref: '/contact',
      }}
    />
  );
}
