import Link from "next/link";

export function BrandPhilosophy() {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F5F3] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Editorial Text */}
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#7C856E] font-medium">
            ATELIER CRAFTSMANSHIP
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] leading-tight uppercase font-normal">
            Timeless Elegance &amp; <span className="italic font-serif normal-case font-light text-[#40463C]">Exceptional</span> Craftsmanship
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed font-light">
            Guided by Italian millwork and traditional bench tailoring, every Mayfair garment is sculpted with obsessive attention to silhouette, weight, and fabric hand. From initial chest canvas assembly to final hand-rolled edges, we honor classic European bespoke traditions for the modern wardrobe.
          </p>
          <div className="pt-4">
            <Link
              href="/bespoke"
              className="inline-block border border-[#313131] text-[#313131] hover:bg-[#40463C] hover:text-white hover:border-[#40463C] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300"
            >
              BOOK A CONSULTATION
            </Link>
          </div>
        </div>

        {/* High Res Craftsmanship Image */}
        <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop"
            alt="Mayfair Bespoke Tailoring Craftsmanship"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>
      </div>
    </section>
  );
}

