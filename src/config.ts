

export interface SiteConfig {
  language: string;
  siteTitle: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteTitle: "Ancient India Technology | प्राचीन भारत की तकनीक",
  siteDescription: "Explore the remarkable scientific and technological achievements of ancient India - from metallurgy to medicine, astronomy to advanced aerospace technology.",
};

// Hero Section — Navigation
export interface DropdownItem {
  label: string;
  description: string;
  href: string;
}

export interface NavLink {
  label: string;
  subtitle?: string;
  href: string;
  /** Each inner array is one column in the dropdown panel */
  columns?: DropdownItem[][];
}

export interface HeroConfig {
  backgroundText: string;
  heroImage: string;
  heroImageAlt: string;
  overlayText: string;
  brandName: string;
  navLinks: NavLink[];
}

export const heroConfig: HeroConfig = {
  backgroundText: "BHARAT",
  heroImage: "/hero-metallurgy.png",
  heroImageAlt: "Ancient Indian metallurgist forging wootz steel",
  overlayText: "Discover the wisdom of ancient Indian innovation",
  brandName: "Ancient India Tech",
  navLinks: [
    {
      label: "Home",
      subtitle: "होम",
      href: "#home",
    },
    {
      label: "Metallurgy",
      subtitle: "धातु विज्ञान",
      href: "#metallurgy",
      columns: [
        [
          { label: "Wootz Steel & Damascus Blades", description: "Crucible steel with carbon-nanotube microstructure, exported worldwide", href: "#metallurgy" },
          { label: "Delhi Iron Pillar",              description: "1,600 years of corrosion resistance — an unsolved metallurgical enigma", href: "#metallurgy" },
          { label: "Zinc Distillation",              description: "Industrial zinc smelting at Zawar, Rajasthan — a documented world first", href: "#metallurgy" },
        ],
        [
          { label: "Bronze & Lost-wax Casting",     description: "Nataraja and the cire-perdue tradition of extraordinary precision", href: "#metallurgy" },
          { label: "Copper Metallurgy",             description: "Indus Valley copper tools, alloys, and trade networks", href: "#metallurgy" },
        ],
      ],
    },
    {
      label: "Astronomy",
      subtitle: "खगोल शास्त्र",
      href: "#astronomy",
      columns: [
        [
          { label: "Jantar Mantar Observatories",          description: "Massive masonry instruments for precise celestial measurements", href: "#astronomy" },
          { label: "Aryabhata & the Concept of Zero",      description: "Earth's rotation, pi, and the foundation of modern mathematics", href: "#astronomy" },
          { label: "Siddhantic Astronomy",                 description: "Classical Indian planetary models and sidereal calculations", href: "#astronomy" },
        ],
        [
          { label: "Eclipse Calculations",                 description: "Shadow-cone geometry used to predict eclipses centuries early", href: "#astronomy" },
          { label: "Sun Temples as Instruments",           description: "Konark and Modhera temples engineered as solar calendars", href: "#astronomy" },
        ],
      ],
    },
    {
      label: "Urban Planning",
      subtitle: "नगर नियोजन",
      href: "#urban",
      columns: [
        [
          { label: "Indus Valley Sanitation",   description: "World's first known covered-drain urban sewage system, 2600 BCE", href: "#urban" },
          { label: "The Great Bath, Mohenjo-daro", description: "Waterproofed public bathing structure predating Roman thermae by millennia", href: "#urban" },
          { label: "Stepwells (Vav / Baoli)",   description: "Multi-storey subterranean water temples — UNESCO World Heritage sites", href: "#urban" },
        ],
        [
          { label: "Lothal Dockyard",           description: "Tidal dock with sluice gate engineering on the Arabian Sea, 2400 BCE", href: "#urban" },
          { label: "Vaastu Shastra",            description: "Canonical system of spatial geometry, orientation, and sacred proportion", href: "#urban" },
        ],
      ],
    },
    {
      label: "Medicine",
      subtitle: "आयुर्वेद",
      href: "#medicine",
      columns: [
        [
          { label: "Sushruta Samhita",              description: "300+ surgical procedures including rhinoplasty and cataract surgery, 600 BCE", href: "#medicine" },
          { label: "Charaka Samhita",               description: "Foundational internal medicine text classifying diseases and treatments", href: "#medicine" },
          { label: "Ayurvedic Principles",          description: "Tridosha theory, herbal pharmacology, and holistic systemic health", href: "#medicine" },
          { label: "Traditional Healing Practices", description: "Rasayana, Panchakarma, and the legacy of living Ayurvedic tradition", href: "#medicine" },
        ],
      ],
    },
    {
      label: "Videos",
      subtitle: "मल्टीमीडिया",
      href: "#videos",
      columns: [
        [
          { label: "Featured Documentaries",  description: "Curated films on ancient Indian science and civilization", href: "#videos" },
          { label: "Short Clips",             description: "Quick explainers and archival footage under 10 minutes", href: "#videos" },
          { label: "Lecture Series",          description: "Academic talks by historians, archaeologists, and scientists", href: "#videos" },
          { label: "3D Reconstructions",      description: "Digital models of Vimanas, Mohenjo-daro, and Jantar Mantar", href: "#videos" },
        ],
      ],
    },
    {
      label: "Resources",
      subtitle: "सन्दर्भ",
      href: "#resources",
      columns: [
        [
          { label: "Research Papers",       description: "Peer-reviewed studies on ancient Indian science and technology", href: "#resources" },
          { label: "Books & Bibliography",  description: "Annotated reading list from primary and secondary sources", href: "#resources" },
        ],
        [
          { label: "External Links",        description: "Verified links to museums, institutions, and open archives", href: "#resources" },
          { label: "About This Project",    description: "Mission, editorial principles, and contributors", href: "#resources" },
          { label: "Contact / Contribute",  description: "Submit research, corrections, or new topic proposals", href: "#resources" },
        ],
      ],
    },
    {
      label: "Blogs",
      href: "/blogs",
    },
    {
      label: "Contact",
      subtitle: "संपर्क",
      href: "/contact",
    },
  ],
};

