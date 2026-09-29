import Link from "next/link";

export function BrandPhilosophy() {
  return (
    <section className="py-24 bg-[#F7F7F7] border-y border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Editorial Text */}
        <div className="space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#7C856E] font-medium">
            House Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#313131] leading-tight uppercase font-normal">
            Precision Tailoring Meets European Textile Tradition
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed font-light">
            Guided by Italian millwork and traditional bench tailoring, every Mayfair garment is sculpted with obsessive attention to silhouette, weight, and fabric hand. From initial chest canvas assembly to final hand-rolled edges, we honor classic craft for the modern wardrobe.
          </p>
          <div className="pt-4">
            <Link
              href="/story"
              className="inline-block border-b-2 border-[#484D40] text-[#313131] pb-1 text-xs uppercase tracking-widest font-semibold hover:text-[#484D40] transition-colors"
            >
              Discover Our Craftsmanship &rarr;
            </Link>
          </div>
        </div>

        {/* High Res Craftsmanship Image */}
        <div className="relative aspect-[4/5] bg-gray-200 overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop"
            alt="Bespoke Tailoring Craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
