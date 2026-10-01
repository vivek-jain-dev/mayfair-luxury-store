import Link from "next/link";

export function BrandStatement() {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F5F3] text-center text-[#313131] border-b border-[#E8E8E8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#7C856E]">
          THE STUDIO MAYFAIR
        </span>

        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal leading-tight uppercase text-[#1A1A1A] tracking-wide">
          A Houston-based tailoring house, <br className="hidden sm:inline" />
          <span className="italic font-serif normal-case font-light text-[#40463C]">
            guided by the timeless artistry
          </span>{" "}
          of Italian textiles &amp; European craftsmanship.
        </h2>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 font-sans font-light leading-relaxed pt-2">
          From full canvas floating interlinings to hand-bound buttonholes, each Mayfair jacket is individually tailored for effortless drape and longevity.
        </p>

        <div className="pt-6">
          <Link
            href="/story"
            className="inline-block border border-[#313131] text-[#313131] hover:bg-[#40463C] hover:text-white hover:border-[#40463C] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
          >
            DISCOVER OUR STORY
          </Link>
        </div>
      </div>
    </section>
  );
}
