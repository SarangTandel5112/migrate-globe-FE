export type Service = {
  id: number;
  title: string;
  subtitle: string;
  key: string;
  order: number;
};

export type VisaType = {
  id: number;
  documentId: string;
  name: string;
  description: string;
  key: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  order: number;
  visas?: unknown[];
  visaTypeImage?: Image | null;
};

export type Insight = {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  description: string | null;
  content: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  order: number;
  image: Image | null;
};

export type ContactUs = {
  id: number;
  documentId: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  email: { id: number; name: string; email: string }[];
  phone: { id: number; name: string; number: string }[];
  location: {
    id: number;
    name: string;
    address: string;
    lat: number;
    lon: number;
  }[];
  faqs: {
    id: number;
    documentId: string;
    question: string;
    answer: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    sortOrder: number;
  }[];
};

export interface QuestionOption {
  id: number;
  item: string;
  value: string;
  point: number;
  label: string;
}

export interface Question {
  order: number;
  id: number;
  item: string;
  title: string;
  question: string;
  option: QuestionOption[];
}

export interface Insurance {
  id: number;
  name: string;
  documentId: string;
  price: number;
  publicHospital: boolean;
  privateHospital: boolean;
  privateRoom: boolean;
  ambulanceService: boolean;
  prescriptionMedicines: boolean;
  psychiatricConditions: string;
  pregnancyCoverage: string;
  otherPreExisting: string;
  refundPolicy: string;
  Order: number;
  image?: Image;
}

// Image interface
export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface ImageFormats {
  large?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  thumbnail?: ImageFormat;
}

export interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Homepage data interfaces
export interface Intro {
  id: number;
  title: string;
  description: string | null;
}

export interface ServiceItem {
  id: number;
  documentId: string;
  title: string;
  key: string;
  subtitle: string;
  serviceType: string | null;
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface HeroSection {
  id: number;
  intro: Intro;
  services: ServiceItem[];
}

export interface VisaCalculatorSection {
  id: number;
  step1: string;
  step2: string;
  step3: string;
  intro: Intro;
}

export interface TestimonialItem {
  id: number;
  documentId: string;
  title: string;
  clientName: string;
  clientService: string;
  clientReview: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  clientImage: Image;
}

export interface TestimonialSection {
  id: number;
  intro: Intro;
  testimonials: TestimonialItem[];
}

export interface BlogItem {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  description: string;
  content: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  order: number;
  image: Image;
}

export interface BlogSection {
  id: number;
  intro: Intro;
  insights_and_updates: BlogItem[];
}

export interface VideoItem {
  id: number;
  documentId: string;
  title: string;
  description: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface VideoSection {
  id: number;
  intro: Intro;
  videos: VideoItem[];
}

export interface HomepageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  heroSection: HeroSection;
  visaCalculator: VisaCalculatorSection;
  testimonial: TestimonialSection;
  blog: BlogSection;
  videos: VideoSection;
}

// Component props interfaces
export interface HeroSectionProps {
  heroSection: HeroSection;
}

export interface VisaCalculatorSectionProps {
  visaCalculator: VisaCalculatorSection;
}

export interface TestimonialsProps {
  testimonial: TestimonialSection;
}

export interface BlogsCardsProps {
  blog: BlogSection;
}

export interface VideosSectionProps {
  videos: VideoSection;
}

export interface FeatureGridProps {
  services: ServiceItem[];
}

export interface visa {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  visaImage: Image | null;
  visa_type: VisaType;
  requirements: unknown[];
}

// Rich text description types
export interface RichTextChild {
  text: string;
  type: string;
}

export interface RichTextBlock {
  type: string;
  children: RichTextChild[];
}

export interface CheckListDetails {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  description: RichTextBlock[];
  price: number | null;
  processingTime: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  checkListType: string;
  isConsultationOnly: boolean | null;
  visa?: visa;
  application_type?: ApplicationType;
  visa_type?: VisaType;
}


  
 
export interface VisaCalculatorProps {
  questions: Question[];
  scoreRequired: number;
  title: string;
}

export interface QuestionOption {
  id: number;
  item: string;
  value: string;
  point: number;
  label: string;
}

export interface Question {
  order: number;
  id: number;
  item: string;
  title: string;
  question: string;
  option: QuestionOption[];
}

export interface VisaCalculatorData {
  id: number;
  documentId: string;
  title: string;
  description: string | null;
  scoreRequired: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  question: Question[];
}

export interface QuestionOption {
  id: number;
  item: string;
  value: string;
  point: number;
  label: string;
}

export interface Question {
  order: number;
  id: number;
  item: string;
  title: string;
  question: string;
  option: QuestionOption[];
}

export interface CalculatorState {
  [key: string]: number;
}

export interface VisaCalculatorProps {
  questions: Question[];
  scoreRequired: number;
  title: string;
}

export interface ApplicationType {
  id: number;
  documentId: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
