import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Truck, Scissors, ChevronRight } from "lucide-react";
import { MOCK_PRODUCTS } from "@/lib/mockData";
import { ProductGallery } from "@/components/shop/ProductGallery";
import { ProductActions } from "@/components/shop/ProductActions";
import { ProductCard } from "@/components/shop/ProductCard";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | The Studio Mayfair",
    };
  }

  return {
    title: `${product.name} | The Studio Mayfair`,
    description: `${product.tagline}. ${product.description}`,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = MOCK_PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products (curated selections from catalog excluding current product)
  const relatedProducts = MOCK_PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <main className="bg-[#FCFCFC] py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumbs" className="flex items-center space-x-2 text-xs text-gray-500 font-sans uppercase tracking-wider">
          <Link href="/" className="hover:text-[#313131] transition-colors">
            Home
          </Link>
          <ChevronRight size={12} className="text-gray-400" />
          <Link href="/shop" className="hover:text-[#313131] transition-colors">
            Shop
          </Link>
          <ChevronRight size={12} className="text-gray-400" />
          <Link
            href={`/shop?category=${product.category}`}
            className="hover:text-[#313131] transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight size={12} className="text-gray-400" />
          <span className="text-[#313131] font-medium truncate max-w-[200px] sm:max-w-none">
            {product.name}
          </span>
        </nav>

        {/* Product Hero Section */}
        <section aria-label="Product Details" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image Gallery */}
          <div>
            <ProductGallery
              images={product.images}
              productName={product.name}
              isMadeToOrder={product.isMadeToOrder}
              leadTimeWeeks={product.leadTimeWeeks}
            />
          </div>

          {/* Right Column: Information & Actions */}
          <div className="space-y-8">
            <header className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium block">
                Mayfair Tailoring • {product.category}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#313131] leading-tight">
                {product.name}
              </h1>
              <p className="text-sm sm:text-base text-gray-500 font-sans">
                {product.tagline}
              </p>
            </header>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Made to Order Notice */}
            {product.isMadeToOrder && (
              <div className="bg-[#F7F7F7] p-4 border-l-2 border-[#484D40] flex items-start space-x-3 text-xs text-gray-700">
                <Clock size={18} className="text-[#484D40] shrink-0 mt-0.5" />
                <p>
                  <strong>Made to Order:</strong> Crafting lead time is approximately{" "}
                  <strong>{product.leadTimeWeeks} weeks</strong> from initial order verification by our atelier.
                </p>
              </div>
            )}

            {/* Client-Side Variant Selection & Add to Bag */}
            <ProductActions product={product} />

            {/* Garment Details & Composition */}
            <div className="border-t border-gray-200 pt-6 space-y-4 text-xs font-sans">
              <div>
                <h2 className="font-semibold uppercase tracking-wider text-[#313131]">
                  Fabric &amp; Composition
                </h2>
                <p className="text-gray-600 mt-1 leading-relaxed">{product.fabricInfo}</p>
              </div>

              <div>
                <h2 className="font-semibold uppercase tracking-wider text-[#313131]">
                  Garment Care
                </h2>
                <p className="text-gray-600 mt-1 leading-relaxed">{product.careInstructions}</p>
              </div>
            </div>

            {/* Mayfair House Guarantees */}
            <div className="border-t border-gray-200 pt-6 grid grid-cols-2 gap-4 text-xs text-gray-600">
              <div className="flex items-center space-x-2.5">
                <Truck size={16} className="text-[#484D40] shrink-0" />
                <span>Complimentary Insured Shipping</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Scissors size={16} className="text-[#484D40] shrink-0" />
                <span>Atelier Tailoring Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Pairings */}
        {relatedProducts.length > 0 && (
          <section aria-label="Curated Wardrobe Recommendations" className="pt-16 border-t border-gray-200">
            <div className="text-center space-y-2 mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium block">
                Complete The Wardrobe
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#313131] uppercase tracking-wide">
                Curated Pairings
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
