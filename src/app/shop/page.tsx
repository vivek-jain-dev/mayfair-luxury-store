import { Suspense } from "react";
import type { Metadata } from "next";
import { ShopCatalog } from "@/components/shop/ShopCatalog";

export const metadata: Metadata = {
  title: "Ready-To-Wear Collection | The Studio Mayfair",
  description: "Explore the Mayfair luxury catalog. Italian fabrics, bespoke craftsmanship, and timeless menswear.",
};

function ShopCatalogSkeleton() {
  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-pulse">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="h-3 w-40 bg-gray-200 mx-auto rounded-xs" />
        <div className="h-10 w-72 bg-gray-200 mx-auto rounded-xs" />
        <div className="h-4 w-96 bg-gray-100 mx-auto rounded-xs" />
      </div>
      <div className="h-10 bg-gray-100 rounded-xs" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-[3/4] bg-gray-200 w-full" />
            <div className="h-4 w-2/3 bg-gray-200 mx-auto" />
            <div className="h-3 w-1/3 bg-gray-100 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <Suspense fallback={<ShopCatalogSkeleton />}>
        <ShopCatalog />
      </Suspense>
    </main>
  );
}
