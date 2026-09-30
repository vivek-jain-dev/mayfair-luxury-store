"use client";

import Link from "next/link";
import { FOOTER_NAV_1, FOOTER_NAV_2 } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#484D40] text-[#FCFCFC] pt-16 pb-12 border-t border-[#3B3F34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-xs">
        {/* Brand Column with Emblem */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center font-serif text-lg tracking-widest text-[#FCFCFC]">
              M
            </div>
            <div>
              <h3 className="font-serif text-2xl tracking-[0.2em] uppercase text-[#FCFCFC]">
                MAYFAIR
              </h3>
              <p className="text-[9px] tracking-[0.25em] text-[#B8C0AA] uppercase">
                THE STUDIO MAYFAIR
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-xs leading-relaxed max-w-xs font-light">
            The Studio Mayfair is a Houston-based tailoring house, guided by the timeless artistry of Italian textiles and European craftsmanship.
          </p>
        </div>

        {/* Column 1 Navigation */}
        <div className="space-y-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#B8C0AA]">
            EXPLORE
          </h4>
          <ul className="space-y-2.5 text-xs text-[#FCFCFC] tracking-[0.1em]">
            {FOOTER_NAV_1.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-[#B8C0AA] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2 Client Services */}
        <div className="space-y-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#B8C0AA]">
            ATELIER SERVICES
          </h4>
          <ul className="space-y-2.5 text-xs text-[#FCFCFC] tracking-[0.1em]">
            {FOOTER_NAV_2.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-[#B8C0AA] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Join *the* List Newsletter */}
        <div className="space-y-4">
          <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#B8C0AA]">
            JOIN <span className="italic font-serif normal-case text-sm text-white font-normal">the</span> LIST
          </h4>
          <p className="text-xs text-gray-300 leading-relaxed font-light">
            Be the first to receive latest releases, trunk show dates, and moments from the world of Mayfair.
          </p>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-white text-[#313131] px-4 py-2.5 text-xs placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white border-0 font-sans"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#FCFCFC] text-[#313131] py-2.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gray-200 transition-colors"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-[#5C6353] flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-300 tracking-[0.1em]">
        <p>© {new Date().getFullYear()} The Studio Mayfair. All rights reserved.</p>
        <div className="flex items-center space-x-6 mt-4 sm:mt-0">
          <Link href="/return-policy" className="hover:text-white transition-colors">
            Terms &amp; Privacy
          </Link>
          <Link href="/return-policy" className="hover:text-white transition-colors">
            Shipping &amp; Returns
          </Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram @thestudiomayfair
          </a>
        </div>
      </div>
    </footer>
  );
}
