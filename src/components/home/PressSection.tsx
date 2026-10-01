import Link from "next/link";

export function PressSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#FCFCFC] border-t border-[#E8E8E8] text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#7C856E]">
          PRESS &amp; ACCOLADES
        </span>

        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-[#1A1A1A] font-light leading-relaxed max-w-3xl mx-auto">
          &ldquo;Texas Favorite Makes a High Fashion Splash in the Hamptons With Loads of Celebs &mdash; The Studio Mayfair Turns Important Heads.&rdquo;
        </blockquote>

        <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#40463C] pt-2">
          &mdash; PAPER CITY MAGAZINE
        </p>

        {/* Press Publication Logos Grid */}
        <div className="pt-10 border-t border-[#E8E8E8] grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-70">
          <div className="font-serif text-lg tracking-[0.2em] uppercase font-bold text-[#313131]">
            PAPER CITY
          </div>
          <div className="font-serif text-lg tracking-[0.15em] uppercase font-semibold text-[#313131]">
            HOUSTON CHRONICLE
          </div>
          <div className="font-serif text-lg tracking-[0.2em] uppercase font-normal text-[#313131]">
            MODERN LUXURY
          </div>
          <div className="font-serif text-lg tracking-[0.3em] uppercase font-bold text-[#313131]">
            GQ MAGAZINE
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/press"
            className="inline-block border-b border-[#313131] text-[#313131] pb-1 text-xs uppercase tracking-[0.2em] font-medium hover:text-[#7C856E] hover:border-[#7C856E] transition-colors"
          >
            VIEW ALL PRESS &amp; MEDIA &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
