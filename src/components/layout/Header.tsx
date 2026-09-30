"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { NAV_LINKS, BRAND_NAME } from "@/lib/constants";
import { useCartStore } from "@/store/useCartStore";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toggleCart, getTotalItems } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = mounted ? getTotalItems() : 0;

  return (
    <header className="sticky top-0 z-40 bg-[#FCFCFC]/95 backdrop-blur-md border-b border-[#E5E5E5] text-[#313131]">
      {/* Top Announcement Bar */}
      <div className="bg-[#484D40] text-[#FCFCFC] text-xs py-2 text-center tracking-widest uppercase font-medium">
        Complimentary Shipping & Fitting Consultations Worldwide
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#313131] hover:text-[#484D40] focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-xs uppercase tracking-widest font-medium">
          {NAV_LINKS.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#484D40] transition-colors py-1 border-b-2 border-transparent hover:border-[#484D40]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Brand Logo */}
        <Link href="/" className="text-center group">
          <span className="font-serif text-2xl sm:text-3xl tracking-widest text-[#313131] group-hover:opacity-80 transition-opacity uppercase font-normal">
            {BRAND_NAME}
          </span>
          <span className="block text-[10px] tracking-[0.25em] text-[#7C856E] uppercase font-sans -mt-1">
            Houston • Mayfair
          </span>
        </Link>

        {/* Right Navigation & Actions */}
        <div className="flex items-center space-x-6">
          <nav className="hidden lg:flex space-x-8 text-xs uppercase tracking-widest font-medium">
            {NAV_LINKS.slice(3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#484D40] transition-colors py-1 border-b-2 border-transparent hover:border-[#484D40]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Cart Icon Toggle */}
          <button
            onClick={toggleCart}
            className="relative p-2 text-[#313131] hover:text-[#484D40] transition-colors focus:outline-none"
            aria-label="Open Shopping Bag"
          >
            <ShoppingBag size={22} />
            {mounted && totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-[#484D40] text-[#FCFCFC] text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFCFC] border-b border-[#E5E5E5] px-6 py-6 space-y-4 text-sm uppercase tracking-widest">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#313131] hover:text-[#484D40] border-b border-gray-100"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