// Intro Grid Section
export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface IntroGridConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  portfolioImages: PortfolioImage[];
  accentText: string;
}

export const introGridConfig: IntroGridConfig = {
  titleLine1: "Ancient Indian",
  titleLine2: "Technological Marvels",
  description: "Ancient India developed deeply integrated knowledge systems where science, craft, and design evolved together. This section highlights landmark achievements across metallurgy, astronomy, medicine, and urban engineering - presenting each topic with historical context, visual evidence, and pathways for deeper study.",
  portfolioImages: [
    { src: "/wootz-blade.jpg", alt: "Wootz steel and metallurgical heritage" },
    { src: "/iron-pillar.jpg", alt: "The rust-free Iron Pillar of Delhi" },
    { src: "/astronomy-jantar.jpg", alt: "Jantar Mantar astronomical observatory" },
    { src: "/sushruta-surgery.jpg", alt: "Ancient Indian medical and surgical knowledge" },
    { src: "/lothal-dockyard.jpg", alt: "Lothal dockyard and maritime engineering" },
  ],
  accentText: "Selected Themes - Science, Engineering, and Heritage",
};

// Featured Projects Section
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  href: string;
}

export interface FeaturedProjectsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  viewAllText: string;
  viewAllHref: string;
  viewProjectText: string;
  projects: Project[];
}

