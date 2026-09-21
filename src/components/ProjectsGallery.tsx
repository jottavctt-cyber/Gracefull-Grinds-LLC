import React, { useState } from 'react';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { PROJECTS_GALLERY, BUSINESS_INFO, ASSETS } from '../data/content';

interface ProjectsGalleryProps {
  onOpenQuote: () => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS_GALLERY[0] | null>(null);

  const filterCategories = ['All', 'Custom Landscaping', 'Hardscaping', 'Tree Trimming', 'Landscape Maintenance'];

  const filteredProjects = PROJECTS_GALLERY.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#011A14] relative overflow-hidden">
      {/* Decorative botanical leaf */}
      <div className="absolute top-1/3 -left-28 w-[460px] h-[460px] pointer-events-none opacity-20 select-none rotate-[46deg]">
        <img
          src={ASSETS.leafAsset}
          alt=""
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#022B22] border border-[#7FA85B]/30 mb-3">
              <span className="text-[11px] uppercase tracking-wider text-[#7FA85B] font-semibold">
                Featured Work &amp; Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#F7F4EA]">
              Outdoor Property Transformations
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#7FA85B] text-[#022B22] font-semibold shadow-sm'
                    : 'bg-[#022B22]/80 text-[#F7F4EA]/70 hover:text-white border border-[#F7F4EA]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Grid Cards with Reference Assets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-[24px] bg-[#022B22] border border-[#F7F4EA]/10 hover:border-[#7FA85B]/40 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#011A14]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022B22] via-transparent to-transparent opacity-80" />

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#022B22]/85 backdrop-blur-md text-[11px] font-medium text-[#7FA85B] border border-[#F7F4EA]/15">
                    {project.category}
                  </span>
                </div>

                {/* Expand overlay button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#022B22]/80 backdrop-blur-md text-[#F7F4EA] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-[#F7F4EA]/20 hover:text-[#7FA85B] cursor-pointer"
                  aria-label="View larger"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-base sm:text-lg font-serif font-normal text-[#F7F4EA] mb-2 group-hover:text-[#7FA85B] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#F7F4EA]/70 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="pt-3 border-t border-[#F7F4EA]/10 flex items-center justify-between">
                  <span className="text-[11px] text-[#F7F4EA]/50">Madisonville, KY Service</span>
                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7FA85B] hover:text-[#F7F4EA] transition-colors cursor-pointer"
                  >
                    <span>Request Similar Scope</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-[24px] bg-[#022B22]/80 border border-[#F7F4EA]/15 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg sm:text-xl font-serif text-[#F7F4EA] mb-1">
              Have an outdoor project in mind?
            </h4>
            <p className="text-xs sm:text-sm text-[#F7F4EA]/70">
              Get an accurate estimate tailored to your property layout, trimming requirements, and vision.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#7FA85B] hover:bg-[#8eb869] text-[#022B22] text-xs font-semibold tracking-tight transition-all active:scale-95 shadow-md cursor-pointer"
          >
            <span>{BUSINESS_INFO.primaryCTA}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Lightbox / Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-3xl w-full rounded-2xl overflow-hidden bg-[#022B22] border border-[#F7F4EA]/20 shadow-2xl p-6">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="rounded-xl overflow-hidden aspect-[16/10] mb-4 bg-black">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-xs uppercase tracking-wider text-[#7FA85B] font-semibold">
              {selectedProject.category}
            </span>
            <h3 className="text-xl font-serif text-[#F7F4EA] mt-1 mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#F7F4EA]/80 mb-6">
              {selectedProject.description}
            </p>
            <button
              onClick={() => {
                setSelectedProject(null);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-full bg-[#7FA85B] text-[#022B22] text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Quote for This Service</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
