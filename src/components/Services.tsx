import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES, BUSINESS_INFO, ASSETS } from '../data/content';

interface ServicesProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuote }) => {
  return (
    <section id="services" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#011A14] relative overflow-hidden">
      {/* Decorative botanical leaf */}
      <div className="absolute -bottom-16 -left-20 w-[420px] h-[420px] pointer-events-none opacity-15 select-none rotate-[-15deg]">
        <img
          src={ASSETS.leafAsset}
          alt=""
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#022B22] border border-[#7FA85B]/30 mb-3">
              <span className="text-[11px] uppercase tracking-wider text-[#7FA85B] font-semibold">
                What We Do
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#F7F4EA]">
              Residential Landscaping &amp; Outdoor Services
            </h2>
          </div>
          <div>
            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7FA85B] hover:bg-[#8eb869] text-[#022B22] text-xs font-semibold tracking-tight transition-all duration-200 active:scale-95 cursor-pointer shadow-sm"
            >
              <span>{BUSINESS_INFO.primaryCTA}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Services Grid (4 Verified Services matching Green Haven card layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-[22px] bg-[#022B22]/90 border border-[#F7F4EA]/10 hover:border-[#7FA85B]/40 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-2xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#011A14]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#022B22] via-transparent to-transparent opacity-60" />
                
                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#022B22]/85 backdrop-blur-md text-[10px] font-medium text-[#7FA85B] border border-[#F7F4EA]/10">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-serif font-normal text-[#F7F4EA] mb-2 group-hover:text-[#7FA85B] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  
                  {/* Problem & Solution description */}
                  <p className="text-xs text-[#F7F4EA]/70 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-[11px] text-[#F7F4EA]/60 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#7FA85B]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-2 border-t border-[#F7F4EA]/10">
                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="w-full py-2.5 px-4 rounded-full bg-white/5 hover:bg-[#7FA85B] text-[#F7F4EA]/90 hover:text-[#022B22] text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer border border-[#F7F4EA]/10 hover:border-transparent"
                  >
                    <span>Request a Free Quote</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
