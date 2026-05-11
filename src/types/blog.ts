export type BlogCategory =
  | 'Metallurgy'
  | 'Astronomy'
  | 'Medicine'
  | 'Mathematics'
  | 'Urban Engineering'
  | 'Archaeology'
  | 'Sanskrit Texts'
  | 'Speculation Lab';

export type EvidenceLevel = 'Strong' | 'Moderate' | 'Emerging' | 'Speculative';

export type BlogReference = {
  label: string;
  url?: string;
};

export type BlogAuthor = {
  name: string;
  role?: string;
};

export type BlogContentBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string; caption?: string }
  | { type: 'callout'; title: string; body: string }
  | { type: 'divider' };

export type BlogPost = {
  slug: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  category: BlogCategory;
  tags: string[];
  featuredImage: string;
  featuredImageAlt: string;
  author: BlogAuthor;
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  evidenceLevel: EvidenceLevel;
  evidenceNotes: string[];
  references: BlogReference[];
  content: BlogContentBlock[];
};

