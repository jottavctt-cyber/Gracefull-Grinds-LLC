import React from 'react';
import { ArrowUpRight, Phone, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, ASSETS } from '../data/content';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#022B22] relative overflow-hidden">
      {/* Decorative Botanical Leaf */}
      <div className="absolute top-10 -right-20 w-[450px] h-[450px] pointer-events-none opacity-20 select-none rotate-[56deg]">
        <img
          src={ASSETS.leafAsset}
          alt=""
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-[28px] overflow-hidden border border-[#F7F4EA]/15 shadow-2xl bg-[#011A14]">
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={ASSETS.aboutImage}
                  alt="Gracefull Grinds landscape and outdoor transformation in Madisonville Kentucky"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#022B22]/90 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating trust badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#022B22]/85 backdrop-blur-md border border-[#F7F4EA]/15">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#7FA85B]/20 text-[#7FA85B] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#F7F4EA]">{BUSINESS_INFO.fullAddress}</p>
                    <p className="text-[10px] text-[#F7F4EA]/60">Serving Madisonville &amp; Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#033c30] border border-[#7FA85B]/30 mb-4">
              <span className="text-[11px] uppercase tracking-wider text-[#7FA85B] font-semibold">
                About Gracefull Grinds
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#F7F4EA] leading-[1.15] tracking-tight mb-6">
              Transforming Overlooked Yards with Care and Hands-On Service
            </h2>

            <p className="text-sm sm:text-base text-[#F7F4EA]/80 font-normal leading-relaxed mb-6">
              Gracefull Grinds is a family-operated landscaping company based in Madisonville, Kentucky. We focus on transforming outdoor spaces that have been overlooked and bringing our clients' visions to life through thoughtful landscaping and hands-on service.
            </p>

            <p className="text-sm sm:text-base text-[#F7F4EA]/80 font-normal leading-relaxed mb-8">
              From tailored planting layouts and ongoing maintenance plans to specialized tree trimming for oak, maple, and pine, and custom hardscaping features, we provide reliable local communication and meticulous attention to every finished detail.
            </p>

            {/* Feature Bullets Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-9">
              <div className="p-4 rounded-xl bg-[#011A14]/70 border border-[#F7F4EA]/10 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#7FA85B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#F7F4EA] uppercase tracking-wider">Custom Vision</h4>
                  <p className="text-xs text-[#F7F4EA]/70 mt-1">Every solution is shaped specifically around your property layout and personal goals.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#011A14]/70 border border-[#F7F4EA]/10 flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-[#7FA85B] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-[#F7F4EA] uppercase tracking-wider">Care &amp; Precision</h4>
                  <p className="text-xs text-[#F7F4EA]/70 mt-1">Dedicated craftsmanship and complete cleanup so your yard is instantly ready to enjoy.</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#7FA85B] hover:bg-[#8eb869] text-[#022B22] text-xs font-semibold tracking-tight transition-all duration-200 active:scale-95 cursor-pointer shadow-md"
              >
                <span>{BUSINESS_INFO.primaryCTA}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#022B22] hover:bg-[#033c30] text-[#F7F4EA] border border-[#F7F4EA]/20 text-xs font-medium transition-all"
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
