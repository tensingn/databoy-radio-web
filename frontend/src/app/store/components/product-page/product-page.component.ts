import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem, Size } from '../../interfaces/cart-item';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'store-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 0;
  cartItem: CartItem;
  size: Size;
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
}
