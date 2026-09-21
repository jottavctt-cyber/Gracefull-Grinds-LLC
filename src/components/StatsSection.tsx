import React from 'react';
import { STATS } from '../data/content';

export const StatsSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#011A14] border-t border-b border-[#F7F4EA]/10 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-[11px] sm:text-xs uppercase tracking-widest text-[#7FA85B] font-semibold">
            Dedicated Residential Landscaping in Madisonville, KY
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-[20px] bg-[#022B22]/70 border border-[#F7F4EA]/10 text-center hover:border-[#7FA85B]/30 transition-all duration-300"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#F7F4EA] tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-[#F7F4EA]/70 font-normal">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
