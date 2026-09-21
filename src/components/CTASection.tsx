import React from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { BUSINESS_INFO, ASSETS } from '../data/content';

interface CTASectionProps {
  onOpenQuote: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#022B22] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="relative rounded-[32px] overflow-hidden bg-[#011A14] border border-[#F7F4EA]/15 p-8 sm:p-14 md:p-18 text-center shadow-2xl">
          {/* Background image & overlay matching template bottom banner */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <img
              src={ASSETS.ctaBackground}
              alt="Outdoor lawn landscape banner"
              className="w-full h-full object-cover opacity-25"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#011A14] via-[#011A14]/85 to-[#011A14]/70" />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#022B22] border border-[#7FA85B]/30 mb-4">
              <span className="text-[11px] uppercase tracking-wider text-[#7FA85B] font-semibold">
                Start Your Project
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#F7F4EA] mb-4">
              Transform Your Yard with Care &amp; Precision
            </h2>
            <p className="text-sm text-[#F7F4EA]/80 leading-relaxed mb-8">
              Every outdoor space has unique potential. Contact Gracefull Grinds in Madisonville, KY for a clear, property-specific estimate on your custom landscaping, maintenance, tree trimming, or hardscaping project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#7FA85B] hover:bg-[#8eb869] text-[#022B22] text-xs sm:text-sm font-semibold tracking-tight transition-all active:scale-95 cursor-pointer shadow-lg shadow-[#7FA85B]/20"
              >
                <span>{BUSINESS_INFO.primaryCTA}</span>
                <div className="w-4 h-4 rounded-full bg-[#022B22] text-[#7FA85B] flex items-center justify-center">
                  <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" />
                </div>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#022B22]/70 hover:bg-[#033c30] text-[#F7F4EA] border border-[#F7F4EA]/20 text-xs sm:text-sm font-medium transition-all backdrop-blur-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#7FA85B]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
