import { Component, Input } from "@angular/core";
import { Product } from "src/app/store/interfaces/product";

@Component({
	selector: "store-product-card",
	templateUrl: "./product-card.component.html",
})
export class ProductCardComponent {
	@Input() product: Product;
}
