import { LikeableObject } from "src/app/shared/interfaces/likeable-object";
import { Mix } from "./mix";

export interface Release extends LikeableObject {
	releaseId: number;
	title: string;
	releaseDate: Date;
	mixes: Mix[];
}
