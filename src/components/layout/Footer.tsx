"use client";

import Link from "next/link";
import { FOOTER_NAV_1, FOOTER_NAV_2 } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* 1. Giant MAYFAIR Banner - Matching Image 1 Top Section */}
      <div className="w-full text-center overflow-hidden bg-white pt-12 pb-0">
        <h2 className="font-serif text-7xl sm:text-9xl md:text-[130px] lg:text-[160px] text-[#444B3E] tracking-[0.18em] uppercase font-normal leading-none select-none inline-block px-2">
          MAYFAIR
        </h2>
      </div>

      {/* 2. Main Dark Olive Footer Block - Matching Image 1 */}
      <div className="bg-[#444B3E] text-[#FCFCFC] pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 text-xs">
          {/* Left Column: M Emblem & Studio Description (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            {/* High Precision M Emblem with Laurel Wreath */}
            <div className="flex flex-col items-start">
              <div className="flex flex-col items-center">
                <span className="font-serif text-4xl font-normal tracking-wider text-white">
                  M
                </span>
                <svg
                  width="48"
                  height="16"
                  viewBox="0 0 48 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white opacity-95 -mt-1"
                >
                  {/* Left Laurel Branch */}
                  <path
                    d="M6 13C12 7 18 4 24 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M8 11C6 8 5 6 4 3M12 9C10 6 9 4 8 1"
                    stroke="currentColor"
                    strokeWidth="0.9"
                  />
                  {/* Right Laurel Branch */}
                  <path
                    d="M42 13C36 7 30 4 24 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M40 11C42 8 43 6 44 3M36 9C38 6 39 4 40 1"
                    stroke="currentColor"
                    strokeWidth="0.9"
                  />
                  {/* Center Star / Leaf motif */}
                  <circle cx="24" cy="4" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>

            <p className="text-[#D3D9CC] text-xs leading-relaxed max-w-xs font-light tracking-wide pt-1">
              The Studio Mayfair is a Houston-based tailoring house, guided by the timeless artistry of Italian textiles and European craftsmanship.
            </p>
          </div>

          {/* Column 1 Links: HOME, LOOKBOOKS, TRUNKSHOWS, SHOP (2 Cols) */}
          <div className="md:col-span-2">
            <ul className="space-y-3.5 text-[11px] text-[#FCFCFC] tracking-[0.18em] uppercase font-medium">
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

          {/* Column 2 Links: ABOUT, APPOINTMENTS, PRESS, RETURN POLICY (2 Cols) */}
          <div className="md:col-span-2">
            <ul className="space-y-3.5 text-[11px] text-[#FCFCFC] tracking-[0.18em] uppercase font-medium">
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

          {/* Right Column: Join the List Form (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-3xl tracking-wide text-white font-normal leading-tight">
              Join <span className="italic font-serif normal-case">the</span> List
            </h4>
            <p className="text-xs text-[#D3D9CC] leading-relaxed font-light">
              Be the first to receive latest releases, trunk show dates, and moments from the world of Mayfair.
            </p>
            <form className="flex flex-col sm:flex-row gap-2.5 pt-1" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-[#394034] border border-[#5C6353] text-white px-4 py-2.5 text-xs placeholder-[#A5ADA0] focus:outline-none focus:border-white tracking-wide font-light"
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

        {/* 3. Sub-Footer Copyright Bar - Matching Image 1 Bottom */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pt-6 border-t border-[#5C6353] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#C2C9B6] tracking-[0.1em]">
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
