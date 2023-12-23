import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "src/app/store/interfaces/product";
import { ProductListService } from "../services/product-list.service";

@Component({
	selector: "store-product-list",
	templateUrl: "./product-list.component.html",
})
export class ProductListComponent {
	products: Observable<Array<Product>>;
	sortOptions: Array<string>;

	constructor(private productListService: ProductListService) {
		this.products = this.productListService.products;
		this.sortOptions = this.productListService.sortOptions;
		this.productListService.initialize();
	}

	onSortOptionChange(sortOption: string) {
		this.productListService.sort(sortOption);
	}
}
