type ResourceImageSupportProps = {
  promptsText: string;
  keywordsText: string;
};

export function ResourceImageSupport({ promptsText, keywordsText }: ResourceImageSupportProps) {
  return (
    <section className='border border-[#8d4f36]/20 bg-white p-6 text-sm'>
      <h3 className='text-lg font-semibold'>Image Support</h3>
      <p className='mt-2 text-[#3a231a]/82'>{promptsText}</p>
      <p className='mt-2 text-[#3a231a]/82'>{keywordsText}</p>
    </section>
  );
}
