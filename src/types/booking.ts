export interface BookingAppointment {
  id?: string;
  serviceType: 'Bespoke Suit' | 'Private Fitting' | 'Style Consultation';
  date: string;
  timeSlot: string;
  fullName: string;
  email: string;
  phone: string;
  notes?: string;
}
