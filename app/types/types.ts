// src/types/types.ts
export interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
    linkText: string;
    linkUrl: string;
  }
  
  export interface NewsItem {
    id: string;
    title: string;
    description: string;
    image: string;
  }
  
  export interface Testimonial {
    id: string;
    text: string;
    customerName: string;
  }