import { ServiceItem, Barber, Review, GalleryItem } from '../types';

export const BUSINESS_INFO = {
  name: 'WE THE BEST CUTZ',
  tagline: 'Where Precision Meets Relentless Style',
  subheading:
    "Chicago Ridge's premier men's grooming destination. Master fades, bespoke beard artistry, and authentic barbershop culture tailored for the discerning gent.",
  address: '10135 S Harlem Ave',
  city: 'Chicago Ridge',
  state: 'IL',
  zip: '60415',
  fullAddress: '10135 S Harlem Ave, Chicago Ridge, IL 60415',
  phone: '(708) 297-5899',
  phoneRaw: '+17082975899',
  googleRating: 5.0,
  reviewCount: 327,
  googleMapsUrl: 'https://maps.google.com/?q=10135+S+Harlem+Ave,+Chicago+Ridge,+IL+60415',
  hours: [
    { days: 'Wednesday – Monday', time: '9:30 AM – 9:00 PM', isOpenDay: true },
    { days: 'Tuesday', time: 'CLOSED', isOpenDay: false },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'master-haircut',
    name: 'Master Haircut & Taper',
    category: 'cuts',
    duration: '30 Mins',
    price: 35,
    description:
      'Tailored skin fade, taper, or executive classic. Razor-defined perimeter, hair rinse, and luxury pomade styling tonic.',
    badge: 'SIGNATURE FAVORITE',
    popular: true,
  },
  {
    id: 'sculpted-beard',
    name: 'Sculpted Beard & Hot Towel',
    category: 'beard',
    duration: '25 Mins',
    price: 25,
    description:
      'Surgical straight razor cheek & neck lines, hot steam essential oil infusion towel, nourishing beard butter, and ergonomic shaping.',
    badge: 'BEARD RITUAL',
    popular: true,
  },
  {
    id: 'executive-crown',
    name: 'The Executive Crown Combo',
    category: 'combos',
    duration: '50 Mins',
    price: 55,
    description:
      'The ultimate barbershop experience: Signature master haircut, full beard sculpting, double hot lather shave, cooling clay pore cleansing, and scalp revitalizer.',
    badge: 'VIP EXPERIENCE',
    popular: true,
  },
  {
    id: 'sharp-gentleman',
    name: 'The Sharp Gentleman Combo',
    category: 'combos',
    duration: '45 Mins',
    price: 48,
    description:
      'Precision skin fade or classic scissors combined with precision beard trim, mustache sculpt, razor cheek edge, and cooling aftershave splash.',
    badge: 'COMBO CHOICE',
  },
  {
    id: 'razor-head-shave',
    name: 'Royal Razor Head Shave & Hot Towel',
    category: 'cuts',
    duration: '30 Mins',
    price: 30,
    description:
      'Mirror-smooth hot lather skull shave with soothing eucalyptus steam therapy, cold towel pore seal, and protective moisture balm.',
    badge: 'LUXURY SHAVE',
  },
  {
    id: 'razor-lineup',
    name: 'Razor Lineup & Neck Taper',
    category: 'beard',
    duration: '15 Mins',
    price: 15,
    description:
      'Crisp hairline sculpting, temple taper, neck cleanup, and foil razor finish for immediate freshness between full cuts.',
    badge: 'QUICK REFRESH',
  },
  {
    id: 'color-enhancement',
    name: 'Hair Color & Pigment Enhancement',
    category: 'treatments',
    duration: '40 Mins',
    price: 40,
    description:
      'Natural grey-camouflage blending or razor-crisp semi-permanent fiber enhancement for defined hairline contrast.',
    badge: 'ENHANCEMENT',
  },
  {
    id: 'beard-conditioning',
    name: 'Deep Beard Conditioning & Steam',
    category: 'treatments',
    duration: '20 Mins',
    price: 20,
    description:
      'Thermal steam bath infused with organic Moroccan argan oil, deep follicle exfoliation, and soothing face massage.',
    badge: 'SPA TREATMENT',
  },
  {
    id: 'junior-gentleman',
    name: 'Junior Gentleman Cut (Under 12)',
    category: 'cuts',
    duration: '25 Mins',
    price: 25,
    description:
      'Patient, master-level craftsmanship for young gentlemen. Clean fades, scissor texturing, and mild natural finish styling.',
    badge: 'AGES 12 & UNDER',
  },
];

