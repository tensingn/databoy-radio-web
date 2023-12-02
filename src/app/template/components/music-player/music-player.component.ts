import { Component, Input, OnInit } from "@angular/core";
import { Track } from "src/app/tracks/entities/track";
import { PlayerService } from "src/app/template/services/player-service";
import { RepeatTypes } from "../../enums/repeat-types";
import {
	ORDER_BY_RELEASE_TITLE,
	MusicService,
} from "src/app/tracks/services/music-service";

@Component({
	selector: "app-music-player",
	templateUrl: "./music-player.component.html",
	styleUrls: ["./music-player.component.scss"],
})
export class MusicPlayerComponent implements OnInit {
	trackPlaying: Track | null;
	queue: Array<Track>;
	@Input() screenIsSmall: boolean;

	constructor(
		private playerService: PlayerService,
		private musicService: MusicService
	) {}

	ngOnInit(): void {
		this.getQueue();

		// listen for player update (track update)
		this.playerService.updatePlayerEventListener().subscribe((track) => {
			if (track) {
				this.trackPlaying = track;
			}
		});

		// listen for song to be over
		this.playerService.audioEndedEventListener().subscribe((repeat) => {
			if (this.trackPlaying) {
				let i: number = this.queue.findIndex(
					(m) => this.trackPlaying && m.trackId == this.trackPlaying.trackId
				);
				switch (repeat) {
					// repeat is off, so go to next song in queue if there is one
					case RepeatTypes.REPEAT_OFF: {
						// change tracks
						if (i != -1) {
							let nextTrack: Track = this.queue[i + 1];
							this.playerService.emitUpdatePlayerEvent(
								nextTrack ?? this.queue[0]
							);

							// only play if there actually is a next track, nextTrack was assigned to this.trackPlaying
							// during the emitUpdatePlayerEvent
							if (nextTrack) {
								this.playerService.playTrack(this.trackPlaying);
							}
						}
						break;
					}

					// repeat is on, so go to next track or first track in queue
					// if last track just ended
					case RepeatTypes.REPEAT_ON: {
						// change tracks
						if (i != -1) {
							let nextTrack: Track = this.queue[i + 1] ?? this.queue[0];
							this.playerService.emitUpdatePlayerEvent(nextTrack);

							// play next track, which was assigned to this.trackPlaying
							// during the emitUpdatePlayerEvent
							this.playerService.playTrack(this.trackPlaying);
						}
						break;
					}

					// repeat one is on, so play current track again
					case RepeatTypes.REPEAT_ONE_ON: {
						this.playerService.playTrack(this.trackPlaying);
						break;
					}

					default:
						this.playerService.emitUpdatePlayerEvent(this.queue[0]);
				}
			}
		});
	}

	getQueue() {
		// TODO - change query options
		let subscription = this.musicService
			.getTracks(ORDER_BY_RELEASE_TITLE)
			.subscribe({
				next: (tracks) => {
					//this.queue = tracks;
				},
				error: () => {
					subscription.unsubscribe();
				},
				complete: () => {
					subscription.unsubscribe();
				},
			});
	}
}
