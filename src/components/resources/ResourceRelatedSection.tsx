export type ResourceRelatedCard = {
  title: string;
  body: string;
  label?: string;
};

type ResourceRelatedSectionProps = {
  eyebrow?: string;
  title: string;
  description: string;
  cards: ResourceRelatedCard[];
  checklist?: string[];
};

export function ResourceRelatedSection({
  eyebrow = 'Related Content',
  title,
  description,
  cards,
  checklist = [],
}: ResourceRelatedSectionProps) {
  return (
    <section data-ait-reveal className='rounded-2xl border border-[#8d4f36]/20 bg-white p-6 md:p-7'>
      <p className='text-xs uppercase tracking-[0.16em] text-[#8d4f36]'>{eyebrow}</p>
      <h2 className='mt-2 text-2xl font-semibold'>{title}</h2>
      <p className='mt-3 max-w-4xl text-sm md:text-base leading-relaxed text-[#3a231a]/82'>{description}</p>

      <div className='mt-5 grid md:grid-cols-3 gap-4'>
        {cards.map((card) => (
          <article key={card.title} className='rounded-xl border border-[#8d4f36]/15 bg-[#fcfaf6] p-4'>
            {card.label && <p className='text-[11px] uppercase tracking-[0.14em] text-[#8d4f36]'>{card.label}</p>}
            <h3 className='mt-1 font-semibold'>{card.title}</h3>
            <p className='mt-2 text-sm leading-relaxed text-[#3a231a]/78'>{card.body}</p>
          </article>
        ))}
      </div>

      {checklist.length > 0 && (
        <div className='mt-5 rounded-xl border border-[#8d4f36]/15 bg-[#f8f0e3] p-4'>
          <h3 className='font-semibold'>Use This Page For</h3>
          <ul className='mt-3 grid md:grid-cols-2 gap-2 text-sm text-[#3a231a]/82'>
            {checklist.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
