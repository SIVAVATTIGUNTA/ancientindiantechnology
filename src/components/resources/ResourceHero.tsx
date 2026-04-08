import { Search } from 'lucide-react';

type ResourceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  searchPlaceholder?: string;
};

export function ResourceHero({ eyebrow, title, description, searchPlaceholder }: ResourceHeroProps) {
  return (
    <section className='border-b border-[#8d4f36]/15 bg-[#fcfaf6]'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-14'>
        <p className='text-xs uppercase tracking-[0.16em] text-[#8d4f36]'>{eyebrow}</p>
        <h1 className='mt-3 text-4xl md:text-5xl font-sans font-bold'>{title}</h1>
        <p className='mt-3 max-w-3xl text-[#3a231a]/82'>{description}</p>
        {searchPlaceholder && (
          <div className='mt-5 flex items-center gap-3 border border-[#8d4f36]/22 bg-white px-4 py-3 max-w-xl'>
            <Search className='h-4 w-4 text-[#8d4f36]' />
            <input readOnly value={searchPlaceholder} className='w-full bg-transparent text-sm text-[#6a4a3c] outline-none' />
          </div>
        )}
      </div>
    </section>
  );
}