export const featuredProjectsConfig: FeaturedProjectsConfig = {
  subtitle: "Featured Topics",
  titleRegular: "Explore Ancient",
  titleItalic: "Indian Sciences",
  viewAllText: "View All Topics",
  viewAllHref: "/topic/resources",
  viewProjectText: "Learn More",
  projects: [
    {
      id: 1,
      title: "Wootz Steel & Damascus Blades",
      category: "Metallurgy",
      year: "300 BCE",
      image: "/wootz-blade.jpg",
      description: "High-carbon crucible steel from the Indian subcontinent set global standards for edge retention and pattern quality, later linked with famed Damascus blades.",
      href: "/topic/wootz-steel-and-damascus-blades",
    },
    {
      id: 2,
      title: "The Delhi Iron Pillar",
      category: "Metallurgy",
      year: "400 CE",
      image: "/iron-pillar.jpg",
      description: "A monumental forged iron artifact with extraordinary corrosion resistance, demonstrating material control and process discipline centuries ahead of modern industrial metallurgy.",
      href: "/topic/delhi-iron-pillar",
    },
    {
      id: 3,
      title: "Jantar Mantar Observatories",
      category: "Astronomy",
      year: "1724-1734",
      image: "/astronomy-jantar.jpg",
      description: "Precision masonry instruments for measuring celestial positions, solar time, and seasonal movement with striking architectural scale and scientific intent.",
      href: "/topic/jantar-mantar-observatories",
    },
    {
      id: 4,
      title: "Aryabhata & The Concept of Zero",
      category: "Astronomy",
      year: "476-550 CE",
      image: "/aryabhata.jpg",
      description: "Aryabhata's mathematical astronomy advanced positional thinking, eclipse models, and numerical computation that influenced later scientific traditions.",
      href: "/topic/aryabhata-and-the-concept-of-zero",
    },
    {
      id: 5,
      title: "Indus Valley Sanitation Systems",
      category: "Urban Planning",
      year: "2600-1900 BCE",
      image: "/urban-planning.jpg",
      description: "Urban drainage grids, bathing structures, and water logic in Indus settlements reveal engineered civic planning at remarkable scale.",
      href: "/topic/indus-valley-sanitation",
    },
    {
      id: 6,
      title: "Stepwells (Vav / Baoli)",
      category: "Urban Planning",
      year: "Various",
      image: "/stepwell.jpg",
      description: "Stepwells combined hydrological design, climate adaptation, and architectural beauty, functioning as both infrastructure and social-cultural spaces.",
      href: "/topic/stepwells-vav-baoli",
    },
    {
      id: 7,
      title: "Sushruta Samhita - Surgery",
      category: "Medicine",
      year: "600 BCE",
      image: "/sushruta-surgery.jpg",
      description: "Detailed procedural knowledge, instruments, and clinical observation in the Sushruta tradition show one of history's most systematic surgical corpora.",
      href: "/topic/sushruta-samhita",
    },
    {
      id: 8,
      title: "Ayurvedic Medicine",
      category: "Medicine",
      year: "1500 BCE - Present",
      image: "/medicine-ayurveda.jpg",
      description: "Ayurveda integrates preventive care, diagnosis, nutrition, and therapeutics into a coherent life-science framework with long textual continuity.",
      href: "/topic/ayurvedic-principles",
    },
    {
      id: 9,
      title: "Vimana Technology",
      category: "Advanced Tech",
      year: "Vedic Period",
      image: "/vimana.jpg",
      description: "Narratives around vimana concepts are explored through textual interpretation, comparative mythology, and modern digital reconstruction approaches.",
      href: "/topic/vimana-technology",
    },
    {
      id: 10,
      title: "Ancient Battery Technology",
      category: "Advanced Tech",
      year: "Agastya Samhita",
      image: "/ancient-battery.jpg",
      description: "Electrochemical interpretations in traditional texts are presented with caution, comparing philology, material evidence, and modern scientific testing limits.",
      href: "/topic/ancient-battery-technology",
    },
    {
      id: 11,
      title: "Musical Pillars of Hampi",
      category: "Advanced Tech",
      year: "15th Century",
      image: "/musical-pillars.jpg",
      description: "Temple acoustics and resonant stone pillars reveal interplay between material geometry, sonic response, and ritual-performance architecture.",
      href: "/topic/musical-pillars-of-hampi",
    },
    {
      id: 12,
      title: "Magnetic Levitation",
      category: "Advanced Tech",
      year: "Ancient Period",
      image: "/levitation.jpg",
      description: "Claims around levitation are treated as exploratory narratives, with focus on what is textually attested versus physically reproducible today.",
      href: "/topic/magnetic-levitation",
    },
  ],
};

// Services Section
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  /** Topic route for clickable slider cards */
  href: string;
}

export interface ServicesConfig {
  subtitle: string;
  titleLine1: string;
  titleLine2Italic: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  subtitle: "Knowledge Domains",
  titleLine1: "Explore Ancient",
  titleLine2Italic: "Indian Knowledge",
  description: "A structured gateway into India's scientific heritage, combining textual evidence, archaeological context, visual media, and research-driven interpretation.",
  services: [
    {
      iconName: "Sparkles",
      title: "Metallurgy (धातु विज्ञान)",
      description: "Study Wootz steel, the Delhi Iron Pillar, zinc distillation, and lost-wax casting as case studies in advanced pre-modern materials engineering.",
      href: "/topic/metallurgy",
    },
    {
      iconName: "Diamond",
      title: "Astronomy (खगोल शास्त्र)",
      description: "Trace Aryabhata, Siddhantic models, eclipse mathematics, and monumental observatories that translated celestial theory into precise instruments.",
      href: "/topic/astronomy",
    },
    {
      iconName: "Users",
      title: "Urban Planning (नगर नियोजन)",
      description: "Examine drainage networks, stepwells, dockyard engineering, and spatial planning traditions that shaped resilient city design.",
      href: "/topic/urban-planning",
    },
    {
      iconName: "Camera",
      title: "Medicine (आयुर्वेद)",
      description: "Explore Sushruta, Charaka, diagnostic frameworks, and therapeutic systems that formed one of history's longest medical knowledge traditions.",
      href: "/topic/medicine",
    },
    {
      iconName: "Zap",
      title: "Engineering Imagination",
      description: "Review acoustic engineering, instrument architecture, and debated high-concept technologies through a careful evidence-plus-interpretation lens.",
      href: "/topic/3d-reconstructions",
    },
    {
      iconName: "BookOpen",
      title: "Research & Resources",
      description: "Use curated papers, bibliographies, documentaries, and external archives to move from interest to credible, referenced understanding.",
      href: "/topic/resources",
    },
  ],
};

