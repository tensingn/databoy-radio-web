import { Release } from "./release";
import { LikeableObject } from "src/app/shared/interfaces/likeable-object";

export class Track implements LikeableObject {
	trackId: number;
	title: string;
	music: string;
	releaseID: string;
	releaseTitle: string;
	src: string;
	id: string;
	numLikes: number;
	isLiked: boolean;
	duration: number | null;

	// is the audio for this track playing at the current moment. (i.e. can you hear the music playing right now)
	isCurrentlyPlaying: boolean;

	// is the audio the track that is playing on the player. it could be paused or currently playing.
	// this is for the audio player to display the correct information
	isPlayingTrack: boolean;
}
