import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] w-full bg-[#181916] overflow-hidden flex items-center justify-center text-center text-white">
      {/* Background Image with High-Fashion Lighting */}
      <img
        src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop"
        alt="The Studio Mayfair Atelier Tailoring"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-45 scale-100 transition-transform duration-1000 ease-out hover:scale-105"
      />

      {/* Layered Editorial Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
      <div className="absolute inset-0 bg-[#40463C]/20 mix-blend-multiply" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center justify-center space-y-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="w-8 sm:w-12 h-[1px] bg-white/40" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-medium text-white/90">
            HOUSTON-BASED TAILORING HOUSE
          </span>
          <span className="w-8 sm:w-12 h-[1px] bg-white/40" />
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide leading-[1.12] uppercase font-normal text-white max-w-4xl">
          Classic Fashion, <span className="italic font-serif normal-case font-light">Modern Fit</span>.<br className="hidden sm:inline" /> Tailored to Your Lifestyle.
        </h1>

        {/* Supporting Copy */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/85 font-sans font-light leading-relaxed tracking-wide">
          Guided by the timeless artistry of Italian textiles and European craftsmanship. Full canvas bench tailoring crafted for precision.
        </p>

        {/* Call to Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/bespoke"
            className="w-full sm:w-auto bg-[#40463C] text-white border border-[#40463C] hover:bg-white hover:text-[#313131] hover:border-white px-8 sm:px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 text-center"
          >
            REQUEST AN APPOINTMENT
          </Link>
          <Link
            href="/shop"
            className="w-full sm:w-auto border border-white/70 text-white hover:bg-white/10 px-8 sm:px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 text-center"
          >
            EXPLORE READY-TO-WEAR
          </Link>
        </div>

        {/* Understated Editorial Badges */}
        <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 border-t border-white/15 w-full max-w-3xl mt-4">
          <div className="text-center space-y-1">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-white/60 font-sans">
              Craft
            </span>
            <span className="font-serif text-xs sm:text-sm text-white/90 uppercase tracking-wide">
              Full Canvas Construction
            </span>
          </div>
          <div className="text-center space-y-1">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-white/60 font-sans">
              Textiles
            </span>
            <span className="font-serif text-xs sm:text-sm text-white/90 uppercase tracking-wide">
              Italian Wool &amp; Cashmere
            </span>
          </div>
          <div className="col-span-2 sm:col-span-1 text-center space-y-1">
            <span className="block text-[11px] uppercase tracking-[0.2em] text-white/60 font-sans">
              Service
            </span>
            <span className="font-serif text-xs sm:text-sm text-white/90 uppercase tracking-wide">
              Bespoke &amp; Ready-to-Wear
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

