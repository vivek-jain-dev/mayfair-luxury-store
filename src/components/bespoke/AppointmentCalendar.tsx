"use client";

import React, { useState, useId } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, AlertCircle } from "lucide-react";

export interface AppointmentCalendarProps {
  selectedDate: string; // YYYY-MM-DD
  onDateChange: (date: string) => void;
  selectedTimeSlot: string;
  onTimeSlotChange: (timeSlot: string) => void;
  dateError?: string;
  timeSlotError?: string;
}

export const TIME_SLOTS = ["10:00 AM", "11:30 AM", "02:00 PM", "04:00 PM"];
export const LOCATION_TIMEZONE = "America/Chicago (Central Time - Houston Atelier)";

export const TIME_SLOT_MINUTES: Record<string, number> = {
  "10:00 AM": 10 * 60,
  "11:30 AM": 11 * 60 + 30,
  "02:00 PM": 14 * 60,
  "04:00 PM": 16 * 60,
};

export function getChicagoToday() {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  };
  const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(now);

  let year = 0, month = 0, day = 0, hour = 0, minute = 0;
  for (const part of parts) {
    if (part.type === "year") year = parseInt(part.value, 10);
    if (part.type === "month") month = parseInt(part.value, 10);
    if (part.type === "day") day = parseInt(part.value, 10);
    if (part.type === "hour") hour = parseInt(part.value, 10);
    if (part.type === "minute") minute = parseInt(part.value, 10);
  }

  const monthStr = String(month).padStart(2, "0");
  const dayStr = String(day).padStart(2, "0");
  const dateString = `${year}-${monthStr}-${dayStr}`;

  return { year, month, day, dateString, currentHour: hour, currentMinute: minute };
}

export function isTimeSlotPassedInChicago(dateString: string, timeSlot: string): boolean {
  if (!dateString || !timeSlot) return false;
  const chicago = getChicagoToday();
  if (dateString < chicago.dateString) return true;
  if (dateString > chicago.dateString) return false;

  const slotMinutes = TIME_SLOT_MINUTES[timeSlot];
  if (slotMinutes === undefined) return false;

  const currentMinutes = chicago.currentHour * 60 + chicago.currentMinute;
  return currentMinutes >= slotMinutes;
}

