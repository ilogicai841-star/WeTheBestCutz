/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ReserveChairSection } from './components/ReserveChairSection';
import { ServicesMenu } from './components/ServicesMenu';
import { PortfolioGallery } from './components/PortfolioGallery';
import { AboutArtisans } from './components/AboutArtisans';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationHours } from './components/LocationHours';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BookingModal } from './components/BookingModal';
import { BookingFormData } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefillBooking, setPrefillBooking] = useState<Partial<BookingFormData>>({});

  const handleOpenBooking = (serviceId?: string, barberId?: string) => {
    setPrefillBooking({
      serviceId: serviceId || 'master-haircut',
      barberId: barberId || 'bahaa',
    });
    setBookingModalOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    setPrefillBooking({
      serviceId,
    });
    setBookingModalOpen(true);
  };

  const handleBookStyle = (styleName: string) => {
    setPrefillBooking({
      serviceId: 'master-haircut',
      notes: `Requested Style from Portfolio: ${styleName}`,
    });
    setBookingModalOpen(true);
  };

  const handleOpenPrefillModal = (data?: Partial<BookingFormData>) => {
    if (data) {
      setPrefillBooking(data);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#F4F4F0] flex flex-col selection:bg-[#d4af37]/30 selection:text-white">
      {/* Sticky Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        {/* Hero Section with Asymmetric Visual Collage */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* Step-by-Step Fast Booking Section */}
        <ReserveChairSection onOpenBookingModal={handleOpenPrefillModal} />

        {/* Services & Bespoke Rituals */}
        <ServicesMenu onSelectService={handleSelectService} />

        {/* Gallery of Precision / Portfolio with Lightbox */}
        <PortfolioGallery onBookStyle={handleBookStyle} />

        {/* Artisans of the Craft */}
        <AboutArtisans onOpenBooking={handleOpenBooking} />

        {/* Customer Trust & Reviews Carousel */}
        <ReviewsSection />

        {/* Atelier Location, Hours & Directions */}
        <LocationHours />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Bottom Bar */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Modal Dialog */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={prefillBooking}
      />
    </div>
  );
}
