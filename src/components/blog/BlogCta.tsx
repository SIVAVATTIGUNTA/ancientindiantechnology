import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BlogCta() {
  return (
    <section
      data-ait-reveal="scale"
      className="border border-[#8d4f36]/20 bg-gradient-to-r from-[#2b1b17] to-[#3a231a] px-6 py-8 md:px-8"
    >
      <p className="text-xs uppercase tracking-[0.16em] text-[#d4b26a]/90">Explore India&apos;s Scientific Heritage</p>
      <h2 className="mt-3 text-2xl md:text-3xl font-sans font-semibold text-[#f4ead8]">
        Continue into evidence-led articles, diagrams, and learning pathways
      </h2>
      <p className="mt-3 max-w-3xl text-sm md:text-base leading-relaxed text-[#f4ead8]/82"style={{ color: 'white' }}  >
        Use Blogs to connect long-form explanations with topic subpages, diagrams, references, and videos. Each article is written to be readable, checkable, and useful for students.
      </p>
      <div className="mt-6">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 rounded-full bg-[#d4b26a] px-6 py-3 text-sm font-sans font-semibold text-[#2b1b17] hover:bg-[#c6a055] transition-colors"
        >
          Read More Articles
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}

