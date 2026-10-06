import React from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenQuote: () => void;
  onViewServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onViewServices }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800">
      {/* Background architectural glow & subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed kicker (Zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Cooling Today</span>
              <span className="text-slate-500" aria-hidden="true">•</span>
              <span>Comfort Tomorrow</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-white">Air Conditioning Solutions</span> Partner
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              We provide professional air conditioning solutions designed to keep your spaces cool, comfortable and running at their best — all year round. Proven specialists in commercial shopping centres, retail malls, and corporate properties.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-lg shadow-cyan-400/20 active:scale-95 cursor-pointer whitespace-nowrap"
              >
                <span>Request a Free Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-800 hover:border-cyan-400/50 border border-slate-700 rounded-lg transition-all active:scale-95 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Us Today: {COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* Clean trust metadata (No pills) */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Shopping Centres & Malls</span>
              </div>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Installation, Maintenance & Repairs</span>
              </div>
              <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Kyalami Boulevard Estate, 1685</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (16:9 dominant visual carrier) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              {/* Fallback container with image */}
              <div className="aspect-[4/3] sm:aspect-[16/10] w-full relative bg-slate-900">
                <img
                  src="/src/assets/images/hero_commercial_hvac_1791297090663.jpg"
                  alt="Commercial air conditioning installation in modern shopping mall"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    // Safe styling fallback
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Gradient scrim for depth and contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Floating summary label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Commercial Mall Projects</p>
                      <p className="text-[11px] text-slate-400">Proven Installations Across the Region</p>
                    </div>
                  </div>
                  <button
                    onClick={onViewServices}
                    className="text-xs font-medium text-cyan-400 hover:text-cyan-300 underline underline-offset-2 cursor-pointer"
                  >
                    View Services
                  </button>
                </div>
              </div>
            </div>

            {/* Quick feature callout box */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <p className="text-xs text-slate-400">Operational Focus</p>
                <p className="text-sm font-semibold text-white">Minimal Business Disruption</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
                <p className="text-xs text-slate-400">Response Standard</p>
                <p className="text-sm font-semibold text-white">Rapid On-Site Diagnostics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
