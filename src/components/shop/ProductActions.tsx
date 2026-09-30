"use client";

import { useState } from "react";
import { Check, ShoppingBag, Minus, Plus } from "lucide-react";
import { Product, ProductVariant } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    if (!selectedVariant || !selectedVariant.inStock) return;

    addItem(product, selectedVariant, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="space-y-6 pt-2">
      {/* Price Display that reflects the selected variant */}
      <div className="flex items-baseline space-x-3">
        <span className="text-2xl sm:text-3xl font-sans font-medium text-[#484D40]">
          {formatPrice(selectedVariant.price)}
        </span>
        {product.originalPrice && product.originalPrice > selectedVariant.price && (
          <span className="text-base text-gray-400 line-through">
            {formatPrice(product.originalPrice)}
          </span>
        )}
      </div>

      {/* Selected Color & Size Info */}
      <div className="flex items-center justify-between text-xs text-gray-600 border-t border-b border-gray-100 py-2.5">
        <span>
          Color: <strong className="text-[#313131] font-medium">{selectedVariant.color}</strong>
        </span>
        <span>
          Selected Size: <strong className="text-[#313131] font-medium">{selectedVariant.size}</strong>
        </span>
        <span>
          Status:{" "}
          <strong className={selectedVariant.inStock ? "text-emerald-700 font-medium" : "text-rose-700 font-medium"}>
            {selectedVariant.inStock ? "Available" : "Sold Out"}
          </strong>
        </span>
      </div>

      {/* Variant Selector */}
      {product.variants.length > 0 && (
        <fieldset className="space-y-3">
          <legend className="text-xs uppercase tracking-widest text-[#313131] font-semibold">
            Select Size / Specification
          </legend>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {product.variants.map((variant) => {
              const isSelected = selectedVariant.id === variant.id;
              const isAvailable = variant.inStock;

              return (
                <button
                  key={variant.id}
                  type="button"
                  disabled={!isAvailable}
                  onClick={() => setSelectedVariant(variant)}
                  aria-pressed={isSelected}
                  className={`py-3 px-3 text-xs font-medium border text-center transition-all cursor-pointer relative ${
                    isSelected
                      ? "border-[#484D40] bg-[#484D40] text-white shadow-xs"
                      : isAvailable
                      ? "border-gray-200 bg-[#FCFCFC] text-[#313131] hover:border-gray-400"
                      : "border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed line-through"
                  }`}
                >
                  <span className="block truncate">{variant.name}</span>
                  {variant.price !== product.price && (
                    <span className={`block text-[10px] mt-0.5 ${isSelected ? "text-white/80" : "text-[#7C856E]"}`}>
                      {formatPrice(variant.price)}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      {/* Quantity & Add to Cart Controls */}
      <div className="space-y-3 pt-2">
        <div className="flex items-stretch gap-3">
          {/* Quantity Stepper */}
          <div className="flex items-center border border-gray-300 bg-[#FCFCFC] text-xs font-medium">
            <button
              type="button"
              onClick={handleDecreaseQuantity}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
              className="px-3.5 py-4 text-gray-600 hover:text-black hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <Minus size={14} />
            </button>
            <span className="px-4 py-4 min-w-[3rem] text-center font-semibold text-[#313131]">
              {quantity}
            </span>
            <button
              type="button"
              onClick={handleIncreaseQuantity}
              aria-label="Increase quantity"
              className="px-3.5 py-4 text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>

          {/* Add to Bag Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!selectedVariant.inStock}
            className={`flex-1 py-4 px-6 text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow-xs ${
              !selectedVariant.inStock
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : isAdded
                ? "bg-[#3B3F34] text-white"
                : "bg-[#484D40] text-[#FCFCFC] hover:bg-[#3B3F34]"
            }`}
          >
            {isAdded ? (
              <>
                <Check size={16} className="stroke-[2.5]" />
                <span>Added to Bag</span>
              </>
            ) : !selectedVariant.inStock ? (
              <span>Sold Out</span>
            ) : (
              <>
                <ShoppingBag size={16} className="stroke-[2]" />
                <span>
                  Add to Shopping Bag • {formatPrice(selectedVariant.price * quantity)}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
