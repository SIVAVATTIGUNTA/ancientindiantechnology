import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

type InfoSection = {
  title: string;
  body: string;
};

interface InfoPageLayoutProps {
  category: string;
  title: string;
  intro: string;
  heroImage: string;
  sections: InfoSection[];
}

export function InfoPageLayout({ category, title, intro, heroImage, sections }: InfoPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[#f4ead8] text-[#2b1b17]">
      <SubmenuHeaderNav />
      <section className="relative overflow-hidden">
        <div className="h-[42vh] min-h-[280px]">
          <img src={heroImage} alt={title} className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1b17]/82 via-[#2b1b17]/55 to-[#2b1b17]/75" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="inline-flex rounded-full bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]">
              {category}
            </p>
            <h1 className="mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]">{title}</h1>
            <p className="mt-3 text-[#f4ead8]/85">{intro}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-2 gap-5">
          {sections.map((section, index) => (
            <article
              key={section.title}
              data-ait-reveal="up"
              data-ait-delay={String(index * 70)}
              className="rounded-xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-5 md:p-6"
            >
              <h2 className="text-xl font-sans font-semibold">{section.title}</h2>
              <p className="mt-3 text-sm md:text-base text-[#3a231a]/85 leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
