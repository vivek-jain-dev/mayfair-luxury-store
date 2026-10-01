"use client";

import { MOCK_PRODUCTS } from "@/lib/mockData";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";

export function FeaturedCollection() {
  const { addItem } = useCartStore();

  return (
    <section className="py-24 sm:py-32 bg-[#FCFCFC] border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#7C856E] font-medium">
              CURATED ATELIER WARDROBE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] uppercase tracking-wide font-normal">
              Ready-to-Wear <span className="italic font-serif normal-case font-light">Collection</span>
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-block border border-[#313131] text-[#313131] hover:bg-[#40463C] hover:text-white hover:border-[#40463C] px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 self-start md:self-auto"
          >
            SHOP ALL COLLECTION
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {MOCK_PRODUCTS.slice(0, 4).map((product) => (
            <div key={product.id} className="group relative flex flex-col justify-between">
              {/* Product Image */}
              <div className="relative aspect-[3/4] w-full bg-[#F5F5F3] overflow-hidden mb-5">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {product.isMadeToOrder && (
                  <span className="absolute top-3 left-3 bg-[#40463C] text-white text-[10px] uppercase tracking-[0.2em] px-2.5 py-1 font-medium">
                    BESPOKE READY
                  </span>
                )}
                {/* Quick Add Overlay */}
                <button
                  onClick={() => addItem(product, product.variants[0])}
                  className="absolute bottom-0 inset-x-0 bg-[#313131] text-white py-3.5 text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium"
                >
                  QUICK ADD &bull; {formatPrice(product.price)}
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-1.5 text-left">
                <h3 className="font-serif text-lg text-[#1A1A1A] font-normal leading-snug">
                  <Link href={`/product/${product.slug}`} className="hover:text-[#7C856E] transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-xs text-gray-500 font-sans tracking-wide">{product.tagline}</p>
                <p className="text-xs font-sans tracking-widest font-medium text-[#40463C] pt-1">
                  {formatPrice(product.price)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

