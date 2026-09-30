import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onResetFilters: () => void;
}

export function ProductGrid({ products, onResetFilters }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-24 text-center space-y-5 bg-[#F7F7F7] border border-gray-200/60 p-8 my-8 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium block">
          No Results Found
        </span>
        <h3 className="font-serif text-2xl text-[#313131]">
          No Garments Match Your Selection
        </h3>
        <p className="text-xs text-gray-500 max-w-md mx-auto font-sans leading-relaxed">
          We could not find any pieces matching the selected filters. Please adjust your category or filter preferences to explore our current ready-to-wear offerings.
        </p>
        <div className="pt-2">
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-block border border-[#484D40] text-[#484D40] px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#484D40] hover:text-white transition-colors cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
