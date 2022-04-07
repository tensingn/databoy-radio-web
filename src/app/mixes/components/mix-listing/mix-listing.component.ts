import {
	BreakpointObserver,
	Breakpoints,
	BreakpointState,
} from "@angular/cdk/layout";
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
	screenIsSmall: boolean = true;

	constructor(
		private mixService: MixService,
		private playerService: PlayerService,
		private breakPointObserver: BreakpointObserver
	) {}

	ngOnInit(): void {
		this.playerService.updatePlayerEventListener().subscribe((mix) => {
			if (mix?.mixId == this.mix.mixId) {
				// this.mix.isPlayingMix = true;
				// if(mix?.is)
				this.mix = mix;
			} else {
				this.mix.isCurrentlyPlaying = false;
				this.mix.isPlayingMix = false;
			}
		});

		this.breakPointObserver
			.observe([Breakpoints.XSmall])
			.subscribe((state: BreakpointState) => {
				this.screenIsSmall = state.matches;
			});
	}

	updateMixLikes(likes: number) {
		this.mix.likes = likes;
		this.mixService.updateMix(this.mix);
	}
}
