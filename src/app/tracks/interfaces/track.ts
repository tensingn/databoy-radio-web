import { LikeableObject } from "src/app/shared/interfaces/likeable-object";

export interface Track extends LikeableObject {
	// api fields
	src: string;
	type: string;
	title: string;
	releaseID: string;
	id: string;

	// frontend fields
	music: string;
	releaseTitle: string;
	duration: number | null;
	isCurrentlyPlaying: boolean; // is the audio for this track playing at the current moment (i.e. can you hear the music playing right now)
	isPlayingTrack: boolean; // is the audio the track that is playing on the player. it could be paused or currently playing
}
