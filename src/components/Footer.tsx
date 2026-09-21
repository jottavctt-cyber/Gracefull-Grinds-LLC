import React from 'react';
import { Phone, MapPin, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#011A14] border-t border-[#F7F4EA]/10 text-[#F7F4EA]/70 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#F7F4EA]/10">
          {/* Col 1: Brand & Bio (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#7FA85B] flex items-center justify-center text-[#022B22] font-serif font-bold text-sm">
                <span>G</span>
              </div>
              <span className="text-[#F7F4EA] font-serif font-medium text-base tracking-tight">
                {BUSINESS_INFO.brandName}
              </span>
            </div>

            <p className="text-xs text-[#F7F4EA]/70 leading-relaxed max-w-sm">
              A family-operated landscaping company based in Madisonville, Kentucky. Transforming yards with care, precision, and reliable hands-on service.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#7FA85B] hover:bg-[#8eb869] text-[#022B22] text-xs font-semibold tracking-tight transition-all cursor-pointer shadow-sm"
              >
                <span>{BUSINESS_INFO.primaryCTA}</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-serif font-semibold uppercase tracking-wider text-[#F7F4EA]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#7FA85B] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#7FA85B] transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#7FA85B] transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#7FA85B] transition-colors">Projects</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#7FA85B] transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#7FA85B] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-serif font-semibold uppercase tracking-wider text-[#F7F4EA]">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#7FA85B] transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-serif font-semibold uppercase tracking-wider text-[#F7F4EA]">
              Madisonville Location
            </h4>

            <div className="flex items-center gap-2.5 text-xs">
              <Phone className="w-3.5 h-3.5 text-[#7FA85B] shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-[#7FA85B] transition-colors font-medium">
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#7FA85B] shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.fullAddress}</span>
            </div>
            
            <p className="text-[11px] text-[#F7F4EA]/50 pt-1">
              Family-operated in Madisonville, Kentucky.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F7F4EA]/60">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_INFO.legalName}. All rights reserved. Madisonville, Kentucky.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#7FA85B] transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
