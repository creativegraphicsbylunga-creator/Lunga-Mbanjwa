import React from 'react';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xs">
                M&I
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                M&I Africa Holdings
              </span>
            </div>

            <p className="text-slate-400 max-w-sm leading-relaxed">
              Your Trusted Air Conditioning Solutions Partner. Commercial air conditioning installation, preventative maintenance and rapid repairs across shopping centres, malls, and commercial facilities.
            </p>

            <div className="text-xs text-cyan-400 font-medium">
              Cooling Today • Comfort Tomorrow
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan-400 transition-colors">
                  Services & Specializations
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  Shopping Centres & Malls Experience
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-cyan-400 transition-colors">
                  HVAC Scope Estimator
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Request Free Quotation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Premises & Contact
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-white hover:text-cyan-400 font-semibold transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold transition-colors cursor-pointer text-xs"
                >
                  Request a Free Quotation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet Sub-footer */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} M&I Africa Holdings (Pty) Ltd. All rights reserved. Commercial Air Conditioning Specialists.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
