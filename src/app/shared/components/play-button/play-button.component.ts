import { Component, Input } from "@angular/core";
import { Track } from "../../../tracks/interfaces/track";
import { PlayerService } from "../../../template/services/player-service";

@Component({
	selector: "app-play-button",
	templateUrl: "./play-button.component.html",
	styleUrls: ["./play-button.component.scss"],
})
export class PlayButtonComponent {
	@Input() track: Track | null;

	constructor(private playerService: PlayerService) {}

	togglePlaying(): void {
		if (this.track) {
			if (!this.track.isPlayingTrack) {
				this.playerService.emitUpdatePlayerEvent(this.track);
				this.playerService.playTrack(this.track);
			} else {
				if (!this.track.isCurrentlyPlaying) {
					this.playerService.continuePlayingTrack(this.track);
				} else {
					this.playerService.pausePlayingTrack(this.track);
				}
			}
		}
	}
}
