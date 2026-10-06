export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  features: string[];
  recommendedFor: string;
  image: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'shopping-centre' | 'commercial' | 'retail' | 'maintenance';
  location: string;
  scope: string;
  systemType: string;
  highlight: string;
  image: string;
}

export interface QuoteRequest {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  serviceType: string;
  propertyType: string;
  estimatedArea: string;
  address: string;
  notes: string;
}

export interface Pillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  metric: string;
}
