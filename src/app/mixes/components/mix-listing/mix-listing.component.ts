import { Component, Input, OnInit } from "@angular/core";
import { PlayerService } from "src/app/template/services/player-service";
import { Mix } from "../../interfaces/mix";
import { MixService } from "../../services/mix-service";

@Component({
	selector: "mixes-mix-listing",
	templateUrl: "./mix-listing.component.html",
	styleUrls: ["./mix-listing.component.scss"],
})
export class MixListingComponent implements OnInit {
	@Input() isFirst: boolean;
	@Input() isLast: boolean;
	@Input() mix: Mix;

	constructor(
		private mixService: MixService,
		private playerService: PlayerService
	) {}

	ngOnInit(): void {
		this.playerService.updatePlayerEventListener().subscribe((mix) => {
			if (mix?.mixId == this.mix.mixId) {
				this.mix.isCurrentlyPlaying = true;
				this.mix.isPlayingMix = true;
			} else {
				this.mix.isCurrentlyPlaying = false;
				this.mix.isPlayingMix = false;
			}
		});
	}

	updateMixLikes(likes: number) {
		this.mix.likes = likes;
		this.mixService.updateMix(this.mix);
	}
}
