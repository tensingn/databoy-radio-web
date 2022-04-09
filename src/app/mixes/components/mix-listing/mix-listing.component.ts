import {
	BreakpointObserver,
	Breakpoints,
	BreakpointState,
} from "@angular/cdk/layout";
import { Component, Input, OnInit } from "@angular/core";
import { LikesService } from "src/app/shared/services/likes.service";
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
	alreadyLiked: boolean = false;

	constructor(
		private playerService: PlayerService,
		private breakPointObserver: BreakpointObserver,
		private likesService: LikesService
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

	updateMixLikes() {
		if (!this.alreadyLiked) {
			this.likesService.addMixLike(this.mix).subscribe(() => {
				this.mix.likes++;
				this.alreadyLiked = true;
			});
		} else {
			this.likesService.removeMixLike(this.mix);
			this.mix.likes--;
		}
	}
}
