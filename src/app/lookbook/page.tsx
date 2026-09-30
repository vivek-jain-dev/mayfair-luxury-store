import Link from "next/link";

interface LookItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  aspectClass: string;
}

const LOOKBOOK_ITEMS: LookItem[] = [
  {
    id: "look-01",
    number: "LOOK 01",
    title: "THE CHARCOAL SUIT",
    category: "Tailoring • Ready-to-Wear",
    description: "Cut from Super 130s Italian virgin wool with softly roped shoulders and clean suppression.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "look-02",
    number: "LOOK 02",
    title: "THE DOUBLE-BREASTED CUT",
    category: "Signature • Bespoke Canvas",
    description: "Classic 6x2 button stance with sweeping peak lapels and floating horsehair interlining.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[4/5]",
  },
  {
    id: "look-03",
    number: "LOOK 03",
    title: "THE EVENING FORM",
    category: "Formal • Silk-Wool Blend",
    description: "Minimalist evening silhouette featuring satin piping and a natural drape for formal occasions.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "look-04",
    number: "LOOK 04",
    title: "THE MAYFAIR OVERCOAT",
    category: "Outerwear • Heavy Wool",
    description: "A commanding double-breasted overcoat tailored in dense Melton wool with deep storm pockets.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[4/5]",
  },
  {
    id: "look-05",
    number: "LOOK 05",
    title: "THE WEEKEND EDIT",
    category: "Casual • Silk-Cashmere",
    description: "Fine-gauge open collar knit paired with relaxed pleated wool trousers for refined off-duty wear.",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "look-06",
    number: "LOOK 06",
    title: "THE MODERN TUXEDO",
    category: "Ceremony • Black Tie",
    description: "Midnight navy barathea wool with faille grosgrain lapels and single horn closure.",
    image: "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[4/5]",
  },
  {
    id: "look-07",
    number: "LOOK 07",
    title: "THE SAFARI FIELD COAT",
    category: "Field Tailoring • Irish Linen",
    description: "Four bellows pockets with an internal waist cinch, crafted for climate versatility and structure.",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[3/4]",
  },
  {
    id: "look-08",
    number: "LOOK 08",
    title: "THE CASHMERE ESSENTIAL",
    category: "Knitwear • Long-Staple Pima",
    description: "Understated layering foundational pieces crafted with Peruvian yarn and clean ribbed hems.",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[4/5]",
  },
];

export default function LookbookPage() {
  return (
    <div className="bg-[#FCFCFC] text-[#313131] min-h-screen">
      {/* ========================================================================= */}
      {/* HEADER */}
      {/* ========================================================================= */}
      <section className="pt-20 pb-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium">
          THE COLLECTION
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#313131] uppercase tracking-wide">
          THE MAYFAIR LOOKBOOK
        </h1>
        <div className="w-16 h-[1px] bg-[#484D40] mx-auto mt-4" />
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-600 font-light leading-relaxed pt-2">
          A study in proportion, texture and timeless tailoring.
        </p>
      </section>

      {/* ========================================================================= */}
      {/* GALLERY GRID */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Responsive Multi-Column Layout: 1 col mobile, 2 cols tablet, 3 cols desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {LOOKBOOK_ITEMS.map((item) => (
            <article
              key={item.id}
              className="group space-y-4 flex flex-col justify-between"
            >
              {/* Image Container with subtle hover zoom */}
              <div
                className={`relative ${item.aspectClass} w-full bg-[#F7F7F7] overflow-hidden border border-[#E5E5E5] transition-shadow duration-500 hover:shadow-md`}
              >
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.category}`}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Subtle Overlay Label */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#313131] font-medium border border-[#E5E5E5]/60">
                  {item.number}
                </div>
              </div>

              {/* Caption & Typography */}
              <div className="space-y-1.5 pt-1 px-1">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#7C856E] font-medium block">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#313131] uppercase tracking-wide group-hover:text-[#484D40] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CLOSING EDITORIAL CTA */}
      {/* ========================================================================= */}
      <section className="py-24 bg-[#F7F7F7] border-t border-[#E5E5E5] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium">
            DISTINCTION IN EVERY SILHOUETTE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#313131] uppercase tracking-wide">
            TAILORING WITHOUT COMPROMISE
          </h2>
          <div className="w-12 h-[1px] bg-[#484D40] mx-auto" />
          <p className="max-w-lg mx-auto text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            Acquire ready-to-wear pieces from our current collection or reserve an appointment for our bespoke tailoring service.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/shop"
              className="w-full sm:w-auto bg-[#484D40] text-white hover:bg-[#313131] px-8 sm:px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300"
            >
              SHOP THE COLLECTION
            </Link>
            <Link
              href="/bespoke"
              className="w-full sm:w-auto border border-[#484D40] text-[#484D40] hover:bg-[#484D40] hover:text-white px-8 sm:px-10 py-4 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300"
            >
              BOOK A PRIVATE FITTING
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
