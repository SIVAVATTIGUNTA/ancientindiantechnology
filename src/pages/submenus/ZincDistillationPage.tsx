import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function ZincDistillationPage() {
  useEffect(() => {
    document.title = 'Zinc Distillation India - Zawar Industrial Breakthrough';
  }, []);

  return (
    <main className="min-h-screen bg-[#f4ead8] text-[#2b1b17]">
      <SubmenuHeaderNav />
      <section className="relative overflow-hidden">
        <div className="h-[50vh] min-h-[340px]">
          <img src="/zinc-distillation.jpg" alt="Zawar mining landscape associated with ancient zinc distillation" className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1b17]/82 via-[#2b1b17]/55 to-[#2b1b17]/75" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]">Metallurgy</p>
            <h1 className="mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]">Zinc Distillation at Zawar</h1>
            <p className="mt-3 text-[#f4ead8]/90">A rare industrial solution to one of pre-modern metallurgy&apos;s most difficult vapor problems.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8">
        <article data-ait-reveal className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold">Why Zinc Was a Hard Metal to Make</h2>
          <p className="mt-4 text-[#3a231a]/85 leading-relaxed">
            Zinc challenged ancient smelters because it vaporizes before it can be collected the way copper or iron can. Producing
            metallic zinc demanded more than ore reduction. It required a controlled enclosure, a reliable vapor path, and a cooler
            zone where the metal could condense rather than vanish into the furnace atmosphere.
          </p>
          <p className="mt-3 text-[#3a231a]/82 leading-relaxed">
            At Zawar in Rajasthan, Indian metallurgists solved that problem through a retort-based system that linked ore preparation,
            furnace heating, and condensation into one repeatable production chain.
          </p>
        </article>

        <section data-ait-reveal data-ait-delay="40" className="grid md:grid-cols-2 gap-5">
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">Industrial Logic</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              Zinc production at Zawar was not a one-off workshop trick. It involved mine supply, ceramic retort production, furnace
              design, and labor coordination consistent with a true industrial process.
            </p>
          </article>
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">What Archaeology Confirms</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              Retort fragments, furnace remains, slag, and associated production debris show that the technology was used repeatedly
              and at substantial scale rather than described only in theory.
            </p>
          </article>
        </section>

        <section data-ait-reveal data-ait-delay="60" className="grid lg:grid-cols-[1fr_1fr] gap-6 items-stretch">
          <figure className="border border-[#8d4f36]/20 bg-[#f7efdf] p-3 flex flex-col">
            <img
              src="/zinc-retort-distillation.svg"
              alt="Diagram of ancient zinc retort distillation with charging, heating, vapor movement, and condensation"
              className="h-[420px] md:h-[540px] w-full object-contain object-center bg-white p-2 md:p-3"
            />
            <figcaption className="p-3 text-sm text-[#3a231a]/80">
              The breakthrough at Zawar was process design: a closed ceramic path that let zinc vapor become metallic zinc instead of escaping.
            </figcaption>
          </figure>
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-7">
            <h2 className="text-2xl font-sans font-semibold">How the Retort System Worked</h2>
            <div className="mt-4 grid gap-3 text-sm text-[#3a231a]/84">
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Charge</p>
                <p className="mt-1.5">Roasted ore and reducing material were packed into ceramic retorts.</p>
              </div>
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Heat</p>
                <p className="mt-1.5">The furnace pushed zinc-bearing material into vapor form inside an enclosed environment.</p>
              </div>
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Condense</p>
                <p className="mt-1.5">The cooler end of the setup captured metallic zinc after vapor traveled away from peak heat.</p>
              </div>
            </div>
            <div className="mt-5 border border-[#8d4f36]/15 bg-white/45 p-4">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Why It Matters</p>
              <p className="mt-1.5 text-sm text-[#3a231a]/84 leading-relaxed">
                This is one of the clearest examples of ancient Indian metallurgy combining thermal chemistry, ceramic engineering,
                and production organization into a stable industrial system.
              </p>
            </div>
          </article>
        </section>

        <section data-ait-reveal data-ait-delay="60" className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[#8d4f36]">Top Video</p>
          <h3 className="mt-2 text-xl font-semibold font-sans">World&apos;s First Zinc Distillation - India&apos;s Forgotten Technology</h3>
          <div className="mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20">
            <iframe
              src="https://www.youtube.com/embed?listType=search&list=worlds%20first%20zinc%20distillation%20india"
              title="World First Zinc Distillation India"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section data-ait-reveal data-ait-delay="40" className="grid md:grid-cols-2 gap-6">
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">Scale and Coordination</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              Zinc distillation required more than furnace heat. It relied on mining, retort making, packing, fuel management, and
              repeatable maintenance. That degree of organization is what makes the Zawar complex feel industrial rather than incidental.
            </p>
          </article>
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">Global Metallurgical Importance</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              Zinc is central to brass and other alloy traditions, but recovering metallic zinc itself was historically difficult. The
              Zawar record therefore stands as a major benchmark in the history of non-ferrous metallurgy.
            </p>
          </article>
        </section>

        <section data-ait-reveal data-ait-delay="60" className="grid md:grid-cols-2 gap-5">
          <figure className="border border-[#8d4f36]/20 bg-white p-3">
            <img src="/zinc-distillation.jpg" alt="Landscape associated with the Zawar zinc production zone" className="h-80 md:h-[22rem] w-full object-cover object-center" />
            <figcaption className="p-3 text-sm text-[#3a231a]/80">
              The mining landscape at Zawar is inseparable from the distillation story because ore access, furnace placement, and scale all mattered.
            </figcaption>
          </figure>
          <figure className="border border-[#8d4f36]/20 bg-[#f7efdf] p-3">
            <img src="/zinc-retort-distillation.svg" alt="Infographic explaining ancient zinc vapor condensation" className="h-[24rem] md:h-[28rem] w-full object-contain object-center bg-white p-2 md:p-3" />
            <figcaption className="p-3 text-sm text-[#3a231a]/80">
              The key technical step was not simply heating ore, but giving zinc vapor a controlled route into a condensation zone.
            </figcaption>
          </figure>
        </section>

        <section data-ait-reveal data-ait-delay="60" className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[#8d4f36]">End Video</p>
          <h3 className="mt-2 text-lg font-semibold font-sans">How Zinc Is Extracted - Ancient vs Modern</h3>
          <div className="mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20">
            <iframe
              src="https://www.youtube.com/embed?listType=search&list=how%20zinc%20is%20extracted%20ancient%20vs%20modern"
              title="How Zinc is Extracted Ancient vs Modern"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section data-ait-reveal="scale" data-ait-delay="60" className="bg-[#2b1b17] text-[#f4ead8] p-6 border border-[#8d4f36]/20">
          <h3 className="text-xl font-semibold font-sans">Industrial Legacy</h3>
          <p className="mt-3 text-sm md:text-base text-[#f4ead8]/85">
            Zinc distillation at Zawar is one of the strongest cases where archaeology, process engineering, and material history
            reinforce one another. It shows that ancient Indian metallurgy could solve a specialized industrial problem through repeatable design.
          </p>
          <p className="sr-only">Keywords: zinc distillation india, zawar mines</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
