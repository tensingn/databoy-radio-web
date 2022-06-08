import { Image } from "src/app/shared/interfaces/image";

export interface Product {
	productId: number;
	name: string;
	pluralName: string;
	type: string;
	price: number;
	images: Image[];
	releaseDate: Date;
	sizes: string[];
}
