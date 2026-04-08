import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import { Hero } from './sections/Hero';
import { IntroGrid } from './sections/IntroGrid';
import { Services } from './sections/Services';
import { WhyChooseMe } from './sections/WhyChooseMe';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { HomeVideoSlides } from './sections/HomeVideoSlides';
import { Testimonials } from './sections/Testimonials';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';
import { siteConfig } from './config';
import './App.css';

const GLOBAL_EMBED_VIDEOS = [
  'https://www.youtube.com/embed/Xhc-hT71AnA?si=I6GSgxh-MQVlhLaJ',
  'https://www.youtube.com/embed/HjRBdayDkk0?si=nbru0WIPowYkOD-6',
  'https://www.youtube.com/embed/WZzK1sQoeHo?si=q7SdcEymOlwMSXQW',
  'https://www.youtube.com/embed/GwUtRso7aNw?si=c1iG48RbUDukSWsn',
  'https://www.youtube.com/embed/ixrQqNogOwc?si=1RqwVLwzAB6bK2q4',
] as const;

const TopicPageLayout = lazy(() => import('./pages/TopicPageLayout').then((m) => ({ default: m.TopicPageLayout })));
const AboutProjectPage = lazy(() => import('./pages/submenus/AboutProjectPage').then((m) => ({ default: m.AboutProjectPage })));
const AryabhataZeroPage = lazy(() => import('./pages/submenus/AryabhataZeroPage').then((m) => ({ default: m.AryabhataZeroPage })));
const AyurvedicPrinciplesPage = lazy(() => import('./pages/submenus/AyurvedicPrinciplesPage').then((m) => ({ default: m.AyurvedicPrinciplesPage })));
const BooksBibliographyPage = lazy(() => import('./pages/submenus/BooksBibliographyPage').then((m) => ({ default: m.BooksBibliographyPage })));
const BronzeLostWaxCastingPage = lazy(() => import('./pages/submenus/BronzeLostWaxCastingPage').then((m) => ({ default: m.BronzeLostWaxCastingPage })));
const CharakaSamhitaPage = lazy(() => import('./pages/submenus/CharakaSamhitaPage').then((m) => ({ default: m.CharakaSamhitaPage })));
const ContactContributePage = lazy(() => import('./pages/submenus/ContactContributePage').then((m) => ({ default: m.ContactContributePage })));
const CopperMetallurgyPage = lazy(() => import('./pages/submenus/CopperMetallurgyPage').then((m) => ({ default: m.CopperMetallurgyPage })));
const DelhiIronPillarPage = lazy(() => import('./pages/submenus/DelhiIronPillarPage').then((m) => ({ default: m.DelhiIronPillarPage })));
const EclipseCalculationsPage = lazy(() => import('./pages/submenus/EclipseCalculationsPage').then((m) => ({ default: m.EclipseCalculationsPage })));
const ExternalLinksPage = lazy(() => import('./pages/submenus/ExternalLinksPage').then((m) => ({ default: m.ExternalLinksPage })));
const FeaturedDocumentariesPage = lazy(() => import('./pages/submenus/FeaturedDocumentariesPage').then((m) => ({ default: m.FeaturedDocumentariesPage })));
const GreatBathMohenjoDaroPage = lazy(() => import('./pages/submenus/GreatBathMohenjoDaroPage').then((m) => ({ default: m.GreatBathMohenjoDaroPage })));
const IndusValleySanitationPage = lazy(() => import('./pages/submenus/IndusValleySanitationPage').then((m) => ({ default: m.IndusValleySanitationPage })));
const JantarMantarObservatoriesPage = lazy(() => import('./pages/submenus/JantarMantarObservatoriesPage').then((m) => ({ default: m.JantarMantarObservatoriesPage })));
const LectureSeriesPage = lazy(() => import('./pages/submenus/LectureSeriesPage').then((m) => ({ default: m.LectureSeriesPage })));
const LothalDockyardPage = lazy(() => import('./pages/submenus/LothalDockyardPage').then((m) => ({ default: m.LothalDockyardPage })));
const Reconstructions3DPage = lazy(() => import('./pages/submenus/Reconstructions3DPage').then((m) => ({ default: m.Reconstructions3DPage })));
const ResearchPapersPage = lazy(() => import('./pages/submenus/ResearchPapersPage').then((m) => ({ default: m.ResearchPapersPage })));
const ShortClipsPage = lazy(() => import('./pages/submenus/ShortClipsPage').then((m) => ({ default: m.ShortClipsPage })));
const SiddhanticAstronomyPage = lazy(() => import('./pages/submenus/SiddhanticAstronomyPage').then((m) => ({ default: m.SiddhanticAstronomyPage })));
const StepwellsPage = lazy(() => import('./pages/submenus/StepwellsPage').then((m) => ({ default: m.StepwellsPage })));
const SunTemplesInstrumentsPage = lazy(() => import('./pages/submenus/SunTemplesInstrumentsPage').then((m) => ({ default: m.SunTemplesInstrumentsPage })));
const SushrutaSamhitaPage = lazy(() => import('./pages/submenus/SushrutaSamhitaPage').then((m) => ({ default: m.SushrutaSamhitaPage })));
const TraditionalHealingPracticesPage = lazy(() => import('./pages/submenus/TraditionalHealingPracticesPage').then((m) => ({ default: m.TraditionalHealingPracticesPage })));
const VaastuShastraPage = lazy(() => import('./pages/submenus/VaastuShastraPage').then((m) => ({ default: m.VaastuShastraPage })));
const WootzSteelDamascusPage = lazy(() => import('./pages/submenus/WootzSteelDamascusPage').then((m) => ({ default: m.WootzSteelDamascusPage })));
const ZincDistillationPage = lazy(() => import('./pages/submenus/ZincDistillationPage').then((m) => ({ default: m.ZincDistillationPage })));
const EditorialPrinciplesPage = lazy(() => import('./pages/submenus/EditorialPrinciplesPage').then((m) => ({ default: m.EditorialPrinciplesPage })));
const ContributorsAuthorsPage = lazy(() => import('./pages/submenus/ContributorsAuthorsPage').then((m) => ({ default: m.ContributorsAuthorsPage })));
const AdvisoryBoardPage = lazy(() => import('./pages/submenus/AdvisoryBoardPage').then((m) => ({ default: m.AdvisoryBoardPage })));
const PrivacyPolicyPage = lazy(() => import('./pages/submenus/PrivacyPolicyPage').then((m) => ({ default: m.PrivacyPolicyPage })));
const TermsOfUsePage = lazy(() => import('./pages/submenus/TermsOfUsePage').then((m) => ({ default: m.TermsOfUsePage })));
const AccessibilityPage = lazy(() => import('./pages/submenus/AccessibilityPage').then((m) => ({ default: m.AccessibilityPage })));
const SitemapPage = lazy(() => import('./pages/submenus/SitemapPage').then((m) => ({ default: m.SitemapPage })));

