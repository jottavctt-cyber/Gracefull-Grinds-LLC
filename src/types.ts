export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  problem: string;
  description: string;
  image: string;
  features: string[];
}

export interface WhyChooseUsItem {
  number: string;
  subtitle: string;
  title: string;
  description: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  quote: string;
  author: string;
  location: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface QuoteFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  projectDetails: string;
  propertyAddress: string;
}
