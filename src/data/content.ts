import {
  ServiceItem,
  WhyChooseUsItem,
  ProjectItem,
  ReviewItem,
  FAQItem,
  StatItem,
} from '../types';

export const ASSETS = {
  // Hero & Avatars
  avatar1: 'https://framerusercontent.com/images/qu2dxD8AIhFdbskvvU5Brz7lCeE.png?width=1254&height=1254',
  avatar2: 'https://framerusercontent.com/images/VICL3a2uLcII0fmbjq1CkyjhI9g.png?width=1254&height=1254',
  avatar3: 'https://framerusercontent.com/images/XU9QOzdsFxK6adCaQsmXTX4rOX0.png?width=1254&height=1254',
  heroSupporting: 'https://framerusercontent.com/images/vgy2zjz0Lmnt5KRVjuJ0mKwvhk.png?width=1586&height=992',

  // About
  aboutImage: 'https://framerusercontent.com/images/LUvWfu17munLed545mAeuMcyMY.png?width=1273&height=941',

  // Services
  service1: 'https://framerusercontent.com/images/g7XYyyNI4hwEN3quo5GK9EvrUg.png?width=1672&height=941',
  service2: 'https://framerusercontent.com/images/0KODPSm394iEDGEfqSV4E0fiHU.png?width=1672&height=941',
  service3: 'https://framerusercontent.com/images/X0ElX3lgxeWytY38cGRr7lQfJqM.png?width=1672&height=941',
  service4: 'https://framerusercontent.com/images/z1H1Q7NI92Y07Kv6T901ca8JpAc.png?width=1672&height=941',
  service5: 'https://framerusercontent.com/images/FJZpknnFwcQjHeLI53vfSOzNVY0.png?width=1672&height=941',
  service6: 'https://framerusercontent.com/images/6E5FBfF5VGx3LmQKgKxygJdFUI.png?width=1672&height=941',
  service7: 'https://framerusercontent.com/images/02WaUzwP0w52263pMHBvz1S6Ds.png?width=1386&height=846',
  service8: 'https://framerusercontent.com/images/C9GgRNrhKV5DsT9kodUFGdRzsk.png?width=1672&height=941',

  // Why Choose Us
  whyChoose1: 'https://framerusercontent.com/images/uI1w2iCgXWITTb0GZZ9iuiFmML8.png?width=1672&height=941',
  whyChoose2: 'https://framerusercontent.com/images/BA8hBC5obPmFv3X9H9JvXyiqX0.png?width=941&height=1672',
  whyChoose3: 'https://framerusercontent.com/images/AIwKuqtFyDAafFoEmLsEjN4IyhU.png?width=941&height=1672',
  whyChoose4: 'https://framerusercontent.com/images/4CeOKTIgZCWwiPjfILbewQEPJ8.png?width=1672&height=941',

  // Projects
  project1: 'https://framerusercontent.com/images/K8pV75et6fFoMW2Yqhf6w5vhGvg.png?width=1672&height=941',
  project2: 'https://framerusercontent.com/images/3NxLp5Ai3r0xP6uHrjKLqTFMo.png?width=1672&height=941',
  project3: 'https://framerusercontent.com/images/nDLa3CKPJDxjAhuHDcAQIbntVn8.png?width=1672&height=941',
  project4: 'https://framerusercontent.com/images/5mBi7XdAL1mCiDh5swURvDS8XU.png?width=1672&height=941',
  project5: 'https://framerusercontent.com/images/l14YFmqX1Z1NNSUerULc5qcQ9c.png?width=1672&height=941',
  project6: 'https://framerusercontent.com/images/goD2SDefDFDn6K5CvfIDo5tqyWU.png?width=1672&height=941',

  // Testimonial & Banners
  testimonialImage: 'https://framerusercontent.com/images/TAp2oa5yk7mbk0LnFhUOvdwsTSU.png?width=1672&height=941',
  leafAsset: 'https://framerusercontent.com/images/6OE5Kvz6fviFlsTGNSHjHPWgAY.png?width=1254&height=1254',
  ctaBackground: 'https://framerusercontent.com/images/vgy2zjz0Lmnt5KRVjuJ0mKwvhk.png?width=1586&height=992',
};

