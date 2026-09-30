import Link from "next/link";

export const metadata = {
  title: "Shipping & Return Policy | The Studio Mayfair",
  description:
    "Complimentary worldwide shipping, bespoke fitting guarantee, and return guidelines at The Studio Mayfair.",
};

export default function ReturnPolicyPage() {
  return (
    <div className="bg-[#FCFCFC] py-16 sm:py-24 text-[#313131]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#7C856E] font-medium">
            CLIENT SERVICES
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-wider text-[#313131]">
            Shipping &amp; Return Policy
          </h1>
          <p className="text-xs text-gray-500 font-light">
            Effective Date: Season 2026 • Complimentary Worldwide Delivery
          </p>
        </div>

        {/* Policy Content */}
        <div className="bg-white border border-[#E8E8E8] p-8 sm:p-12 space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
          {/* Section 1 */}
          <section className="space-y-3 border-b border-[#F0F0F0] pb-6">
            <h2 className="font-serif text-xl uppercase tracking-wide text-[#313131]">
              1. Complimentary Worldwide Shipping
            </h2>
            <p>
              The Studio Mayfair offers complimentary express shipping on all ready-to-wear orders and bespoke deliveries globally. Orders are dispatched via private courier (DHL Express / FedEx Priority) with full insurance and tracking.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Domestic US Express: 2 – 3 Business Days</li>
              <li>UK &amp; Europe Priority: 3 – 4 Business Days</li>
              <li>Rest of World: 4 – 6 Business Days</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-b border-[#F0F0F0] pb-6">
            <h2 className="font-serif text-xl uppercase tracking-wide text-[#313131]">
              2. Ready-to-Wear Returns &amp; Exchanges
            </h2>
            <p>
              If your ready-to-wear item (Blazers, Knits, Shirts) does not exceed your expectations, we welcome returns and exchanges within <strong>30 days of receipt</strong>.
            </p>
            <p>
              Items must be unworn, unwashed, with original tags intact and in original packaging. Complimentary return shipping labels are provided upon request.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-b border-[#F0F0F0] pb-6">
            <h2 className="font-serif text-xl uppercase tracking-wide text-[#313131]">
              3. Bespoke &amp; Made-to-Order Guarantee
            </h2>
            <p>
              Bespoke garments are crafted specifically to your individual anatomical measurements. While custom garments are non-refundable, we provide our <strong>Perfect Fit Guarantee</strong>.
            </p>
            <p>
              If any alteration is required, our master tailors will adjust your suit free of charge in our Houston Atelier or during traveling trunk shows.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-xl uppercase tracking-wide text-[#313131]">
              4. How to Initiate a Return or Alteration
            </h2>
            <p>
              To request a return shipping label or book an alteration appointment, please contact our concierge team at:
            </p>
            <p className="font-medium text-[#313131]">
              Email: concierge@thestudiomayfair.com | Tel: +1 (713) 555-MAYFAIR
            </p>
          </section>
        </div>

        {/* Contact CTA */}
        <div className="text-center pt-4">
          <Link
            href="/bespoke"
            className="inline-block bg-[#484D40] text-white px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#3B3F34] transition-colors"
          >
            Book Fitting Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
