import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartItem } from '../../interfaces/cart-item';
import { Product } from '../../interfaces/product';
import { StoreService } from '../../services/store-service';

export interface DialogData {
  product: Product;
  quantity: number;
}

@Component({
  selector: 'store-product-dialog-content',
  templateUrl: './product-dialog-content.component.html',
  styleUrls: ['./product-dialog-content.component.scss'],
})
export class ProductDialogContentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ProductDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onAddToCartClick(quantity: string): void {
    console.log(`add ${quantity} to cart`);
    let itemToAdd: CartItem = {
      quantity: +quantity,
      product: this.data.product,
    };
    this.storeService.addToCart(itemToAdd);
  }
}
