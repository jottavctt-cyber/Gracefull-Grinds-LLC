import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROCESS_STEPS, BUSINESS_INFO } from '../data/content';

interface ProcessSectionProps {
  onOpenQuote: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#011A14] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#022B22] border border-[#7FA85B]/30 mb-3">
            <span className="text-[11px] uppercase tracking-wider text-[#7FA85B] font-semibold">
              How We Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#F7F4EA]">
            A Clear, Hands-On Process from Estimate to Walkthrough
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-[24px] bg-[#022B22]/90 border border-[#F7F4EA]/10 hover:border-[#7FA85B]/30 transition-all flex flex-col justify-between group shadow-lg"
            >
              <div>
                <span className="text-xs font-serif font-bold text-[#7FA85B] block mb-4">
                  Step {step.number}
                </span>
                <h3 className="text-base sm:text-lg font-serif font-normal text-[#F7F4EA] mb-2 group-hover:text-[#7FA85B] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-[#F7F4EA]/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <div className="text-center">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#7FA85B] hover:bg-[#8eb869] text-[#022B22] text-xs font-semibold tracking-tight transition-all duration-200 active:scale-95 cursor-pointer shadow-md"
          >
            <span>{BUSINESS_INFO.primaryCTA}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
