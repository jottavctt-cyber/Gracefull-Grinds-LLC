import React from 'react';
import { ArrowUpRight, Phone, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, ASSETS } from '../data/content';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const headlineWords = BUSINESS_INFO.headline.split(' ');

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#022B22]"
    >
      {/* Hero Background Photography */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={ASSETS.heroSupporting}
          alt="Gracefull Grinds landscape and outdoor space in Madisonville KY"
          className="w-full h-full object-cover object-center"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Balanced contrast overlays so image is vividly visible while text is crisp */}
        <div className="absolute inset-0 bg-[#022B22]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#022B22] via-[#022B22]/35 to-[#022B22]/65" />
      </div>

      {/* Decorative Botanical Leaf Graphics */}
      <div className="absolute -top-12 -left-20 w-[420px] h-[420px] pointer-events-none z-[1] opacity-25 select-none rotate-[-25deg] filter blur-[0.5px]">
        <img
          src={ASSETS.leafAsset}
          alt=""
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="absolute top-1/3 -right-24 w-[480px] h-[480px] pointer-events-none z-[1] opacity-20 select-none rotate-[46deg] filter blur-[0.5px]">
        <img
          src={ASSETS.leafAsset}
          alt=""
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 w-full">
        {/* Main Content Column */}
        <div className="max-w-[880px] mx-auto text-center flex flex-col items-center">
          {/* Eyebrow entrance animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#022B22]/90 border border-[#7FA85B]/40 mb-6 backdrop-blur-md shadow-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#7FA85B] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#7FA85B]">
              {BUSINESS_INFO.eyebrow}
            </span>
          </motion.div>

          {/* Headline with Word-by-Word Reveal Animation */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[68px] font-serif font-normal text-[#F7F4EA] leading-[1.12] tracking-tight mb-6 text-center drop-shadow-md">
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: 'blur(10px)', y: 10 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.25em] last:mr-0"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Supporting Copy with Blur/Y entrance */}
          <motion.p
            initial={{ opacity: 0, filter: 'blur(2px)', y: 5 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-lg text-[#F7F4EA] font-normal leading-relaxed max-w-2xl mb-9 drop-shadow-sm"
          >
            {BUSINESS_INFO.supportingCopy}
          </motion.p>

          {/* Pill CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10"
          >
            {/* Primary CTA (Green Haven Pill) */}
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#7FA85B] hover:bg-[#8eb869] text-[#022B22] text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 active:scale-95 cursor-pointer shadow-xl shadow-[#7FA85B]/30"
            >
              <span>{BUSINESS_INFO.primaryCTA}</span>
              <div className="w-4 h-4 rounded-full bg-[#022B22] text-[#7FA85B] flex items-center justify-center">
                <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" />
              </div>
            </button>

            {/* Secondary CTA (Dark Translucent Pill) */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#022B22]/80 hover:bg-[#033c30] text-[#F7F4EA] border border-[#F7F4EA]/30 text-xs sm:text-sm font-medium transition-all duration-200 backdrop-blur-md shadow-lg"
            >
              <Phone className="w-3.5 h-3.5 text-[#7FA85B]" />
              <span>{BUSINESS_INFO.secondaryCTA}</span>
            </a>
          </motion.div>

          {/* Social Proof / Trust Proof Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-2"
          >
            {/* Avatars Stack */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#022B22]/80 backdrop-blur-md border border-[#F7F4EA]/15 shadow-sm">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  src={ASSETS.avatar1}
                  alt="Client"
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-[#022B22] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src={ASSETS.avatar2}
                  alt="Client"
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-[#022B22] object-cover"
                  referrerPolicy="no-referrer"
                />
                <img
                  src={ASSETS.avatar3}
                  alt="Client"
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-[#022B22] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-[#F7F4EA]">Madisonville Homeowners</p>
                <p className="text-[10px] text-[#F7F4EA]/70">Family-Operated Service</p>
              </div>
            </div>

            <div className="hidden sm:block h-4 w-px bg-[#F7F4EA]/30" />

            {/* Key trust badges */}
            <div className="flex items-center gap-4 text-xs text-[#F7F4EA] font-normal px-4 py-2 rounded-full bg-[#022B22]/80 backdrop-blur-md border border-[#F7F4EA]/15 shadow-sm">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#7FA85B]" />
                <span>Park Ave Base</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#7FA85B]" />
                <span>Custom Property Estimates</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
