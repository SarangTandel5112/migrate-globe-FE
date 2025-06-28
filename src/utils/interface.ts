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
    visas: unknown[];
    visaTypeImage: unknown;
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
    location: { id: number; name: string; address: string; lat: number; lon: number }[];
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