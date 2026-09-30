"use client";

import React, { useState } from "react";
import { CheckCircle, AlertCircle, Loader2, Ruler } from "lucide-react";
import { AppointmentCalendar, LOCATION_TIMEZONE, getChicagoToday, isTimeSlotPassedInChicago } from "./AppointmentCalendar";
import { SizeFitGuideModal } from "./SizeFitGuideModal";

export const SERVICE_OPTIONS = [
  {
    value: "Bespoke Suit Consultation",
    label: "Bespoke Two-Piece / Three-Piece Suit Consultation",
    description: "Full bespoke tailoring with custom pattern drafting and 25+ body measurements.",
  },
  {
    value: "Made-to-Order Blazer & Knits",
    label: "Made-to-Order Blazer & Knits Fitting",
    description: "Customized sizing and luxury fabric selection for blazers, trousers, and knitwear.",
  },
  {
    value: "Wardrobe Styling Session",
    label: "Full Seasonal Wardrobe Styling Session",
    description: "Comprehensive wardrobe curation with our head stylist for seasonal capsules.",
  },
];

interface FormErrors {
  serviceType?: string;
  date?: string;
  timeSlot?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  notes?: string;
  general?: string;
}

export function BookingForm() {
  const [formData, setFormData] = useState({
    serviceType: "Bespoke Suit Consultation",
    date: "",
    timeSlot: "",
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<{
    referenceId?: string;
    isDemo?: boolean;
    data?: typeof formData;
  } | null>(null);

  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  // Client-side Validation using America/Chicago timezone
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type.";
    }

    const chicago = getChicagoToday();

    if (!formData.date) {
      newErrors.date = "Please select a preferred date.";
    } else if (formData.date < chicago.dateString) {
      newErrors.date = "Past dates are not available for booking.";
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = "Please select a preferred time slot.";
    } else if (formData.date && isTimeSlotPassedInChicago(formData.date, formData.timeSlot)) {
      newErrors.timeSlot = "The selected time slot has already passed for today in Houston time (America/Chicago).";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length > 100) {
      newErrors.fullName = "Name must not exceed 100 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    } else if (formData.email.trim().length > 100) {
      newErrors.email = "Email address must not exceed 100 characters.";
    }

    if (formData.phone && formData.phone.length > 30) {
      newErrors.phone = "Telephone number must not exceed 30 characters.";
    }

    if (formData.notes && formData.notes.length > 1000) {
      newErrors.notes = "Notes must not exceed 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        setErrors({
          general: resData.message || "Unable to submit your fitting request. Please check your inputs and try again.",
        });
        setIsSubmitting(false);
        return;
      }

      // Success
      setSubmittedResult({
        referenceId: resData.referenceId,
        isDemo: resData.isDemo,
        data: { ...formData },
      });
    } catch {
      setErrors({
        general: "Network error occurred while connecting to the booking service. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedResult(null);
    setFormData({
      serviceType: "Bespoke Suit Consultation",
      date: "",
      timeSlot: "",
      fullName: "",
      email: "",
      phone: "",
      notes: "",
    });
    setErrors({});
  };

  // Render Success View
  if (submittedResult) {
    const { referenceId, isDemo, data } = submittedResult;
    const readableDate = data?.date
      ? new Date(`${data.date}T00:00:00`).toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : data?.date;

    return (
      <div className="bg-[#F7F7F7] p-8 sm:p-12 border border-[#484D40]/20 space-y-6 text-center max-w-2xl mx-auto shadow-sm">
        <CheckCircle size={56} className="mx-auto text-[#484D40]" />
        
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#7C856E] font-medium block">
            {isDemo ? "Development Demo Mode" : "Fitting Request Received"}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#313131] uppercase tracking-wide">
            {isDemo ? "Demo Submission Successful" : "Request Pending Tailor Review"}
          </h2>
        </div>

        {isDemo ? (
          <p className="text-xs text-gray-700 max-w-lg mx-auto leading-relaxed font-medium">
            Demo submission successful — no appointment has been booked or sent to the atelier.
          </p>
        ) : (
          <p className="text-xs text-gray-700 max-w-lg mx-auto leading-relaxed">
            Thank you, <strong className="text-[#313131] font-semibold">{data?.fullName}</strong>. Our master tailor will review your preferred request for <strong className="text-[#313131] font-semibold">{data?.serviceType}</strong> on <strong className="text-[#313131] font-semibold">{readableDate} at {data?.timeSlot} ({LOCATION_TIMEZONE})</strong> and confirm via email shortly.
          </p>
        )}

        {referenceId && (
          <div className="inline-block bg-white border border-gray-300 px-4 py-2 text-xs tracking-wider uppercase text-gray-600 font-mono">
            Reference ID: <strong className="text-[#313131] font-bold">{referenceId}</strong>
          </div>
        )}

        {isDemo && (
          <div className="bg-amber-50 border border-amber-200 p-4 text-left text-xs text-amber-900 space-y-1 rounded-none">
            <span className="font-semibold uppercase tracking-wider block text-[11px] text-amber-950">
              Demo Environment Notice
            </span>
            <p className="text-[11px] text-amber-800 leading-normal">
              This request was processed in development logging mode for demonstration purposes. No live database record or email notification was generated because storage/email services are not implemented in this application.
            </p>
          </div>
        )}

        <div className="pt-4 border-t border-gray-200">
          <button
            onClick={handleReset}
            className="bg-[#484D40] text-[#FCFCFC] px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#3B3F34] transition-colors focus:outline-none focus:ring-2 focus:ring-[#484D40]"
          >
            Submit Another Fitting Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-[#FCFCFC] border border-[#E5E5E5] p-6 sm:p-12 space-y-10 shadow-xs max-w-4xl mx-auto"
      >
        {/* Top Header & Size Guide Trigger */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl text-[#313131] uppercase tracking-wide">
              Fitting Details &amp; Schedule
            </h2>
            <p className="text-xs text-gray-500 font-light mt-0.5">
              Select your consultation type, date, time slot, and client information.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsSizeGuideOpen(true)}
            className="inline-flex items-center space-x-2 bg-[#F7F7F7] border border-[#484D40]/30 hover:border-[#484D40] px-4 py-2.5 text-xs text-[#484D40] uppercase tracking-widest font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#484D40] self-start sm:self-center"
          >
            <Ruler size={16} />
            <span>Size &amp; Fit Guide</span>
          </button>
        </div>

        {/* General Error Banner */}
        {errors.general && (
          <div className="bg-red-50 border border-red-200 p-4 text-xs text-red-800 flex items-start space-x-2">
            <AlertCircle size={18} className="text-red-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block uppercase tracking-wider text-[11px]">Submission Error</strong>
              <span>{errors.general}</span>
            </div>
          </div>
        )}

        {/* Step 1: Service Type Selector */}
        <div className="space-y-3">
          <label htmlFor="serviceType" className="block text-xs uppercase tracking-widest font-semibold text-[#313131]">
            1. Select Service Type <span className="text-red-700">*</span>
          </label>
          
          <div className="space-y-2">
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className={`w-full border bg-white px-4 py-3 text-xs text-[#313131] focus:outline-none focus:border-[#484D40] focus:ring-1 focus:ring-[#484D40] ${
                errors.serviceType ? "border-red-600" : "border-gray-300"
              }`}
            >
              {SERVICE_OPTIONS.map((svc) => (
                <option key={svc.value} value={svc.value}>
                  {svc.label}
                </option>
              ))}
            </select>

            {SERVICE_OPTIONS.find((s) => s.value === formData.serviceType) && (
              <p className="text-[11px] text-gray-500 italic px-1">
                {SERVICE_OPTIONS.find((s) => s.value === formData.serviceType)?.description}
              </p>
            )}
          </div>

          {errors.serviceType && (
            <p className="text-xs text-red-700 flex items-center space-x-1 font-medium">
              <AlertCircle size={14} />
              <span>{errors.serviceType}</span>
            </p>
          )}
        </div>

        {/* Step 2 & 3: Calendar & Time Slots */}
        <div className="pt-4 border-t border-gray-200">
          <AppointmentCalendar
            selectedDate={formData.date}
            onDateChange={(d) => setFormData({ ...formData, date: d })}
            selectedTimeSlot={formData.timeSlot}
            onTimeSlotChange={(t) => setFormData({ ...formData, timeSlot: t })}
            dateError={errors.date}
            timeSlotError={errors.timeSlot}
          />
        </div>

        {/* Step 4: Client Contact Details */}
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <label className="block text-xs uppercase tracking-widest font-semibold text-[#313131]">
            4. Client Contact Details
          </label>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="fullName" className="block text-[11px] uppercase tracking-wider text-gray-600 font-medium">
                Full Name <span className="text-red-700">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="e.g. Lord Alistair Vance"
                maxLength={100}
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full border bg-white px-4 py-3 text-xs focus:outline-none focus:border-[#484D40] focus:ring-1 focus:ring-[#484D40] ${
                  errors.fullName ? "border-red-600" : "border-gray-300"
                }`}
              />
              {errors.fullName && (
                <p className="text-[11px] text-red-700 font-medium flex items-center space-x-1">
                  <AlertCircle size={12} />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-[11px] uppercase tracking-wider text-gray-600 font-medium">
                Email Address <span className="text-red-700">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="e.g. client@mayfair.com"
                maxLength={100}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full border bg-white px-4 py-3 text-xs focus:outline-none focus:border-[#484D40] focus:ring-1 focus:ring-[#484D40] ${
                  errors.email ? "border-red-600" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-[11px] text-red-700 font-medium flex items-center space-x-1">
                  <AlertCircle size={12} />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Telephone Number */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="block text-[11px] uppercase tracking-wider text-gray-600 font-medium">
              Telephone Number <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 (713) 555-0199"
              maxLength={30}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full border bg-white px-4 py-3 text-xs focus:outline-none focus:border-[#484D40] focus:ring-1 focus:ring-[#484D40] ${
                errors.phone ? "border-red-600" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-[11px] text-red-700 font-medium flex items-center space-x-1">
                <AlertCircle size={12} />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          {/* Notes */}
          <div className="space-y-1.5">
            <label htmlFor="notes" className="block text-[11px] uppercase tracking-wider text-gray-600 font-medium">
              Specific Measurement Requests or Fitting Preferences <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <textarea
              id="notes"
              name="notes"
              placeholder="Provide fabric preferences, specific garment requirements, or hotel trunk show location details..."
              rows={4}
              maxLength={1000}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className={`w-full border bg-white px-4 py-3 text-xs focus:outline-none focus:border-[#484D40] focus:ring-1 focus:ring-[#484D40] ${
                errors.notes ? "border-red-600" : "border-gray-300"
              }`}
            />
            {errors.notes && (
              <p className="text-[11px] text-red-700 font-medium flex items-center space-x-1">
                <AlertCircle size={12} />
                <span>{errors.notes}</span>
              </p>
            )}
          </div>
        </div>

        {/* Selected Booking Summary Preview */}
        {(formData.serviceType || formData.date || formData.timeSlot) && (
          <div className="bg-[#F7F7F7] border border-[#E5E5E5] p-5 space-y-2 text-xs">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#7C856E] block">
              Selection Summary
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-gray-700 pt-1">
              <div>
                <span className="text-gray-500 text-[10px] uppercase block">Service</span>
                <strong className="text-[#313131] font-medium">{formData.serviceType}</strong>
              </div>
              <div>
                <span className="text-gray-500 text-[10px] uppercase block">Preferred Date</span>
                <strong className="text-[#313131] font-medium">
                  {formData.date
                    ? new Date(`${formData.date}T00:00:00`).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "Not Selected"}
                </strong>
              </div>
              <div>
                <span className="text-gray-500 text-[10px] uppercase block">Preferred Time</span>
                <strong className="text-[#313131] font-medium">
                  {formData.timeSlot ? `${formData.timeSlot} (CT)` : "Not Selected"}
                </strong>
              </div>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-[#484D40] text-[#FCFCFC] py-4 text-xs uppercase tracking-[0.2em] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#484D40] flex items-center justify-center space-x-2 ${
            isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:bg-[#3B3F34]"
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              <span>Submitting Request...</span>
            </>
          ) : (
            <span>Request Fitting</span>
          )}
        </button>

        <p className="text-[11px] text-gray-400 text-center uppercase tracking-wider">
          Private atelier fittings are by appointment only. Confirmation will be delivered via email.
        </p>
      </form>

      {/* Size & Fit Guide Modal */}
      <SizeFitGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </>
  );
}
