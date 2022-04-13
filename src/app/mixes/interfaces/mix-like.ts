import { Subscriber } from "src/app/shared/interfaces/subscriber";
import { Mix } from "./mix";

export class MixLike {
	mixLikeId: number;
	mix: Mix;
	subscriber: Subscriber;
}
