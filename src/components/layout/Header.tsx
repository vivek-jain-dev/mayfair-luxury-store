"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
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
    <header className="sticky top-0 z-40 bg-[#FCFCFC]/95 backdrop-blur-md border-b border-[#E8E8E8] text-[#313131]">
      {/* Announcement Bar */}
      <div className="bg-[#484D40] text-[#FCFCFC] text-[11px] py-2 text-center tracking-[0.2em] uppercase font-medium">
        COMPLIMENTARY SHIPPING &amp; FITTING CONSULTATIONS WORLDWIDE
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        {/* Left Navigation (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-7 text-[12px] uppercase tracking-[0.18em] font-medium text-[#313131]">
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
                  className="hover:text-[#7C856E] transition-colors flex items-center gap-1.5 py-1"
                >
                  {link.label}
                  <ChevronDown size={14} className="text-[#313131]" />
                </Link>

                {/* Dropdown Menu */}
                {shopDropdownOpen && (
                  <div className="absolute left-0 top-full w-56 bg-white border border-[#E8E8E8] shadow-xl py-3 z-50 text-[11px] tracking-[0.15em] font-medium uppercase space-y-1">
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
                className="hover:text-[#7C856E] transition-colors py-2 border-b border-transparent hover:border-[#7C856E]"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Center Brand Logo */}
        <Link href="/" className="text-center group flex flex-col items-center">
          <span className="font-serif text-3xl sm:text-4xl tracking-[0.22em] text-[#313131] group-hover:opacity-85 transition-opacity font-normal uppercase">
            {LOGO_TEXT}
          </span>
          <span className="block text-[9px] tracking-[0.3em] text-[#7C856E] uppercase font-sans mt-0.5 font-medium">
            HOUSTON • MAYFAIR
          </span>
        </Link>

        {/* Right Navigation & Utility Actions */}
        <div className="flex items-center space-x-6 text-[12px] uppercase tracking-[0.18em] font-medium text-[#313131]">
          <nav className="hidden lg:flex items-center space-x-7">
            {NAV_LINKS_RIGHT.map((link) =>
              link.isSearch ? (
                <button
                  key="search"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="hover:text-[#7C856E] transition-colors py-2 uppercase focus:outline-none flex items-center gap-1.5"
                >
                  <Search size={14} className="text-[#313131]" />
                  <span>SEARCH</span>
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#7C856E] transition-colors py-2 border-b border-transparent hover:border-[#7C856E]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Cart Icon / Counter */}
          <button
            onClick={toggleCart}
            className="hover:text-[#7C856E] transition-colors py-2 font-medium tracking-[0.15em] focus:outline-none text-[12px] flex items-center gap-1"
            aria-label="Shopping Cart"
          >
            <span>CART</span>
            <span className="text-[11px] font-normal text-[#313131] ml-0.5">
              ({totalItems})
            </span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#313131] hover:text-[#7C856E] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Slide-Down Quick Search Overlay */}
      {searchOpen && (
        <div className="bg-[#FFFFFF] border-b border-[#E8E8E8] px-4 py-4 transition-all duration-300">
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
              className="p-2 text-[#313131] hover:text-[#7C856E] transition-colors"
              aria-label="Submit Search"
            >
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="p-2 text-[#313131] hover:text-[#7C856E] transition-colors ml-2"
              aria-label="Close Search"
            >
              <X size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFCFC] border-b border-[#E5E5E5] px-6 py-6 space-y-4 text-xs uppercase tracking-[0.2em] font-medium text-[#313131]">
          <Link
            href="/bespoke"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-[#7C856E]"
          >
            APPOINTMENTS
          </Link>
          <Link
            href="/lookbook"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-[#7C856E]"
          >
            LOOKBOOKS
          </Link>
          <Link
            href="/trunkshows"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-[#7C856E]"
          >
            TRUNKSHOWS
          </Link>
          <Link
            href="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-[#7C856E]"
          >
            SHOP READY-TO-WEAR
          </Link>
          <Link
            href="/story"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-[#7C856E]"
          >
            ABOUT MAYFAIR
          </Link>
          <Link
            href="/account"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-[#7C856E]"
          >
            CLIENT LOGIN / ACCOUNT
          </Link>
          <Link
            href="/press"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-gray-100 hover:text-[#7C856E]"
          >
            PRESS &amp; MEDIA
          </Link>
          <Link
            href="/return-policy"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-[#7C856E]"
          >
            SHIPPING &amp; RETURN POLICY
          </Link>
        </div>
      )}
    </header>
  );
}
