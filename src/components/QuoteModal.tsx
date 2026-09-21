import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowUpRight, Phone } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefillService,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceNeeded: prefillService || 'Custom Landscaping',
    projectDetails: '',
    propertyAddress: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefillService) {
      setFormData((prev) => ({ ...prev, serviceNeeded: prefillService }));
    }
  }, [prefillService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-[28px] bg-[#022B22] border border-[#F7F4EA]/20 shadow-2xl p-6 sm:p-8 text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#011A14] text-[#F7F4EA]/70 hover:text-white transition-colors focus:outline-none border border-[#F7F4EA]/10 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        <span className="text-[11px] uppercase tracking-wider text-[#7FA85B] font-semibold block mb-1">
          {BUSINESS_INFO.brandName} • Madisonville, KY
        </span>

        <h3 className="text-2xl font-serif text-[#F7F4EA] tracking-tight mb-2">
          Request a Free Estimate
        </h3>
        <p className="text-xs text-[#F7F4EA]/70 mb-6">
          Provide your property details and we will follow up with an accurate, no-obligation estimate.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#7FA85B]/20 text-[#7FA85B] flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-serif text-[#F7F4EA]">Thank You!</h4>
            <p className="text-xs text-[#F7F4EA]/80 max-w-xs mx-auto">
              We received your request for <strong className="text-[#7FA85B]">{formData.serviceNeeded}</strong> and will reach out to <strong className="text-[#F7F4EA]">{formData.phone}</strong> promptly.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#7FA85B] text-[#022B22] text-xs font-semibold hover:bg-[#8eb869] transition-colors cursor-pointer mt-4"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-medium text-[#F7F4EA]/80 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. John Miller"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#011A14] border border-[#F7F4EA]/15 text-[#F7F4EA] placeholder-[#F7F4EA]/30 text-xs focus:outline-none focus:border-[#7FA85B]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#F7F4EA]/80 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(270) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#011A14] border border-[#F7F4EA]/15 text-[#F7F4EA] placeholder-[#F7F4EA]/30 text-xs focus:outline-none focus:border-[#7FA85B]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#F7F4EA]/80 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#011A14] border border-[#F7F4EA]/15 text-[#F7F4EA] placeholder-[#F7F4EA]/30 text-xs focus:outline-none focus:border-[#7FA85B]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#F7F4EA]/80 mb-1">
                Service Needed *
              </label>
              <select
                value={formData.serviceNeeded}
                onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#011A14] border border-[#F7F4EA]/15 text-[#F7F4EA] text-xs focus:outline-none focus:border-[#7FA85B]"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="General Outdoor Project">General Outdoor Project</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#F7F4EA]/80 mb-1">
                Property Address in Madisonville (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. 31 Park Ave, Madisonville, KY"
                value={formData.propertyAddress}
                onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#011A14] border border-[#F7F4EA]/15 text-[#F7F4EA] placeholder-[#F7F4EA]/30 text-xs focus:outline-none focus:border-[#7FA85B]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#F7F4EA]/80 mb-1">
                Project Details
              </label>
              <textarea
                rows={2}
                placeholder="Details regarding your property or landscape..."
                value={formData.projectDetails}
                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#011A14] border border-[#F7F4EA]/15 text-[#F7F4EA] placeholder-[#F7F4EA]/30 text-xs focus:outline-none focus:border-[#7FA85B] resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-full bg-[#7FA85B] hover:bg-[#8eb869] text-[#022B22] text-xs font-semibold tracking-tight transition-all duration-200 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>{isSubmitting ? 'Submitting...' : 'REQUEST A FREE QUOTE'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="text-center pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 text-xs text-[#7FA85B] hover:underline"
              >
                <Phone className="w-3 h-3" />
                <span>Or Call Direct: {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
