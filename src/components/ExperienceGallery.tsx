import React, { useState } from 'react';
import { Building, MapPin, Check, FileText, ArrowUpRight } from 'lucide-react';
import { PROJECT_STUDIES } from '../data/companyData';
import { ProjectCaseStudy } from '../types';

interface ExperienceGalleryProps {
  onOpenBrochure: () => void;
  onOpenQuote: () => void;
}

export const ExperienceGallery: React.FC<ExperienceGalleryProps> = ({
  onOpenBrochure,
  onOpenQuote,
}) => {
  const [filter, setFilter] = useState<'all' | 'shopping-centre' | 'commercial' | 'maintenance'>('all');

  const filteredProjects =
    filter === 'all'
      ? PROJECT_STUDIES
      : PROJECT_STUDIES.filter((p) => p.category === filter);

  return (
    <section id="experience" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-100">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">
              Proven Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Experience You Can Trust
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              M&I Africa Holdings has successfully completed air conditioning installations in various shopping centres and malls across the region.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenBrochure}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300/80 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-4 h-4 text-cyan-700" />
              <span>View Marketing Flyer</span>
            </button>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>Get Free Quotation</span>
            </button>
          </div>
        </div>

        {/* Interactive Filter Controls (Functional Button Elements) */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'shopping-centre', label: 'Shopping Centres & Malls' },
            { id: 'commercial', label: 'Commercial Offices' },
            { id: 'maintenance', label: 'Planned Maintenance' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                filter === tab.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] w-full relative overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="flex items-center gap-1 font-medium bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {project.location}
                    </span>
                    <span className="text-[11px] text-slate-200 bg-slate-900/80 px-2 py-0.5 rounded">
                      {project.systemType}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.scope}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-medium flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  {project.highlight}
                </span>
                <button
                  onClick={onOpenQuote}
                  className="font-semibold text-slate-900 hover:text-cyan-600 flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Similar Scope</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
