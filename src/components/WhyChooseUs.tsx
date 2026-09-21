import React from 'react';
import { WHY_CHOOSE_US, ASSETS } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#022B22] relative overflow-hidden">
      {/* Decorative leaf */}
      <div className="absolute top-1/2 -right-24 w-[420px] h-[420px] pointer-events-none opacity-20 select-none rotate-[-25deg]">
        <img
          src={ASSETS.leafAsset}
          alt=""
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#033c30] border border-[#7FA85B]/30 mb-3">
            <span className="text-[11px] uppercase tracking-wider text-[#7FA85B] font-semibold">
              Why Gracefull Grinds
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#F7F4EA]">
            Built Around Care, Precision &amp; Local Service
          </h2>
        </div>

        {/* 4 Feature Cards with Exact Reference Assets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-[24px] bg-[#011A14]/90 border border-[#F7F4EA]/10 hover:border-[#7FA85B]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#022B22]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011A14] via-transparent to-transparent opacity-80" />
                <div className="absolute top-3 left-3">
                  <span className="w-7 h-7 rounded-full bg-[#022B22]/90 backdrop-blur-md text-[#7FA85B] font-serif font-bold text-xs flex items-center justify-center border border-[#F7F4EA]/10">
                    0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-[#7FA85B] font-semibold mb-1">
                    {item.subtitle}
                  </p>
                  <h3 className="text-lg font-serif font-normal text-[#F7F4EA] mb-2 group-hover:text-[#7FA85B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#F7F4EA]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
