import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../SubmenuHeaderNav';

export type TopicShowcaseSection = {
  title: string;
  body: string;
};

export type TopicShowcaseImage = {
  src: string;
  alt: string;
  caption: string;
  fit?: 'cover' | 'contain';
};

export type TopicShowcaseFact = {
  label: string;
  value: string;
  note?: string;
};

export type TopicShowcaseLensDetail = {
  title: string;
  text: string;
};

export type TopicShowcasePageProps = {
  metaTitle: string;
  category: string;
  title: string;
  summary: string;
  heroImage: string;
  heroAlt: string;
  framingLabel: string;
  framingNote: string;
  framingDetails?: TopicShowcaseLensDetail[];
  factCards?: TopicShowcaseFact[];
  keyPoints: string[];
  sections: TopicShowcaseSection[];
  gallery: TopicShowcaseImage[];
  closingTitle: string;
  closingText: string;
};

export function TopicShowcasePage({
  metaTitle,
  category,
  title,
  summary,
  heroImage,
  heroAlt,
  framingLabel,
  framingNote,
  framingDetails = [],
  factCards = [],
  keyPoints,
  sections,
  gallery,
  closingTitle,
  closingText,
}: TopicShowcasePageProps) {
  useEffect(() => {
    document.title = metaTitle;
  }, [metaTitle]);

  return (
    <main className="min-h-screen bg-[#f4ead8] text-[#2b1b17]">
      <SubmenuHeaderNav />

      <section className="relative overflow-hidden">
        <div className="h-[52vh] min-h-[360px]">
          <img src={heroImage} alt={heroAlt} className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1b17]/86 via-[#2b1b17]/58 to-[#2b1b17]/78" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-10 md:pb-12">
            <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="inline-flex rounded-full bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-[#f4ead8]">
                {category}
              </p>
              <h1 className="mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]">{title}</h1>
              <p className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-[#f4ead8]/88">{summary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-14 space-y-8">
        {factCards.length > 0 ? (
          <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {factCards.map((fact, index) => (
              <article
                key={`${fact.label}-${fact.value}`}
                data-ait-reveal="up"
                data-ait-delay={String(index * 70)}
                className="min-h-36 border border-[#8d4f36]/18 bg-white px-5 py-4 flex flex-col"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-[#8d4f36]">{fact.label}</p>
                <p className="mt-2 text-lg md:text-xl font-sans font-semibold leading-snug text-[#2b1b17]">{fact.value}</p>
                {fact.note ? <p className="mt-3 text-sm leading-relaxed text-[#3a231a]/75">{fact.note}</p> : null}
              </article>
            ))}
          </section>
        ) : null}

        <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <article data-ait-reveal="left" className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8d4f36]">Key Points</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-sans font-semibold">What to Notice</h2>
            <ul className="mt-5 space-y-3 text-sm md:text-base text-[#3a231a]/85 leading-relaxed">
              {keyPoints.map((point) => (
                <li key={point} className="border border-[#8d4f36]/14 bg-white/60 px-4 py-3">
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article data-ait-reveal="right" data-ait-delay="80" className="border border-[#8d4f36]/20 bg-white p-6 md:p-8">
            <p className="text-xs uppercase tracking-[0.16em] text-[#8d4f36]">{framingLabel}</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-sans font-semibold">How This Page Reads the Topic</h2>
            <p className="mt-5 text-sm md:text-base text-[#3a231a]/85 leading-relaxed">{framingNote}</p>
            {framingDetails.length > 0 ? (
              <div className="mt-6 grid gap-3">
                {framingDetails.map((detail) => (
                  <div key={detail.title} className="border border-[#8d4f36]/14 bg-[#f8f0e3] p-4">
                    <h3 className="text-sm font-sans font-semibold text-[#2b1b17]">{detail.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#3a231a]/78">{detail.text}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        </section>

        <section className="grid md:grid-cols-2 gap-5">
          {sections.map((section, index) => (
            <article
              key={section.title}
              data-ait-reveal="up"
              data-ait-delay={String(40 + index * 70)}
              className="border border-[#8d4f36]/20 bg-[#fcfaf6] p-6 md:p-7"
            >
              <h2 className="text-xl md:text-2xl font-sans font-semibold">{section.title}</h2>
              <p className="mt-4 text-sm md:text-base text-[#3a231a]/85 leading-relaxed">{section.body}</p>
            </article>
          ))}
        </section>

        <section data-ait-reveal data-ait-delay="60" className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[#8d4f36]">Image Gallery</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-sans font-semibold">Related Visual References</h2>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {gallery.map((image, index) => {
              const isDiagram = image.fit === 'contain';

              return (
                <figure
                  key={`${image.src}-${image.caption}`}
                  data-ait-reveal={isDiagram ? 'scale' : 'up'}
                  data-ait-delay={String(index * 70)}
                  className={`border border-[#8d4f36]/20 bg-white p-3 ${isDiagram ? 'xl:col-span-2' : ''}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full ${
                      isDiagram
                        ? 'h-80 md:h-[28rem] xl:h-[32rem] object-contain object-center bg-[#f7efdf] p-2 md:p-3'
                        : 'h-72 md:h-[24rem] object-cover object-center'
                    }`}
                    loading="lazy"
                  />
                  <figcaption className="mt-3 text-sm md:text-base leading-relaxed text-[#3a231a]/82">{image.caption}</figcaption>
                </figure>
              );
            })}
          </div>
        </section>

        <section data-ait-reveal="scale" data-ait-delay="60" className="border border-[#8d4f36]/20 bg-[#2b1b17] px-6 py-7 md:px-8 text-[#f4ead8]">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold">{closingTitle}</h2>
          <p className="mt-4 max-w-4xl text-sm md:text-base leading-relaxed text-[#f4ead8]/86">{closingText}</p>
        </section>
      </section>

      <Footer />
    </main>
  );
}
