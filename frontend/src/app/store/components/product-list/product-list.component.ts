import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'store-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentSortIsAsc: boolean = false;

  sortOptions: string[] = [
    'Price - Low to High',
    'Price - High to Low',
    'Name',
    'Newest First',
  ];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.products = this.productService.getProducts();
  }

  sort(sortOption: string): void {
    switch (sortOption) {
      case 'Price - Low to High':
        this.products = this.products.sort((a: Product, b: Product) =>
          a.price < b.price ? -1 : 1
        );
        break;
      case 'Price - High to Low':
        this.products = this.products.sort((a: Product, b: Product) =>
          a.price < b.price ? 1 : -1
        );
        break;
      case 'Name':
        this.products = this.products.sort((a: Product, b: Product) =>
          a.name < b.name ? -1 : 1
        );
        break;
      case 'Newest First':
        this.products = this.products.sort((a: Product, b: Product) =>
          a.releaseDate < b.releaseDate ? 1 : -1
        );
        break;
    }
  }
}
