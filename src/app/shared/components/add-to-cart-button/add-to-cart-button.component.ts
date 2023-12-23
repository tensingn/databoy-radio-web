import { Component, Input, OnInit } from "@angular/core";
import { Size } from "src/app/store/enums/size";
import { Product } from "src/app/store/interfaces/product";
import { environment as env } from "src/environments/environment";

@Component({
	selector: "app-add-to-cart-button",
	templateUrl: "./add-to-cart-button.component.html",
	styleUrls: ["./add-to-cart-button.component.scss"],
})
export class AddToCartButtonComponent implements OnInit {
	@Input() product: Product | undefined;
	@Input() quantity: number;
	@Input() size: Size;
	@Input() disabled: boolean;
	productURL: string;
	productSizes: string | null;

	ngOnInit() {
		this.productURL = `${env.productsBaseUrl}${this.product.id}/snipcart`;

		if (this.product.sizes.length) {
			this.productSizes = this.product.sizes.join("|");
		}
	}
}
