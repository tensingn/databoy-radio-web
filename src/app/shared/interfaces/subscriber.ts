import { TrackLike } from "src/app/tracks/entities/track-like";
import { ReleaseLike } from "src/app/tracks/entities/release-like";

export interface Subscriber {
	subscriberId: number;
	email: string;
	trackLikes: TrackLike[];
	releaseLikes: ReleaseLike[];
}
