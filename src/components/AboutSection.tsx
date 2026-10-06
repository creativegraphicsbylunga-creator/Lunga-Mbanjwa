import React from 'react';
import { ShoppingBag, Wrench, Shield, CheckCircle, Clock, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual & Proof Metrics */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/src/assets/images/retail_air_conditioning_1791297116381.jpg"
                  alt="Modern commercial air conditioning installed by M&I Africa Holdings"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Inset verified highlight */}
              <div className="p-6 bg-slate-900 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      Specialized in Shopping Centres & Malls
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                      We understand how ambient temperature impacts retail dwell time, tenant satisfaction, and energy overhead.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Physical Footprint Callout */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-cyan-600 shrink-0" />
              <div className="text-xs">
                <p className="font-semibold text-slate-900">Headquartered in Kyalami Hills</p>
                <p className="text-slate-600">{COMPANY_INFO.address}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
                About M&I Africa Holdings
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                Delivering Reliable & Professional Air Conditioning Solutions
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              At <strong className="text-slate-900">M&I Africa Holdings</strong>, we are committed to delivering reliable and professional air conditioning solutions for businesses and commercial properties.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our services cover <strong className="text-slate-800">air conditioning installation, maintenance and repair</strong>, helping clients maintain comfortable, efficient and reliable environments throughout the year.
            </p>

            <div className="p-5 rounded-xl bg-cyan-50/70 border border-cyan-100 text-slate-800 space-y-2">
              <p className="text-sm font-semibold text-cyan-950 flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-700" />
                Proven Commercial Track Record
              </p>
              <p className="text-xs sm:text-sm text-cyan-900/90 leading-relaxed">
                With proven experience completing air conditioning installations in various shopping centres and malls across the region, we understand the importance of quality workmanship, dependable service and minimal disruption to your business.
              </p>
            </div>

            {/* Checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Commercial-grade precision & safety</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Turnkey installation & ductwork</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Preventative maintenance contracts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Rapid breakdown fault diagnosis</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                Discuss Your Commercial Premises
              </button>
              <a
                href="#services"
                className="text-xs sm:text-sm font-semibold text-cyan-700 hover:text-cyan-800 underline underline-offset-4"
              >
                Explore All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
