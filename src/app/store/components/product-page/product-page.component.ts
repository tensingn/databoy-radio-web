import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Size } from "../../enums/size";
import { CartItem } from "../../interfaces/cart-item";
import { Product } from "../../interfaces/product";
import { Image } from "src/app/shared/interfaces/image";
import { ProductService } from "../../services/product-service";

@Component({
	selector: "store-product-page",
	templateUrl: "./product-page.component.html",
	styleUrls: ["./product-page.component.scss"],
})
export class ProductPageComponent implements OnInit {
	product: Product | undefined;
	mainImage: Image;
	otherImages: Image[];
	quantity = new FormControl(0, [
		Validators.required,
		Validators.max(50),
		Validators.min(1),
		Validators.pattern("[0-9]*"),
	]);

	cartItem: CartItem;
	size = new FormControl(Size.NOT_SET, []);
	needsSize: boolean = false;
	similarProducts: Product[];
	Size = Size;

	constructor(
		private productService: ProductService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		if (this.product) {
			this.mainImage = this.product.images[0];
			this.otherImages = this.product.images.slice(1);
		}
		// this.route.paramMap.subscribe((params) => {
		// 	this.product = this.productService.getProductById(
		// 		Number(params.get("id"))
		// 	);
		// 	if (this.product) {
		// 		// this.similarProducts = this.productService.getSimilarProducts(
		// 		// 	this.product
		// 		// );
		// 		this.needsSize = this.product.sizes.length > 0;
		// 		if (this.needsSize) {
		// 			this.size.addValidators([
		// 				Validators.required,
		// 				Validators.pattern(this.product?.sizes.join("|")),
		// 			]);
		// 		}
		// 	}
		// });
	}

	onBackClick(): void {
		console.log("back clicked");
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
		return "Please enter a whole number between 1 and 50.";
	}

	getSizeErrorMessage() {
		return "Please select a size";
	}
}
