"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ShoppingBag } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [isAdded, setIsAdded] = useState(false);

  const defaultVariant = product.variants[0];

  const handleQuickAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!defaultVariant) return;

    addItem(product, defaultVariant);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  return (
    <article className="group relative flex flex-col justify-between bg-transparent">
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full bg-[#F7F7F7] overflow-hidden mb-4">
        <Link
          href={`/product/${product.slug}`}
          className="block w-full h-full"
          tabIndex={-1}
          aria-hidden="true"
        >
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {product.isMadeToOrder && (
            <span className="bg-[#484D40] text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-medium shadow-xs">
              Made to Order{product.leadTimeWeeks ? ` (${product.leadTimeWeeks}wks)` : ""}
            </span>
          )}
          {product.isBestSeller && !product.isMadeToOrder && (
            <span className="bg-[#313131] text-white text-[10px] uppercase tracking-widest px-2.5 py-1 font-medium shadow-xs">
              Signature
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <button
          type="button"
          onClick={handleQuickAdd}
          aria-label={`Quick add ${product.name} to shopping bag`}
          className={`absolute bottom-0 inset-x-0 py-3.5 px-4 text-xs uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center space-x-2 ${
            isAdded
              ? "bg-[#484D40] text-white opacity-100"
              : "bg-[#313131]/95 text-white hover:bg-[#1E1E1E] sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0"
          }`}
        >
          {isAdded ? (
            <>
              <Check size={14} className="stroke-[2.5]" />
              <span>Added to Bag</span>
            </>
          ) : (
            <>
              <ShoppingBag size={14} className="stroke-[2]" />
              <span>Quick Add • {formatPrice(product.price)}</span>
            </>
          )}
        </button>
      </div>

      {/* Product Information */}
      <div className="space-y-1.5 text-center">
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#7C856E] font-medium block">
          {product.category}
        </span>
        <h2 className="font-serif text-lg text-[#313131]">
          <Link
            href={`/product/${product.slug}`}
            className="hover:text-[#484D40] transition-colors focus:outline-hidden focus:underline"
          >
            {product.name}
          </Link>
        </h2>
        <p className="text-xs text-gray-500 font-sans line-clamp-1">
          {product.tagline}
        </p>
        <div className="pt-1 flex items-center justify-center space-x-2">
          <span className="text-sm font-sans font-medium text-[#484D40]">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
