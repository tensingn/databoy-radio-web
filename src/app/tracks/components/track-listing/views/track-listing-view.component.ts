import {
	BreakpointObserver,
	Breakpoints,
	BreakpointState,
} from "@angular/cdk/layout";
import { Component, Input, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LikeToastComponent } from "src/app/shared/components/like-toast/like-toast.component";
import { LikesService } from "src/app/shared/services/likes.service";
import { SubscriptionService } from "src/app/shared/services/subscription.service";
import { PlayerService } from "src/app/template/services/player-service";
import { Track } from "../../../entities/track";

@Component({
	selector: "tracks-track-listing-view",
	templateUrl: "./track-listing-view.component.html",
	styleUrls: ["./track-listing-view.component.scss"],
})
export class TrackListingViewComponent implements OnInit {
	@Input() isFirst: boolean;
	@Input() isLast: boolean;
	@Input() track: Track;
	@Input() alreadyLiked: boolean;
	screenIsSmall: boolean = true;
	httpComplete: boolean = true;
	toastDuration: number = 3;

	constructor(
		private playerService: PlayerService,
		private breakPointObserver: BreakpointObserver,
		private likesService: LikesService,
		private toast: MatSnackBar,
		private subscriptionService: SubscriptionService
	) {}

	ngOnInit(): void {
		console.log(this.track);
		// this.playerService.updatePlayerEventListener().subscribe((track) => {
		// 	if (track?.trackId == this.track.trackId) {
		// 		// this.track.isPlayingTrack = true;
		// 		// if(track?.is)
		// 		//this.track = track;
		// 	} else {
		// 		this.track.isCurrentlyPlaying = false;
		// 		this.track.isPlayingTrack = false;
		// 	}
		// });

		this.breakPointObserver
			.observe([Breakpoints.XSmall])
			.subscribe((state: BreakpointState) => {
				this.screenIsSmall = state.matches;
			});
	}

	updateTrackLikes() {
		if (!this.alreadyLiked) {
			// // setting this before subscribing so we can have a seamless-looking
			// // transition of the like button to liked status.
			// // if there is a failure, we set the button back to original state
			// this.track.likes++;
			// this.alreadyLiked = true;

			this.httpComplete = false;

			let subscription = this.likesService
				.addTrackLike(this.track, this.subscriptionService.getSubscriberId())
				.subscribe({
					next: () => {
						this.track.numLikes++;
						this.alreadyLiked = true;
					},
					error: () => {
						// this.track.likes--;
						// this.alreadyLiked = false;
						this.httpComplete = true;
						subscription.unsubscribe();
						if (!this.subscriptionService.getSubscriberId()) {
							this.openToast("You must be subscribed to like a Track.", true);
						} else {
							this.openToast("Unable to like Track.");
						}
					},
					complete: () => {
						this.httpComplete = true;
						subscription.unsubscribe();
						this.openToast("Track liked.");
					},
				});
		} else {
			// // setting this before subscribing so we can have a seamless-looking
			// // transition of the like button to unliked status.
			// // if there is a failure, we set the button back to original state
			// this.track.likes--;
			// this.alreadyLiked = false;

			this.httpComplete = false;

			let subscription = this.likesService
				.removeTrackLike(this.track, this.subscriptionService.getSubscriberId())
				.subscribe({
					next: () => {
						this.track.numLikes--;
						this.alreadyLiked = false;
					},
					error: () => {
						// this.track.likes++;
						// this.alreadyLiked = true;
						this.httpComplete = true;
						subscription.unsubscribe();
						if (!this.subscriptionService.getSubscriberId()) {
							this.openToast("You must be subscribed to unlike a Track.", true);
						} else {
							this.openToast("Unable to unlike Track.");
						}
					},
					complete: () => {
						this.httpComplete = true;
						subscription.unsubscribe();
						this.openToast("Track unliked.");
					},
				});
		}
	}

	openToast(message: string, needSubscribeButton?: boolean) {
		this.toast.openFromComponent(LikeToastComponent, {
			duration: this.toastDuration * 1000,
			data: {
				message,
				needSubscribeButton,
			},
		});
	}
}
