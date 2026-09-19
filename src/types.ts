export type ServiceCategory = 'all' | 'cuts' | 'beard' | 'combos' | 'treatments';

export interface ServiceItem {
  id: string;
  name: string;
  category: 'cuts' | 'beard' | 'combos' | 'treatments';
  duration: string;
  price: number;
  description: string;
  badge?: string;
  popular?: boolean;
}

export interface Barber {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  avatar: string;
  available: boolean;
}

export interface Review {
  id: string;
  author: string;
  initials: string;
  date: string;
  rating: number;
  barberAttributed?: string;
  serviceAttributed?: string;
  quote: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  tagline: string;
  category: 'skinfade' | 'beard' | 'scissor' | 'studio';
  imageUrl: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export interface BookingFormData {
  serviceId: string;
  barberId: string;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  notes: string;
}
