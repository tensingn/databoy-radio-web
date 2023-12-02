import { Track } from "./track";
import { LikeableObject } from "src/app/shared/interfaces/likeable-object";

export class Release implements LikeableObject {
	title: string;
	// releaseDate: Date;
	numLikes: number;
	//isLiked: boolean;
	id: string;

	tracks: Array<Track> = new Array<Track>();
}
