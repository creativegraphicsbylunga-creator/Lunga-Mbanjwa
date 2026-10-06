import React, { useState } from 'react';
import { Calculator, ArrowRight, MessageSquare, Phone, Check, RefreshCw } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuoteCalculatorProps {
  onApplyScopeToForm: (scopeSummary: {
    serviceType: string;
    propertyType: string;
    estimatedArea: string;
    notes: string;
  }) => void;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ onApplyScopeToForm }) => {
  const [serviceType, setServiceType] = useState('Installation');
  const [propertyType, setPropertyType] = useState('Shopping Centre / Mall');
  const [scale, setScale] = useState('Medium Commercial (300m² – 800m²)');
  const [nightShift, setNightShift] = useState(true);
  const [bmsIntegration, setBmsIntegration] = useState(false);

  // Recommendations based on selection
  const getSystemRecommendation = () => {
    if (serviceType === 'Installation') {
      if (propertyType.includes('Mall') || propertyType.includes('Shopping')) {
        return 'Commercial VRF Multi-Zone System with Linear Diffusers & Central Control';
      }
      if (propertyType.includes('Office')) {
        return 'Multi-Split Ceiling Cassettes with Individual Room Inverter Controllers';
      }
      return 'Ducted Split Units with High Energy-Efficiency Rating';
    }
    if (serviceType === 'Maintenance') {
      return 'Quarterly SLA Preventative Servicing (Chemical Coil Wash, Sanitization, Pressure Checks)';
    }
    return 'Priority Diagnostic Service with Mobile Rapid-Response Parts Unit';
  };

  const getEstimatedTurnaround = () => {
    if (serviceType === 'Repairs') return 'Same-Day / Within 4 Hours for Commercial Emergency';
    if (serviceType === 'Maintenance') return 'Scheduled at your convenience (inc. after-hours)';
    return 'Detailed on-site engineering survey within 24–48 hours';
  };

  const handleApplyToForm = () => {
    const summary = {
      serviceType,
      propertyType,
      estimatedArea: scale,
      notes: `Requirements: Recommended System: ${getSystemRecommendation()}. After-hours work needed: ${
        nightShift ? 'Yes' : 'Standard hours'
      }. BMS Integration: ${bmsIntegration ? 'Yes' : 'No'}.`,
    };
    onApplyScopeToForm(summary);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello M&I Africa Holdings, I would like to request a quotation for:
Service: Air Conditioning ${serviceType}
Premises: ${propertyType}
Scope: ${scale}
After-Hours Work: ${nightShift ? 'Required' : 'Standard'}
BMS Integration: ${bmsIntegration ? 'Required' : 'None'}
System Recommended: ${getSystemRecommendation()}`
  );

  return (
    <section id="estimator" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider flex items-center gap-1.5">
            <Calculator className="w-4 h-4 text-cyan-700" />
            <span>Interactive Project Scope Estimator</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Configure Your HVAC Project Scope
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Specify your commercial property details below to calculate recommended air conditioning systems and turnaround timelines.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6">
            {/* Step 1: Service Type */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                1. Select Required Service
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Installation', 'Maintenance', 'Repairs'].map((srv) => (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => setServiceType(srv)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      serviceType === srv
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Property Type */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                2. Property or Facility Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 font-medium"
              >
                <option value="Shopping Centre / Mall">Shopping Centre / Shopping Mall</option>
                <option value="Retail Store / Boutique">Retail Store / Fashion Boutique</option>
                <option value="Commercial Office Park">Commercial Office Park / Corporate Suites</option>
                <option value="Supermarket / Food Court">Supermarket / Food Court / Restaurant</option>
                <option value="Medical Suite / Clinic">Medical Facility / Healthcare Suites</option>
                <option value="Industrial / Warehouse Facility">Light Industrial / Distribution Warehouse</option>
              </select>
            </div>

            {/* Step 3: Estimated Area / Scale */}
            <div>
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                3. Estimated Floor Area / Scale
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Compact Unit (Up to 150m²)',
                  'Standard Retail (150m² – 300m²)',
                  'Medium Commercial (300m² – 800m²)',
                  'Large Mall Wing / Multi-Floor (800m²+)',
                ].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setScale(item)}
                    className={`p-3 rounded-lg text-left text-xs font-medium transition-all cursor-pointer ${
                      scale === item
                        ? 'bg-cyan-50 border-2 border-cyan-600 text-cyan-950 font-semibold'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Special Commercial Parameters */}
            <div className="pt-2 border-t border-slate-200 space-y-3">
              <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider">
                4. Operational Preferences
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nightShift}
                    onChange={(e) => setNightShift(e.target.checked)}
                    className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                  />
                  <span className="text-xs text-slate-700 font-medium">
                    Off-Peak / Night-Shift Work Required (Zero shopping trading disruption)
                  </span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-lg bg-white border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bmsIntegration}
                    onChange={(e) => setBmsIntegration(e.target.checked)}
                    className="w-4 h-4 text-cyan-600 rounded focus:ring-cyan-500"
                  />
                  <span className="text-xs text-slate-700 font-medium">
                    Building Management System (BMS) / Central Thermostat Integration
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-lg space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Engineered Scope Assessment
              </span>
              <h3 className="text-xl font-bold text-white">
                Preliminary Project Recommendation
              </h3>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-slate-400 font-medium">Recommended System Architecture</p>
                <p className="text-sm font-semibold text-white mt-1">
                  {getSystemRecommendation()}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <p className="text-slate-400 font-medium">Expected Response / Survey Timeline</p>
                <p className="text-sm font-semibold text-cyan-300 mt-1">
                  {getEstimatedTurnaround()}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 space-y-1">
                <p className="text-slate-400 font-medium">Installation Parameters</p>
                <p className="text-slate-200">
                  <span className="font-semibold">Schedule:</span>{' '}
                  {nightShift ? 'Off-Hours / Night Installation' : 'Standard Daytime Business Hours'}
                </p>
                <p className="text-slate-200">
                  <span className="font-semibold">Control Network:</span>{' '}
                  {bmsIntegration ? 'Smart Central BMS Protocol' : 'Standard Digital Multi-Zone Thermostats'}
                </p>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 space-y-3">
              <button
                type="button"
                onClick={handleApplyToForm}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md active:scale-98"
              >
                <span>Apply Scope & Request Free Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneClean}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send WhatsApp</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center">
              All quotations are 100% free with no obligation. On-site assessments available across Gauteng & regional hubs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
