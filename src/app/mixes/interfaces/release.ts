import { Mix } from "./mix";

export interface Release {
	releaseId: number;
	title: string;
	releaseDate: Date;
	mixes: Mix[];
}
