"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, CheckCircle } from "lucide-react";

export default function BespokeBookingPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: "Bespoke Suit Consultation",
    date: "",
    timeSlot: "11:00 AM",
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {submitted ? (
        <div className="bg-[#F7F7F7] p-12 text-center border border-[#484D40]/20 space-y-4">
          <CheckCircle size={48} className="mx-auto text-[#484D40]" />
          <h2 className="font-serif text-2xl text-[#313131]">Fitting Request Received</h2>
          <p className="text-xs text-gray-600 max-w-md mx-auto">
            Thank you, {formData.fullName}. Our master tailor will review your preferred date ({formData.date} at {formData.timeSlot}) and confirm via email shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-[#FCFCFC] border border-[#E5E5E5] p-8 sm:p-12 space-y-8 shadow-sm">
          {/* Service Selector */}
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-widest font-semibold text-gray-700">
              1. Select Service Type
            </label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 text-xs text-[#313131] focus:outline-none focus:border-[#484D40]"
            >
              <option value="Bespoke Suit Consultation">Bespoke Two-Piece / Three-Piece Suit Consultation</option>
              <option value="Made-to-Order Blazer & Knits">Made-to-Order Blazer &amp; Knits Fitting</option>
              <option value="Wardrobe Styling Session">Full Seasonal Wardrobe Styling Session</option>
            </select>
          </div>

          {/* Date & Time Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-widest font-semibold text-gray-700">
                2. Preferred Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 text-xs text-[#313131] focus:outline-none focus:border-[#484D40]"
              />
            </div>
            <div className="space-y-3">
              <label className="block text-xs uppercase tracking-widest font-semibold text-gray-700">
                3. Preferred Time Slot
              </label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 text-xs text-[#313131] focus:outline-none focus:border-[#484D40]"
              >
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
              </select>
            </div>
          </div>

          {/* Client Details */}
          <div className="space-y-6 pt-4 border-t border-gray-200">
            <label className="block text-xs uppercase tracking-widest font-semibold text-gray-700">
              4. Client Contact Details
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 text-xs focus:outline-none focus:border-[#484D40]"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 px-4 py-3 text-xs focus:outline-none focus:border-[#484D40]"
              />
            </div>
            <input
              type="tel"
              placeholder="Telephone Number"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 text-xs focus:outline-none focus:border-[#484D40]"
            />
            <textarea
              placeholder="Specific measurement requests or fitting preferences..."
              rows={4}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full border border-gray-300 px-4 py-3 text-xs focus:outline-none focus:border-[#484D40]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#484D40] text-[#FCFCFC] py-4 text-xs uppercase tracking-widest font-semibold hover:bg-[#3B3F34] transition-colors"
          >
            Confirm &amp; Request Fitting
          </button>
        </form>
      )}
    </div>
  );
}
