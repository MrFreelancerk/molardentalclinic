"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Dentists from "@/components/Dentists";
import PatientJourney from "@/components/PatientJourney";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Comprehensive Oral Checkup");

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[var(--page)]">
      {/* Floating Pill Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking("Comprehensive Oral Checkup")} />

      {/* Scroll reveal for every section below the hero */}
      <ScrollReveal />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={(service) => handleOpenBooking(service || "Comprehensive Oral Checkup")} />

        {/* 2. Dental Services Grid */}
        <Services onSelectService={(service) => handleOpenBooking(service)} />

        {/* 3. Why Choose Molar Dental */}
        <About />

        {/* 4. Meet The Dentists */}
        <Dentists onOpenBooking={(doctor) => handleOpenBooking(doctor || "Doctor Consultation")} />

        {/* 5. Patient Reviews */}
        <Reviews />

        {/* 6. Frequently Asked Questions */}
        <Faq />

        {/* 7. Quick Booking & Location / Contact */}
        <BookingSection initialService={selectedService} />
      </main>

      {/* Trust Footer */}
      <Footer />

      {/* Interactive Global Appointment Modal */}
      <AppointmentModal
        key={selectedService}
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedService={selectedService}
      />
    </div>
  );
}
