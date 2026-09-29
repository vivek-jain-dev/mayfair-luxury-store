"use client";

import { MOCK_PRODUCTS } from "@/lib/mockData";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { useState } from "react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { addItem } = useCartStore();

  const filteredProducts = selectedCategory === "all"
    ? MOCK_PRODUCTS
    : MOCK_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <h1 className="font-serif text-4xl sm:text-5xl text-[#313131] uppercase tracking-wide">
          The Ready-To-Wear Collection
        </h1>
        <p className="text-xs uppercase tracking-[0.25em] text-[#7C856E]">
          Italian Fabrics • Handcrafted Tailoring
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex justify-center space-x-6 mb-12 border-b border-gray-200 pb-4 text-xs uppercase tracking-widest font-medium">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`pb-2 ${selectedCategory === "all" ? "border-b-2 border-[#484D40] text-[#313131]" : "text-gray-400 hover:text-[#313131]"}`}
        >
          All Pieces ({MOCK_PRODUCTS.length})
        </button>
        <button
          onClick={() => setSelectedCategory("blazers")}
          className={`pb-2 ${selectedCategory === "blazers" ? "border-b-2 border-[#484D40] text-[#313131]" : "text-gray-400 hover:text-[#313131]"}`}
        >
          Blazers &amp; Jackets
        </button>
        <button
          onClick={() => setSelectedCategory("knits")}
          className={`pb-2 ${selectedCategory === "knits" ? "border-b-2 border-[#484D40] text-[#313131]" : "text-gray-400 hover:text-[#313131]"}`}
        >
          Fine Knits
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <div key={product.id} className="group relative flex flex-col justify-between">
            <div className="relative aspect-[3/4] w-full bg-[#F7F7F7] overflow-hidden mb-4">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {product.isMadeToOrder && (
                <span className="absolute top-3 left-3 bg-[#484D40] text-white text-[10px] uppercase tracking-widest px-2 py-1 font-medium">
                  Made to Order ({product.leadTimeWeeks}wks)
                </span>
              )}
              <button
                onClick={() => addItem(product, product.variants[0])}
                className="absolute bottom-0 inset-x-0 bg-[#313131] text-white py-3 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium"
              >
                Quick Add • {formatPrice(product.price)}
              </button>
            </div>

            <div className="space-y-1 text-center">
              <h2 className="font-serif text-xl text-[#313131]">
                <Link href={`/product/${product.slug}`} className="hover:underline">
                  {product.name}
                </Link>
              </h2>
              <p className="text-xs text-gray-500">{product.tagline}</p>
              <p className="text-sm font-sans font-medium text-[#484D40] pt-1">
                {formatPrice(product.price)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
