import Link from "next/link";

export function LookbookBanner() {
  return (
    <section className="relative w-full min-h-[70vh] bg-[#181916] flex items-end overflow-hidden my-0">
      <img
        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2000&auto=format&fit=crop"
        alt="Mayfair Hamptons Lookbook Collection"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70 hover:scale-105 transition-transform duration-1000 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 text-white">
        <div className="space-y-3 max-w-xl">
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/80">
            SEASONAL RELEASE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-wide font-normal">
            The Hamptons <span className="italic font-serif normal-case font-light">Lookbook</span>
          </h2>
          <p className="text-sm text-white/80 font-sans font-light leading-relaxed">
            Lightweight Italian silk linen jackets, tailored shorts, and casual elegance crafted for warm coastal afternoons.
          </p>
        </div>

        <div className="shrink-0">
          <Link
            href="/lookbook"
            className="inline-block border border-white text-white hover:bg-white hover:text-[#313131] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
          >
            EXPLORE LOOKBOOK
          </Link>
        </div>
      </div>
    </section>
  );
}
