import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto">
        <div
          className={`flex items-center justify-between px-5 sm:px-6 py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#022B22]/90 backdrop-blur-md border border-[#F7F4EA]/15 shadow-2xl shadow-black/40'
              : 'bg-[#022B22]/75 backdrop-blur-md border border-[#F7F4EA]/10'
          }`}
        >
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-[#7FA85B] flex items-center justify-center text-[#022B22] font-serif font-bold text-sm shadow-sm">
              <span>G</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#F7F4EA] font-medium text-sm tracking-tight leading-none group-hover:text-[#7FA85B] transition-colors">
                {BUSINESS_INFO.brandName}
              </span>
              <span className="text-[10px] text-[#F7F4EA]/60 font-normal tracking-wide uppercase mt-0.5">
                Madisonville, KY
              </span>
            </div>
          </a>

          {/* Center Links (Green Haven Navigation Geometry) */}
          <nav className="hidden min-[810px]:flex items-center gap-7 text-xs sm:text-sm font-normal text-[#F7F4EA]/80">
            <a href="#hero" className="hover:text-[#F7F4EA] transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-[#F7F4EA] transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-[#F7F4EA] transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-[#F7F4EA] transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#F7F4EA] transition-colors">
              Contact
            </a>
          </nav>

          {/* Right CTA Button (Pill with Green Haven Accent) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-xs text-[#F7F4EA]/70 hover:text-[#F7F4EA] font-medium px-3 py-1.5 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#7FA85B]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7FA85B] hover:bg-[#8eb869] text-[#022B22] text-xs font-semibold tracking-tight transition-all duration-200 active:scale-95 cursor-pointer shadow-md"
            >
              <span>{BUSINESS_INFO.primaryCTA}</span>
              <div className="w-4 h-4 rounded-full bg-[#022B22] text-[#7FA85B] flex items-center justify-center">
                <ArrowUpRight className="w-2.5 h-2.5 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex min-[810px]:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/5 text-[#F7F4EA] hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drop down */}
        {mobileMenuOpen && (
          <div className="min-[810px]:hidden mt-2 p-5 rounded-2xl bg-[#022B22]/95 backdrop-blur-xl border border-[#F7F4EA]/15 shadow-2xl flex flex-col gap-3.5 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#F7F4EA]/80 hover:text-white py-1"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#F7F4EA]/80 hover:text-white py-1"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#F7F4EA]/80 hover:text-white py-1"
            >
              Services
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#F7F4EA]/80 hover:text-white py-1"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-[#F7F4EA]/80 hover:text-white py-1"
            >
              Contact
            </a>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-xs text-[#7FA85B] font-semibold flex items-center justify-center gap-1.5 py-2.5 rounded-full bg-white/5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-full bg-[#7FA85B] hover:bg-[#8eb869] text-[#022B22] text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>{BUSINESS_INFO.primaryCTA}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
