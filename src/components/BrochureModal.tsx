import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, FileText, Phone, Download, ExternalLink } from 'lucide-react';
import { FLYER_MEDIA, COMPANY_INFO } from '../data/companyData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({
  isOpen,
  onClose,
  onOpenQuote,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [imageFailed, setImageFailed] = useState<Record<number, boolean>>({});

  if (!isOpen) return null;

  const currentItem = FLYER_MEDIA[currentPage];

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : FLYER_MEDIA.length - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < FLYER_MEDIA.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                M&I Africa Holdings Marketing Brochure
              </h3>
              <p className="text-xs text-slate-400">
                Official Company Flyer & Capability Showcase (Page {currentPage + 1} of {FLYER_MEDIA.length})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Media Body */}
        <div className="relative flex-1 bg-slate-950 p-4 sm:p-6 flex items-center justify-center overflow-auto min-h-[400px]">
          {imageFailed[currentPage] ? (
            <div className="text-center p-10 max-w-md space-y-4">
              <FileText className="w-12 h-12 text-slate-600 mx-auto" />
              <h4 className="text-base font-semibold text-white">
                {currentItem.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {currentItem.subtitle}. Call our Kyalami office at{' '}
                <strong className="text-cyan-400">{COMPANY_INFO.phone}</strong> to request an in-person printed corporate pack or site survey.
              </p>
            </div>
          ) : (
            <div className="max-h-[62vh] max-w-full flex items-center justify-center">
              <img
                src={currentItem.url}
                alt={currentItem.title}
                referrerPolicy="no-referrer"
                onError={() => {
                  setImageFailed((prev) => ({ ...prev, [currentPage]: true }));
                }}
                className="max-h-[60vh] max-w-full object-contain rounded-lg border border-slate-800 shadow-lg"
              />
            </div>
          )}

          {/* Navigation overlay controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors cursor-pointer"
            aria-label="Previous flyer page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors cursor-pointer"
            aria-label="Next flyer page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span className="font-semibold text-slate-200">{currentItem.title}</span>
            <span className="hidden sm:inline"> — {currentItem.subtitle}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg cursor-pointer"
            >
              <span>Get Quotation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
