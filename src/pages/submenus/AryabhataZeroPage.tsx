import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function AryabhataZeroPage() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] text-[#2b1b17]">
      <SubmenuHeaderNav />

      <section className="relative overflow-hidden">
        <div className="h-[48vh] min-h-[340px]">
          <img src="/aryabhata.jpg" alt="Aryabhata and mathematical astronomy" className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b5c5c]/78 via-[#2b1b17]/55 to-[#2b1b17]/76" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-12 flex items-end">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]">
              Astronomy
            </p>
            <h1 className="mt-5 text-4xl md:text-6xl font-sans font-bold text-[#f4ead8] leading-tight">
              Aryabhata and Zero - The Language of Infinity
            </h1>
            <p className="mt-4 text-[#f4ead8]/85 font-body leading-relaxed">
              From place-value intelligence to astronomical computation, this tradition transformed how civilization performs mathematics.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 space-y-10 md:space-y-12">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8">
          <article className="rounded-2xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]">
            <h2 className="text-2xl font-sans font-semibold">Core Concept</h2>
            <p className="mt-4 text-[#3a231a]/85 leading-relaxed font-body">
              Zero in the Indian mathematical tradition is not merely a symbol. It enables positional notation, compact arithmetic,
              astronomical tables, and scalable algorithmic reasoning.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-[#8d4f36]/15 bg-white/60 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-[#8d4f36] font-body">Scientific Layer</p>
                <p className="mt-2 text-sm text-[#3a231a]/82">Astronomical prediction quality improves when place value and zero-based notation are stable.</p>
              </div>
              <div className="rounded-xl border border-[#8d4f36]/15 bg-white/60 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-[#8d4f36] font-body">Modern Relevance</p>
                <p className="mt-2 text-sm text-[#3a231a]/82">Computing, data representation, and numerical simulation rely on this abstraction lineage.</p>
              </div>
            </div>
          </article>

          <aside className="rounded-2xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]">
            <h3 className="text-xl font-sans font-semibold">History Timeline</h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-[#3a231a]/84">• Classical India: mature computational astronomy frameworks emerge.</li>
              <li className="text-sm text-[#3a231a]/84">• Aryabhata era: algorithmic astronomy and numeric compression accelerate.</li>
              <li className="text-sm text-[#3a231a]/84">• Later transmission: ideas travel through scholarly networks to wider world science.</li>
            </ul>
          </aside>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          <div className="rounded-2xl overflow-hidden border border-[#8d4f36]/20 bg-white/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]">
            <img src="/aryabhata.jpg" alt="Aryabhata visual" className="h-56 w-full object-cover object-center" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#8d4f36]/20 bg-white/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]">
            <img src="/astronomy-jantar.jpg" alt="Astronomical observatory" className="h-56 w-full object-cover object-center" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#8d4f36]/20 bg-white/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(43,27,23,0.15)]">
            <img src="/sun-temple.jpg" alt="Sun temple instrument architecture" className="h-56 w-full object-cover object-center" loading="lazy" />
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8 transition-all duration-300 ease-out">
          <h3 className="text-2xl font-sans font-semibold">Video Storyline</h3>
          <p className="mt-3 text-[#3a231a]/80 font-body">Origin after intro, transmission in middle, and modern computational relevance at the end.</p>
          <div className="mt-5 overflow-hidden rounded-xl border border-[#8d4f36]/20 bg-black">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/5fN2A6XYx3E"
                title="Aryabhata and the concept of zero"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
