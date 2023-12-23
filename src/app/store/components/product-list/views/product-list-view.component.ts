import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../../../interfaces/product";
import { MatSelectChange } from "@angular/material/select";

@Component({
	selector: "store-product-list-view",
	templateUrl: "./product-list-view.component.html",
	styleUrls: ["./product-list-view.component.scss"],
})
export class ProductListViewComponent {
	@Input() products: Array<Product>;
	@Input() sortOptions: Array<string>;
	@Output() sortOptionChanged = new EventEmitter<string>();

	onSortOptionChange(option: MatSelectChange) {
		this.sortOptionChanged.next(option.value);
	}
}
