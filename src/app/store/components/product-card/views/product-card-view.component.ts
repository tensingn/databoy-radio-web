import { Component, Input } from "@angular/core";
import { Product } from "../../../interfaces/product";

@Component({
	selector: "store-product-card-view",
	templateUrl: "./product-card-view.component.html",
	styleUrls: ["./product-card-view.component.scss"],
})
export class ProductCardViewComponent {
	@Input() product: Product;
	@Input() isSimilarProductCard: boolean = false;
}
