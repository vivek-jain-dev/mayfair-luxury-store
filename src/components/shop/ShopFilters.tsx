"use client";

import { X } from "lucide-react";

interface ShopFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categoryCounts: Record<string, number>;
  madeToOrderFilter: boolean | null;
  onToggleMadeToOrder: (val: boolean | null) => void;
  hasActiveFilters: boolean;
  onReset: () => void;
}

const CATEGORY_LABELS: Record<string, string> = {
  all: "All Pieces",
  blazers: "Blazers & Jackets",
  knits: "Fine Knits",
  shirts: "Shirts",
  trousers: "Trousers",
  accessories: "Accessories",
};

export function ShopFilters({
  categories,
  selectedCategory,
  onSelectCategory,
  categoryCounts,
  madeToOrderFilter,
  onToggleMadeToOrder,
  hasActiveFilters,
  onReset,
}: ShopFiltersProps) {
  const allCount = Object.values(categoryCounts).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-4">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 border-b border-gray-200 pb-4 text-xs uppercase tracking-widest font-medium">
        <button
          type="button"
          onClick={() => onSelectCategory("all")}
          className={`pb-2 transition-all relative ${
            selectedCategory === "all"
              ? "text-[#313131] border-b-2 border-[#484D40] font-semibold"
              : "text-gray-400 hover:text-[#313131]"
          }`}
        >
          All Pieces
          <span className="ml-1.5 text-[10px] text-gray-400 font-normal">
            ({allCount})
          </span>
        </button>

        {categories.map((category) => {
          const count = categoryCounts[category] || 0;
          const label = CATEGORY_LABELS[category] || category;
          const isSelected = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelectCategory(category)}
              className={`pb-2 transition-all relative ${
                isSelected
                  ? "text-[#313131] border-b-2 border-[#484D40] font-semibold"
                  : "text-gray-400 hover:text-[#313131]"
              }`}
            >
              {label}
              <span className="ml-1.5 text-[10px] text-gray-400 font-normal">
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Secondary filter & active reset bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs pt-1">
        {/* Availability Toggle */}
        <div className="flex items-center space-x-2">
          <span className="text-[11px] uppercase tracking-wider text-gray-500 font-medium">
            Type:
          </span>
          <button
            type="button"
            onClick={() => onToggleMadeToOrder(null)}
            className={`px-2.5 py-1 text-[11px] uppercase tracking-wider transition-colors ${
              madeToOrderFilter === null
                ? "bg-[#484D40] text-white font-medium"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => onToggleMadeToOrder(true)}
            className={`px-2.5 py-1 text-[11px] uppercase tracking-wider transition-colors ${
              madeToOrderFilter === true
                ? "bg-[#484D40] text-white font-medium"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Made to Order
          </button>
          <button
            type="button"
            onClick={() => onToggleMadeToOrder(false)}
            className={`px-2.5 py-1 text-[11px] uppercase tracking-wider transition-colors ${
              madeToOrderFilter === false
                ? "bg-[#484D40] text-white font-medium"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Ready to Wear
          </button>
        </div>

        {/* Reset Filters button */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center space-x-1.5 text-xs text-gray-500 hover:text-[#313131] transition-colors underline underline-offset-4 cursor-pointer"
          >
            <X size={12} />
            <span>Reset Filters</span>
          </button>
        )}
      </div>
    </div>
  );
}
