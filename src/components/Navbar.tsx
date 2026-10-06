import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Scope Estimator', href: '#estimator' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white transition-all">
        {/* Strict 3-Zone Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark (Single clean text element) */}
          <a
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <span className="text-base tracking-tighter">M&I</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                M&I Africa Holdings
              </span>
              <span className="text-[11px] font-medium text-slate-400 tracking-wider uppercase">
                Air Conditioning Solutions
              </span>
            </div>
          </a>

          {/* Zone 2: 4-6 Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-cyan-400 transition-colors py-1 relative focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 Primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700 transition-colors whitespace-nowrap"
              title="Call M&I Africa Holdings"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer active:scale-95"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="p-2 text-cyan-400 bg-slate-800 rounded-lg sm:hidden"
              aria-label="Call Us"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-slate-950/80 backdrop-blur-sm pt-20">
          <div className="bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-base font-medium text-slate-200 hover:text-cyan-400 py-2 border-b border-slate-800/60"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-slate-800 rounded-lg border border-slate-700"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
              >
                <span>Request a Free Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-2 text-xs text-slate-400 flex items-center gap-1.5 justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Kyalami Boulevard Estate, Kyalami Hills</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
