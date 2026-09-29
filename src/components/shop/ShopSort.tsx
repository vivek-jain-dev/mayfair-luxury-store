"use client";

import { ChevronDown } from "lucide-react";

export type SortOption =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "name-asc"
  | "name-desc";

interface ShopSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
];

export function ShopSort({ value, onChange }: ShopSortProps) {
  return (
    <div className="relative inline-flex items-center">
      <label htmlFor="shop-sort" className="text-xs uppercase tracking-wider text-gray-500 mr-2.5 font-medium hidden sm:inline-block">
        Sort By:
      </label>
      <div className="relative">
        <select
          id="shop-sort"
          value={value}
          onChange={(e) => onChange(e.target.value as SortOption)}
          className="appearance-none bg-[#FCFCFC] border border-[#DCDCD8] text-[#313131] py-2 pl-3 pr-8 text-xs uppercase tracking-wider font-medium focus:outline-hidden focus:border-[#484D40] transition-colors cursor-pointer"
        >
          {SORT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
