import { Track } from "./track";
import { LikeableObject } from "src/app/shared/interfaces/likeable-object";

export interface Release extends LikeableObject {
	releaseDate: Date;
	type: string;
	title: string;
	id: string;
	tracks: Array<Track>;
}
