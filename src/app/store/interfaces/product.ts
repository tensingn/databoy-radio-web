import { Image } from "src/app/shared/interfaces/image";
import { Size } from "./size";

export interface Product {
	productId: number;
	name: string;
	pluralName: string;
	type: string;
	price: number;
	images: Image[];
	releaseDate: Date;
	sizes: Size[];
}
