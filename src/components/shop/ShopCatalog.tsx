"use client";

import { useMemo, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import { Product } from "@/types/product";
import { ShopFilters } from "./ShopFilters";
import { ShopSort, SortOption } from "./ShopSort";
import { ProductGrid } from "./ProductGrid";

export function ShopCatalog() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const categoryParam = searchParams.get("category");

  // Dynamically compute available categories from data
  const availableCategories = useMemo(() => {
    return Array.from(new Set(MOCK_PRODUCTS.map((p) => p.category)));
  }, []);

  // Selected category directly derived from URL searchParams
  const selectedCategory = useMemo(() => {
    if (categoryParam && availableCategories.includes(categoryParam as Product["category"])) {
      return categoryParam;
    }
    return "all";
  }, [categoryParam, availableCategories]);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of MOCK_PRODUCTS) {
      counts[p.category] = (counts[p.category] || 0) + 1;
    }
    return counts;
  }, []);

  // Filter and Sort states
  const [madeToOrderFilter, setMadeToOrderFilter] = useState<boolean | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  // Handle category change and sync to URL query cleanly
  const handleSelectCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    const newQuery = params.toString();
    router.replace(newQuery ? `${pathname}?${newQuery}` : pathname, { scroll: false });
  };

  const handleResetFilters = () => {
    setMadeToOrderFilter(null);
    setSortBy("featured");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("category");
    const newQuery = params.toString();
    router.replace(newQuery ? `${pathname}?${newQuery}` : pathname, { scroll: false });
  };

  // Derive filtered and sorted products without mutating MOCK_PRODUCTS
  const filteredAndSortedProducts = useMemo(() => {
    // 1. Filter
    const list = MOCK_PRODUCTS.filter((product) => {
      if (selectedCategory !== "all" && product.category !== selectedCategory) {
        return false;
      }
      if (madeToOrderFilter !== null && product.isMadeToOrder !== madeToOrderFilter) {
        return false;
      }
      return true;
    });

    // 2. Sort (copy array before sorting to avoid mutation)
    const sorted = [...list];
    switch (sortBy) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "featured":
      default:
        // Keep original curated order
        break;
    }

    return sorted;
  }, [selectedCategory, madeToOrderFilter, sortBy]);

  const hasActiveFilters = selectedCategory !== "all" || madeToOrderFilter !== null;

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header section */}
      <header className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium block">
          Italian Fabrics • Handcrafted Tailoring
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#313131] uppercase tracking-wide">
          Ready-To-Wear
        </h1>
        <p className="text-xs sm:text-sm text-gray-500 font-sans leading-relaxed">
          Explore our collection of meticulously tailored jackets, fine knitwear, and essential wardrobe foundations.
        </p>
        <div className="w-12 h-[1px] bg-[#484D40] mx-auto mt-4" />
      </header>

      {/* Filter and Sort Controls */}
      <section aria-label="Catalog Filters and Controls" className="space-y-6">
        <ShopFilters
          categories={availableCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
          categoryCounts={categoryCounts}
          madeToOrderFilter={madeToOrderFilter}
          onToggleMadeToOrder={setMadeToOrderFilter}
          hasActiveFilters={hasActiveFilters}
          onReset={handleResetFilters}
        />

        {/* Toolbar: Count & Sort */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-b border-gray-100 py-3">
          <div className="text-xs uppercase tracking-[0.2em] text-[#7C856E] font-medium">
            {filteredAndSortedProducts.length}{" "}
            {filteredAndSortedProducts.length === 1 ? "Product" : "Products"}
          </div>

          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end">
            <ShopSort value={sortBy} onChange={setSortBy} />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section aria-label="Product Catalog">
        <ProductGrid
          products={filteredAndSortedProducts}
          onResetFilters={handleResetFilters}
        />
      </section>
    </div>
  );
}
