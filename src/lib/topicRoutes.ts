import { heroConfig } from '../config';

export type PageStyle = 'metallurgy' | 'astronomy' | 'urban' | 'medicine' | 'resources' | 'videos' | 'general';

export interface TopicItem {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  pageStyle: PageStyle;
  intro: string;
  highlights: string[];
  sections: { title: string; body: string }[];
  timeline: { label: string; detail: string }[];
  ctaTitle: string;
  ctaText: string;
  gallery: string[];
  videoUrl: string;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const topLevelTopics: TopicItem[] = heroConfig.navLinks
  .filter((link) => link.label.toLowerCase() !== 'home')
  .map((link) => ({
    slug: slugify(link.label),
    title: link.label,
    description: link.subtitle ? `${link.label} (${link.subtitle})` : `Explore ${link.label} in depth.`,
    category: 'Main Topic',
    image: '/hero-metallurgy.png',
    pageStyle: 'general',
    intro: `This page presents a focused deep-dive into ${link.label}, connecting traditional knowledge, historical evidence, and modern interpretation in one structured view.`,
    highlights: [
      `Comprehensive overview of ${link.label}`,
      'Primary historical context and scholarly framing',
      'Related topics and future research pointers',
    ],
    sections: [
      {
        title: 'Historical Context',
        body: `${link.label} evolved through layered civilizational practices, textual traditions, and region-specific schools of knowledge.`,
      },
      {
        title: 'Scientific Relevance',
        body: `Many principles linked with ${link.label} continue to inspire modern inquiry across materials, medicine, architecture, and astronomy.`,
      },
    ],
    timeline: [
      { label: 'Early Foundations', detail: `${link.label} appears in early civilizational practice and oral tradition.` },
      { label: 'Classical Consolidation', detail: `Knowledge under ${link.label} is formalized in textual and pedagogic traditions.` },
      { label: 'Modern Reassessment', detail: `${link.label} is revisited today through multidisciplinary historical and scientific research.` },
    ],
    ctaTitle: `Explore More in ${link.label}`,
    ctaText: 'Discover related articles, references, and visual material curated for deeper study.',
    gallery: ['/hero-metallurgy.png', '/sun-temple.jpg'],
    videoUrl: 'https://www.youtube.com/embed/W6QfM9I5P9Q',
  }));

const subTopics: TopicItem[] = heroConfig.navLinks.flatMap((link) =>
  (link.columns ?? []).flat().map((item) => ({
    slug: slugify(item.label),
    title: item.label,
    description: item.description,
    category: link.label,
    image: '/hero-metallurgy.png',
    pageStyle: 'general',
    intro: `A focused page on ${item.label}, designed to summarize core ideas and guide deeper exploration through clear sections and related references.`,
    highlights: [
      item.description,
      `Contextualized under ${link.label}`,
      'Useful for students, researchers, and general learners',
    ],
    sections: [
      {
        title: 'What Makes This Important',
        body: `${item.label} offers a meaningful window into the sophistication of historical Indian scientific and technological thought.`,
      },
      {
        title: 'How to Read This Topic',
        body: 'Use this page as a starting point: begin with overview, review timeline anchors, then continue with related pages for full context.',
      },
    ],
    timeline: [
      { label: 'Documentation', detail: 'References appear across textual, material, or architectural sources.' },
      { label: 'Transmission', detail: 'Knowledge traveled through guilds, institutions, and scholarly lineages.' },
      { label: 'Current Study', detail: 'Modern historians and scientists continue analytical reinterpretation.' },
    ],
    ctaTitle: 'Continue Your Journey',
    ctaText: `Move to other ${link.label} topics to build a complete understanding.`,
    gallery: ['/hero-metallurgy.png', '/sun-temple.jpg'],
    videoUrl: 'https://www.youtube.com/embed/W6QfM9I5P9Q',
  }))
);

const merged = [...topLevelTopics, ...subTopics];

const detailOverrides: Record<string, Partial<TopicItem>> = {
  metallurgy: {
    image: '/wootz-blade.jpg',
    pageStyle: 'metallurgy',
    gallery: ['/wootz-blade.jpg', '/iron-pillar.jpg'],
    videoUrl: 'https://www.youtube.com/embed/uA90v0s2SYo',
  },
  'wootz-steel-and-damascus-blades': {
    image: '/wootz-blade.jpg',
    pageStyle: 'metallurgy',
    intro: 'Wootz steel represents one of the most celebrated metallurgical achievements of ancient India, known for high-carbon crucible processing and exceptional blade performance.',
    highlights: [
      'Produced through advanced crucible steel techniques in South India',
      'Exported widely and linked historically with iconic Damascus blades',
      'Microstructural complexity continues to interest modern materials science',
    ],
    sections: [
      {
        title: 'Production Technique',
        body: 'Wootz ingots were created by carefully controlled melting and slow cooling, enabling carbon-rich structures that produced superior hardness and resilience.',
      },
      {
        title: 'Global Influence',
        body: 'Indian steel trade routes helped transmit high-quality metalworking traditions across West Asia, shaping elite weapon craftsmanship.',
      },
    ],
    timeline: [
      { label: 'Early Development', detail: 'Crucible steel traditions are documented in peninsular India in early historic periods.' },
      { label: 'Trade Expansion', detail: 'Wootz ingots moved through maritime and inland trade to major metallurgical centers.' },
      { label: 'Modern Research', detail: 'Contemporary studies investigate pattern formation, carbide distribution, and thermal behavior.' },
    ],
    ctaTitle: 'Study Wootz in Depth',
    ctaText: 'Explore linked metallurgy topics to compare crucible steel, corrosion control, and casting excellence in ancient India.',
    gallery: ['/wootz-blade.jpg', '/iron-pillar.jpg', '/zinc-distillation.jpg'],
    videoUrl: 'https://www.youtube.com/embed/4M8Sx4aZ5oM',
  },
  'delhi-iron-pillar': {
    image: '/iron-pillar.jpg',
    pageStyle: 'metallurgy',
    intro: 'The Delhi Iron Pillar is a landmark example of corrosion-resistant iron technology, standing for centuries with minimal rusting.',
    highlights: [
      'Monumental forged iron structure with exceptional long-term stability',
      'Composition and surface behavior are studied for anti-corrosion insights',
      'Demonstrates precision and scale in early Indian ironworking',
    ],
    sections: [
      {
        title: 'Corrosion Resistance',
        body: 'A protective surface layer and specific composition factors are believed to contribute to the pillar’s outstanding resistance to atmospheric corrosion.',
      },
      {
        title: 'Forging Mastery',
        body: 'Its size and integrity suggest advanced forge-welding practices and highly skilled thermal control in pre-modern metallurgical workshops.',
      },
    ],
    timeline: [
      { label: 'Construction Era', detail: 'Attributed to early classical Indian ironworking traditions.' },
      { label: 'Historic Preservation', detail: 'The pillar became a long-standing artifact of technological pride and scholarly curiosity.' },
      { label: 'Scientific Examination', detail: 'Modern metallurgists analyze microstructure, slag inclusions, and weathering behavior.' },
    ],
    ctaTitle: 'Explore Ancient Corrosion Science',
    ctaText: 'Compare this achievement with wootz steel and zinc distillation to understand the wider metallurgy ecosystem.',
    gallery: ['/iron-pillar.jpg', '/wootz-blade.jpg', '/urban-planning.jpg'],
    videoUrl: 'https://www.youtube.com/embed/9Pj3q2VdD0Q',
  },
  'zinc-distillation': {
    image: '/zinc-distillation.jpg',
    pageStyle: 'metallurgy',
    intro: 'Zinc distillation in ancient India is widely recognized as a major industrial breakthrough, especially through large-scale retort technologies.',
    highlights: [
      'Early large-scale zinc extraction and distillation systems',
      'Strong archaeological association with the Zawar region',
      'Evidence of process engineering and thermal control',
    ],
    sections: [
      {
        title: 'Retort-Based Innovation',
        body: 'Specialized furnace and retort setups enabled controlled vaporization and condensation of zinc, solving a major extraction challenge of the pre-modern era.',
      },
      {
        title: 'Industrial Organization',
        body: 'Production scale indicates coordinated mining, fuel management, and metallurgical labor systems operating with high process awareness.',
      },
    ],
    timeline: [
      { label: 'Process Emergence', detail: 'Distillation methods matured around resource-rich mining zones.' },
      { label: 'Industrial Maturity', detail: 'Operations reached organized, repeatable production in dedicated facilities.' },
      { label: 'Comparative Studies', detail: 'Historians compare Indian zinc technologies with later global metallurgical developments.' },
    ],
    ctaTitle: 'See the Engineering Legacy',
    ctaText: 'Continue into related metallurgy pages to map process, material, and structural innovation across periods.',
    gallery: ['/zinc-distillation.jpg', '/wootz-blade.jpg', '/iron-pillar.jpg'],
    videoUrl: 'https://www.youtube.com/embed/5r8jD0wM5h4',
  },
  'bronze-and-lost-wax-casting': {
    image: '/bronze-casting.jpg',
    pageStyle: 'metallurgy',
    intro: 'Lost-wax casting showcases artistic precision and metallurgical sophistication, enabling highly detailed bronze forms with structural reliability.',
    highlights: [
      'Cire-perdue method for complex and refined bronze works',
      'Integration of alloy science with sculptural craftsmanship',
      'Iconic examples reflect both ritual and engineering intelligence',
    ],
    sections: [
      {
        title: 'Cire-Perdue Workflow',
        body: 'Artisans modeled wax prototypes, applied investment layers, and replaced wax cavities with molten alloy to achieve intricate final castings.',
      },
      {
        title: 'Alloy and Finishing',
        body: 'Controlled copper-based alloy mixes, mold behavior, and post-cast finishing determined durability, tonal quality, and detail fidelity.',
      },
    ],
    timeline: [
      { label: 'Design Phase', detail: 'Wax modeling established geometry and iconographic precision.' },
      { label: 'Casting Phase', detail: 'Mold heating and metal pouring demanded strict temperature discipline.' },
      { label: 'Surface Refinement', detail: 'Final chiseling, polishing, and finishing produced museum-grade outcomes.' },
    ],
    ctaTitle: 'Discover Casting Excellence',
    ctaText: 'Pair this page with copper and zinc topics to understand alloy pathways and manufacturing depth.',
    gallery: ['/bronze-casting.jpg', '/zinc-distillation.jpg', '/wootz-blade.jpg'],
    videoUrl: 'https://www.youtube.com/embed/lZ1Q6fYxW2M',
  },
  'copper-metallurgy': {
    image: '/bronze-casting.jpg',
    pageStyle: 'metallurgy',
    intro: 'Copper metallurgy formed a foundational layer of ancient Indian material culture, enabling tools, ornaments, ritual objects, and alloy development.',
    highlights: [
      'Early extraction and shaping practices across multiple regions',
      'Crucial base metal for bronze and other alloy traditions',
      'Strong connections to trade networks and craft specialization',
    ],
    sections: [
      {
        title: 'Mining and Smelting',
        body: 'Copper ore processing required staged reduction, furnace control, and impurity management, reflecting organized technological systems.',
      },
      {
        title: 'Use Across Sectors',
        body: 'Copper artifacts served domestic, ceremonial, architectural, and artisanal functions, indicating broad social and economic impact.',
      },
    ],
    timeline: [
      { label: 'Early Adoption', detail: 'Copper artifacts appear in early settlement and craft contexts.' },
      { label: 'Alloy Integration', detail: 'Copper became central to bronze pathways and broader metallurgical experimentation.' },
      { label: 'Heritage Continuity', detail: 'Copperworking knowledge persisted through guild, ritual, and regional craft ecosystems.' },
    ],
    ctaTitle: 'Trace the Base Metal Story',
    ctaText: 'Continue with bronze, wootz, and zinc pages for a full picture of ancient Indian metallurgical systems.',
    gallery: ['/bronze-casting.jpg', '/wootz-blade.jpg', '/zinc-distillation.jpg'],
    videoUrl: 'https://www.youtube.com/embed/8V7i0M6qQj8',
  },
  astronomy: {
    image: '/astronomy-jantar.jpg',
    pageStyle: 'astronomy',
    gallery: ['/astronomy-jantar.jpg', '/sun-temple.jpg'],
    videoUrl: 'https://www.youtube.com/embed/NsR5xB8fFvA',
  },
  'jantar-mantar-observatories': {
    image: '/astronomy-jantar.jpg',
    pageStyle: 'astronomy',
    gallery: ['/astronomy-jantar.jpg', '/aryabhata.jpg'],
    videoUrl: 'https://www.youtube.com/embed/NsR5xB8fFvA',
  },
  'aryabhata-and-the-concept-of-zero': {
    image: '/aryabhata.jpg',
    pageStyle: 'astronomy',
    gallery: ['/aryabhata.jpg', '/sun-temple.jpg'],
    videoUrl: 'https://www.youtube.com/embed/5fN2A6XYx3E',
  },
  'eclipse-calculations': {
    image: '/astronomy-jantar.jpg',
    pageStyle: 'astronomy',
    gallery: ['/astronomy-jantar.jpg', '/sun-temple.jpg'],
    videoUrl: 'https://www.youtube.com/embed/NsR5xB8fFvA',
  },
  'sun-temples-as-instruments': {
    image: '/sun-temple.jpg',
    pageStyle: 'astronomy',
    gallery: ['/sun-temple.jpg', '/astronomy-jantar.jpg'],
    videoUrl: 'https://www.youtube.com/embed/Z3gP7M0jE2s',
  },
  'siddhantic-astronomy': {
    image: '/astronomy-jantar.jpg',
    pageStyle: 'astronomy',
    intro: 'Siddhantic astronomy synthesizes mathematical models, calendar design, and planetary computation in a highly structured Indian scientific tradition.',
    highlights: [
      'Blended observation with predictive mathematical frameworks',
      'Supported calendrical calculations used in ritual and civic life',
      'Influenced later astronomical commentary traditions',
    ],
    sections: [
      {
        title: 'Computational Tradition',
        body: 'Siddhantic texts formalized procedures for mean and true positions of celestial bodies through algorithmic methods.',
      },
      {
        title: 'Practical Applications',
        body: 'These methods informed calendrics, eclipse estimates, and time-reckoning systems used across scholarly and social contexts.',
      },
    ],
    timeline: [
      { label: 'Text Formation', detail: 'Foundational siddhantic frameworks emerge in classical astronomical literature.' },
      { label: 'Commentarial Growth', detail: 'Regional scholars expanded, corrected, and taught computational astronomy methods.' },
      { label: 'Comparative Legacy', detail: 'Modern historians compare siddhantic methods with parallel pre-modern astronomical systems.' },
    ],
    ctaTitle: 'Explore Planetary Computation',
    ctaText: 'Continue with eclipse and Jantar Mantar pages for observational and computational cross-links.',
    gallery: ['/astronomy-jantar.jpg', '/sun-temple.jpg', '/aryabhata.jpg'],
    videoUrl: 'https://www.youtube.com/embed/7K3u6m6y0gQ',
  },
  'urban-planning': {
    image: '/urban-planning.jpg',
    pageStyle: 'urban',
    gallery: ['/urban-planning.jpg', '/stepwell.jpg'],
    videoUrl: 'https://www.youtube.com/embed/7f7xA8x2U4s',
  },
  'indus-valley-sanitation': {
    image: '/urban-planning.jpg',
    pageStyle: 'urban',
    gallery: ['/urban-planning.jpg', '/lothal-dockyard.jpg'],
    videoUrl: 'https://www.youtube.com/embed/7f7xA8x2U4s',
  },
  'stepwells-vav-baoli': {
    image: '/stepwell.jpg',
    pageStyle: 'urban',
    gallery: ['/stepwell.jpg', '/vaastu-shastra.jpg'],
    videoUrl: 'https://www.youtube.com/embed/VNfQz2P7He8',
  },
  'lothal-dockyard': {
    image: '/lothal-dockyard.jpg',
    pageStyle: 'urban',
    gallery: ['/lothal-dockyard.jpg', '/urban-planning.jpg'],
    videoUrl: 'https://www.youtube.com/embed/7f7xA8x2U4s',
  },
  'vaastu-shastra': {
    image: '/vaastu-shastra.jpg',
    pageStyle: 'urban',
    gallery: ['/vaastu-shastra.jpg', '/stepwell.jpg'],
    videoUrl: 'https://www.youtube.com/embed/eQ9rKz8fG6A',
  },
  'the-great-bath-mohenjo-daro': {
    image: '/urban-planning.jpg',
    pageStyle: 'urban',
    intro: 'The Great Bath of Mohenjo-daro reflects remarkable hydraulic planning, waterproofing skill, and civic design in ancient urban architecture.',
    highlights: [
      'Engineered water-retaining structure with advanced masonry',
      'Integrated drainage and circulation pathways',
      'Signals organized civic and ritual space planning',
    ],
    sections: [
      {
        title: 'Structural Engineering',
        body: 'The basin’s dimensions, brick alignment, and sealing approach indicate careful planning of pressure, seepage control, and maintenance.',
      },
      {
        title: 'Urban Function',
        body: 'Its placement within the city suggests this was more than a utility feature, likely serving social, symbolic, and institutional roles.',
      },
    ],
    timeline: [
      { label: 'Construction', detail: 'Built during mature urban phases of the Indus Valley Civilization.' },
      { label: 'Use and Maintenance', detail: 'Operational design implies sustained upkeep and water management systems.' },
      { label: 'Archaeological Interpretation', detail: 'Current research examines construction logic and socio-cultural significance.' },
    ],
    ctaTitle: 'Discover Indus Infrastructure',
    ctaText: 'Review related sanitation and dockyard topics to understand city-scale planning systems.',
    gallery: ['/urban-planning.jpg', '/lothal-dockyard.jpg', '/stepwell.jpg'],
    videoUrl: 'https://www.youtube.com/embed/7f7xA8x2U4s',
  },
  medicine: {
    image: '/medicine-ayurveda.jpg',
    pageStyle: 'medicine',
    gallery: ['/medicine-ayurveda.jpg', '/sushruta-surgery.jpg'],
    videoUrl: 'https://www.youtube.com/embed/TwM5f4NqA4Q',
  },
  'sushruta-samhita': {
    image: '/sushruta-surgery.jpg',
    pageStyle: 'medicine',
    gallery: ['/sushruta-surgery.jpg', '/medicine-ayurveda.jpg'],
    videoUrl: 'https://www.youtube.com/embed/TwM5f4NqA4Q',
  },
  'charaka-samhita': {
    image: '/medicine-ayurveda.jpg',
    pageStyle: 'medicine',
    gallery: ['/medicine-ayurveda.jpg', '/sushruta-surgery.jpg'],
    videoUrl: 'https://www.youtube.com/embed/TwM5f4NqA4Q',
  },
  'ayurvedic-principles': {
    image: '/medicine-ayurveda.jpg',
    pageStyle: 'medicine',
    gallery: ['/medicine-ayurveda.jpg', '/sushruta-surgery.jpg'],
    videoUrl: 'https://www.youtube.com/embed/TwM5f4NqA4Q',
  },
  'traditional-healing-practices': {
    image: '/medicine-ayurveda.jpg',
    pageStyle: 'medicine',
    intro: 'Traditional healing practices in India combine preventive health, restorative protocols, and lifestyle-centered therapeutic systems.',
    highlights: [
      'Holistic focus on body, mind, diet, and environment',
      'Includes detoxification, rejuvenation, and seasonal regimens',
      'Many practices continue through living clinical traditions',
    ],
    sections: [
      {
        title: 'Core Modalities',
        body: 'Practices include personalized diet guidance, herbal formulations, panchakarma-based procedures, and daily routine optimization.',
      },
      {
        title: 'Contemporary Relevance',
        body: 'Integrative wellness models increasingly examine traditional frameworks for preventive care and quality-of-life outcomes.',
      },
    ],
    timeline: [
      { label: 'Classical Roots', detail: 'Healing frameworks emerge from long-standing textual and practitioner traditions.' },
      { label: 'Regional Practice', detail: 'Methods adapted across regions with locally available herbs and clinical idioms.' },
      { label: 'Modern Integration', detail: 'Today, many clinics and wellness centers use hybrid traditional-modern care models.' },
    ],
    ctaTitle: 'Explore Living Traditions',
    ctaText: 'Continue with Charaka and Ayurvedic principles topics for deeper theoretical grounding.',
    gallery: ['/medicine-ayurveda.jpg', '/sushruta-surgery.jpg', '/sun-temple.jpg'],
    videoUrl: 'https://www.youtube.com/embed/TwM5f4NqA4Q',
  },
  videos: {
    image: '/vimana.jpg',
    pageStyle: 'videos',
    gallery: ['/vimana.jpg', '/musical-pillars.jpg'],
    videoUrl: 'https://www.youtube.com/embed/6xY8s7fWk2I',
  },
  'featured-documentaries': {
    image: '/vimana.jpg',
    pageStyle: 'videos',
    intro: 'This section curates long-form documentaries that provide historical context, expert commentary, and visual evidence around ancient Indian technologies.',
    highlights: [
      'Curated thematic documentary recommendations',
      'Contextual notes for educational viewing',
      'Useful for students, researchers, and general audiences',
    ],
    sections: [
      {
        title: 'What to Watch First',
        body: 'Start with broad civilizational overviews, then proceed to specialized films on metallurgy, medicine, and astronomical traditions.',
      },
      {
        title: 'How to Use This Resource',
        body: 'Use each documentary as a gateway: note claims, cross-reference with textual sources, and compare with archaeological scholarship.',
      },
    ],
    timeline: [
      { label: 'Curation Layer', detail: 'Selected films are organized by historical period and technical domain.' },
      { label: 'Context Layer', detail: 'Each recommendation is paired with conceptual framing and references.' },
      { label: 'Research Layer', detail: 'Viewers can continue into topic pages for deeper textual and material grounding.' },
    ],
    ctaTitle: 'Begin Documentary Learning',
    ctaText: 'Pair this with resources pages for books, research papers, and validated external archives.',
    gallery: ['/vimana.jpg', '/musical-pillars.jpg', '/astronomy-jantar.jpg'],
    videoUrl: 'https://www.youtube.com/embed/6xY8s7fWk2I',
  },
  'short-clips': {
    image: '/musical-pillars.jpg',
    pageStyle: 'videos',
    intro: 'Short clips provide concise explainers ideal for quick topic orientation before moving into detailed pages and primary references.',
    highlights: [
      'Fast, focused learning format',
      'Good for concept previews and revision',
      'Supports social and classroom sharing',
    ],
    sections: [
      {
        title: 'Clip Strategy',
        body: 'Use short-form media to quickly identify key concepts, then transition to long-form material for evidence and depth.',
      },
      {
        title: 'Learning Path',
        body: 'Suggested order: short clip → topic page → references → related videos, enabling structured knowledge build-up.',
      },
    ],
    timeline: [
      { label: 'Topic Selection', detail: 'Clips are grouped by domain and learner intent.' },
      { label: 'Micro-Learning', detail: 'Viewers absorb one high-value concept per clip.' },
      { label: 'Deepening', detail: 'Each clip leads into full-topic pages for substantial understanding.' },
    ],
    ctaTitle: 'Move from Quick to Deep Learning',
    ctaText: 'Use short clips as launch points into full educational journeys across the site.',
    gallery: ['/musical-pillars.jpg', '/vimana.jpg', '/iron-pillar.jpg'],
    videoUrl: 'https://www.youtube.com/embed/6xY8s7fWk2I',
  },
  'lecture-series': {
    image: '/astronomy-jantar.jpg',
    pageStyle: 'videos',
    intro: 'Lecture series pages consolidate expert talks from historians, scientists, and archaeologists for in-depth, evidence-focused learning.',
    highlights: [
      'Expert-led domain perspectives',
      'Long-form conceptual and methodological coverage',
      'Strong value for academic audiences',
    ],
    sections: [
      {
        title: 'Scholarly Structure',
        body: 'Lectures are best consumed with note-taking and follow-up reading to track arguments, evidence quality, and interpretation boundaries.',
      },
      {
        title: 'Cross-Topic Connections',
        body: 'Series content often links metallurgy, urban planning, textual traditions, and observational sciences in a comparative framework.',
      },
    ],
    timeline: [
      { label: 'Intro Talks', detail: 'Begin with survey lectures covering broad civilizational context.' },
      { label: 'Specialized Modules', detail: 'Continue into domain-specific talks for focused methodology.' },
      { label: 'Seminar Continuation', detail: 'Use bibliography and references pages to extend independent study.' },
    ],
    ctaTitle: 'Build an Expert Learning Path',
    ctaText: 'Combine lecture series with papers and bibliography sections for rigorous topic mastery.',
    gallery: ['/astronomy-jantar.jpg', '/sun-temple.jpg', '/zinc-distillation.jpg'],
    videoUrl: 'https://www.youtube.com/embed/NsR5xB8fFvA',
  },
  '3d-reconstructions': {
    image: '/vimana.jpg',
    pageStyle: 'videos',
    intro: '3D reconstructions help visualize historical engineering concepts, urban spaces, and instrument geometry through modern digital modeling.',
    highlights: [
      'Transforms textual/archaeological data into visual form',
      'Supports educational interpretation and public engagement',
      'Useful for design-thinking and comparative analysis',
    ],
    sections: [
      {
        title: 'Modeling Method',
        body: 'Good reconstructions document assumptions, source fidelity, and uncertainty ranges to remain transparent and academically useful.',
      },
      {
        title: 'Pedagogical Value',
        body: 'Spatial visualization improves comprehension of scale, mechanism, and layout for complex pre-modern systems.',
      },
    ],
    timeline: [
      { label: 'Source Gathering', detail: 'Texts, maps, site measurements, and comparative studies are assembled.' },
      { label: 'Digital Build', detail: 'Models are created and iterated with domain expert review.' },
      { label: 'Educational Release', detail: 'Outputs are packaged for classrooms, museums, and public-facing media.' },
    ],
    ctaTitle: 'Explore Digital Heritage',
    ctaText: 'Move to related topic pages to compare digital models with historical source evidence.',
    gallery: ['/vimana.jpg', '/urban-planning.jpg', '/astronomy-jantar.jpg'],
    videoUrl: 'https://www.youtube.com/embed/6xY8s7fWk2I',
  },
  resources: {
    image: '/sun-temple.jpg',
    pageStyle: 'resources',
    gallery: ['/sun-temple.jpg', '/zinc-distillation.jpg'],
    videoUrl: 'https://www.youtube.com/embed/W6QfM9I5P9Q',
  },
  'research-papers': {
    image: '/sun-temple.jpg',
    pageStyle: 'resources',
    intro: 'Research papers provide peer-reviewed and method-driven insights essential for evidence-based understanding of ancient Indian technologies.',
    highlights: [
      'Prioritizes verifiable scholarship',
      'Supports rigorous academic reading',
      'Enables claim validation and comparison',
    ],
    sections: [
      {
        title: 'How to Evaluate Papers',
        body: 'Check methodology, citation quality, publication venue, and whether claims are supported by reproducible or traceable evidence.',
      },
      {
        title: 'Reading Workflow',
        body: 'Start with abstracts and conclusions, then review methods and references to assess depth, bias, and interpretive limits.',
      },
    ],
    timeline: [
      { label: 'Collection', detail: 'Papers are grouped by domain and research maturity.' },
      { label: 'Validation', detail: 'Cross-reference findings with archaeological and textual records.' },
      { label: 'Synthesis', detail: 'Build structured notes to compare converging and diverging interpretations.' },
    ],
    ctaTitle: 'Begin Evidence-Based Study',
    ctaText: 'Use this page as your core entry point for academically reliable research expansion.',
    gallery: ['/sun-temple.jpg', '/astronomy-jantar.jpg', '/zinc-distillation.jpg'],
    videoUrl: 'https://www.youtube.com/embed/W6QfM9I5P9Q',
  },
  'books-and-bibliography': {
    image: '/sun-temple.jpg',
    pageStyle: 'resources',
    intro: 'Books and bibliography offer curated long-form context, helping readers move beyond isolated facts into coherent historical understanding.',
    highlights: [
      'Balanced primary and secondary sources',
      'Supports long-term curriculum design',
      'Improves conceptual continuity across topics',
    ],
    sections: [
      {
        title: 'Bibliographic Strategy',
        body: 'Organize reading lists by domain, period, and method so learners can progress from foundational to advanced scholarship.',
      },
      {
        title: 'Primary vs Secondary Sources',
        body: 'Primary texts provide direct historical voice, while modern commentary supplies context, critique, and interdisciplinary interpretation.',
      },
    ],
    timeline: [
      { label: 'Starter List', detail: 'Begin with reliable survey texts and edited source compilations.' },
      { label: 'Focused Reading', detail: 'Move to domain-specific titles for metallurgy, astronomy, medicine, and urban studies.' },
      { label: 'Advanced Comparative Work', detail: 'Synthesize multiple viewpoints to build nuanced and historically grounded conclusions.' },
    ],
    ctaTitle: 'Build Your Reading Roadmap',
    ctaText: 'Use bibliography as a structured path to go from beginner to advanced understanding.',
    gallery: ['/sun-temple.jpg', '/iron-pillar.jpg', '/medicine-ayurveda.jpg'],
    videoUrl: 'https://www.youtube.com/embed/W6QfM9I5P9Q',
  },
  'external-links': {
    image: '/urban-planning.jpg',
    pageStyle: 'resources',
    intro: 'External links connect learners to museums, archives, institutions, and open datasets that enrich independent exploration.',
    highlights: [
      'Access to institutional resources',
      'Supports verification through multiple repositories',
      'Bridges classroom learning with public archives',
    ],
    sections: [
      {
        title: 'Trusted Sources',
        body: 'Prioritize institutional websites, academic repositories, and curated digital archives with clear provenance and citation metadata.',
      },
      {
        title: 'Best Usage Pattern',
        body: 'Use external links to verify claims, compare interpretations, and gather media/records not available in a single platform.',
      },
    ],
    timeline: [
      { label: 'Discovery', detail: 'Identify relevant repositories by topic and source type.' },
      { label: 'Validation', detail: 'Check institutional credibility and citation practices.' },
      { label: 'Integration', detail: 'Combine external findings with in-site topic pages for complete understanding.' },
    ],
    ctaTitle: 'Explore Curated Knowledge Networks',
    ctaText: 'Navigate outward confidently with source-aware research habits and documented references.',
    gallery: ['/urban-planning.jpg', '/astronomy-jantar.jpg', '/sun-temple.jpg'],
    videoUrl: 'https://www.youtube.com/embed/W6QfM9I5P9Q',
  },
  'about-this-project': {
    image: '/sun-temple.jpg',
    pageStyle: 'resources',
    intro: 'About this project explains the mission, methodology, and editorial standards behind the Ancient Indian Technology platform.',
    highlights: [
      'Clear educational and cultural objective',
      'Evidence-led curation framework',
      'Audience-friendly but academically responsible tone',
    ],
    sections: [
      {
        title: 'Editorial Principles',
        body: 'Content is structured for readability while preserving source traceability, historical caution, and respectful cultural representation.',
      },
      {
        title: 'Project Vision',
        body: 'The platform aims to make complex historical-technological topics accessible without reducing them to unsupported claims.',
      },
    ],
    timeline: [
      { label: 'Concept', detail: 'Project initiated to bridge heritage knowledge and modern learners.' },
      { label: 'Content Design', detail: 'Topic architecture built around thematic navigation and media-supported pages.' },
      { label: 'Expansion', detail: 'Future phases include deeper references, multilingual support, and academic collaboration.' },
    ],
    ctaTitle: 'Contribute to the Mission',
    ctaText: 'Help strengthen this platform with research, review, and responsible knowledge-sharing.',
    gallery: ['/sun-temple.jpg', '/vimana.jpg', '/zinc-distillation.jpg'],
    videoUrl: 'https://www.youtube.com/embed/W6QfM9I5P9Q',
  },
  'contact-contribute': {
    image: '/sun-temple.jpg',
    pageStyle: 'resources',
    intro: 'Contact and contribute pages help scholars, educators, and enthusiasts submit improvements, references, and collaboration ideas.',
    highlights: [
      'Supports corrections and scholarly feedback',
      'Encourages collaborative content growth',
      'Provides contribution channels for domain experts',
    ],
    sections: [
      {
        title: 'How to Contribute',
        body: 'Contributors can submit references, media suggestions, and topic expansions with clear source details and publication context.',
      },
      {
        title: 'Quality Expectations',
        body: 'Submissions should prioritize factual clarity, source reliability, and respectful interpretation of historical traditions.',
      },
    ],
    timeline: [
      { label: 'Submission', detail: 'Contributors share topic notes and verified references.' },
      { label: 'Editorial Review', detail: 'Material is screened for relevance, accuracy, and source quality.' },
      { label: 'Publication', detail: 'Approved inputs are integrated into topic pages and resource hubs.' },
    ],
    ctaTitle: 'Share Your Research',
    ctaText: 'Collaborate to improve public understanding of ancient Indian scientific and technological heritage.',
    gallery: ['/sun-temple.jpg', '/iron-pillar.jpg', '/astronomy-jantar.jpg'],
    videoUrl: 'https://www.youtube.com/embed/W6QfM9I5P9Q',
  },
};

export const topicItems: TopicItem[] = Array.from(
  new Map(merged.map((item) => [item.slug, item])).values()
).map((item) => ({ ...item, ...(detailOverrides[item.slug] ?? {}) }));

export function topicPathFromLabel(label: string): string {
  return `/topic/${slugify(label)}`;
}

export function findTopicBySlug(slug: string): TopicItem | undefined {
  return topicItems.find((item) => item.slug === slug);
}
