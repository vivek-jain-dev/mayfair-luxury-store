import { BookingForm } from "@/components/bespoke/BookingForm";

export const metadata = {
  title: "Private Fitting & Bespoke Consultation | The Studio Mayfair",
  description:
    "Schedule a private fitting consultation at our Houston Atelier or traveling trunk shows in London & New York.",
};

export default function BespokeBookingPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center space-y-3 mb-12">
        <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium">
          Private Client Services
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#313131] uppercase tracking-wide">
          Book Private Fitting &amp; Consultation
        </h1>
        <p className="text-xs text-gray-500 max-w-xl mx-auto font-light">
          Private fittings available in our Houston Atelier or traveling trunk shows in London &amp; New York.
        </p>
      </div>

      {/* Interactive Booking Form */}
      <BookingForm />
    </div>
  );
}
