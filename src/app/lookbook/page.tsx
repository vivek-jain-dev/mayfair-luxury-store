export default function LookbookPage() {
  const images = [
    { src: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop", title: "Look 01 — The Structured Blazer" },
    { src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop", title: "Look 02 — Bespoke Suit & Silk Polo" },
    { src: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop", title: "Look 03 — Cashmere Fluid Knit" },
    { src: "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=1000&auto=format&fit=crop", title: "Look 04 — Forest Green Safari Coat" },
  ];

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 mb-16">
        <span className="text-xs uppercase tracking-[0.3em] text-[#7C856E] font-medium">
          Autumn / Winter Collection
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#313131] uppercase tracking-wide">
          Editorial Lookbook
        </h1>
        <p className="text-xs text-gray-500 font-light">Captured on location in London &amp; Houston</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {images.map((item, index) => (
          <div key={index} className="space-y-4 group">
            <div className="aspect-[4/5] bg-gray-100 overflow-hidden shadow-sm">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h3 className="font-serif text-lg text-[#313131] text-center tracking-wide">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
