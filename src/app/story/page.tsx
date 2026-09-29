export default function StoryPage() {
  return (
    <div className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Editorial Title */}
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-[#7C856E] font-medium">
          Houston Atelier &amp; European Mills
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#313131] uppercase tracking-wide">
          The Story of Mayfair
        </h1>
        <div className="w-16 h-[1px] bg-[#484D40] mx-auto mt-4" />
      </div>

      {/* Main Image */}
      <div className="aspect-[16/9] w-full bg-gray-200 overflow-hidden shadow-md">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1500&auto=format&fit=crop"
          alt="Mayfair Atelier Story"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Narrative Section */}
      <div className="max-w-3xl mx-auto space-y-6 text-sm text-gray-700 font-light leading-relaxed">
        <p className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#484D40]">
          The Studio Mayfair was established with a single unwavering intention: to restore the quiet dignity of authentic European tailoring for the discerning contemporary wardrobe. Operating between our Houston tailoring house and renowned mills in Biella and Savile Row, we create garments defined by structure, ease, and understated luxury.
        </p>
        <p>
          Every piece begins with raw natural fibers—Super 130s wool, long-staple Peruvian Pima cotton, and Mongolian silk-cashmere blends. Our master craftsmen combine hand-stitched canvassing with modern ergonomic cuts, ensuring that each silhouette ages gracefully alongside its owner.
        </p>
      </div>
    </div>
  );
}
