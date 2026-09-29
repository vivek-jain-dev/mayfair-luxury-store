export interface ProductVariant {
  id: string;
  name: string; // e.g. "Size 48R / Navy Wool"
  size: string;
  color: string;
  price: number;
  inStock: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: 'blazers' | 'knits' | 'shirts' | 'trousers' | 'accessories';
  isMadeToOrder: boolean;
  leadTimeWeeks?: number;
  isBestSeller?: boolean;
  images: string[];
  variants: ProductVariant[];
  fabricInfo: string;
  careInstructions: string;
}
