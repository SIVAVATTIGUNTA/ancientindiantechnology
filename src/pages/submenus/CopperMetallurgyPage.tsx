import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function CopperMetallurgyPage() {
  useEffect(() => {
    document.title = 'Copper Metallurgy - Indus Valley Metal Innovation';
  }, []);

  return (
    <main className="min-h-screen bg-[#f4ead8] text-[#2b1b17]">
      <SubmenuHeaderNav />
      <section className="relative overflow-hidden">
        <div className="h-[52vh] min-h-[380px]">
          <img src="/hero-metallurgy.png" alt="Ancient metallurgy workshop with copper and furnace context" className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1b17]/82 via-[#2b1b17]/55 to-[#2b1b17]/75" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]">Metallurgy</p>
            <h1 className="mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]">Copper Metallurgy</h1>
            <p className="mt-3 text-[#f4ead8]/90">The metal system that linked ore zones, furnaces, toolmakers, and exchange networks across early South Asian society.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8">
        <article data-ait-reveal className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold">Why Copper Was Foundational</h2>
          <p className="mt-4 text-[#3a231a]/85 leading-relaxed">
            Copper was one of the first metals to transform everyday and specialist production. It could be smelted, hammered, cast,
            repaired, and eventually alloyed into bronze. In the Indus world and related early South Asian traditions, copper supported
            tools, ornaments, fittings, and the material logic of organized craft economies.
          </p>
          <p className="mt-3 text-[#3a231a]/82 leading-relaxed">
            The story is not only about objects. It is about the chain that linked mines, furnaces, workshops, and routes of exchange.
          </p>
        </article>

        <section data-ait-reveal data-ait-delay="60" className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[#8d4f36]">Top Video</p>
          <h3 className="mt-2 text-xl font-semibold font-sans">Copper in the Indus Valley Civilization</h3>
          <div className="mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20">
            <iframe
              src="https://www.youtube.com/embed?listType=search&list=copper%20in%20indus%20valley%20civilization"
              title="Copper in Indus Valley Civilization"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section data-ait-reveal data-ait-delay="40" className="grid md:grid-cols-2 gap-5">
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">Extraction and Smelting</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              Smelting copper required ore knowledge, fuel management, and furnace skill. Each stage separated useful metal from
              gangue and slag while preserving enough quality for later shaping or alloying.
            </p>
          </article>
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">Workshop Diversity</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              Copper did not produce just one class of artifact. Workshops made blades, pins, bowls, ornaments, and fittings, each
              calling for different combinations of casting, hammering, annealing, and finishing.
            </p>
          </article>
        </section>

        <section data-ait-reveal data-ait-delay="60" className="grid lg:grid-cols-[1fr_1fr] gap-6 items-stretch">
          <figure className="border border-[#8d4f36]/20 bg-[#f7efdf] p-3 flex flex-col">
            <img
              src="/copper-smelting-route.svg"
              alt="Copper economy diagram showing ore, smelting, workshop activity, and exchange"
              className="h-[420px] md:h-[540px] w-full object-contain object-center bg-white p-2 md:p-3"
            />
            <figcaption className="p-3 text-sm text-[#3a231a]/80">
              Copper metallurgy becomes historically important when we follow the whole chain from resource extraction to urban circulation.
            </figcaption>
          </figure>
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-7">
            <h2 className="text-2xl font-sans font-semibold">A Network, Not a Single Workshop</h2>
            <div className="mt-4 grid gap-3 text-sm text-[#3a231a]/84">
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Mine Zones</p>
                <p className="mt-1.5">Ore sources determined what could be smelted, how often, and at what scale.</p>
              </div>
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Furnaces</p>
                <p className="mt-1.5">Smelting converted raw mineral into metal suitable for working and recasting.</p>
              </div>
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Urban Workshops</p>
                <p className="mt-1.5">Artisans specialized in different forms, from tools and vessels to decorative pieces.</p>
              </div>
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Exchange</p>
                <p className="mt-1.5">Finished goods and raw copper moved through settlement networks and wider trade routes.</p>
              </div>
            </div>
          </article>
        </section>

        <section data-ait-reveal data-ait-delay="40" className="grid md:grid-cols-2 gap-5">
          <figure className="border border-[#8d4f36]/20 bg-[#f7efdf] p-3">
            <img src="/copper-toolkit.svg" alt="Illustrated copper toolkit showing blades, vessels, rods, and ornaments" className="h-[24rem] md:h-[28rem] w-full object-contain object-center bg-white p-2 md:p-3" />
            <figcaption className="p-3 text-sm text-[#3a231a]/80">
              Copper workshops served many functions, which is why artifact diversity is one of the strongest clues to production maturity.
            </figcaption>
          </figure>
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">From Copper to Bronze</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              Copper also mattered because it opened the pathway to alloying. Once artisans could control casting and hot working in
              copper, they had a material basis for experimenting with tin bronze and other mixed-metal traditions.
            </p>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              That means copper metallurgy should be read as a base technology: a foundation beneath later advances rather than a minor prelude to them.
            </p>
          </article>
        </section>

        <section data-ait-reveal data-ait-delay="60" className="grid md:grid-cols-2 gap-6">
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-[#8d4f36]">Mid Video</p>
            <h3 className="text-lg font-semibold font-sans">Indus Valley Copper Metallurgy</h3>
            <div className="mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20">
              <iframe
                src="https://www.youtube.com/embed?listType=search&list=indus%20valley%20metallurgy%20copper"
                title="Indus Valley Metallurgy Copper"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </article>
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-lg font-semibold font-sans">Ancient Copper Smelting Process</h3>
            <div className="mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20">
              <iframe
                src="https://www.youtube.com/embed?listType=search&list=ancient%20copper%20smelting%20process"
                title="Ancient Copper Smelting Process"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </article>
        </section>

        <section data-ait-reveal="scale" className="bg-[#2b1b17] text-[#f4ead8] p-6 border border-[#8d4f36]/20">
          <h3 className="text-xl font-semibold font-sans">Conclusion</h3>
          <p className="mt-3 text-sm md:text-base text-[#f4ead8]/85">
            Copper metallurgy formed a practical backbone for early South Asian craft and exchange. Its significance lies in the full
            production system it supported: ore procurement, furnace work, urban shaping, and the eventual development of more complex alloy traditions.
          </p>
          <p className="sr-only">Keywords: copper metallurgy indus valley, ancient india metals</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
