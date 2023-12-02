import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Track } from "../../tracks/entities/track";
import { RepeatTypes } from "../enums/repeat-types";

@Injectable({
	providedIn: "root",
})
export class PlayerService {
	private updatePlayerEvent = new BehaviorSubject<Track | null>(null);
	private metaDataLoadedEvent = new BehaviorSubject<number>(0);
	private timeUpdateEvent = new BehaviorSubject<number>(0);
	private mutedThroughVolumeSliderEvent = new BehaviorSubject<boolean>(false);
	private mutedThroughMuteButtonEvent = new BehaviorSubject<boolean>(false);

	// the value for this is RepeatTypes because we need to know
	// what song to play next
	private audioEndedEvent = new BehaviorSubject<RepeatTypes>(
		RepeatTypes.REPEAT_OFF
	);
	private audio = new Audio();
	private trackPlaying: Track | null;
	private repeat: RepeatTypes = repeatTypes[0];

	// player event emitter
	emitUpdatePlayerEvent(track: Track) {
		if (this.trackPlaying) {
			this.trackPlaying.isCurrentlyPlaying = false;
			this.trackPlaying.isPlayingTrack = false;
		}
		this.updatePlayerEvent.next(track);
	}

	// player listener
	updatePlayerEventListener() {
		return this.updatePlayerEvent.asObservable();
	}

	// meta data loaded event emitter
	emitMetaDataLoadedEvent(duration: number) {
		this.metaDataLoadedEvent.next(duration);
	}

	// meta data listener
	updateDurationEventListener() {
		return this.metaDataLoadedEvent.asObservable();
	}

	// time update event emitter
	emitTimeUpdateEvent(time: number) {
		this.timeUpdateEvent.next(time);
	}

	// time update listener
	timeUpdateEventListener() {
		return this.timeUpdateEvent.asObservable();
	}

	// audio ended event emitter
	emitAudioEndedEvent() {
		if (this.trackPlaying) {
			this.trackPlaying.isCurrentlyPlaying = false;
		}
		this.audioEndedEvent.next(this.repeat);
	}

	// audio ended listener
	audioEndedEventListener() {
		return this.audioEndedEvent.asObservable();
	}

	// player controls
	playTrack(track: Track) {
		this.trackPlaying = track;
		this.audio.src = this.trackPlaying.src;
		this.audio.load();
		this.audio
			.play()
			.then(() => {})
			.catch((e) => {
				console.log(e);
			});
		this.trackPlaying.isCurrentlyPlaying = true;
		this.trackPlaying.isPlayingTrack = true;

		// setup callbacks
		this.audio.onloadedmetadata = () => {
			this.emitMetaDataLoadedEvent(this.audio.duration);
		};
		this.audio.ontimeupdate = () => {
			this.emitTimeUpdateEvent(this.audio.currentTime);
		};
		this.audio.onended = () => {
			this.emitAudioEndedEvent();
		};
	}

	continuePlayingTrack(track: Track) {
		this.audio.play();
		track.isCurrentlyPlaying = true;
	}

	pausePlayingTrack(track: Track) {
		this.audio.pause();
		track.isCurrentlyPlaying = false;
	}

	mutePlayingTrack(): boolean {
		this.audio.muted = !this.audio.muted;
		this.emitMutedThroughMuteButtonEvent(this.audio.muted);
		return this.audio.muted;
	}

	emitMutedThroughMuteButtonEvent(muted: boolean) {
		this.mutedThroughMuteButtonEvent.next(muted);
	}

	mutedThroughMuteButtonEventListener() {
		return this.mutedThroughMuteButtonEvent.asObservable();
	}

	updateCurrentTime(currentTime: number) {
		this.audio.currentTime = currentTime;
	}

	updateVolume(volume: number) {
		this.audio.volume = volume;

		if (volume == 0) {
			this.audio.muted = true;
			this.emitMutedThroughVolumeSliderEvent(true);
		} else {
			this.audio.muted = false;
			this.emitMutedThroughVolumeSliderEvent(false);
		}
	}

	emitMutedThroughVolumeSliderEvent(muted: boolean) {
		this.mutedThroughVolumeSliderEvent.next(muted);
	}

	mutedThroughVolumeSliderEventListener() {
		return this.mutedThroughVolumeSliderEvent.asObservable();
	}

	toggleRepeat(): RepeatTypes {
		// get index of
		let i = repeatTypes.findIndex((t) => t == this.repeat);

		// assign new repeat value
		if (i >= 0) {
			this.repeat = repeatTypes[i + 1] ?? repeatTypes[0];
		}

		return this.repeat;
	}
}

let repeatTypes: RepeatTypes[] = [
	RepeatTypes.REPEAT_OFF,
	RepeatTypes.REPEAT_ON,
	RepeatTypes.REPEAT_ONE_ON,
];
