import { Product, ProductVariant } from './product';

export interface CartItem {
  id: string;
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
}
