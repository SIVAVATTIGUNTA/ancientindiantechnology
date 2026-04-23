import { Search } from 'lucide-react';

type ResourceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  searchPlaceholder?: string;
  heroImage?: string;
  heroImageAlt?: string;
};

export function ResourceHero({ eyebrow, title, description, searchPlaceholder, heroImage, heroImageAlt }: ResourceHeroProps) {
  const content = (
    <>
      <p className={`text-xs uppercase tracking-[0.16em] ${heroImage ? 'text-[#d4b26a]' : 'text-[#8d4f36]'}`}>{eyebrow}</p>
      <h1 className={`mt-3 text-4xl md:text-5xl font-sans font-bold ${heroImage ? 'text-white' : ''}`}>{title}</h1>
      <p className={`mt-3 max-w-3xl leading-relaxed ${heroImage ? 'text-white/88' : 'text-[#3a231a]/82'}`}>{description}</p>
      {searchPlaceholder && (
        <div className={`mt-5 flex items-center gap-3 border px-4 py-3 max-w-xl ${
          heroImage ? 'border-[#d4b26a]/35 bg-[#f4ead8]/95' : 'border-[#8d4f36]/22 bg-white'
        }`}>
          <Search className='h-4 w-4 text-[#8d4f36]' />
          <input
            readOnly
            value={searchPlaceholder}
            aria-label={`${title} search helper`}
            className='w-full bg-transparent text-sm text-[#6a4a3c] outline-none'
          />
        </div>
      )}
    </>
  );

  if (heroImage) {
    return (
      <section className='relative overflow-hidden border-b border-[#8d4f36]/15 bg-[#2b1b17]'>
        <div className='h-[44vh] min-h-[320px] md:min-h-[380px]'>
          <img src={heroImage} alt={heroImageAlt || title} className='h-full w-full object-cover object-center' />
        </div>
        <div className='absolute inset-0 bg-gradient-to-r from-[#2b1b17]/90 via-[#2b1b17]/64 to-[#2b1b17]/42' />
        <div className='absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 md:pb-12 flex items-end'>
          <div className='max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700'>{content}</div>
        </div>
      </section>
    );
  }

  return (
    <section className='border-b border-[#8d4f36]/15 bg-[#fcfaf6]'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-14'>
        <div className='animate-in fade-in slide-in-from-bottom-4 duration-700'>{content}</div>
      </div>
    </section>
  );
}
