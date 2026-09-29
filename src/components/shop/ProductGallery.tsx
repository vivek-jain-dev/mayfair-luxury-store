"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
  isMadeToOrder?: boolean;
  leadTimeWeeks?: number;
}

export function ProductGallery({
  images,
  productName,
  isMadeToOrder,
  leadTimeWeeks,
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeImage = images[selectedIndex] || images[0];

  return (
    <div className="space-y-4">
      {/* Main Image View */}
      <div className="relative aspect-[3/4] w-full bg-[#F7F7F7] overflow-hidden shadow-xs">
        <img
          src={activeImage}
          alt={`${productName} - View ${selectedIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500 ease-out"
          priority-marker="true"
        />

        {isMadeToOrder && (
          <span className="absolute top-4 left-4 bg-[#484D40] text-white text-[10px] uppercase tracking-widest px-3 py-1 font-medium shadow-xs">
            Made to Order{leadTimeWeeks ? ` (${leadTimeWeeks}wks)` : ""}
          </span>
        )}
      </div>

      {/* Image Thumbnails Gallery */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => {
            const isSelected = selectedIndex === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                aria-label={`View image ${idx + 1} of ${productName}`}
                className={`relative w-20 h-24 flex-shrink-0 bg-[#F7F7F7] overflow-hidden border-2 transition-all cursor-pointer ${
                  isSelected
                    ? "border-[#484D40] ring-1 ring-[#484D40]"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
