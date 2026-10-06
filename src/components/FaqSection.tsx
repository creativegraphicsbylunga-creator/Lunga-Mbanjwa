import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQ_ITEMS, COMPANY_INFO } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-cyan-700" />
            <span>Common Inquiries</span>
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600">
            Clear answers regarding commercial air conditioning installations, maintenance schedules, and retail center services.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-cyan-700 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-cyan-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 p-5 rounded-xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-sm font-bold text-slate-900">Have a specific technical question?</p>
            <p className="text-xs text-slate-600">Our engineering technicians are on call to assist.</p>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 text-xs font-semibold whitespace-nowrap"
          >
            <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
