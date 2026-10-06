import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Mail, Clock, Send, CheckCircle2, MessageSquare, AlertCircle, Copy, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { QuoteRequest } from '../types';

interface ContactSectionProps {
  initialScope?: {
    serviceType: string;
    propertyType: string;
    estimatedArea: string;
    notes: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialScope }) => {
  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceType: 'Installation',
    propertyType: 'Shopping Centre / Mall',
    estimatedArea: 'Medium Commercial (300m² – 800m²)',
    address: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quoteRef, setQuoteRef] = useState<string>('');
  const [copied, setCopied] = useState(false);

  // Sync when initialScope changes (e.g. from QuoteCalculator)
  useEffect(() => {
    if (initialScope) {
      setFormData((prev) => ({
        ...prev,
        serviceType: initialScope.serviceType || prev.serviceType,
        propertyType: initialScope.propertyType || prev.propertyType,
        estimatedArea: initialScope.estimatedArea || prev.estimatedArea,
        notes: initialScope.notes ? `${initialScope.notes}\n\n${prev.notes}`.trim() : prev.notes,
      }));
    }
  }, [initialScope]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!formData.fullName.trim()) {
      setError('Please provide your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 9) {
      setError('Please enter a valid telephone number (e.g., 079 597 1574).');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }

    setSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      const generatedRef = `MIA-${Math.floor(100000 + Math.random() * 900000)}`;
      setQuoteRef(generatedRef);
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const copyRefToClipboard = () => {
    navigator.clipboard.writeText(quoteRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello M&I Africa Holdings, I submitted quote request #${quoteRef || 'NEW'}:
Name: ${formData.fullName}
Company: ${formData.companyName || 'N/A'}
Phone: ${formData.phone}
Service: ${formData.serviceType}
Premises: ${formData.propertyType}
Address: ${formData.address || 'Gauteng'}
Notes: ${formData.notes || 'Please contact me regarding air conditioning services.'}`
  );

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
            Request a Free Quotation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Get in Touch with M&I Africa Holdings
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Looking for professional air conditioning installation, maintenance or repair services? Contact us today for a fast, no-obligation quotation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Direct Line & Fast Response
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>

              <div>
                <p className="text-xs text-slate-400">Call Us Anytime</p>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-cyan-300 transition-colors block mt-1"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="flex-1 text-center py-2 px-3 text-xs font-semibold bg-cyan-400 text-slate-950 rounded-lg hover:bg-cyan-300 transition-colors"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=Hello%20M%26I%20Africa%20Holdings%2C%20I%20would%20like%20to%20inquire%20about%20air%20conditioning%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 px-3 text-xs font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Business Premises Address */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-700 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Business Premises
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    No. 73 Kyalami Boulevard Estate<br />
                    1 Robin Road<br />
                    Kyalami Hills, 1685
                  </p>
                  <p className="text-xs text-cyan-800 font-semibold mt-2">
                    Gauteng, South Africa
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>

            {/* Service Coverage Area */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Regional Service Coverage
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating throughout Midrand, Kyalami, Sandton, Fourways, Johannesburg CBD & North, Centurion, Pretoria, and commercial hubs across the region.
              </p>
              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                <span>On-site inspections and commercial consultations available</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quotation Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            {submitted ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-slate-900">
                    Quotation Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Our commercial engineering team has received your request and will contact you promptly.
                  </p>
                </div>

                {/* Reference badge */}
                <div className="inline-flex items-center gap-3 p-3 px-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs text-slate-500">Reference:</span>
                  <span className="font-mono text-sm font-bold text-slate-900">{quoteRef}</span>
                  <button
                    onClick={copyRefToClipboard}
                    className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                    title="Copy reference"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Directly via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        phone: '',
                        email: '',
                        serviceType: 'Installation',
                        propertyType: 'Shopping Centre / Mall',
                        estimatedArea: 'Medium Commercial (300m² – 800m²)',
                        address: '',
                        notes: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs sm:text-sm cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Request a Free Commercial Quotation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Please provide your project details below and an M&I air conditioning specialist will reach out with a tailored quotation.
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Lunga Sithole"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company / Property Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Mall Management / Retail Store"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g., 079 597 1574"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g., facility@property.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Required
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium"
                    >
                      <option value="Installation">Air Conditioning Installation</option>
                      <option value="Maintenance">Air Conditioning Maintenance</option>
                      <option value="Repairs">Air Conditioning Repairs</option>
                      <option value="Full Comprehensive Contract">Full Installation & Maintenance Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Facility / Premises Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium"
                    >
                      <option value="Shopping Centre / Mall">Shopping Centre / Shopping Mall</option>
                      <option value="Retail Store / Boutique">Retail Store / Fashion Boutique</option>
                      <option value="Commercial Office Park">Commercial Office Park / Corporate Suites</option>
                      <option value="Supermarket / Food Court">Supermarket / Food Court</option>
                      <option value="Warehouse / Industrial">Light Industrial / Commercial Facility</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Premises Address / Location in Region
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Kyalami Hills / Sandton City / Centurion"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Details or Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your air conditioning requirements, number of units, current issues, or target installation timeframe..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Processing Quotation Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-cyan-400" />
                        <span>Send Free Quotation Request</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-500 text-center">
                  Your information is kept strictly confidential. By submitting, you request a free quotation from M&I Africa Holdings.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
