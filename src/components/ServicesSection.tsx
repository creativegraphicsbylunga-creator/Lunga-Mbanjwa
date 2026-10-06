import React, { useState } from 'react';
import { Wrench, CheckCircle2, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [activeTabId, setActiveTabId] = useState<string>('installation');

  const activeService = SERVICES_DATA.find((s) => s.id === activeTabId) || SERVICES_DATA[0];

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
            Our Core Specializations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Professional Air Conditioning Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
            Complete turnkey HVAC engineering tailored for commercial shopping centres, retail stores, and corporate offices.
          </p>
        </div>

        {/* Interactive Segmented Selector (Functional Buttons) */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-xl border border-slate-300/80 max-w-full overflow-x-auto">
            {SERVICES_DATA.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTabId(service.id)}
                className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeTabId === service.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-300/50'
                }`}
              >
                <span className="mr-2 text-cyan-400 font-mono text-xs">{service.number}</span>
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Marquee Service Feature Spotlight */}
        <div className="mt-10 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative bg-slate-900 min-h-[300px] lg:min-h-full">
              <img
                src={activeService.image}
                alt={activeService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono text-cyan-300 bg-slate-900/80 px-2.5 py-1 rounded border border-cyan-500/30">
                  Commercial Grade Service {activeService.number}
                </span>
                <p className="mt-2 text-sm text-white font-medium">
                  {activeService.subtitle}
                </p>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-700 uppercase tracking-wider">
                    <span>M&I Service Portfolio</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeService.number}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    {activeService.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Key What We Offer List */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    What We Offer:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Commercial Benefits */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-cyan-600" />
                    Key Operational Benefits:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {activeService.benefits.map((b, idx) => (
                      <li key={idx} className="flex items-baseline gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-1" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-700">Ideal for: </span>
                  {activeService.recommendedFor}
                </div>
                <button
                  onClick={() => onSelectServiceForQuote(activeService.title)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  <span>Request Free Quotation</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Overview Service Cards Grid (Hairline borders, zero pill clutter) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              onClick={() => setActiveTabId(srv.id)}
              className={`p-6 rounded-xl border transition-all cursor-pointer ${
                activeTabId === srv.id
                  ? 'bg-white border-cyan-500 shadow-md ring-1 ring-cyan-500'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>SERVICE {srv.number}</span>
                <span className="text-cyan-600 font-sans font-medium text-xs">M&I Africa</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900">{srv.title}</h4>
              <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                {srv.description}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-cyan-700">
                <span>View Full Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
