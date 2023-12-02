import { Subscriber } from "src/app/shared/interfaces/subscriber";
import { Release } from "./release";

export class ReleaseLike {
	releaseLikeId: number;
	release: Release;
	subscriber: Subscriber;
}
