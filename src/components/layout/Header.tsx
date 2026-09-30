"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { NAV_LINKS_LEFT, NAV_LINKS_RIGHT, LOGO_TEXT } from "@/lib/constants";
import { useCartStore } from "@/store/useCartStore";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toggleCart, getTotalItems } = useCartStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = mounted ? getTotalItems() : 0;

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`;
      setSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCFCFC] border-b border-[#E8E8E8] text-[#313131]">
      {/* Top Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Navigation Items */}
        <nav className="hidden lg:flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium text-[#313131]">
          {NAV_LINKS_LEFT.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative py-2"
                onMouseEnter={() => setShopDropdownOpen(true)}
                onMouseLeave={() => setShopDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className="hover:text-gray-600 transition-colors flex items-center gap-1 py-1"
                >
                  {link.label}
                  <ChevronDown size={13} className="text-[#313131]" />
                </Link>

                {/* Dropdown Menu */}
                {shopDropdownOpen && (
                  <div className="absolute left-0 top-full w-56 bg-white border border-[#E8E8E8] shadow-lg py-3 z-50 text-[11px] tracking-[0.15em] font-medium uppercase space-y-1">
                    <Link
                      href="/shop"
                      className="block px-4 py-2 hover:bg-[#F7F7F7] hover:text-[#7C856E] transition-colors"
                    >
                      All Collections
                    </Link>
                    <Link
                      href="/shop?category=blazers"
                      className="block px-4 py-2 hover:bg-[#F7F7F7] hover:text-[#7C856E] transition-colors"
                    >
                      Tailored Suits &amp; Jackets
                    </Link>
                    <Link
                      href="/shop?category=knits"
                      className="block px-4 py-2 hover:bg-[#F7F7F7] hover:text-[#7C856E] transition-colors"
                    >
                      Cashmere &amp; Silk Knits
                    </Link>
                    <Link
                      href="/shop?category=shirts"
                      className="block px-4 py-2 hover:bg-[#F7F7F7] hover:text-[#7C856E] transition-colors"
                    >
                      Bespoke Shirts &amp; Outerwear
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-600 transition-colors py-2"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Center Logo - Crisp Serif MAYFAIR */}
        <Link href="/" className="text-center group">
          <span className="font-serif text-3xl sm:text-4xl tracking-[0.32em] text-[#1A1A1A] font-normal uppercase transition-opacity hover:opacity-80">
            {LOGO_TEXT}
          </span>
        </Link>

        {/* Right Navigation & Circular Cart Counter */}
        <div className="flex items-center space-x-8 text-[11px] uppercase tracking-[0.2em] font-medium text-[#313131]">
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS_RIGHT.map((link) =>
              link.isSearch ? (
                <button
                  key="search"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="hover:text-gray-600 transition-colors py-2 uppercase focus:outline-none"
                >
                  SEARCH
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-gray-600 transition-colors py-2"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Thin Circle Cart Badge Icon - Matching Screenshot */}
          <button
            onClick={toggleCart}
            aria-label="Shopping Bag"
            className="w-8 h-8 rounded-full border border-[#767676] hover:border-[#313131] transition-colors flex items-center justify-center text-[12px] font-light text-[#313131] focus:outline-none"
          >
            {totalItems}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1 text-[#313131] hover:text-gray-600 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Quick Search Drawer */}
      {searchOpen && (
        <div className="bg-[#FFFFFF] border-b border-[#E8E8E8] px-4 py-4">
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-3xl mx-auto flex items-center border-b border-[#313131] pb-2"
          >
            <input
              type="text"
              placeholder="Search products, lookbooks, bespoke suits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm sm:text-base text-[#313131] placeholder-gray-400 focus:outline-none font-serif tracking-wide"
              autoFocus
            />
            <button
              type="submit"
              className="p-2 text-[#313131] hover:text-gray-600 transition-colors"
              aria-label="Submit Search"
            >
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="p-2 text-[#313131] hover:text-gray-600 transition-colors ml-2"
              aria-label="Close Search"
            >
              <X size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFCFC] border-b border-[#E5E5E5] px-6 py-6 space-y-4 text-xs uppercase tracking-[0.2em] font-medium text-[#313131]">
          <Link
            href="/bespoke"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-gray-600"
          >
            APPOINTMENTS
          </Link>
          <Link
            href="/lookbook"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-gray-600"
          >
            LOOKBOOKS
          </Link>
          <Link
            href="/trunkshows"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-gray-600"
          >
            TRUNKSHOWS
          </Link>
          <Link
            href="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-gray-600"
          >
            SHOP READY-TO-WEAR
          </Link>
          <Link
            href="/story"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-gray-600"
          >
            ABOUT MAYFAIR
          </Link>
          <Link
            href="/account"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-gray-600"
          >
            CLIENT LOGIN / ACCOUNT
          </Link>
          <Link
            href="/press"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-gray-600"
          >
            PRESS &amp; MEDIA
          </Link>
          <Link
            href="/return-policy"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-gray-600"
          >
            SHIPPING &amp; RETURN POLICY
          </Link>
        </div>
      )}
    </header>
  );
}
