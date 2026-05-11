import { ShieldCheck, ShieldQuestion } from 'lucide-react';
import type { EvidenceLevel } from '@/types/blog';
import { evidenceToScore } from '@/lib/blogUtils';

const badgeMap: Record<EvidenceLevel, { label: string; tone: string }> = {
  Strong: { label: 'Strong evidence', tone: 'bg-[#1f3a2b] text-[#d6f5e3]' },
  Moderate: { label: 'Moderate evidence', tone: 'bg-[#2b1b17] text-[#f4ead8]' },
  Emerging: { label: 'Emerging evidence', tone: 'bg-[#6d4c1f] text-[#fff1d1]' },
  Speculative: { label: 'Speculation lab', tone: 'bg-[#4f2e59] text-[#f4ead8]' },
};

export function EvidenceMeter({
  level,
  notes,
}: {
  level: EvidenceLevel;
  notes: string[];
}) {
  const score = evidenceToScore(level);
  const badge = badgeMap[level];

  return (
    <section className="border border-[#8d4f36]/18 bg-[#f8f0e3] p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-[#8d4f36]">Evidence meter</p>
          <h2 className="mt-2 text-2xl font-sans font-semibold text-[#2b1b17]">How confident is this topic?</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#3a231a]/82">
            The site separates artifact-backed claims, text-backed interpretation, and open questions. This meter is a reader aid, not a verdict.
          </p>
        </div>
        <span className={`shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${badge.tone}`}>
          {level === 'Strong' ? <ShieldCheck className="h-4 w-4" aria-hidden /> : <ShieldQuestion className="h-4 w-4" aria-hidden />}
          {badge.label}
        </span>
      </div>

      <div className="mt-5">
        <div className="h-3 w-full rounded-full bg-white/70 border border-[#8d4f36]/16 overflow-hidden">
          <div className="h-full bg-[#d4b26a]" style={{ width: `${score}%` }} />
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-[#3a231a]/70">
          <span>Speculative</span>
          <span>Evidence-led</span>
        </div>
      </div>

      {notes.length > 0 ? (
        <ul className="mt-5 grid md:grid-cols-2 gap-3 text-sm text-[#3a231a]/84 leading-relaxed">
          {notes.map((note) => (
            <li key={note} className="border border-[#8d4f36]/14 bg-white/60 px-4 py-3">
              {note}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

