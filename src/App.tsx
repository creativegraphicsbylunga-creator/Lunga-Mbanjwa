/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CommercialFocus } from './components/CommercialFocus';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceGallery } from './components/ExperienceGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QuoteCalculator } from './components/QuoteCalculator';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BrochureModal } from './components/BrochureModal';
import { Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [scopedFormData, setScopedFormData] = useState<{
    serviceType: string;
    propertyType: string;
    estimatedArea: string;
    notes: string;
  } | null>(null);

  const scrollToQuote = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setScopedFormData({
      serviceType: serviceTitle.includes('Install')
        ? 'Installation'
        : serviceTitle.includes('Maint')
        ? 'Maintenance'
        : 'Repairs',
      propertyType: 'Shopping Centre / Mall',
      estimatedArea: 'Medium Commercial (300m² – 800m²)',
      notes: `Inquiring directly regarding ${serviceTitle}.`,
    });
    scrollToQuote();
  };

  const handleApplyScopeFromEstimator = (scopeSummary: {
    serviceType: string;
    propertyType: string;
    estimatedArea: string;
    notes: string;
  }) => {
    setScopedFormData(scopeSummary);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Bar Header */}
      <Navbar onOpenQuote={scrollToQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={scrollToQuote} onViewServices={scrollToServices} />

        {/* About M&I Africa Holdings */}
        <AboutSection onOpenQuote={scrollToQuote} />

        {/* Commercial Mall & Shopping Centre Focus */}
        <CommercialFocus onOpenQuote={scrollToQuote} />

        {/* Core Services: Installation, Maintenance, Repairs */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* Proven Experience & Project Gallery */}
        <ExperienceGallery
          onOpenBrochure={() => setBrochureModalOpen(true)}
          onOpenQuote={scrollToQuote}
        />

        {/* Why Choose Us: 4 Core Brand Pillars */}
        <WhyChooseUs />

        {/* Interactive Scope Estimator */}
        <QuoteCalculator onApplyScopeToForm={handleApplyScopeFromEstimator} />

        {/* Commercial FAQs */}
        <FaqSection />

        {/* Contact & Quotation Request Section */}
        <ContactSection initialScope={scopedFormData} />
      </main>

      {/* Corporate Quiet Footer */}
      <Footer onOpenQuote={scrollToQuote} />

      {/* Marketing Flyer / Brochure Modal */}
      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        onOpenQuote={scrollToQuote}
      />

      {/* Floating Quick Action CTA for mobile and fast contact (Within 15% mobile sticky cap) */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2">
        <a
          href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Hello%20M%26I%20Africa%20Holdings%2C%20I%20am%20inquiring%20about%20commercial%20air%20conditioning%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp M&I Africa Holdings"
          className="p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center group active:scale-95"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden group-hover:inline-block ml-2 text-xs font-semibold pr-1 whitespace-nowrap">
            WhatsApp
          </span>
        </a>

        <a
          href={`tel:${COMPANY_INFO.phoneClean}`}
          aria-label={`Call ${COMPANY_INFO.phone}`}
          className="p-3 bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-slate-700 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center group active:scale-95"
          title="Call Direct"
        >
          <Phone className="w-5 h-5" />
          <span className="hidden group-hover:inline-block ml-2 text-xs font-semibold text-white pr-1 whitespace-nowrap">
            {COMPANY_INFO.phone}
          </span>
        </a>
      </div>
    </div>
  );
}
