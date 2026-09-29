"use client";

import Link from "next/link";
import { BRAND_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#484D40] text-[#FCFCFC] py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        {/* Brand Column */}
        <div className="space-y-4">
          <h3 className="font-serif text-2xl tracking-wider uppercase">{BRAND_NAME}</h3>
          <p className="text-gray-300 text-xs leading-relaxed">
            A bespoke tailoring house guided by the timeless artistry of Italian textiles and European craftsmanship.
          </p>
          <p className="text-xs text-gray-400">Houston • London • Worldwide</p>
        </div>

        {/* Collections Links */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-200">Collections</h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><Link href="/shop?category=blazers" className="hover:text-white transition-colors">Tailored Blazers</Link></li>
            <li><Link href="/shop?category=knits" className="hover:text-white transition-colors">Silk & Cashmere Knits</Link></li>
            <li><Link href="/shop?category=shirts" className="hover:text-white transition-colors">Bespoke Shirts</Link></li>
            <li><Link href="/lookbook" className="hover:text-white transition-colors">Seasonal Lookbook</Link></li>
          </ul>
        </div>

        {/* Bespoke Client Services */}
        <div className="space-y-3">
          <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-200">Bespoke Services</h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li><Link href="/bespoke" className="hover:text-white transition-colors">Private Fittings</Link></li>
            <li><Link href="/bespoke" className="hover:text-white transition-colors">Made-to-Order Process</Link></li>
            <li><Link href="/story" className="hover:text-white transition-colors">Our Heritage</Link></li>
            <li><Link href="/bespoke" className="hover:text-white transition-colors">Hotel Partner Privileges</Link></li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-semibold text-gray-200">Private Journal</h4>
          <p className="text-xs text-gray-300">
            Subscribe for exclusive trunk show invitations and private release previews.
          </p>
          <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-[#3B3F34] border border-[#5C6353] px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
            <button
              type="submit"
              className="w-full bg-[#FCFCFC] text-[#313131] py-2 text-xs uppercase tracking-widest font-medium hover:bg-gray-200 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#5C6353] text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved. Crafted for excellence.</p>
      </div>
    </footer>
  );
}
