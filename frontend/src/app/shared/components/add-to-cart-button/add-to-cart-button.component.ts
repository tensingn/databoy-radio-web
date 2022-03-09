import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartItem } from 'src/app/store/interfaces/cart-item';
import { Product } from 'src/app/store/interfaces/product';
import { StoreService } from 'src/app/store/services/store-service';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss'],
})
export class AddToCartButtonComponent implements OnInit {
  @Input() product: Product;
  @Input() quantity: number;
  snackbarLifetime: number = 5;

  constructor(
    private storeService: StoreService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  onAddToCartClick(): void {
    console.log(`add ${this.quantity} to cart`);
    let itemToAdd: CartItem = {
      quantity: this.quantity,
      product: this.product,
    };
    this.storeService.addToCart(itemToAdd);

    this.openSnackBar(true);
  }

  // openSnackBar() {
  //   this.snackBar.openFromComponent(AddToCartSnackBarComponent, {
  //     duration: this.snackbarLifetime * 1000,
  //   });
  // }

  openSnackBar(successful: boolean) {
    let name: string =
      this.quantity == 1 ? this.product.name : this.product.pluralName;
    this.snackBar.open(
      `Successfully added ${this.quantity} ${name} to cart.`,
      'DISMISS',
      {
        duration: this.snackbarLifetime * 1000,
      }
    );
  }
}
