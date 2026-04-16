import { useEffect } from 'react';
import { Footer } from '../../sections/Footer';
import { SubmenuHeaderNav } from '../../components/SubmenuHeaderNav';

export function DelhiIronPillarPage() {
  useEffect(() => {
    document.title = 'Delhi Iron Pillar Mystery - Ancient Rust-Free Technology';
    const meta = document.querySelector('meta[name="description"]');
    const description =
      "Explore the Delhi Iron Pillar's forge-welded construction, passive protective layer, and the science behind its long corrosion resistance.";
    if (meta) meta.setAttribute('content', description);
  }, []);

  return (
    <main className="min-h-screen bg-[#f4ead8] text-[#2b1b17]">
      <SubmenuHeaderNav />
      <section className="relative overflow-hidden">
        <div className="h-[52vh] min-h-[360px]">
          <img src="/iron-pillar.jpg" alt="Delhi Iron Pillar at the Qutb complex" className="h-full w-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2b1b17]/84 via-[#2b1b17]/58 to-[#2b1b17]/76" />
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-12 pb-10 flex items-end">
          <div className="max-w-4xl">
            <p className="inline-flex bg-[#d4b26a]/30 px-4 py-1.5 text-xs uppercase tracking-[0.16em] font-body text-[#f4ead8]">Metallurgy</p>
            <h1 className="mt-5 text-4xl md:text-6xl font-sans font-bold tracking-tight text-[#f4ead8]">The Delhi Iron Pillar</h1>
            <p className="mt-3 max-w-3xl text-[#f4ead8]/90 text-base md:text-lg">
              A Gupta-era monument whose forge-welded wrought iron body and stable passive surface still anchor corrosion science conversations today.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-8">
        <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold">Why the Pillar Matters</h2>
          <p className="mt-4 leading-relaxed text-[#3a231a]/85">
            The Delhi Iron Pillar is not important merely because it is old. It matters because it shows large-scale forge welding,
            confident wrought-iron production, and an unusually durable response to the open atmosphere. Instead of collapsing into
            flaking rust, the surface developed a thin protective layer that slowed deeper corrosion.
          </p>
          <p className="mt-3 leading-relaxed text-[#3a231a]/82">
            For historians, the monument reflects Gupta-period prestige and technical organization. For materials scientists, it is a
            rare long-term experiment left standing in public view for more than sixteen centuries.
          </p>
        </article>

        <section className="grid md:grid-cols-2 gap-5">
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">Construction at Monument Scale</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              The shaft was built by forge-welding multiple iron blooms into one tall, coherent monument. That required repeated
              heating, hammer consolidation, and close control over shape and alignment at a scale far beyond ordinary toolmaking.
            </p>
          </article>
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">Corrosion Resistance, Not Magic</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              The pillar&apos;s stability is tied to chemistry and surface evolution. Phosphorus-rich wrought iron, slag distribution,
              and long-term weathering helped create a passive layer that shields the deeper metal instead of allowing rapid scaling.
            </p>
          </article>
        </section>

        <section className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 items-stretch">
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6 md:p-7">
            <h2 className="text-2xl font-sans font-semibold">How the Monument Was Built</h2>
            <div className="mt-4 grid gap-3 text-sm text-[#3a231a]/84">
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Stage 1</p>
                <p className="mt-1.5">Bloomery iron was produced in manageable masses rather than in one huge cast.</p>
              </div>
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Stage 2</p>
                <p className="mt-1.5">The blooms were reheated and forge-welded together through repeated hammering cycles.</p>
              </div>
              <div className="border border-[#8d4f36]/15 bg-white/45 p-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">Stage 3</p>
                <p className="mt-1.5">Final shaping created a consistent shaft profile suitable for inscription and display.</p>
              </div>
            </div>
            <div className="mt-5 border border-[#8d4f36]/15 bg-white/45 p-4">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[#8d4f36]">What Scientists Look For</p>
              <p className="mt-1.5 text-sm text-[#3a231a]/84 leading-relaxed">
                Slag inclusions, weld lines, phosphorus levels, and weathering products reveal how the monument behaved from the
                moment it was forged to the centuries of exposure that followed.
              </p>
            </div>
          </article>
          <figure className="border border-[#8d4f36]/20 bg-[#f7efdf] p-3 flex flex-col">
            <img
              src="/iron-pillar-passive-layer.svg"
              alt="Diagram of the Delhi Iron Pillar showing forge welding, inclusions, and passive layer formation"
              className="h-[420px] md:h-[540px] w-full object-contain object-center bg-white p-2 md:p-3"
            />
            <figcaption className="p-3 text-sm text-[#3a231a]/80">
              The pillar&apos;s reputation comes from the relationship between forge-welded wrought iron, inclusions, and a stable
              passive surface rather than from an absence of oxidation altogether.
            </figcaption>
          </figure>
        </section>

        <section className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[#8d4f36]">Top Video</p>
          <h3 className="mt-2 text-xl font-semibold font-sans">Mystery of the Rust-Free Iron Pillar of Delhi</h3>
          <div className="mt-3 aspect-video overflow-hidden bg-black border border-[#8d4f36]/20">
            <iframe
              src="https://www.youtube.com/embed?listType=search&list=iron%20pillar%20mystery%20rust%20proof%20iron%20india"
              title="Mystery of Rust-Free Delhi Iron Pillar"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">What the Surface Tells Us</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#3a231a]/84">
              <li>- The pillar is weathered, but the weathering stayed shallow rather than destructive.</li>
              <li>- A dense surface film formed over time and slowed deeper corrosion.</li>
              <li>- This behavior is tied to metallurgy, environment, and long exposure working together.</li>
            </ul>
          </article>
          <article className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
            <h3 className="text-xl font-semibold font-sans">Historical Context</h3>
            <p className="mt-3 text-sm text-[#3a231a]/84 leading-relaxed">
              The pillar is associated with the Gupta era and the memory of royal authority, but it also reflects an industrial base
              capable of producing clean iron blooms, organizing labor, and achieving remarkable consistency at monumental scale.
            </p>
          </article>
        </section>

        <section className="grid md:grid-cols-2 gap-5">
          <figure className="border border-[#8d4f36]/20 bg-white p-3">
            <img src="/iron-pillar.jpg" alt="Close view of the Delhi Iron Pillar surface and shaft" className="h-80 md:h-[22rem] w-full object-cover object-center" />
            <figcaption className="p-3 text-sm text-[#3a231a]/80">
              The monument&apos;s surviving body shows that ancient Indian ironwork was not limited to small tools or weapons.
            </figcaption>
          </figure>
          <figure className="border border-[#8d4f36]/20 bg-[#f7efdf] p-3">
            <img
              src="/iron-pillar-passive-layer.svg"
              alt="Scientific interpretation of the Delhi Iron Pillar's passive corrosion layer"
              className="h-[24rem] md:h-[28rem] w-full object-contain object-center bg-white p-2 md:p-3"
            />
            <figcaption className="p-3 text-sm text-[#3a231a]/80">
              Modern studies focus on the protective film, forge quality, and the internal material character that made the film possible.
            </figcaption>
          </figure>
        </section>

        <section className="border border-[#8d4f36]/20 bg-[#f8f0e3] p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[#8d4f36]">End Video</p>
          <h3 className="mt-2 text-lg font-semibold font-sans">Scientific Analysis of the Delhi Iron Pillar</h3>
          <div className="mt-3 aspect-video overflow-hidden bg-black border border-[#8d4f36]/20">
            <iframe
              src="https://www.youtube.com/embed?listType=search&list=scientific%20analysis%20delhi%20iron%20pillar"
              title="Scientific Analysis of Delhi Iron Pillar"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section className="bg-[#2b1b17] text-[#f4ead8] p-6 border border-[#8d4f36]/20">
          <h3 className="text-xl font-semibold font-sans">Conclusion</h3>
          <p className="mt-3 text-sm md:text-base text-[#f4ead8]/85">
            The Delhi Iron Pillar stands at the intersection of monumentality and materials science. Its fame comes not from an
            impossible absence of rust, but from the fact that ancient Indian smiths created a wrought-iron monument whose chemistry
            and surface behavior remained unusually stable across centuries.
          </p>
          <p className="sr-only">Keywords: iron pillar delhi, corrosion resistance ancient india</p>
        </section>
      </section>
      <Footer />
    </main>
  );
}