// Why Choose Me Section
export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface FeatureCard {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
}

export interface WhyChooseMeConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  statsLabel: string;
  stats: StatItem[];
  featureCards: FeatureCard[];
  wideImage: string;
  wideImageAlt: string;
  wideTitle: string;
  wideDescription: string;
}

export const whyChooseMeConfig: WhyChooseMeConfig = {
  subtitle: "By The Numbers",
  titleRegular: "Ancient Indian",
  titleItalic: "Achievements",
  statsLabel: "Historical Impact",
  stats: [
    { value: 5000, suffix: "+", label: "Years of Innovation" },
    { value: 300, suffix: "+", label: "Surgical Procedures (Sushruta)" },
    { value: 1600, suffix: "+", label: "Years - Iron Pillar Standing" },
    { value: 6, suffix: "", label: "Types of Electricity Documented" },
  ],
  featureCards: [
    {
      image: "/zinc-distillation.jpg",
      imageAlt: "Ancient zinc distillation in Rajasthan",
      title: "Zinc Distillation",
      description: "India was the first to distill zinc on an industrial scale at Zawar, Rajasthan - a metallurgical achievement unmatched for centuries.",
    },
    {
      image: "/sun-temple.jpg",
      imageAlt: "Sun Temple as astronomical computer",
      title: "Sun Temples as Computers",
      description: "The Konark Sun Temple and other structures served as precise astronomical instruments, tracking time and celestial events.",
    },
  ],
  wideImage: "/acoustic-levitation.jpg",
  wideImageAlt: "Acoustic levitation demonstration",
  wideTitle: "Sound & Vibration Technology",
  wideDescription: "Ancient Indian texts describe advanced understanding of acoustic principles, from musical pillars producing specific frequencies to potential sound-based levitation techniques used in temple construction.",
};

// Testimonials Section
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface TestimonialsConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  testimonials: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  subtitle: "Expert Perspectives",
  titleRegular: "What Scholars",
  titleItalic: "Say About Us",
  testimonials: [
    {
      id: 1,
      name: "Dr. Rajesh Sharma",
      role: "Professor of Indology",
      image: "/testimonial-1.jpg",
      quote: "This platform beautifully illuminates the scientific genius of ancient India. The research is thorough and the presentation is captivating. A vital resource for understanding our technological heritage.",
    },
    {
      id: 2,
      name: "Dr. Priya Venkatesh",
      role: "Archaeologist & Historian",
      image: "/testimonial-2.jpg",
      quote: "Ancient India Technology brings to life the remarkable achievements of our ancestors. From the precision of Jantar Mantar to the metallurgical marvels, every topic is presented with scholarly accuracy.",
    },
    {
      id: 3,
      name: "Prof. Anand Iyer",
      role: "Metallurgy Expert",
      image: "/testimonial-3.jpg",
      quote: "The section on ancient Indian metallurgy is exceptional. It accurately portrays how Indian craftsmen created materials that were centuries ahead of their time, from wootz steel to corrosion-resistant iron.",
    },
    {
      id: 4,
      name: "Dr. Meera Kulkarni",
      role: "Historian of Science",
      image: "/testimonial-1.jpg",
      quote: "What stands out here is the balance between cultural pride and research discipline. The platform makes ancient Indian knowledge approachable without losing the seriousness that scholarly topics deserve.",
    },
    {
      id: 5,
      name: "Prof. Vivek Rao",
      role: "Architectural Heritage Researcher",
      image: "/testimonial-2.jpg",
      quote: "The coverage of observatories, temples, and urban systems is especially valuable. It helps readers see architecture not just as art, but as a carrier of mathematics, acoustics, and environmental intelligence.",
    },
    {
      id: 6,
      name: "Dr. Kavita Deshpande",
      role: "Sanskrit and Knowledge Systems Scholar",
      image: "/testimonial-3.jpg",
      quote: "This project succeeds because it does more than list achievements. It gives learners a framework for reading texts, technologies, and traditions together in a way that feels both respectful and intellectually honest.",
    },
  ],
};

