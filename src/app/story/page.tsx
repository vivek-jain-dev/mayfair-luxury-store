import Link from "next/link";

export default function StoryPage() {
  const craftsmanshipPrinciples = [
    {
      number: "01",
      title: "PRECISION",
      description:
        "Every pattern is individually drafted to millimeter tolerances. Balance, drape, and shoulder pitch are calibrated specifically for natural posture and effortless movement.",
    },
    {
      number: "02",
      title: "FABRIC",
      description:
        "We source exclusively from historic European mills—natural fiber wools, Scottish tweeds, Irish linens, and silk-cashmere blends chosen for hand-feel, longevity, and recovery.",
    },
    {
      number: "03",
      title: "HAND FINISHING",
      description:
        "Floating natural horsehair canvas, pick-stitched lapels, and hand-sewn buttonholes ensure the garment breathes, moves fluidly, and molds to the body over time.",
    },
    {
      number: "04",
      title: "PERSONAL FIT",
      description:
        "A garment must flatter in stillness and perform in motion. We focus on nuanced proportions—sleeve pitch, waist suppression, and lapel width tailored to the individual.",
    },
  ];

  const tailoringSteps = [
    {
      step: "01",
      name: "CONSULTATION",
      detail:
        "An in-depth dialogue regarding lifestyle, occasion, silhouette preferences, and personal style.",
    },
    {
      step: "02",
      name: "SELECTION",
      detail:
        "Curating the ideal cloth, weight, lining, canvas structure, and horn or horn-brass buttons.",
    },
    {
      step: "03",
      name: "FITTING",
      detail:
        "A baste fitting using temporary stitching to assess drape, shoulder line, and posture balance.",
    },
    {
      step: "04",
      name: "REFINEMENT",
      detail:
        "Detailed adjustments to micro-measurements, button placement, and hem drape by our master cutters.",
    },
    {
      step: "05",
      name: "FINAL PIECE",
      detail:
        "Hand-pressed, inspected, and delivered as a timeless cornerstone for the client's permanent wardrobe.",
    },
  ];

  return (
    <div className="bg-[#FCFCFC] text-[#313131] min-h-screen">
      {/* ========================================================================= */}
      {/* A. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[70vh] lg:min-h-[78vh] flex items-center justify-center overflow-hidden bg-[#1F211D] text-white text-center">
        <img
          src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2000&auto=format&fit=crop"
          alt="Mayfair Tailoring Craftsmanship"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-6">
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-white/40" />
            <span className="text-xs uppercase tracking-[0.25em] text-white/80 font-medium">
              THE MAYFAIR TRADITION
            </span>
            <span className="w-8 h-[1px] bg-white/40" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl uppercase tracking-wide text-white leading-tight font-normal">
            CRAFTED WITH INTENTION
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-gray-200 font-sans font-light leading-relaxed">
            Rooted in authentic tailoring heritage, precision cutting, and an enduring commitment to timeless elegance.
          </p>

          <div className="pt-4">
            <Link
              href="/shop"
              className="inline-block bg-[#FCFCFC] text-[#313131] hover:bg-[#484D40] hover:text-[#FCFCFC] px-8 sm:px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300"
            >
              EXPLORE THE COLLECTION
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* B. HERITAGE SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Editorial Column 1: Image & Texture */}
          <div className="relative space-y-4">
            <div className="aspect-[4/5] bg-[#F7F7F7] overflow-hidden border border-[#E5E5E5]">
              <img
                src="https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=1200&auto=format&fit=crop"
                alt="Detail of Mayfair Tailoring cloth and lapel"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-[#7C856E] px-1">
              <span>Savile Row Heritage &amp; Italian Cloth</span>
              <span>Full Floating Canvas</span>
            </div>
          </div>

          {/* Editorial Column 2: Narrative */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium">
              HERITAGE &amp; PHILOSOPHY
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#313131] uppercase tracking-wide leading-snug">
              The Architecture of Timeless Tailoring
            </h2>

            <div className="w-12 h-[1px] bg-[#484D40]" />

            <div className="space-y-5 text-sm sm:text-base text-gray-700 font-light leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:text-[#484D40]">
                Rooted in the traditions of Mayfair tailoring, our approach balances time-honoured craftsmanship with a modern understanding of proportion, comfort and individuality.
              </p>
              <p>
                We reject seasonal excess in favour of garments designed to withstand the test of time. Every seam, interlining, and shoulder construction is engineered to grant quiet confidence and fluid drape.
              </p>
              <p>
                From hand-basted horsehair chest pieces to hand-stitched pick lapels, our commitment to bench tailoring creates clothing that matures with each wearing—shaping naturally to the contours of your life.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-2 gap-6 border-t border-[#E5E5E5]">
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#7C856E] font-medium">
                  Approach
                </span>
                <span className="font-serif text-sm sm:text-base text-[#313131] mt-1 block">
                  Bespoke &amp; Small-Batch
                </span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-[#7C856E] font-medium">
                  Provenance
                </span>
                <span className="font-serif text-sm sm:text-base text-[#313131] mt-1 block">
                  Biella &amp; British Weavers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* C. CRAFTSMANSHIP SECTION */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-24 bg-[#F7F7F7] border-y border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium">
              CORE PRINCIPLES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#313131] uppercase tracking-wide">
              Craftsmanship &amp; Integrity
            </h2>
            <div className="w-12 h-[1px] bg-[#484D40] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {craftsmanshipPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="bg-[#FCFCFC] p-8 border border-[#E5E5E5] space-y-4 hover:border-[#484D40]/50 transition-colors duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium">
                    {principle.number}
                  </span>
                  <h3 className="font-serif text-xl text-[#313131] uppercase tracking-wide">
                    {principle.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-[#484D40]" />
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed pt-2">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* D. TAILORING PROCESS */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium">
            THE ATELIER JOURNEY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#313131] uppercase tracking-wide">
            The Tailoring Process
          </h2>
          <div className="w-12 h-[1px] bg-[#484D40] mx-auto mt-4" />
          <p className="text-xs sm:text-sm text-gray-600 font-light max-w-xl mx-auto pt-2">
            Every garment progresses through a deliberate sequence of artisan stages to ensure an impeccable fit.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {tailoringSteps.map((step) => (
            <div
              key={step.step}
              className="bg-[#F7F7F7] p-6 sm:p-7 border border-[#E5E5E5] space-y-4 relative group hover:border-[#484D40] transition-colors duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.25em] text-[#484D40] font-semibold">
                  {step.step}
                </span>
                <h3 className="font-serif text-base sm:text-lg text-[#313131] uppercase tracking-wider">
                  {step.name}
                </h3>
                <div className="w-6 h-[1px] bg-[#484D40]/60 group-hover:w-10 transition-all duration-300" />
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed pt-2">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* E. CLOSING CTA */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#F7F7F7] border-t border-[#E5E5E5] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium">
            BEGIN YOUR EXPERIENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#313131] uppercase tracking-wide">
            Experience Mayfair Tailoring
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            Discover our seasonal lookbook or schedule a private consultation with our master tailoring advisors.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lookbook"
              className="w-full sm:w-auto bg-[#484D40] text-white hover:bg-[#313131] px-8 sm:px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300"
            >
              EXPLORE LOOKBOOK
            </Link>
            <Link
              href="/bespoke"
              className="w-full sm:w-auto border border-[#484D40] text-[#484D40] hover:bg-[#484D40] hover:text-white px-8 sm:px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300"
            >
              BOOK A FITTING
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
