type ResourceImageSupportProps = {
  title?: string;
  description?: string;
  notes?: string[];
  terms?: string[];
  promptsText?: string;
  keywordsText?: string;
};

export function ResourceImageSupport({
  title = 'Visual Reference Notes',
  description = 'Use imagery that supports evidence-based reading rather than decorative filler.',
  notes,
  terms,
  promptsText,
  keywordsText,
}: ResourceImageSupportProps) {
  const visualNotes = notes ?? [promptsText, keywordsText].filter((item): item is string => Boolean(item));

  return (
    <section className='rounded-2xl border border-[#8d4f36]/20 bg-white p-6 text-sm'>
      <h3 className='text-lg font-semibold'>{title}</h3>
      <p className='mt-2 text-[#3a231a]/82'>{description}</p>
      <div className='mt-4 grid md:grid-cols-2 gap-3'>
        {visualNotes.map((note) => (
          <p key={note} className='rounded-xl border border-[#8d4f36]/15 bg-[#fcfaf6] p-3 leading-relaxed text-[#3a231a]/82'>
            {note}
          </p>
        ))}
      </div>
      {terms && terms.length > 0 && (
        <div className='mt-4 flex flex-wrap gap-2'>
          {terms.map((term) => (
            <span key={term} className='rounded-full border border-[#8d4f36]/20 bg-[#f8f0e3] px-3 py-1 text-xs text-[#3a231a]/76'>
              {term}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