export const BUSINESS_INFO = {
  legalName: 'GracefullGrinds LLC',
  brandName: 'Gracefull Grinds',
  location: 'Madisonville, Kentucky',
  address: '31 Park Ave',
  cityStateZip: 'Madisonville, KY 42431',
  fullAddress: '31 Park Ave, Madisonville, KY 42431',
  phone: '(270) 263-1516',
  phoneRaw: '+12702631516',
  website: 'https://www.gracefull-grinds.com/',
  eyebrow: 'CUSTOM LANDSCAPING & OUTDOOR SPACES',
  headline: 'TRANSFORMING YARDS WITH CARE & PRECISION',
  supportingCopy:
    'Custom landscaping, maintenance, tree trimming and hardscaping designed to bring outdoor spaces to life in Madisonville, Kentucky.',
  primaryCTA: 'GET A FREE QUOTE',
  secondaryCTA: 'CALL (270) 263-1516',
};

export const STATS: StatItem[] = [
  { value: 'Madisonville', label: 'Locally Operated in KY' },
  { value: 'Family-Run', label: 'Hands-On Client Care' },
  { value: '4 Key Services', label: 'From Trimming to Hardscaping' },
  { value: 'Free Quotes', label: 'Custom Property Estimates' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'custom-landscaping',
    title: 'Custom Landscaping',
    category: 'Design & Planting',
    problem: 'Have an outdoor space that never quite feels finished?',
    description:
      'Custom landscaping solutions designed around your property, your outdoor space and your vision.',
    image: ASSETS.service1,
    features: [
      'Tailored property layouts',
      'Plant selection suited to local soil',
      'Visual balance and curb appeal',
    ],
  },
  {
    id: 'landscape-maintenance',
    title: 'Landscape Maintenance',
    category: 'Care & Upkeep',
    problem: 'Keeping outdoor areas healthy and orderly through changing seasons.',
    description:
      'Customizable maintenance plans built around the needs of your property.',
    image: ASSETS.service2,
    features: [
      'Scheduled property upkeep',
      'Bed and shrub maintenance',
      'Ongoing seasonal care plans',
    ],
  },
  {
    id: 'tree-trimming',
    title: 'Tree Trimming',
    category: 'Tree Care',
    problem: 'Overgrown or neglected trees affecting property appearance and light.',
    description:
      'Professional tree trimming for a range of residential landscape needs, including oak, maple and pine.',
    image: ASSETS.service3,
    features: [
      'Oak, maple and pine care',
      'Canopy shaping & clearance',
      'Debris removal & cleanup',
    ],
  },
  {
    id: 'hardscaping',
    title: 'Hardscaping',
    category: 'Outdoor Living',
    problem: 'Outdoor areas often need structured functional elements alongside greenery.',
    description:
      'Hardscape projects that help transform outdoor spaces into more useful and finished environments.',
    image: ASSETS.service4,
    features: [
      'Defined outdoor living areas',
      'Structural stone and pavers',
      'Seamless landscape integration',
    ],
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    number: '01',
    subtitle: 'Local Roots',
    title: 'Family-Operated',
    description:
      'A family-operated landscaping business based in Madisonville, providing dedicated local attention on every project.',
    image: ASSETS.whyChoose1,
  },
  {
    number: '02',
    subtitle: 'Property Specific',
    title: 'Custom Approach',
    description:
      'Solutions shaped around your property, terrain conditions, and personal vision rather than one-size-fits-all packages.',
    image: ASSETS.whyChoose2,
  },
  {
    number: '03',
    subtitle: 'Craftsmanship',
    title: 'Care & Precision',
    description:
      'Focused on transforming overlooked outdoor spaces with meticulous attention to clean edges and finished results.',
    image: ASSETS.whyChoose3,
  },
  {
    number: '04',
    subtitle: 'Clear Communication',
    title: 'Hands-On Service',
    description:
      'A direct, responsive approach to residential landscaping and outdoor improvements from start to final walk-through.',
    image: ASSETS.whyChoose4,
  },
];

