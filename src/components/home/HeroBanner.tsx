import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full bg-[#313131] overflow-hidden flex items-center justify-center text-center text-white">
      {/* High Quality Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop"
        alt="The Studio Mayfair Tailoring House"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 space-y-6">
        <span className="inline-block text-xs uppercase tracking-[0.3em] font-medium text-[#D9D9D9]">
          Houston Tailoring House • Quiet Luxury
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight leading-tight uppercase font-normal text-white">
          Timeless Artistry &amp; European Craft
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-300 font-sans font-light leading-relaxed">
          Refined tailoring, handcrafted knits, and made-to-order essentials for those who appreciate distinction in every detail.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto bg-[#FCFCFC] text-[#313131] px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#E5E5E5] transition-colors"
          >
            Explore Ready-to-Wear
          </Link>
          <Link
            href="/bespoke"
            className="w-full sm:w-auto border border-white text-white px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-white/10 transition-colors"
          >
            Book Fitting Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
