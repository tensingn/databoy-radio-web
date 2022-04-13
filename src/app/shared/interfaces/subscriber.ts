import { MixLike } from "src/app/mixes/interfaces/mix-like";
import { ReleaseLike } from "src/app/mixes/interfaces/release-like";

export interface Subscriber {
	subscriberId: number;
	email: string;
	mixLikes: MixLike[];
	releaseLikes: ReleaseLike[];
}