function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  useEffect(() => {
    if (siteConfig.siteTitle) {
      document.title = siteConfig.siteTitle;
    }
    if (siteConfig.siteDescription) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', siteConfig.siteDescription);
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }

    const applyVideoSources = () => {
      const iframes = Array.from(document.querySelectorAll<HTMLIFrameElement>('iframe[src*="youtube.com/embed"]'));
      iframes.forEach((iframe, index) => {
        const desired = GLOBAL_EMBED_VIDEOS[index % GLOBAL_EMBED_VIDEOS.length];
        if (iframe.src !== desired) {
          iframe.src = desired;
        }
      });
    };

    applyVideoSources();
    const observer = new MutationObserver(() => {
      applyVideoSources();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  const HomePage = () => (
    <main className="relative w-full overflow-x-hidden">
      {/* Hero Section - Parallax Layering */}
      <Hero />

      {/* Intro & Masonry Grid - White Section */}
      <IntroGrid />

      {/* Services - Dark Section */}
      <Services />

      {/* Why Choose Me & Stats - White Section */}
      <WhyChooseMe />

      {/* Featured Projects - Dark Section */}
      <FeaturedProjects />

      {/* Home YouTube Slides - Scrollable */}
      <HomeVideoSlides />

      {/* Testimonials Carousel - White Section */}
      <Testimonials />

      {/* FAQ Accordion - Dark Section */}
      <FAQ />

      {/* Footer - White Section with Massive Typography */}
      <Footer />
    </main>
  );

  return (
    <Suspense fallback={<main className="min-h-screen bg-[#f4ead8] text-[#2b1b17] p-10">Loading...</main>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/topic/metallurgy" element={<TopicPageLayout slug="metallurgy" />} />
        <Route path="/topic/astronomy" element={<TopicPageLayout slug="astronomy" />} />
        <Route path="/topic/urban-planning" element={<TopicPageLayout slug="urban-planning" />} />
        <Route path="/topic/medicine" element={<TopicPageLayout slug="medicine" />} />
        <Route path="/topic/videos" element={<TopicPageLayout slug="videos" />} />
        <Route path="/topic/resources" element={<TopicPageLayout slug="resources" />} />

        <Route path="/topic/wootz-steel-and-damascus-blades" element={<WootzSteelDamascusPage />} />
        <Route path="/topic/delhi-iron-pillar" element={<DelhiIronPillarPage />} />
        <Route path="/topic/zinc-distillation" element={<ZincDistillationPage />} />
        <Route path="/topic/zinc-distillation-rajasthan" element={<ZincDistillationPage />} />
        <Route path="/topic/bronze-and-lost-wax-casting" element={<BronzeLostWaxCastingPage />} />
        <Route path="/topic/copper-metallurgy" element={<CopperMetallurgyPage />} />

        <Route path="/topic/jantar-mantar-observatories" element={<JantarMantarObservatoriesPage />} />
        <Route path="/topic/aryabhata-and-the-concept-of-zero" element={<AryabhataZeroPage />} />
        <Route path="/topic/siddhantic-astronomy" element={<SiddhanticAstronomyPage />} />
        <Route path="/topic/eclipse-calculations" element={<EclipseCalculationsPage />} />
        <Route path="/topic/sun-temples-as-instruments" element={<SunTemplesInstrumentsPage />} />

        <Route path="/topic/indus-valley-sanitation" element={<IndusValleySanitationPage />} />
        <Route path="/topic/the-great-bath-mohenjo-daro" element={<GreatBathMohenjoDaroPage />} />
        <Route path="/topic/stepwells-vav-baoli" element={<StepwellsPage />} />
        <Route path="/topic/lothal-dockyard" element={<LothalDockyardPage />} />
        <Route path="/topic/vaastu-shastra" element={<VaastuShastraPage />} />

        <Route path="/topic/sushruta-samhita" element={<SushrutaSamhitaPage />} />
        <Route path="/topic/charaka-samhita" element={<CharakaSamhitaPage />} />
        <Route path="/topic/ayurvedic-principles" element={<AyurvedicPrinciplesPage />} />
        <Route path="/topic/traditional-healing-practices" element={<TraditionalHealingPracticesPage />} />

        <Route path="/topic/featured-documentaries" element={<FeaturedDocumentariesPage />} />
        <Route path="/topic/short-clips" element={<ShortClipsPage />} />
        <Route path="/topic/lecture-series" element={<LectureSeriesPage />} />
        <Route path="/topic/3d-reconstructions" element={<Reconstructions3DPage />} />

        <Route path="/topic/research-papers" element={<ResearchPapersPage />} />
        <Route path="/topic/books-and-bibliography" element={<BooksBibliographyPage />} />
        <Route path="/topic/external-links" element={<ExternalLinksPage />} />
        <Route path="/topic/about-this-project" element={<AboutProjectPage />} />
        <Route path="/topic/contact-contribute" element={<ContactContributePage />} />
        <Route path="/topic/editorial-principles" element={<EditorialPrinciplesPage />} />
        <Route path="/topic/contributors-and-authors" element={<ContributorsAuthorsPage />} />
        <Route path="/topic/advisory-board" element={<AdvisoryBoardPage />} />
        <Route path="/topic/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/topic/terms-of-use" element={<TermsOfUsePage />} />
        <Route path="/topic/accessibility" element={<AccessibilityPage />} />
        <Route path="/topic/sitemap" element={<SitemapPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