function formatDateString(year: number, month: number, day: number): string {
  const m = String(month + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

export function AppointmentCalendar({
  selectedDate,
  onDateChange,
  selectedTimeSlot,
  onTimeSlotChange,
  dateError,
  timeSlotError,
}: AppointmentCalendarProps) {
  const chicago = getChicagoToday();
  const chicagoTodayObj = new Date(chicago.year, chicago.month - 1, chicago.day);

  // Parse initial selected date or default view to current month/year in Chicago
  const initialDateObj = selectedDate ? new Date(`${selectedDate}T00:00:00`) : chicagoTodayObj;
  const [currentMonth, setCurrentMonth] = useState(
    isNaN(initialDateObj.getTime()) ? chicagoTodayObj.getMonth() : initialDateObj.getMonth()
  );
  const [currentYear, setCurrentYear] = useState(
    isNaN(initialDateObj.getTime()) ? chicagoTodayObj.getFullYear() : initialDateObj.getFullYear()
  );

  const calendarId = useId();

  // Month navigation helpers
  const canGoPreviousMonth = () => {
    const minMonthDate = new Date(chicagoTodayObj.getFullYear(), chicagoTodayObj.getMonth(), 1);
    const targetMonthDate = new Date(currentYear, currentMonth - 1, 1);
    return targetMonthDate >= minMonthDate;
  };

  const handlePrevMonth = () => {
    if (!canGoPreviousMonth()) return;
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  // Calendar Grid Calculation
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay(); // 0 = Sun

  const monthName = new Date(currentYear, currentMonth, 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const handleDateClick = (year: number, month: number, day: number, isPast: boolean) => {
    if (isPast) return;
    const dateStr = formatDateString(year, month, day);
    onDateChange(dateStr);

    // If currently selected time slot has passed for this newly selected date, clear it
    if (selectedTimeSlot && isTimeSlotPassedInChicago(dateStr, selectedTimeSlot)) {
      onTimeSlotChange("");
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    year: number,
    month: number,
    day: number,
    isPast: boolean
  ) => {
    if (isPast) return;

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleDateClick(year, month, day, isPast);
      return;
    }

    let nextDay = day;
    if (e.key === "ArrowRight") nextDay = day + 1;
    if (e.key === "ArrowLeft") nextDay = day - 1;
    if (e.key === "ArrowDown") nextDay = day + 7;
    if (e.key === "ArrowUp") nextDay = day - 7;

    if (nextDay !== day && nextDay >= 1 && nextDay <= daysInMonth) {
      e.preventDefault();
      const nextBtn = document.getElementById(`cal-day-${currentYear}-${currentMonth}-${nextDay}`);
      nextBtn?.focus();
    }
  };

  // Build grid items
  const calendarCells = [];
  for (let i = 0; i < firstDayOfWeek; i++) {
    calendarCells.push(<div key={`empty-${i}`} className="h-10" aria-hidden="true" />);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dateStr = formatDateString(currentYear, currentMonth, day);
    const isPast = dateStr < chicago.dateString;
    const isSelected = selectedDate === dateStr;

    const cellDateObj = new Date(currentYear, currentMonth, day);
    const fullReadableDate = cellDateObj.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    calendarCells.push(
      <button
        key={`day-${day}`}
        id={`cal-day-${currentYear}-${currentMonth}-${day}`}
        type="button"
        disabled={isPast}
        aria-disabled={isPast}
        aria-pressed={isSelected}
        aria-label={`${fullReadableDate}${isPast ? " (Unavailable - Past Date in Chicago)" : ""}`}
        onClick={() => handleDateClick(currentYear, currentMonth, day, isPast)}
        onKeyDown={(e) => handleKeyDown(e, currentYear, currentMonth, day, isPast)}
        className={`h-10 text-xs font-medium border rounded-none transition-all flex items-center justify-center relative focus:outline-none focus:ring-2 focus:ring-[#484D40] focus:z-10 ${
          isSelected
            ? "bg-[#484D40] text-[#FCFCFC] border-[#484D40] font-bold shadow-sm"
            : isPast
            ? "bg-[#F7F7F7] text-gray-300 border-transparent cursor-not-allowed line-through"
            : "bg-white text-[#313131] border-gray-200 hover:border-[#484D40] hover:bg-[#F7F7F7]"
        }`}
      >
        {day}
      </button>
    );
  }

  return (
    <div className="space-y-6">
      {/* Location & Timezone Indicator */}
      <div className="bg-[#F7F7F7] border border-[#E5E5E5] p-3 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-gray-700">
        <div className="flex items-center space-x-2">
          <MapPin size={15} className="text-[#484D40] shrink-0" />
          <span>
            Location Timezone: <strong className="text-[#313131] font-semibold">{LOCATION_TIMEZONE}</strong>
          </span>
        </div>
        <span className="text-[11px] text-[#7C856E] uppercase tracking-wider font-medium">
          Preferred Schedule
        </span>
      </div>

      {/* Date Picker Header */}
      <div className="space-y-2">
        <label className="block text-xs uppercase tracking-widest font-semibold text-[#313131]">
          2. Select Preferred Date <span className="text-red-700">*</span>
        </label>

        {/* Month Navigation */}
        <div className="bg-white border border-[#E5E5E5] p-4 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={handlePrevMonth}
              disabled={!canGoPreviousMonth()}
              aria-label="Previous Month"
              className={`p-1.5 border border-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-[#484D40] ${
                !canGoPreviousMonth()
                  ? "opacity-30 cursor-not-allowed bg-gray-100"
                  : "hover:bg-[#F7F7F7] hover:border-[#484D40] text-[#313131]"
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            <span className="font-serif text-base text-[#313131] font-medium tracking-wide">
              {monthName}
            </span>
            <button
              type="button"
              onClick={handleNextMonth}
              aria-label="Next Month"
              className="p-1.5 border border-gray-300 hover:bg-[#F7F7F7] hover:border-[#484D40] text-[#313131] transition-colors focus:outline-none focus:ring-2 focus:ring-[#484D40]"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Days of Week Header */}
          <div className="grid grid-cols-7 gap-1 text-center mb-2" role="row">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName) => (
              <div
                key={dayName}
                className="text-[10px] uppercase font-semibold text-[#7C856E] tracking-wider py-1"
                role="columnheader"
              >
                {dayName}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-1" role="grid" aria-labelledby={calendarId}>
            {calendarCells}
          </div>

          {/* Selected Date Indicator */}
          {selectedDate ? (
            <p className="mt-3 text-[11px] text-[#484D40] font-medium text-center bg-[#484D40]/5 py-1.5 border border-[#484D40]/20">
              Selected Date: {new Date(`${selectedDate}T00:00:00`).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          ) : (
            <p className="mt-3 text-[11px] text-gray-500 italic text-center">
              Please click a highlighted date above.
            </p>
          )}
        </div>

        {dateError && (
          <p className="text-xs text-red-700 flex items-center space-x-1 font-medium mt-1">
            <AlertCircle size={14} />
            <span>{dateError}</span>
          </p>
        )}
      </div>

      {/* Time Slot Selection */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="block text-xs uppercase tracking-widest font-semibold text-[#313131]">
            3. Select Preferred Time Slot <span className="text-red-700">*</span>
          </label>
          <span className="text-[10px] text-gray-500 uppercase tracking-wider">
            {LOCATION_TIMEZONE}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {TIME_SLOTS.map((slot) => {
            const isSelected = selectedTimeSlot === slot;
            const isSlotPassed = selectedDate ? isTimeSlotPassedInChicago(selectedDate, slot) : false;

            return (
              <button
                key={slot}
                type="button"
                disabled={isSlotPassed}
                aria-disabled={isSlotPassed}
                aria-pressed={isSelected}
                onClick={() => !isSlotPassed && onTimeSlotChange(slot)}
                className={`py-3 px-2 border text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all focus:outline-none focus:ring-2 focus:ring-[#484D40] ${
                  isSelected
                    ? "bg-[#484D40] text-[#FCFCFC] border-[#484D40] shadow-2xs"
                    : isSlotPassed
                    ? "bg-[#F7F7F7] text-gray-300 border-gray-200 cursor-not-allowed line-through"
                    : "bg-white text-[#313131] border-gray-300 hover:border-[#484D40] hover:bg-[#F7F7F7]"
                }`}
              >
                <Clock size={14} className={isSelected ? "text-[#FCFCFC]" : isSlotPassed ? "text-gray-300" : "text-[#7C856E]"} />
                <span>{slot}</span>
              </button>
            );
          })}
        </div>

        <p className="text-[11px] text-gray-500 leading-normal">
          <strong className="font-semibold text-gray-700">Note:</strong> Requested time slots represent your preferred consultation schedule in Houston time (America/Chicago) and are subject to tailor availability confirmation.
        </p>

        {timeSlotError && (
          <p className="text-xs text-red-700 flex items-center space-x-1 font-medium mt-1">
            <AlertCircle size={14} />
            <span>{timeSlotError}</span>
          </p>
        )}
      </div>
    </div>
  );
}
