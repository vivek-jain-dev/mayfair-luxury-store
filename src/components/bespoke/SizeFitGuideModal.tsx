"use client";

import { useEffect, useRef } from "react";
import { X, Ruler } from "lucide-react";

interface SizeFitGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SizeFitGuideModal({ isOpen, onClose }: SizeFitGuideModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
          return;
        }

        if (e.key === "Tab" && modalRef.current) {
          const focusables = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length === 0) return;

          const firstEl = focusables[0];
          const lastEl = focusables[focusables.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstEl) {
              e.preventDefault();
              lastEl.focus();
            }
          } else {
            if (document.activeElement === lastEl) {
              e.preventDefault();
              firstEl.focus();
            }
          }
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="size-fit-guide-title"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FCFCFC] border border-[#E5E5E5] text-[#313131] w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl focus:outline-none"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E5E5E5] bg-[#F7F7F7]">
          <div className="flex items-center space-x-2">
            <Ruler className="text-[#484D40]" size={20} />
            <h2 id="size-fit-guide-title" className="font-serif text-xl uppercase tracking-wide text-[#313131]">
              Atelier Measurement Guide
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-[#313131] transition-colors focus:outline-none focus:ring-2 focus:ring-[#484D40]"
            aria-label="Close Size & Fit Guide"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-8 text-xs text-gray-700">
          {/* Practical Measuring Instructions */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium">
              Body Measurement Instructions
            </h3>
            <p className="text-gray-600 text-[11px] leading-relaxed">
              Use a flexible cloth measuring tape and keep it flat against the body without pulling tight.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#F7F7F7] p-3.5 border border-gray-200">
                <span className="font-semibold uppercase tracking-wider block text-[#313131] mb-1">
                  1. Chest
                </span>
                <p className="text-gray-600">
                  Measure around the fullest part of your chest, keeping the tape level under arms and across shoulder blades.
                </p>
              </div>
              <div className="bg-[#F7F7F7] p-3.5 border border-gray-200">
                <span className="font-semibold uppercase tracking-wider block text-[#313131] mb-1">
                  2. Natural Waist
                </span>
                <p className="text-gray-600">
                  Measure around your natural waistline where your trousers comfortably sit, keeping one finger between tape and body.
                </p>
              </div>
              <div className="bg-[#F7F7F7] p-3.5 border border-gray-200">
                <span className="font-semibold uppercase tracking-wider block text-[#313131] mb-1">
                  3. Hips
                </span>
                <p className="text-gray-600">
                  Stand with heels together and measure around the fullest part of your hip and seat area.
                </p>
              </div>
              <div className="bg-[#F7F7F7] p-3.5 border border-gray-200">
                <span className="font-semibold uppercase tracking-wider block text-[#313131] mb-1">
                  4. Sleeve Length
                </span>
                <p className="text-gray-600">
                  Measure from the center back of your neck, across the tip of the shoulder, down to your wrist bone.
                </p>
              </div>
              <div className="bg-[#F7F7F7] p-3.5 border border-gray-200 sm:col-span-2">
                <span className="font-semibold uppercase tracking-wider block text-[#313131] mb-1">
                  5. Trouser Inseam
                </span>
                <p className="text-gray-600">
                  Measure along the inside seam of a well-fitting trouser from the crotch down to the top of your shoe break.
                </p>
              </div>
            </div>
          </div>

          {/* Catalogue Variant Reference */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium">
              Catalogue Size Labels Reference
            </h3>
            <p className="text-gray-600 text-[11px] leading-relaxed">
              Standard size options available across our ready-to-wear and made-to-order garments (sourced from catalogue product metadata in <code className="text-[10px] bg-gray-100 px-1 py-0.5">src/lib/mockData.ts</code>):
            </p>
            <div className="bg-[#F7F7F7] border border-[#E5E5E5] p-4 space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1 border-b border-gray-200">
                <span className="font-medium text-[#313131]">Tailored Blazers &amp; Outerwear</span>
                <span className="text-gray-600 font-mono text-[11px]">EU 48 (US 38) • EU 50 (US 40) • EU 52 (US 42)</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-1">
                <span className="font-medium text-[#313131]">Silk &amp; Cashmere Knitwear</span>
                <span className="text-gray-600 font-mono text-[11px]">Small (S) • Medium (M) • Large (L)</span>
              </div>
            </div>
          </div>

          {/* Master Tailor Note */}
          <div className="bg-[#484D40]/10 p-4 border-l-2 border-[#484D40] text-gray-800 space-y-1">
            <span className="font-semibold block uppercase tracking-wider text-[11px] text-[#484D40]">
              Bespoke Fitting Privilege
            </span>
            <p className="text-[11px] text-gray-700 leading-relaxed">
              During your private fitting consultation, our master tailor records over 25 precise individual measurements to construct a unique pattern tailored to your exact posture and proportions.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#E5E5E5] bg-[#F7F7F7] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#484D40] text-[#FCFCFC] px-6 py-2.5 text-xs uppercase tracking-widest font-semibold hover:bg-[#3B3F34] transition-colors focus:outline-none focus:ring-2 focus:ring-[#484D40]"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
}
