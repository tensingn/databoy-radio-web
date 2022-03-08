import { Injectable } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _url: string = 'url-to-store';
  private _cartItems: CartItem[] = [];

  constructor() {}

  addToCart(item: CartItem): void {
    this._cartItems.push(item);
    console.log(this._cartItems);
  }
}
