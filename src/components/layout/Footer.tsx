"use client";

import Link from "next/link";
import { FOOTER_NAV_1, FOOTER_NAV_2 } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full">
      {/* Massive Top MAYFAIR Brand Title Banner - Matching Image 1 */}
      <div className="bg-[#FFFFFF] border-t border-[#E8E8E8] pt-10 pb-6 overflow-hidden text-center select-none">
        <h2 className="font-serif text-6xl sm:text-8xl md:text-9xl text-[#444B3E] tracking-[0.2em] uppercase font-normal leading-none inline-block whitespace-nowrap px-4">
          MAYFAIR
        </h2>
      </div>

      {/* Main Dark Olive Footer Block - Matching Image 1 */}
      <div className="bg-[#444B3E] text-[#FCFCFC] pt-14 pb-10 border-t border-[#3A4034]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 text-xs">
          {/* Left Column: M Emblem & Mission Statement (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            {/* Emblem Artwork: M with leafy branches underneath */}
            <div className="flex flex-col items-start">
              <div className="relative inline-flex flex-col items-center">
                <span className="font-serif text-3xl font-normal tracking-wider text-white">
                  M
                </span>
                <svg
                  width="42"
                  height="14"
                  viewBox="0 0 42 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="opacity-90 -mt-1"
                >
                  <path
                    d="M2 10C8 4 14 2 21 2C28 2 34 4 40 10"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                  <path
                    d="M6 12C9 9 12 7 15 7M27 7C30 7 33 9 36 12"
                    stroke="currentColor"
                    strokeWidth="0.8"
                  />
                  <circle cx="21" cy="2" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>

            <p className="text-[#D3D9CC] text-xs leading-relaxed max-w-xs font-light tracking-wide pt-1">
              The Studio Mayfair is a Houston-based tailoring house, guided by the timeless artistry of Italian textiles and European craftsmanship.
            </p>
          </div>

          {/* Middle Column 1 Navigation (2 Cols) */}
          <div className="md:col-span-2">
            <ul className="space-y-3 text-[11px] text-[#FCFCFC] tracking-[0.18em] uppercase font-medium">
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

          {/* Middle Column 2 Client Services (2 Cols) */}
          <div className="md:col-span-2">
            <ul className="space-y-3 text-[11px] text-[#FCFCFC] tracking-[0.18em] uppercase font-medium">
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

          {/* Right Column: Join *the* List Newsletter Form (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xl font-serif tracking-wide text-white uppercase font-normal">
              Join <span className="italic font-serif normal-case text-2xl text-white font-normal">the</span> List
            </h4>
            <p className="text-xs text-[#D3D9CC] leading-relaxed font-light">
              Be the first to receive latest releases, trunk show dates, and moments from the world of Mayfair.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 pt-1" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-[#394034] border border-[#5B6354] text-white px-3.5 py-2.5 text-xs placeholder-gray-300 focus:outline-none focus:border-white tracking-wide font-light"
                required
              />
              <button
                type="submit"
                className="bg-white text-[#313131] px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gray-100 transition-colors shrink-0"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Sub-Footer Copyright Bar - Matching Image 1 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pt-6 border-t border-[#5B6354] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#C2C9B6] tracking-[0.1em]">
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
                strokeWidth="1.75"
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
      </div>
    </footer>
  );
}
