import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "src/app/store/interfaces/product";
import { ProductService } from "src/app/store/services/product-service";

@Injectable()
export class ProductListService {
	products: Observable<Array<Product>>;
	sortOptions: string[] = [
		"Price - Low to High",
		"Price - High to Low",
		"Name",
		"Newest First",
	];
	private _products = new BehaviorSubject<Array<Product>>([]);

	constructor(private productService: ProductService) {
		this.products = this._products.asObservable();
	}

	initialize() {
		this.productService.getProducts().subscribe({
			next: (products) => {
				if (products) this._products.next(products);
			},
		});
	}

	sort(sortOption: string): void {
		const products = this._products.value;
		switch (sortOption) {
			case "Price - Low to High":
				this._products.next(
					products.sort((a: Product, b: Product) =>
						a.price < b.price ? -1 : 1
					)
				);
				break;
			case "Price - High to Low":
				this._products.next(
					products.sort((a: Product, b: Product) =>
						a.price < b.price ? 1 : -1
					)
				);
				break;
			case "Name":
				this._products.next(
					products.sort((a: Product, b: Product) => (a.name < b.name ? -1 : 1))
				);
				break;
			case "Newest First":
				this._products.next(
					products.sort((a: Product, b: Product) =>
						a.releaseDate < b.releaseDate ? 1 : -1
					)
				);
				break;
		}
	}
}
