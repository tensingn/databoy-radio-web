import { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
  size: Size;
}

export enum Size {
  XS,
  S,
  M,
  L,
  XL,
  XXL,
  XXXL,
}
