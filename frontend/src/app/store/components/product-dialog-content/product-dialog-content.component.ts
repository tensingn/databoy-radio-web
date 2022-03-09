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
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
