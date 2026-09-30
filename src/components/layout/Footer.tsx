"use client";

import Link from "next/link";
import { FOOTER_NAV_1, FOOTER_NAV_2 } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#484D40] text-[#FCFCFC] pt-16 pb-10 border-t border-[#3B3F34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-xs">
        {/* Column 1: Brand Emblem & Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            {/* M Monogram Emblem with Laurel Motif */}
            <div className="w-10 h-10 rounded-full border border-white/40 flex flex-col items-center justify-center relative">
              <span className="font-serif text-lg font-normal leading-none tracking-widest text-white -mt-0.5">
                M
              </span>
              <svg
                width="16"
                height="6"
                viewBox="0 0 16 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-70 mt-0.5"
              >
                <path
                  d="M1 5C4 2 6 1 8 1C10 1 12 2 15 5"
                  stroke="currentColor"
                  strokeWidth="0.75"
                />
                <circle cx="8" cy="1" r="0.75" fill="currentColor" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-2xl tracking-[0.22em] uppercase text-[#FCFCFC] font-normal">
                MAYFAIR
              </h3>
              <p className="text-[9px] tracking-[0.28em] text-[#C2C9B6] uppercase font-sans font-medium">
                THE STUDIO MAYFAIR
              </p>
            </div>
          </div>
          <p className="text-[#D8DED0] text-xs leading-relaxed max-w-xs font-light tracking-wide">
            The Studio Mayfair is a Houston-based tailoring house, guided by the timeless artistry of Italian textiles and European craftsmanship.
          </p>
        </div>

        {/* Column 2: Navigation Links 1 */}
        <div className="space-y-3.5">
          <ul className="space-y-3 text-xs text-[#FCFCFC] tracking-[0.18em] uppercase font-medium">
            {FOOTER_NAV_1.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-[#C2C9B6] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Navigation Links 2 */}
        <div className="space-y-3.5">
          <ul className="space-y-3 text-xs text-[#FCFCFC] tracking-[0.18em] uppercase font-medium">
            {FOOTER_NAV_2.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-[#C2C9B6] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Join *the* List Newsletter */}
        <div className="space-y-4">
          <h4 className="text-sm font-serif tracking-wide text-white uppercase font-normal">
            JOIN <span className="italic font-serif normal-case text-base text-white font-normal">the</span> LIST
          </h4>
          <p className="text-xs text-[#D8DED0] leading-relaxed font-light">
            Be the first to receive latest releases, trunk show dates, and moments from the world of Mayfair.
          </p>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Email address"
              className="w-full bg-transparent border border-white/50 text-white px-4 py-2.5 text-xs placeholder-white/70 focus:outline-none focus:border-white tracking-wide font-light"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#F4F3F0] text-[#313131] py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors shadow-sm"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      {/* Sub-Footer Copyright Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pt-6 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#C2C9B6] tracking-[0.12em]">
        <p>© {new Date().getFullYear()} The Studio Mayfair. All rights reserved.</p>
        
        <div className="my-2 sm:my-0 text-center">
          <a
            href="https://www.emboldendesignstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Website by Embolden
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/thestudiomayfair/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors p-1"
            aria-label="Mayfair on Instagram"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
