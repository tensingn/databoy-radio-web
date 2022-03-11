import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Size } from '../../enums/size';
import { CartItem } from '../../interfaces/cart-item';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'store-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product: Product | undefined;
  quantity = new FormControl('', [
    Validators.required,
    Validators.max(50),
    Validators.min(1),
    Validators.pattern('[0-9]*'),
  ]);

  cartItem: CartItem;
  size = new FormControl('', [
    Validators.required,
    Validators.pattern('XS|S|M|L|XL|2XL|3XL'),
  ]);
  similarProducts: Product[];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);

    if (this.product) {
      this.similarProducts = this.productService.getSimilarProducts(
        this.product
      );
    }
  }

  onBackClick(): void {
    console.log('back clicked');
  }

  onSelectChange(size: Size): void {
    console.log(size);
    console.log(this.size);
  }

  onQuantityChange(quantity: number): void {
    console.log(quantity);
    console.log(this.quantity);
  }

  getQuantityErrorMessage() {
    return 'Please enter a whole number between 1 and 50.';
  }

  getSizeErrorMessage() {
    return 'Please select a size';
  }
}