export const BARBERS: Barber[] = [
  {
    id: 'bahaa',
    name: 'Bahaa',
    role: 'Master Barber & Founder',
    experience: '12+ Years Precision Craft',
    specialty: 'Skin Fades, Razor Lineups & Bespoke Beard Sculpting',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    available: true,
  },
  {
    id: 'rami',
    name: 'Rami',
    role: 'Senior Fade Specialist',
    experience: '8+ Years Craft',
    specialty: 'Tapers, Scissor Texturing & Sharp Perimeters',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    available: true,
  },
  {
    id: 'any',
    name: 'Any Senior Artisan',
    role: 'Next Available Chair',
    experience: 'Vetted Master Team',
    specialty: 'Guaranteed Precision & Fast Turnaround',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    available: true,
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Maysar Hassan',
    initials: 'MH',
    date: '2 weeks ago',
    rating: 5,
    barberAttributed: 'Bahaa',
    serviceAttributed: 'Master Haircut & Beard Sculpt',
    quote:
      'I had an amazing experience at WE THE BEST CUTZ. My barber Bahaa took care of me, and honestly, he did an excellent job. He took his time, didn’t rush, and the final result came out fresh, sharp, and exactly the style I was looking for. The shop itself has a great vibe, clean setup, and top-tier hospitality.',
    verified: true,
  },
  {
    id: 'rev-2',
    author: 'Mohanad Eraiqat',
    initials: 'ME',
    date: '1 month ago',
    rating: 5,
    barberAttributed: 'Bahaa',
    serviceAttributed: 'Executive Cut',
    quote:
      'Baha was very professional and friendly. I really enjoyed my haircut, and honestly haven’t had a haircut this good in almost 3 years! Highly recommended to anyone who values precision and clean lines.',
    verified: true,
  },
  {
    id: 'rev-3',
    author: 'Tariq Al-Mansoor',
    initials: 'TA',
    date: '3 weeks ago',
    rating: 5,
    barberAttributed: 'Bahaa',
    serviceAttributed: 'The Executive Crown Combo',
    quote:
      'Best fade in the Chicago southwest suburbs hands down. The attention to detail, hot towels, and straight razor work is unmatched. You never feel like you are being rushed through the chair.',
    verified: true,
  },
  {
    id: 'rev-4',
    author: 'Marcus Vance',
    initials: 'MV',
    date: '2 months ago',
    rating: 5,
    barberAttributed: 'Master Team',
    serviceAttributed: 'Skin Fade & Hot Towel Shave',
    quote:
      'Walked in looking tired, walked out feeling like a million bucks. The Executive Crown Combo is worth every penny. Clean shop, great music, and master-level barbers who actually listen.',
    verified: true,
  },
  {
    id: 'rev-5',
    author: 'Omar K.',
    initials: 'OK',
    date: 'Recent Google Review',
    rating: 5,
    barberAttributed: 'Bahaa',
    serviceAttributed: 'Razor Lineup & Taper',
    quote:
      'Cleanest line-up you will ever get. Bahaa is a true artist with clippers and straight razor. Respectful atmosphere and always on time with appointments.',
    verified: true,
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Mid-Skin Fade',
    tagline: 'Zero Shear Deficit & Seamless Transition',
    category: 'skinfade',
    imageUrl:
      'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-2',
    title: 'Razor Lineup',
    tagline: 'Beard Architecture & Precision Edge',
    category: 'beard',
    imageUrl:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-3',
    title: 'The Studio Sanctuary',
    tagline: 'State-of-the-art clippers, hygiene and comfort',
    category: 'studio',
    imageUrl:
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'landscape',
  },
  {
    id: 'gal-4',
    title: 'Low Taper Fade & Textured Crop',
    tagline: 'Contemporary matte scissor finish',
    category: 'skinfade',
    imageUrl:
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-5',
    title: 'Hot Towel Beard Shave',
    tagline: 'Essential eucalyptus oil steam therapy',
    category: 'beard',
    imageUrl:
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'portrait',
  },
  {
    id: 'gal-6',
    title: 'Executive Pompadour & Scissor Craft',
    tagline: 'Timeless architectural men’s styling',
    category: 'scissor',
    imageUrl:
      'https://images.unsplash.com/photo-1517832606589-7629c3395909?auto=format&fit=crop&q=80&w=800',
    aspectRatio: 'portrait',
  },
];

export const FAQS = [
  {
    q: 'Do you accept walk-ins or are appointments required?',
    a: 'Walk-ins are warmly welcome every day during operating hours! However, booking your chair ahead ensures priority seating with your preferred master barber without any waiting time.',
  },
  {
    q: 'What is included with a signature haircut?',
    a: 'Every cut at WE THE BEST CUTZ includes an initial style consultation, precision clipper/scissor work, a straight-razor neck shave with hot lather, an invigorating hair rinse, and a luxury pomade or tonic finish.',
  },
  {
    q: 'Where is the shop located and is there parking?',
    a: 'We are located at 10135 S Harlem Ave, Chicago Ridge, IL 60415. There is ample complimentary parking right in front and beside our studio for your convenience.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit/debit cards (Visa, Mastercard, Amex, Discover), Apple Pay, Google Pay, and Cash.',
  },
];

export const TIME_SLOTS = [
  '09:30 AM',
  '10:15 AM',
  '11:00 AM',
  '11:45 AM',
  '01:00 PM',
  '01:45 PM',
  '02:30 PM',
  '03:15 PM',
  '04:00 PM',
  '05:00 PM',
  '05:45 PM',
  '06:30 PM',
  '07:15 PM',
  '08:00 PM',
];
