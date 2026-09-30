import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Trunk Shows & Traveling Atelier | The Studio Mayfair",
  description:
    "Private fitting trunk shows across London, New York, Houston, and Los Angeles by appointment.",
};

const TRUNK_SHOWS = [
  {
    city: "London Atelier",
    location: "Mayfair, London W1K",
    dates: "October 14 - October 20, 2026",
    status: "Booking Available",
    details: "Exclusive Bespoke Suit & Trunkfitting sessions with Master Tailors.",
  },
  {
    city: "New York Pop-Up",
    location: "The Carlyle, Upper East Side, NYC",
    dates: "November 04 - November 09, 2026",
    status: "Limited Slots",
    details: "Private trunk show showcasing Italian Cashmere & Winter Overcoat Collection.",
  },
  {
    city: "Houston Flagship Atelier",
    location: "River Oaks District, Houston TX",
    dates: "Permanent Studio - By Appointment",
    status: "Open Weekly",
    details: "Private consultations, garment fitting, and bespoke fabric selection.",
  },
  {
    city: "Los Angeles Trunk Show",
    location: "Beverly Hills Hotel, Los Angeles CA",
    dates: "December 01 - December 05, 2026",
    status: "Upcoming",
    details: "Private fitting appointments for spring bespoke wardrobe consultations.",
  },
];

export default function TrunkShowsPage() {
  return (
    <div className="bg-[#FCFCFC] py-16 sm:py-24 text-[#313131]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#7C856E] font-medium">
            TRAVELING ATELIER &amp; EVENTS
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-wider text-[#313131]">
            Trunk Shows &amp; Private Appointments
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            The Studio Mayfair travels globally to host private trunk shows. Reserve your personal fitting session with our master tailoring team.
          </p>
        </div>

        {/* Schedule List */}
        <div className="space-y-6">
          {TRUNK_SHOWS.map((show, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E8E8E8] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center space-x-3">
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#484D40] bg-[#F3F4F1] px-2.5 py-1">
                    {show.status}
                  </span>
                  <span className="text-xs text-gray-500 font-light flex items-center gap-1">
                    <Calendar size={13} /> {show.dates}
                  </span>
                </div>
                <h3 className="font-serif text-2xl uppercase tracking-wide text-[#313131]">
                  {show.city}
                </h3>
                <p className="text-xs text-[#7C856E] font-medium flex items-center gap-1">
                  <MapPin size={13} /> {show.location}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 font-light pt-1">
                  {show.details}
                </p>
              </div>

              <Link
                href="/bespoke"
                className="w-full md:w-auto bg-[#484D40] text-[#FCFCFC] px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#3B3F34] transition-colors text-center inline-flex items-center justify-center gap-2"
              >
                <span>Request Appointment</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#F7F7F5] border border-[#E8E8E8] p-8 text-center space-y-4">
          <h4 className="font-serif text-2xl uppercase tracking-wide text-[#313131]">
            Request a Private Trunk Show in Your City
          </h4>
          <p className="text-xs sm:text-sm text-gray-600 font-light max-w-xl mx-auto">
            Can&apos;t find your location? Contact our private client team to request a trunk show in your city or arrange a private home consultation.
          </p>
          <Link
            href="/bespoke"
            className="inline-block bg-[#313131] text-[#FCFCFC] px-6 py-3 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#222222] transition-colors"
          >
            Contact Private Client Team
          </Link>
        </div>
      </div>
    </div>
  );
}
