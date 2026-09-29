"use client";

import { useCartStore } from "@/store/useCartStore";
import { X, Trash2, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, getTotalPrice } = useCartStore();

  if (!isOpen) return null;

  const totalPrice = getTotalPrice();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FCFCFC] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-[#E5E5E5] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag size={20} className="text-[#484D40]" />
              <h2 className="font-serif text-xl text-[#313131] uppercase tracking-wider">
                Your Shopping Bag ({items.length})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-2 text-gray-500 hover:text-black focus:outline-none"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <p className="text-gray-500 text-sm font-sans">Your shopping bag is currently empty.</p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="inline-block bg-[#484D40] text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-[#3B3F34] transition-colors"
                >
                  Explore Collection
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex space-x-4 border-b border-gray-100 pb-6">
                  <div className="relative w-20 h-24 bg-gray-100 flex-shrink-0">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-base text-[#313131]">{item.product.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{item.selectedVariant.name}</p>
                      {item.product.isMadeToOrder && (
                        <span className="inline-block text-[10px] bg-[#484D40]/10 text-[#484D40] px-2 py-0.5 mt-1 font-medium">
                          Made to Order ({item.product.leadTimeWeeks}wks)
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center border border-gray-300 text-xs">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-sans text-sm font-medium text-[#313131]">
                          {formatPrice(item.selectedVariant.price * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-600 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Bar */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#E5E5E5] bg-[#F7F7F7] space-y-4">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="uppercase text-xs tracking-wider text-gray-600">Subtotal</span>
                <span className="font-serif text-lg text-[#313131]">{formatPrice(totalPrice)}</span>
              </div>
              <p className="text-[11px] text-gray-500">
                Taxes and complimentary worldwide shipping calculated at checkout.
              </p>
              <button
                onClick={() => {
                  alert("Proceeding to Checkout process!");
                }}
                className="w-full bg-[#484D40] text-[#FCFCFC] py-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#3B3F34] transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
