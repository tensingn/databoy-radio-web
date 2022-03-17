import { Size } from '../enums/size';
import { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
  size: Size;
}
