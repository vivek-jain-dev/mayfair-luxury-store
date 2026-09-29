"use client";

import { MOCK_PRODUCTS } from "@/lib/mockData";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";

export function FeaturedCollection() {
  const { addItem } = useCartStore();

  return (
    <section className="py-24 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium">
            Curated Wardrobe
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#313131] uppercase tracking-wide">
            Signature Essentials
          </h2>
          <div className="w-12 h-[1px] bg-[#484D40] mx-auto mt-4" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_PRODUCTS.map((product) => (
            <div key={product.id} className="group relative flex flex-col justify-between">
              {/* Product Image */}
              <div className="relative aspect-[3/4] w-full bg-[#F7F7F7] overflow-hidden mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.isMadeToOrder && (
                  <span className="absolute top-3 left-3 bg-[#484D40] text-white text-[10px] uppercase tracking-widest px-2 py-1 font-medium">
                    Made to Order
                  </span>
                )}
                {/* Quick Add Overlay */}
                <button
                  onClick={() => addItem(product, product.variants[0])}
                  className="absolute bottom-0 inset-x-0 bg-[#313131] text-white py-3 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium"
                >
                  Quick Add • {formatPrice(product.price)}
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-1 text-center">
                <h3 className="font-serif text-lg text-[#313131]">
                  <Link href={`/product/${product.slug}`} className="hover:underline">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-xs text-gray-500 font-sans">{product.tagline}</p>
                <p className="text-sm font-sans font-medium text-[#484D40] pt-1">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/shop"
            className="inline-block border border-[#484D40] text-[#484D40] px-10 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#484D40] hover:text-white transition-colors"
          >
            View Complete Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
