"use client";

import { use } from "react";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";
import { useState } from "react";
import { Clock, ShieldCheck, Truck } from "lucide-react";

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const product = MOCK_PRODUCTS.find((p) => p.slug === resolvedParams.slug) || MOCK_PRODUCTS[0];

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { addItem } = useCartStore();

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Product Images Gallery */}
        <div className="space-y-4">
          <div className="aspect-[3/4] w-full bg-[#F7F7F7] overflow-hidden shadow-sm">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Details & Purchase Controls */}
        <div className="space-y-8">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium">
              Mayfair Tailoring • {product.category}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#313131] mt-1">{product.name}</h1>
            <p className="text-xl font-sans font-medium text-[#484D40] mt-3">
              {formatPrice(selectedVariant.price)}
            </p>
          </div>

          <p className="text-sm text-gray-600 leading-relaxed font-light">{product.description}</p>

          {/* Made to Order Info */}
          {product.isMadeToOrder && (
            <div className="bg-[#F7F7F7] p-4 border-l-2 border-[#484D40] flex items-center space-x-3 text-xs text-gray-700">
              <Clock size={18} className="text-[#484D40] flex-shrink-0" />
              <span>
                <strong>Made to Order:</strong> Crafting lead time is approximately{" "}
                <strong>{product.leadTimeWeeks} weeks</strong> from initial fitting verification.
              </span>
            </div>
          )}

          {/* Size / Variant Picker */}
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-widest text-gray-700 font-semibold">
              Select Size / Specifications
            </label>
            <div className="grid grid-cols-3 gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`py-3 px-4 text-xs font-medium border text-center transition-colors ${
                    selectedVariant.id === variant.id
                      ? "border-[#484D40] bg-[#484D40] text-white"
                      : "border-gray-300 text-[#313131] hover:border-gray-500"
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={() => addItem(product, selectedVariant)}
            className="w-full bg-[#484D40] text-[#FCFCFC] py-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#3B3F34] transition-colors"
          >
            Add to Shopping Bag • {formatPrice(selectedVariant.price)}
          </button>

          {/* Product Specifications Accordion / Cards */}
          <div className="border-t border-gray-200 pt-6 space-y-4 text-xs">
            <div>
              <h4 className="font-semibold uppercase tracking-wider text-gray-800">Fabric &amp; Composition</h4>
              <p className="text-gray-600 mt-1">{product.fabricInfo}</p>
            </div>
            <div>
              <h4 className="font-semibold uppercase tracking-wider text-gray-800">Garment Care</h4>
              <p className="text-gray-600 mt-1">{product.careInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
