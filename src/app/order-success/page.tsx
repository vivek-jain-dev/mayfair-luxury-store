"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, Package, Sparkles, ArrowRight, Calendar } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const { clearCart } = useCartStore();
  const [referenceId, setReferenceId] = useState<string>("");
  const [orderDate, setOrderDate] = useState<string>("");

  useEffect(() => {
    const sid =
      searchParams.get("session_id") ||
      "MAYFAIR-" + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(sid);
    setOrderDate(
      new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    );
    clearCart();
  }, [searchParams, clearCart]);

  return (
    <div className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FCFCFC] border border-[#E5E5E5] p-8 sm:p-14 shadow-sm text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-[#484D40]/10 flex items-center justify-center text-[#484D40]">
            <CheckCircle2 size={36} />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#7C856E] font-medium">
            Order Confirmed &amp; In Preparation
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#313131] uppercase tracking-wide">
            Thank You for Your Patronage
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 font-light max-w-lg mx-auto leading-relaxed">
            Your order has been successfully placed with The Studio Mayfair atelier. Our master tailors and artisans are preparing your pieces with the utmost precision.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-[#F7F7F7] border border-gray-200 p-6 rounded-none text-left space-y-4 text-xs">
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-gray-500 uppercase tracking-wider">Reference ID</span>
            <span className="font-mono text-[#313131] font-medium text-[11px] truncate max-w-[200px] sm:max-w-none">
              {referenceId || "Processing..."}
            </span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-gray-500 uppercase tracking-wider">Date Placed</span>
            <span className="text-[#313131] font-medium">{orderDate || "Today"}</span>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-gray-200">
            <span className="text-gray-500 uppercase tracking-wider">Delivery Method</span>
            <span className="text-[#484D40] font-medium flex items-center gap-1">
              <Package size={14} /> Complimentary Insured Courier
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 uppercase tracking-wider">Garment Care Notice</span>
            <span className="text-gray-600">Hand-finished packaging &amp; garment bag included</span>
          </div>
        </div>

        {/* Bespoke Fitting Callout */}
        <div className="bg-[#484D40]/5 border-l-2 border-[#484D40] p-4 text-left text-xs text-gray-700 flex items-start space-x-3">
          <Sparkles size={18} className="text-[#484D40] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Made-to-Order &amp; Custom Sizing:</strong> If your order includes bespoke or made-to-order garments, our atelier concierge will contact you within 24 hours to verify measurements.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto bg-[#484D40] text-[#FCFCFC] px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#3B3F34] transition-colors flex items-center justify-center space-x-2"
          >
            <span>Continue Shopping</span>
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/bespoke"
            className="w-full sm:w-auto border border-[#484D40] text-[#484D40] px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#484D40] hover:text-white transition-colors flex items-center justify-center space-x-2"
          >
            <Calendar size={14} />
            <span>Book In-Person Fitting</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-xs uppercase tracking-widest text-gray-500">
          Loading order details...
        </div>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
