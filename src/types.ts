export interface Product {
  id: string;
  name: string;
  category: 'infusion' | 'alimento' | 'miel';
  categoryLabel: string;
  subtitle: string;
  price: number;
  priceFormatted: string;
  size: string;
  description: string;
  fullDescription: string;
  ingredients: string[];
  benefits: string[];
  tasteNotes: string[];
  ritual: string;
  image: string;
  featured?: boolean;
  highlightTag?: string;
  stockStatus: string;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface EventRegistration {
  fullName: string;
  email: string;
  phone: string;
  modality: 'online' | 'presencial';
  city: string;
  ticketId?: string;
  registeredAt?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  comment: string;
  rating: number;
  productMentioned: string;
  verified: boolean;
  date: string;
}

export interface EventScheduleItem {
  time: string;
  title: string;
  speaker: string;
  description: string;
  badge: string;
}
