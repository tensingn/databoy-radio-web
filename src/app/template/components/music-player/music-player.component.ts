import { Component, Input, OnInit } from "@angular/core";
import { Mix } from "src/app/mixes/interfaces/mix";
import { MixService } from "src/app/mixes/services/mix-service";
import { PlayerService } from "src/app/template/services/player-service";
import { RepeatTypes } from "../../enums/repeat-types";

@Component({
	selector: "app-music-player",
	templateUrl: "./music-player.component.html",
	styleUrls: ["./music-player.component.scss"],
})
export class MusicPlayerComponent implements OnInit {
	mixPlaying: Mix | null;
	queue: Mix[];
	@Input() screenIsSmall: boolean;

	constructor(
		private playerService: PlayerService,
		private mixService: MixService
	) {}

	ngOnInit(): void {
		this.getQueue();

		// listen for player update (mix update)
		this.playerService.updatePlayerEventListener().subscribe((mix) => {
			if (mix) {
				this.mixPlaying = mix;
			}
		});

		// listen for song to be over
		this.playerService.audioEndedEventListener().subscribe((repeat) => {
			if (this.mixPlaying) {
				let i: number = this.queue.findIndex(
					(m) => this.mixPlaying && m.id == this.mixPlaying.id
				);
				switch (repeat) {
					// repeat is off, so go to next song in queue if there is one
					case RepeatTypes.REPEAT_OFF: {
						// change mixes
						if (i != -1) {
							let nextMix: Mix = this.queue[i + 1];
							this.playerService.emitUpdatePlayerEvent(
								nextMix ?? this.queue[0]
							);

							// only play if there actually is a next mix, nextMix was assigned to this.mixPlaying
							// during the emitUpdatePlayerEvent
							if (nextMix) {
								this.playerService.playMix(this.mixPlaying);
							}
						}
						break;
					}

					// repeat is on, so go to next mix or first mix in queue
					// if last mix just ended
					case RepeatTypes.REPEAT_ON: {
						// change mixes
						if (i != -1) {
							let nextMix: Mix =
								this.queue[i + 1] ?? this.queue[0];
							this.playerService.emitUpdatePlayerEvent(nextMix);

							// play next mix, which was assigned to this.mixPlaying
							// during the emitUpdatePlayerEvent
							this.playerService.playMix(this.mixPlaying);
						}
						break;
					}

					// repeat one is on, so play current mix again
					case RepeatTypes.REPEAT_ONE_ON: {
						this.playerService.playMix(this.mixPlaying);
						break;
					}

					default:
						this.playerService.emitUpdatePlayerEvent(this.queue[0]);
				}
			}
		});
	}

	getQueue() {
		this.mixService
			.getMixes()
			.subscribe({ next: (mixes) => (this.queue = mixes) });
	}
}
