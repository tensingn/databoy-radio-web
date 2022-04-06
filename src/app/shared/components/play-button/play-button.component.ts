import {
	Component,
	Input,
	OnChanges,
	OnInit,
	SimpleChanges,
} from "@angular/core";
import { Mix } from "../../../mixes/interfaces/mix";
import { PlayerService } from "../../../template/services/player-service";

@Component({
	selector: "app-play-button",
	templateUrl: "./play-button.component.html",
	styleUrls: ["./play-button.component.scss"],
})
export class PlayButtonComponent {
	@Input() mix: Mix | null;

	constructor(private playerService: PlayerService) {}

	togglePlaying(): void {
		if (this.mix) {
			if (!this.mix.isPlayingMix) {
				this.playerService.emitUpdatePlayerEvent(this.mix);
				this.playerService.playMix(this.mix);
			} else {
				if (!this.mix.isCurrentlyPlaying) {
					this.playerService.continuePlayingMix(this.mix);
				} else {
					this.playerService.pausePlayingMix(this.mix);
				}
			}
		}
	}
}
