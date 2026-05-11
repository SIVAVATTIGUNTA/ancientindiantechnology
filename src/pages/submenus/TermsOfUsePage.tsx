import { InfoPageLayout } from './InfoPageLayout';

export function TermsOfUsePage() {
  return (
    <InfoPageLayout
      category="Legal"
      title="Terms of Use"
      intro="Terms for using Ancient Indian Technology as an educational, research-oriented, and evidence-conscious public knowledge platform."
      seoDescription="Read the Ancient Indian Technology terms of use covering educational purpose, intellectual property, historical accuracy, speculative topics, fair use, user conduct, and liability."
      heroImage="/stepwell.jpg"
      summaryCards={[
        { label: 'Last reviewed', value: 'May 2026' },
        { label: 'Website purpose', value: 'Education, research communication, and heritage learning' },
        { label: 'Reader responsibility', value: 'Use content with context, attribution, and independent verification' },
      ]}
      sections={[
        {
          eyebrow: 'Agreement',
          title: 'Acceptance of Terms',
          body: 'By accessing or using Ancient Indian Technology, you agree to these Terms of Use. If you do not agree, please discontinue use of the website. These terms apply to pages, blogs, videos, resources, contact forms, newsletters, downloadable references, and any interactive features made available on the site.',
        },
        {
          eyebrow: 'Purpose',
          title: 'Educational Purpose Disclaimer',
          body: 'The website is provided for educational and informational purposes. It is designed to help readers explore ancient Indian science and technology through accessible explanations, research summaries, visual storytelling, videos, and reference pathways.',
          note: 'Content should not be treated as professional engineering, medical, legal, archaeological, or academic advice. Formal work should rely on primary sources, peer-reviewed publications, and qualified experts.',
        },
        {
          eyebrow: 'Ownership',
          title: 'Intellectual Property Rights',
          body: 'Unless otherwise stated, website text, page design, layout structure, original summaries, graphics, curated descriptions, and editorial organization belong to Ancient Indian Technology or its respective contributors. Third-party images, videos, papers, books, and references remain the property of their respective owners.',
          items: [
            'Do not copy entire pages, designs, or structured collections without permission.',
            'Do not remove attribution, copyright notices, source notes, or context labels.',
            'Do not imply endorsement by Ancient Indian Technology without written permission.',
          ],
        },
        {
          eyebrow: 'Use',
          title: 'Use of Website Content',
          body: 'You may use website content for personal learning, classroom discussion, citation discovery, and non-commercial educational reference, provided that the content is not misrepresented and proper credit is given.',
          items: [
            'Short excerpts may be quoted with attribution and a link to the original page.',
            'Teachers and students may reference pages for study, debate, and research orientation.',
            'Commercial reuse, republication, scraping, or redistribution requires permission unless permitted by law.',
          ],
        },
        {
          eyebrow: 'Evidence',
          title: 'Accuracy of Historical Information',
          body: 'Ancient Indian Technology aims to present reliable and balanced material, but historical knowledge can change as new evidence, translations, archaeological findings, and scholarly interpretations emerge.',
          items: [
            'Some topics involve historical interpretations rather than settled conclusions.',
            'Textual traditions may have multiple translations, manuscript variants, and interpretive schools.',
            'Modern scientific comparisons are used carefully to explain ideas, not to erase historical context.',
            'Readers should verify important claims through cited sources and domain specialists.',
          ],
        },
        {
          eyebrow: 'Interpretation',
          title: 'Speculative Topics Disclaimer',
          body: 'Some website areas may discuss speculative topics, debated claims, legendary material, or modern reinterpretations of traditional knowledge. These may include vimanas, magnetic levitation narratives, ancient battery interpretations, acoustic claims, or comparisons between myths and physics.',
          note: 'Speculative discussions are included for educational analysis and critical reading. They should not be presented as proven historical fact unless the page clearly identifies sufficient evidence.',
        },
        {
          eyebrow: 'Conduct',
          title: 'User Conduct',
          body: 'Visitors, commenters, and contributors must use the website respectfully and lawfully. The goal is thoughtful learning, not harassment, misinformation, spam, or misuse.',
          items: [
            'Do not submit abusive, defamatory, hateful, misleading, or unlawful content.',
            'Do not upload malicious code, spam, advertising, or automated bulk submissions.',
            'Do not impersonate researchers, institutions, contributors, or website representatives.',
            'Do not use the website to spread unsupported claims while implying official endorsement.',
          ],
        },
        {
          eyebrow: 'References',
          title: 'External Resources',
          body: 'External links to archives, books, videos, research papers, museums, libraries, and educational platforms are provided for convenience and further study. Ancient Indian Technology does not control those websites and is not responsible for their content, privacy practices, availability, or changes over time.',
        },
        {
          eyebrow: 'Risk',
          title: 'Limitation of Liability',
          body: 'The website is provided on an as-is and as-available basis. To the fullest extent permitted by applicable law, Ancient Indian Technology and its contributors are not liable for losses, damages, errors, interruptions, third-party content, or decisions made based on website information.',
        },
        {
          eyebrow: 'Reuse',
          title: 'Copyright and Fair Use',
          body: 'The site may include brief references, quotations, thumbnails, embedded videos, or source descriptions for commentary, criticism, education, or research navigation. Such use is intended to respect fair use, fair dealing, citation norms, and source attribution where applicable.',
          items: [
            'Rights holders may contact us about attribution, correction, removal, or licensing concerns.',
            'Users should follow copyright law when reusing website content or external materials.',
            'Embedded media may be governed by the terms of the original hosting platform.',
          ],
        },
        {
          eyebrow: 'Access',
          title: 'Termination of Access',
          body: 'We may restrict, moderate, remove, or block access to submissions or interactive features if use violates these terms, threatens website security, infringes rights, or disrupts the educational purpose of the platform.',
        },
        {
          eyebrow: 'Updates',
          title: 'Changes to Terms',
          body: 'These terms may be updated as the website grows, including new blogs, lecture series, comments, submission workflows, media features, or research resources. Continued use after updates means you accept the current terms.',
        },
        {
          eyebrow: 'Contact',
          title: 'Contact Information',
          body: 'For permissions, attribution concerns, correction requests, fair use questions, or terms-related support, please contact the website team with the relevant page link and details.',
          links: [
            {
              label: 'Contact the Website Team',
              href: '/contact',
              description: 'Send permissions, copyright, correction, or terms-related messages through the contact page.',
            },
          ],
        },
      ]}
      closingNote={{
        title: 'Using this material in teaching or research?',
        body: 'Please cite clearly, preserve context, and verify important claims through primary sources or peer-reviewed scholarship before formal use.',
        linkLabel: 'Browse Research Resources',
        linkHref: '/topic/research-papers',
      }}
    />
  );
}
