export type VideoTopicHighlight = {
  title: string;
  text: string;
  label?: string;
};

type VideoTopicHighlightsProps = {
  eyebrow?: string;
  title: string;
  description: string;
  highlights: VideoTopicHighlight[];
  takeaways?: string[];
  terms?: string[];
  className?: string;
};

export function VideoTopicHighlights({
  eyebrow = 'Related Content',
  title,
  description,
  highlights,
  takeaways = [],
  terms = [],
  className = '',
}: VideoTopicHighlightsProps) {
  return (
    <section className={`rounded-2xl border border-[#d4b26a]/22 bg-[#121a30] p-6 ${className}`}>
      <p className='text-xs uppercase tracking-[0.18em] text-[#d4b26a]'>{eyebrow}</p>
      <h3 className='mt-2 text-xl font-semibold text-[#f4ead8]'>{title}</h3>
      <p className='mt-3 max-w-3xl text-sm leading-relaxed text-[#f4ead8]/78'>{description}</p>

      <div className='mt-5 grid md:grid-cols-3 gap-4'>
        {highlights.map((item) => (
          <article key={item.title} className='rounded-xl border border-[#d4b26a]/18 bg-[#0a0f1c]/70 p-4'>
            {item.label && <p className='text-[11px] uppercase tracking-[0.14em] text-[#d4b26a]/90'>{item.label}</p>}
            <h4 className='mt-1 font-semibold text-[#f4ead8]'>{item.title}</h4>
            <p className='mt-2 text-sm leading-relaxed text-[#f4ead8]/74'>{item.text}</p>
          </article>
        ))}
      </div>

      {(takeaways.length > 0 || terms.length > 0) && (
        <div className='mt-5 grid lg:grid-cols-[1.1fr_0.9fr] gap-4'>
          {takeaways.length > 0 && (
            <div className='rounded-xl border border-[#d4b26a]/18 bg-[#0a0f1c]/62 p-4'>
              <h4 className='font-semibold text-[#f4ead8]'>Suggested Insights</h4>
              <ul className='mt-3 space-y-2 text-sm leading-relaxed text-[#f4ead8]/74'>
                {takeaways.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          )}

          {terms.length > 0 && (
            <div className='rounded-xl border border-[#d4b26a]/18 bg-[#0a0f1c]/62 p-4'>
              <h4 className='font-semibold text-[#f4ead8]'>Discovery Terms</h4>
              <div className='mt-3 flex flex-wrap gap-2'>
                {terms.map((term) => (
                  <span key={term} className='rounded-full border border-[#d4b26a]/24 bg-[#121a30] px-3 py-1 text-xs text-[#f4ead8]/78'>
                    {term}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
