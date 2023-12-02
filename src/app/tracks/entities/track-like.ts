import { Subscriber } from "src/app/shared/interfaces/subscriber";
import { Track } from "./track";

export class TrackLike {
	trackLikeId: number;
	track: Track;
	subscriber: Subscriber;
}
