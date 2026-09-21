import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ProcessSection } from './components/ProcessSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  // Initialize Lenis smooth scroll matching the Green Haven reference specification
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenQuote = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#022B22] text-[#F7F4EA] flex flex-col selection:bg-[#7FA85B] selection:text-[#022B22] font-sans">
      {/* 1. Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Sections - Ordered Exactly as Green Haven Reference Template */}
      <main className="flex-grow">
        {/* 2. Hero Section with entrance animation, word-by-word reveal, avatars, pill CTAs */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* 3. Stats Section */}
        <StatsSection />

        {/* 4. About Section */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* 5. Services Section (4 Verified Services with Exact Reference Images) */}
        <Services onOpenQuote={handleOpenQuote} />

        {/* 6. Why Choose Us Section (4 Customer-Centered Cards with Exact Reference Images) */}
        <WhyChooseUs />

        {/* 7. Projects / Transformations Gallery (6 Cards with Category Filter) */}
        <ProjectsGallery onOpenQuote={() => handleOpenQuote()} />

        {/* 8. Process Section (4 Steps) */}
        <ProcessSection onOpenQuote={() => handleOpenQuote()} />

        {/* 9. Reviews / Testimonials Section with Featured Asset */}
        <ReviewsSection />

        {/* 10. FAQ Section */}
        <FAQSection />

        {/* 11. Bottom CTA Banner */}
        <CTASection onOpenQuote={() => handleOpenQuote()} />

        {/* 12. Contact & Estimate Inquiry Section */}
        <ContactSection prefilledService={selectedService} />
      </main>

      {/* 13. Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* Floating Quote Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={handleCloseQuote}
        prefillService={selectedService}
      />
    </div>
  );
}
