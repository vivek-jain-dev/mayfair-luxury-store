import { NextResponse } from "next/server";

const ALLOWED_SERVICES = [
  "Bespoke Suit Consultation",
  "Made-to-Order Blazer & Knits",
  "Wardrobe Styling Session",
];

const ALLOWED_TIME_SLOTS = [
  "10:00 AM",
  "11:30 AM",
  "02:00 PM",
  "04:00 PM",
];

const TIME_SLOT_MINUTES: Record<string, number> = {
  "10:00 AM": 10 * 60,
  "11:30 AM": 11 * 60 + 30,
  "02:00 PM": 14 * 60,
  "04:00 PM": 16 * 60,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

function getChicagoToday() {
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

  return { dateString, hour, minute };
}

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          message: "Malformed request payload. Expected valid JSON.",
        },
        { status: 400 }
      );
    }

    const { serviceType, date, timeSlot, fullName, email, phone, notes } = body || {};

    const validationErrors: string[] = [];

    // Service validation
    if (!serviceType || typeof serviceType !== "string" || !ALLOWED_SERVICES.includes(serviceType)) {
      validationErrors.push(
        `Invalid or unsupported service. Allowed options: ${ALLOWED_SERVICES.join(", ")}.`
      );
    }

    // Time slot validation
    if (!timeSlot || typeof timeSlot !== "string" || !ALLOWED_TIME_SLOTS.includes(timeSlot)) {
      validationErrors.push(
        `Invalid time slot. Allowed slots: ${ALLOWED_TIME_SLOTS.join(", ")}.`
      );
    }

    // Date & Time validation in America/Chicago timezone
    const chicago = getChicagoToday();

    if (!date || typeof date !== "string" || !DATE_REGEX.test(date)) {
      validationErrors.push("Invalid date format. Required format: YYYY-MM-DD.");
    } else {
      const parsedDate = new Date(`${date}T00:00:00`);
      if (isNaN(parsedDate.getTime())) {
        validationErrors.push("Selected date is not a valid calendar date.");
      } else if (date < chicago.dateString) {
        validationErrors.push("Past dates cannot be selected for fitting appointments.");
      } else if (date === chicago.dateString && timeSlot && ALLOWED_TIME_SLOTS.includes(timeSlot)) {
        const slotMinutes = TIME_SLOT_MINUTES[timeSlot];
        const currentMinutes = chicago.hour * 60 + chicago.minute;
        if (currentMinutes >= slotMinutes) {
          validationErrors.push("The selected time slot has already passed for today in Houston time (America/Chicago).");
        }
      }
    }

    // Full Name validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      validationErrors.push("Full name is required.");
    } else if (fullName.trim().length > 100) {
      validationErrors.push("Full name must not exceed 100 characters.");
    }

    // Email validation
    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      validationErrors.push("A valid email address is required.");
    } else if (email.trim().length > 100) {
      validationErrors.push("Email address must not exceed 100 characters.");
    }

    // Optional Phone validation
    if (phone && (typeof phone !== "string" || phone.length > 30)) {
      validationErrors.push("Telephone number must not exceed 30 characters.");
    }

    // Optional Notes validation
    if (notes && (typeof notes !== "string" || notes.length > 1000)) {
      validationErrors.push("Fitting notes must not exceed 1000 characters.");
    }

    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed for fitting request.",
          errors: validationErrors,
        },
        { status: 400 }
      );
    }

    // Production environment check: No actual storage or email code is implemented in this codebase
    const isProduction = process.env.NODE_ENV === "production";

    if (isProduction) {
      // In production mode, since no delivery/storage integration code exists, return 503 Service Unavailable
      return NextResponse.json(
        {
          success: false,
          message: "Booking service is currently unavailable in production. No database storage or email delivery provider is implemented in this repository.",
        },
        { status: 503 }
      );
    }

    // Development Demo Mode
    const timestampRef = Date.now().toString(36).toUpperCase();
    const randomRef = Math.random().toString(36).substring(2, 6).toUpperCase();
    const referenceId = `REF-BESPOKE-${timestampRef}-${randomRef}`;

    // Log ONLY reference ID and non-PII appointment metadata to server console
    console.log("[DEV BOOKING API LOG]", {
      referenceId,
      serviceType,
      date,
      timeSlot,
      timezone: "America/Chicago (Central Time)",
      mode: "Development Logging Mode",
    });

    return NextResponse.json(
      {
        success: true,
        isDemo: true,
        referenceId,
        message: "Demo submission successful — no appointment has been booked or sent to the atelier.",
        data: {
          serviceType,
          date,
          timeSlot,
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone ? phone.trim() : "",
          notes: notes ? notes.trim() : "",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error in /api/booking:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected server error occurred while processing your booking.",
      },
      { status: 500 }
    );
  }
}
