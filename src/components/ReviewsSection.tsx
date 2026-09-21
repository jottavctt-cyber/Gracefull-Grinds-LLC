import React from 'react';
import { Quote } from 'lucide-react';
import { REVIEWS, ASSETS } from '../data/content';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#022B22] relative overflow-hidden">
      {/* Decorative leaf */}
      <div className="absolute top-12 -right-20 w-[420px] h-[420px] pointer-events-none opacity-20 select-none rotate-[-7deg]">
        <img
          src={ASSETS.leafAsset}
          alt=""
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#033c30] border border-[#7FA85B]/30 mb-3">
            <span className="text-[11px] uppercase tracking-wider text-[#7FA85B] font-semibold">
              Client Feedback
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#F7F4EA]">
            Homeowner Trust &amp; Satisfaction
          </h2>
        </div>

        {/* Featured Testimonial Hero Layout with Exact Reference Asset */}
        <div className="rounded-[32px] bg-[#011A14] border border-[#F7F4EA]/15 overflow-hidden shadow-2xl p-6 sm:p-10 lg:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Featured Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] lg:aspect-square bg-[#022B22]">
                <img
                  src={ASSETS.testimonialImage}
                  alt="Gracefull Grinds residential customer satisfaction"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011A14]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#022B22]/90 backdrop-blur-md border border-[#F7F4EA]/10">
                  <p className="text-xs font-semibold text-[#F7F4EA]">Madisonville Homeowner</p>
                  <p className="text-[10px] text-[#7FA85B]">Park Ave Area, Madisonville, KY</p>
                </div>
              </div>
            </div>

            {/* Right: Featured Quote */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <Quote className="w-10 h-10 text-[#7FA85B]/40 mb-4" />
              <blockquote className="text-lg sm:text-xl md:text-2xl font-serif font-normal text-[#F7F4EA] leading-relaxed mb-6">
                "{REVIEWS[0].quote}"
              </blockquote>
              <div className="pt-4 border-t border-[#F7F4EA]/10">
                <p className="text-sm font-semibold text-[#F7F4EA]">{REVIEWS[0].author}</p>
                <p className="text-xs text-[#F7F4EA]/60">{REVIEWS[0].location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.slice(1).map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-8 rounded-[24px] bg-[#011A14]/80 border border-[#F7F4EA]/10 hover:border-[#7FA85B]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#7FA85B]/40 mb-3" />
                <p className="text-xs sm:text-sm text-[#F7F4EA]/85 font-normal leading-relaxed mb-6">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#F7F4EA]/10">
                <h4 className="text-xs font-semibold text-[#F7F4EA]">
                  {review.author}
                </h4>
                <p className="text-[11px] text-[#7FA85B]">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
