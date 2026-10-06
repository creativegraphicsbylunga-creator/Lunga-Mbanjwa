import React from 'react';
import { ShieldCheck, Award, Clock, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { BRAND_PILLARS } from '../data/companyData';

export const WhyChooseUs: React.FC = () => {
  const icons = [ShieldCheck, Award, Clock, HeartHandshake];

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
            Our Commitments & Standards
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Why Choose M&I Africa Holdings?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            The values and operational principles that make us the preferred air conditioning partner for commercial properties and shopping centres across the region.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={pillar.number}
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-semibold">
                      {pillar.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-cyan-800 font-medium mt-0.5">
                      {pillar.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Standard Benchmark</span>
                  <span className="font-mono text-cyan-700 font-bold">{pillar.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