export const PROJECTS_GALLERY: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Custom Residential Landscape',
    category: 'Custom Landscaping',
    description:
      'A comprehensive yard transformation shaping new planting beds, lawn borders, and thoughtful botanical placements.',
    image: ASSETS.project1,
  },
  {
    id: 'proj-2',
    title: 'Outdoor Hardscape Installation',
    category: 'Hardscaping',
    description:
      'Defined stone hardscape surface creating a functional, durable outdoor living space for residential enjoyment.',
    image: ASSETS.project2,
  },
  {
    id: 'proj-3',
    title: 'Residential Tree Canopy Trimming',
    category: 'Tree Trimming',
    description:
      'Careful trimming and shaping of mature trees to improve sunlight reach, property aesthetics, and structural balance.',
    image: ASSETS.project3,
  },
  {
    id: 'proj-4',
    title: 'Landscape Bed Refresh & Edging',
    category: 'Landscape Maintenance',
    description:
      'Complete cleanup and revitalization of overgrown landscape beds with clean border lines and fresh mulch.',
    image: ASSETS.project4,
  },
  {
    id: 'proj-5',
    title: 'Pine & Hardwood Trimming',
    category: 'Tree Trimming',
    description:
      'Targeted branch reduction and canopy maintenance on property boundary pines and oak trees.',
    image: ASSETS.project5,
  },
  {
    id: 'proj-6',
    title: 'Stone Walkway & Retaining Detail',
    category: 'Hardscaping',
    description:
      'Precision hardscape installation balancing natural slope and creating clean transition walkways.',
    image: ASSETS.project6,
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Inquire & Free Quote',
    description:
      'Share your property location in Madisonville and tell us about your landscaping, trimming, or hardscaping vision.',
  },
  {
    number: '02',
    title: 'Property Evaluation',
    description:
      'We assess your yard conditions, property dimensions, and specific goals to prepare a transparent project scope.',
  },
  {
    number: '03',
    title: 'Hands-On Execution',
    description:
      'Our family-operated team completes your landscaping work with care, precision, and respect for your property.',
  },
  {
    number: '04',
    title: 'Thorough Cleanup & Review',
    description:
      'We complete all debris removal and ensure your outdoor space is clean, finished, and ready for you to enjoy.',
  },
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    quote:
      'Gracefull Grinds did an outstanding job transforming our yard in Madisonville. The care, precision, and hands-on communication made the entire project smooth and stress-free.',
    author: 'Madisonville Resident',
    location: 'Park Ave Area, Madisonville, KY',
  },
  {
    id: 'rev-2',
    quote:
      'The tree trimming and custom landscaping brought so much light back to our property. Everything was left spotless afterward.',
    author: 'Local Homeowner',
    location: 'Hopkins County, KY',
  },
  {
    id: 'rev-3',
    quote:
      'Our hardscaping looks fantastic. It turned an unused outdoor corner into our family’s favorite gathering spot.',
    author: 'Residential Client',
    location: 'Madisonville, KY',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What services does Gracefull Grinds provide?',
    answer:
      'We provide custom landscaping solutions, customizable landscape maintenance plans, professional tree trimming (including oak, maple, and pine), and hardscaping projects designed to transform outdoor spaces.',
  },
  {
    question: 'Do you offer maintenance plans?',
    answer:
      'Yes. We offer customizable landscape maintenance plans built around the unique seasonal needs and schedule of your property.',
  },
  {
    question: 'What types of trees do you trim?',
    answer:
      'Our team provides professional tree trimming for a wide range of residential tree species, with specific experience caring for oak, maple, and pine trees.',
  },
  {
    question: 'Can I see examples of your work?',
    answer:
      'Yes. We showcase before-and-after work and a portfolio of past hardscaping and custom landscaping projects to help clients visualize what is possible for their yard.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'You can request a free estimate directly through our online quote form or call Gracefull Grinds directly at (270) 263-1516 to discuss your property.',
  },
];
