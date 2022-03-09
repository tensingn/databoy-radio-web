import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from '../../interfaces/product';
import { ProductDialogContentComponent } from '../product-dialog-content/product-dialog-content.component';

@Component({
  selector: 'store-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
  @Input() product: Product;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductDialogContentComponent, {
      width: '750px',
      data: { product: this.product, quantity: 0 },
    });
  }
}
