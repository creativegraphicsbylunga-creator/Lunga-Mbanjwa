import React from 'react';
import { ShoppingBag, Building2, Store, Clock, ShieldCheck, ThermometerSnowflake, Sparkles } from 'lucide-react';

interface CommercialFocusProps {
  onOpenQuote: () => void;
}

export const CommercialFocus: React.FC<CommercialFocusProps> = ({ onOpenQuote }) => {
  const sectors = [
    {
      icon: ShoppingBag,
      title: 'Shopping Centres & Malls',
      description:
        'High-density foot traffic requires specialized multi-zone air distribution, quiet central chillers, and dedicated fresh-air make-up systems that keep shoppers comfortable across all atrium levels.',
      features: ['Central VRF & Chiller Plants', 'Night-Shift Off-Peak Work', 'Food Court Ventilation & Odor Control'],
    },
    {
      icon: Store,
      title: 'Retail Stores & Supermarkets',
      description:
        'From high-end fashion boutiques with discrete ceiling cassettes to supermarkets requiring precise temperature control to protect perishables without wasting energy.',
      features: ['Ceiling Cassette & Concealed Ducts', 'Rapid Fault Breakdown Response', 'Low Noise Decibel Operation'],
    },
    {
      icon: Building2,
      title: 'Commercial Business Premises',
      description:
        'Multi-storey corporate headquarters, office parks, and commercial campuses requiring zoned temperature regulation and scheduled preventative quarterly servicing.',
      features: ['Individual Office Thermostat Controls', 'Preventative SLA Agreements', 'Smart Energy Efficiency Tuning'],
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
            Commercial Air Conditioning Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineered for Shopping Centres, Malls & Business Premises
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Our solutions are designed to help businesses maintain comfortable environments while supporting the reliable operation of their air conditioning systems.
          </p>
        </div>

        {/* 3 Sector Breakdown Bento */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-500/50 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{sec.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sec.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-700/60 space-y-2">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Solutions:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {sec.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Guarantee Strip */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-800 via-slate-850 to-slate-800 border border-slate-700 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <ThermometerSnowflake className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>Are You Planning a Mall Retrofit or Commercial HVAC Overhaul?</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak with our senior commercial project engineers for an on-site feasibility assessment and detailed airflow quotation.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-md active:scale-95"
          >
            Request Commercial Assessment
          </button>
        </div>
      </div>
    </section>
  );
};