// FAQ Section
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQConfig {
  subtitle: string;
  titleRegular: string;
  titleItalic: string;
  ctaText: string;
  ctaButtonText: string;
  ctaHref: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  subtitle: "Common Questions",
  titleRegular: "Frequently Asked",
  titleItalic: "Questions",
  ctaText: "Still have questions about ancient Indian technology?",
  ctaButtonText: "Contact Us",
  ctaHref: "/contact",
  faqs: [
    {
      id: "faq-1",
      question: "What is Wootz steel and why was it famous?",
      answer: "Wootz steel was a high-quality crucible steel developed in South India around 300 BCE. It was famous for its distinctive water-like patterns and exceptional strength. The steel was exported worldwide and became known as Damascus steel in the Middle East. The unique microstructure contained carbon nanotubes, a discovery that amazed modern metallurgists.",
    },
    {
      id: "faq-2",
      question: "How has the Iron Pillar of Delhi remained rust-free for 1600 years?",
      answer: "The Iron Pillar's corrosion resistance is attributed to a protective passive film formed by the unique composition of the iron - high phosphorus content and the absence of sulfur and manganese. The ancient Indian metallurgists achieved this through careful selection of raw materials and sophisticated forging techniques that we are still studying today.",
    },
    {
      id: "faq-3",
      question: "What were Aryabhata's major contributions to astronomy?",
      answer: "Aryabhata (476-550 CE) made groundbreaking contributions including: explaining lunar and solar eclipses correctly, calculating pi to 3.1416, proposing that Earth rotates on its axis, calculating the length of the sidereal year with remarkable accuracy, and developing the concept of zero and the place value system in mathematics.",
    },
    {
      id: "faq-4",
      question: "How advanced was Indus Valley urban planning?",
      answer: "The Indus Valley Civilization (2600-1900 BCE) had the world's first known urban sanitation system with covered brick drains, public and private baths, water supply systems, and grid-pattern city planning. Cities like Mohenjo-daro and Harappa featured standardized brick sizes, sophisticated water management, and multi-story buildings - unmatched until Roman times.",
    },
    {
      id: "faq-5",
      question: "What surgical procedures did Sushruta describe?",
      answer: "Sushruta, known as the Father of Surgery (600 BCE), described over 300 surgical procedures in the Sushruta Samhita. These included cataract surgery (couching), rhinoplasty (plastic surgery), lithotomy, cesarean section, and various orthopedic procedures. He also classified surgery into eight categories and invented numerous surgical instruments.",
    },
    {
      id: "faq-6",
      question: "What is Ayurveda and how does it work?",
      answer: "Ayurveda, meaning 'science of life,' is a holistic healing system developed in India over 3,000 years ago. It emphasizes balance between body, mind, and spirit through diet, lifestyle, herbal remedies, and treatments. The Charaka Samhita and Sushruta Samhita are foundational texts that describe thousands of medicinal plants and treatments still used today.",
    },
    {
      id: "faq-7",
      question: "What is Vimana Technology and is there scientific evidence?",
      answer: "Vimanas were mythological flying vehicles described in ancient Indian texts, capable of flying in atmosphere, space, and underwater. Modern research includes the book 'Reverse Engineering Vedic Vimanas' (2017) featuring 3D modeling and CFD analysis. Birla Science Center researchers in the 1990s even recreated exotic alloys described in the Vimana Prakaranam that weren't found in international alloy tables. Former ISRO and DRDO scientists have endorsed this research.",
    },
    {
      id: "faq-8",
      question: "Did ancient Indians really have battery technology?",
      answer: "The Agastya Samhita describes electrical cells using earthen pots with copper plates, copper sulphate (called 'Sikhigreeva' or peacock's neck due to its color), wet sawdust as electrolyte, and zinc amalgam. When reconstructed, these cells produce 1.138 volts with 23 mA short circuit current. When 100 pots are connected in series, they can split water into oxygen and hydrogen - demonstrating practical electrolysis capability.",
    },
    {
      id: "faq-9",
      question: "What are the Six Types of Electricity mentioned in Vedic texts?",
      answer: "Ancient Indian texts classified six types of electricity: (1) Tadit - produced by friction from silk or leather, (2) Saudamini - produced by friction from gems or glass, (3) Vidyut - produced from clouds or steam, (4) Shatakumbhi - produced from a battery of hundreds of cells, (5) Hradini - obtained from storage cells, and (6) Ashani - emanating from a magnetic rod. This shows sophisticated understanding of electrical phenomena.",
    },
    {
      id: "faq-10",
      question: "How do the Musical Pillars of Hampi work?",
      answer: "The Vitthala Temple at Hampi features granite pillars that produce sounds of specific musical instruments when struck - including ghanta (bell), mridanga (percussion), and veena (strings). Scientific studies by Anish Kumar et al. (2008) used non-destructive testing including low-frequency ultrasonic testing and impact-echo techniques. They found that peak frequencies in the sound spectra correlate with the dimensional measurements and ultrasonic velocities of the granite columns.",
    },
    {
      id: "faq-11",
      question: "Is there evidence of ancient levitation technology in India?",
      answer: "The Somnath Temple legend, mentioned by 13th-century Persian geographer Zakariya al-Qazwini in his book 'Wonders of Creation,' describes a theoretical design using a loadstone magnet as ceiling, an iron linga as lower magnet, with a layer of bismuth (diamagnetic material) in between. Diamagnetic materials can levitate in a magnetic field without consuming power - a principle validated by modern physics. This suggests ancient Indians understood magnetic levitation principles.",
    },
    {
      id: "faq-12",
      question: "What is acoustic levitation and did ancient Indians know about it?",
      answer: "Acoustic levitation uses sound waves to create pressure waves that can balance gravity, allowing objects to float in mid-air. Modern science has validated this principle. Ancient Indian traditions (Sanatana Dharma) may have utilized vibration technology through meditation and sound. The precise acoustic engineering of temples like Hampi's musical pillars demonstrates advanced understanding of sound frequencies and their physical effects, suggesting possible knowledge of acoustic principles that could relate to levitation concepts.",
    },
  ],
};

