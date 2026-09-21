import React, { useState } from 'react';
import { Phone, MapPin, CheckCircle, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, ASSETS } from '../data/content';
import { QuoteFormData } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceNeeded: prefilledService || 'Custom Landscaping',
    projectDetails: '',
    propertyAddress: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#011A14] relative overflow-hidden">
      {/* Decorative leaf */}
      <div className="absolute -bottom-20 -right-20 w-[450px] h-[450px] pointer-events-none opacity-20 select-none rotate-[46deg]">
        <img
          src={ASSETS.leafAsset}
          alt=""
          className="w-full h-full object-contain"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#022B22] border border-[#7FA85B]/30 mb-3">
              <span className="text-[11px] uppercase tracking-wider text-[#7FA85B] font-semibold">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#F7F4EA] mb-4">
              Request Your Free Property Estimate
            </h2>
            <p className="text-sm text-[#F7F4EA]/80 leading-relaxed mb-8">
              Every yard has its own story and potential. Contact Gracefull Grinds LLC for a clear, property-specific estimate on custom landscaping, maintenance, tree trimming, or hardscaping in Madisonville, KY.
            </p>

            <div className="space-y-4 mb-8">
              {/* Phone */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#022B22] border border-[#F7F4EA]/10 hover:border-[#7FA85B]/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#033c30] text-[#7FA85B] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#F7F4EA]/60 block">Direct Line</span>
                  <span className="text-sm font-serif font-normal text-[#F7F4EA] group-hover:text-[#7FA85B] transition-colors">
                    {BUSINESS_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#022B22] border border-[#F7F4EA]/10">
                <div className="w-10 h-10 rounded-full bg-[#033c30] text-[#7FA85B] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-[#F7F4EA]/60 block">Madisonville Base</span>
                  <span className="text-sm font-serif font-normal text-[#F7F4EA]">
                    {BUSINESS_INFO.fullAddress}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Proposal Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-[28px] bg-[#022B22] border border-[#F7F4EA]/15 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-serif text-[#F7F4EA] mb-2">
                Project Estimate Inquiry
              </h3>
              <p className="text-xs text-[#F7F4EA]/70 mb-6">
                Tell us about the outdoor project your property requires, and our team will follow up promptly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#011A14] border border-[#7FA85B]/30 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#7FA85B]/20 text-[#7FA85B] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-serif text-[#F7F4EA]">
                    Estimate Request Received
                  </h4>
                  <p className="text-xs text-[#F7F4EA]/70 max-w-sm mx-auto">
                    Thank you, {formData.fullName}. We will review your request for {formData.serviceNeeded} and call you at {formData.phone}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        serviceNeeded: 'Custom Landscaping',
                        projectDetails: '',
                        propertyAddress: '',
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-full bg-[#033c30] text-[#F7F4EA] text-xs hover:bg-[#7FA85B] hover:text-[#022B22] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F7F4EA]/80 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Miller"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#011A14] border border-[#F7F4EA]/15 text-[#F7F4EA] placeholder-[#F7F4EA]/30 text-xs focus:outline-none focus:border-[#7FA85B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F7F4EA]/80 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(270) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#011A14] border border-[#F7F4EA]/15 text-[#F7F4EA] placeholder-[#F7F4EA]/30 text-xs focus:outline-none focus:border-[#7FA85B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F7F4EA]/80 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#011A14] border border-[#F7F4EA]/15 text-[#F7F4EA] placeholder-[#F7F4EA]/30 text-xs focus:outline-none focus:border-[#7FA85B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F7F4EA]/80 mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#011A14] border border-[#F7F4EA]/15 text-[#F7F4EA] text-xs focus:outline-none focus:border-[#7FA85B]"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="General Outdoor Project">General Outdoor Project</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#F7F4EA]/80 mb-1.5">
                      Property Address in Madisonville (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 31 Park Ave, Madisonville, KY"
                      value={formData.propertyAddress}
                      onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#011A14] border border-[#F7F4EA]/15 text-[#F7F4EA] placeholder-[#F7F4EA]/30 text-xs focus:outline-none focus:border-[#7FA85B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#F7F4EA]/80 mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe what your yard or trees require (approximate area, vision, preferred timeline)..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#011A14] border border-[#F7F4EA]/15 text-[#F7F4EA] placeholder-[#F7F4EA]/30 text-xs focus:outline-none focus:border-[#7FA85B] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#7FA85B] hover:bg-[#8eb869] text-[#022B22] text-xs font-semibold tracking-tight transition-all active:scale-98 cursor-pointer disabled:opacity-50 shadow-md"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'REQUEST A FREE QUOTE'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
