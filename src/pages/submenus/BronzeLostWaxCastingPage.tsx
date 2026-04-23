import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function BronzeLostWaxCastingPage() {
  useEffect(() => {
    document.title = 'Lost-Wax Casting India - Bronze Nataraja Precision';
  }, []);

  return (
    <main className="min-h-screen bg-[#f4ead8] text-[#2b1b17]">
      <SubmenuHeaderNav />
      <section className="relative overflow-hidden">
        <div className="h-[50vh] min-h-[340px]">
          <img src="/bronze-casting.jpg" alt="Bronze casting and Chola-style sculptural tradition" className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1b17]/82 via-[#2b1b17]/55 to-[#2b1b17]/75" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end">
          <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <p className="inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]">Metallurgy</p>
            <h1 className="mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]">Lost-Wax Bronze Casting</h1>
            <p className="mt-3 text-[#f4ead8]/90">A process where sculpture, mold design, alloy control, and finishing skill all had to succeed in one continuous chain.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8">
        <article data-ait-reveal className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold">Why the Process Was So Advanced</h2>
          <p className="mt-4 text-[#3a231a]/85 leading-relaxed">
            Lost-wax casting, or cire-perdue, produced some of the most refined metal icons in South Asia. The method demanded far
            more than artistic vision. Every stage, from wax modeling to clay shell preparation to molten bronze flow, had to preserve
            exact detail because the mold was sacrificed after the pour.
          </p>
          <p className="mt-3 text-[#3a231a]/82 leading-relaxed">
            Chola bronzes such as Nataraja remain the emblematic example because they unite visual grace with disciplined foundry practice.
          </p>
        </article>

        <section data-ait-reveal data-ait-delay="40" className="grid md:grid-cols-2 gap-5">
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">One Wax Model, One Final Casting</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              The wax original was not just a sketch. It was the final sculptural decision. Once the mold was fired and the wax was
              lost, the finished bronze would inherit that geometry permanently.
            </p>
          </article>
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">Alloy and Flow Control</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              Bronze needed to stay fluid long enough to reach delicate edges while cooling into a stable final object. That linked
              alloy balance directly with mold design and pouring strategy.
            </p>
          </article>
        </section>

        <section data-ait-reveal data-ait-delay="60" className="grid lg:grid-cols-[1fr_1fr] gap-6 items-stretch">
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-7">
            <h2 className="text-2xl font-sans font-semibold">The Lost-Wax Sequence</h2>
            <div className="mt-4 grid gap-3 text-sm text-[#3a231a]/84">
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Model</p>
                <p className="mt-1.5">A detailed wax figure established the exact form, gesture, and balance of the sculpture.</p>
              </div>
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Mold</p>
                <p className="mt-1.5">Layered clay captured the surface and created a strong shell around the model.</p>
              </div>
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Burnout and Pour</p>
                <p className="mt-1.5">Heating removed the wax, then molten bronze entered the empty cavity left behind.</p>
              </div>
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Finishing</p>
                <p className="mt-1.5">The mold was broken, surface seams were refined, and details were polished to completion.</p>
              </div>
            </div>
          </article>
          <figure className="border border-[#8d4f36]/20 bg-[#f7efdf] p-3 flex flex-col">
            <img
              src="/bronze-lost-wax-process.svg"
              alt="Diagram showing wax model, clay shell, burnout, and bronze pour in lost-wax casting"
              className="h-[420px] md:h-[540px] w-full object-contain object-center bg-white p-2 md:p-3"
            />
            <figcaption className="p-3 text-sm text-[#3a231a]/80">
              The defining feature of lost-wax casting is that the mold is temporary while the bronze is permanent.
            </figcaption>
          </figure>
        </section>

        <section data-ait-reveal data-ait-delay="60" className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[#8d4f36]">Top Video</p>
          <h3 className="mt-2 text-xl font-semibold font-sans">Lost-Wax Casting Explained - Chola Bronze Mastery</h3>
          <div className="mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20">
            <iframe
              src="https://www.youtube.com/embed?listType=search&list=lost%20wax%20casting%20explained%20chola%20bronze"
              title="Lost Wax Casting Explained Chola Bronze Mastery"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section data-ait-reveal data-ait-delay="40" className="grid md:grid-cols-2 gap-5">
          <figure className="border border-[#8d4f36]/20 bg-white p-3">
            <img src="/bronze-casting.jpg" alt="Bronze casting visual representing sculptural metalwork" className="h-80 md:h-[22rem] w-full object-cover object-center" />
            <figcaption className="p-3 text-sm text-[#3a231a]/80">
              Bronze icons embody both ritual meaning and a high level of foundry process control.
            </figcaption>
          </figure>
          <figure className="border border-[#8d4f36]/20 bg-[#f7efdf] p-3">
            <img src="/bronze-lost-wax-process.svg" alt="Lost-wax casting infographic for bronze sculpture making" className="h-[24rem] md:h-[28rem] w-full object-contain object-center bg-white p-2 md:p-3" />
            <figcaption className="p-3 text-sm text-[#3a231a]/80">
              The process succeeds only when model making, mold preparation, thermal timing, and finishing all align.
            </figcaption>
          </figure>
        </section>

        <section data-ait-reveal data-ait-delay="60" className="grid md:grid-cols-2 gap-6">
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">Why Nataraja Became Iconic</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              The Nataraja image is famous not only for theology and symbolism, but because the sculptural balance is unforgiving.
              Extended limbs, rings, and fine details all test the caster&apos;s command over flow and shrinkage.
            </p>
          </article>
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">A Living Metallurgical Tradition</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              Lost-wax casting remains relevant because it preserves a way of thinking in which metallurgy is inseparable from
              geometry, touch, surface finish, and the intended presence of the final object.
            </p>
          </article>
        </section>

        <section data-ait-reveal data-ait-delay="60" className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[#8d4f36]">End Video</p>
          <h3 className="mt-2 text-lg font-semibold font-sans">Ancient Indian Art and Metallurgy</h3>
          <div className="mt-3 aspect-video bg-black overflow-hidden border border-[#8d4f36]/20">
            <iframe
              src="https://www.youtube.com/embed?listType=search&list=ancient%20indian%20art%20and%20metallurgy"
              title="Ancient Indian Art and Metallurgy"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section data-ait-reveal="scale" className="border border-[#8d4f36]/20 bg-[#2b1b17] text-[#f4ead8] p-6">
          <h3 className="text-xl font-semibold font-sans">Conclusion</h3>
          <p className="mt-3 text-sm md:text-base text-[#f4ead8]/85">
            Lost-wax bronze casting in India deserves to be read as engineering as much as art. The surviving bronzes prove that
            ancient founders could control form, cavity, alloy flow, and final finish at a level that still commands respect.
          </p>
          <p className="sr-only">Keywords: lost wax casting india, bronze nataraja</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