// Footer Section
export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  logoText: string;
  tagline: string;

  // About column
  aboutLabel: string;
  aboutLinks: FooterLink[];

  // Connect column
  connectLabel: string;
  connectLinks: FooterLink[];

  // Newsletter column
  newsletterLabel: string;
  newsletterHeadline: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterDisclaimer: string;

  // Social icons (bottom bar)
  socialLinks: SocialLink[];

  // Bottom legal strip
  copyright: string;
  bottomLinks: FooterLink[];
}

export const footerConfig: FooterConfig = {
  logoText: "ANCIENT INDIA",
  tagline: "A scholarly platform dedicated to documenting\nancient India's scientific and technological heritage.",

  aboutLabel: "About",
  aboutLinks: [
    { label: "About This Project",    href: "#about" },
    { label: "Editorial Principles",  href: "#editorial" },
    { label: "Contributors & Authors",href: "#contributors" },
    { label: "Advisory Board",        href: "#advisory" },
  ],

  connectLabel: "Connect",
  connectLinks: [
    { label: "Contact Us",                href: "/contact" },
    { label: "Contribute / Submit Research", href: "/topic/contact-contribute" },
    { label: "Report an Error",           href: "#report" },
    { label: "Partner with Us",           href: "#partner" },
  ],

  newsletterLabel: "Stay Informed",
  newsletterHeadline: "Research Digest",
  newsletterDescription: "Monthly summaries of new findings in ancient Indian science — delivered to your inbox.",
  newsletterPlaceholder: "your@email.com",
  newsletterDisclaimer: "No spam. Unsubscribe anytime.",

  socialLinks: [
    { iconName: "Instagram", href: "#",                                            label: "Instagram" },
    { iconName: "Twitter",   href: "#",                                            label: "Twitter" },
    { iconName: "Linkedin",  href: "#",                                            label: "LinkedIn" },
    { iconName: "Mail",      href: "mailto:contact@ancientindiatechnology.com",    label: "Email" },
  ],

  copyright: "© 2026 Ancient India Technology. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Use",   href: "#terms" },
    { label: "Accessibility",  href: "#accessibility" },
    { label: "Sitemap",        href: "#sitemap" },
  ],
};
