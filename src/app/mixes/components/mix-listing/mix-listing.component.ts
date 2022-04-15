import {
	BreakpointObserver,
	Breakpoints,
	BreakpointState,
} from "@angular/cdk/layout";
import { Component, Input, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import * as e from "express";
import { LikeToastComponent } from "src/app/shared/components/like-toast/like-toast.component";
import { LikesService } from "src/app/shared/services/likes.service";
import { SubscriptionService } from "src/app/shared/services/subscription.service";
import { PlayerService } from "src/app/template/services/player-service";
import { Mix } from "../../interfaces/mix";

@Component({
	selector: "mixes-mix-listing",
	templateUrl: "./mix-listing.component.html",
	styleUrls: ["./mix-listing.component.scss"],
})
export class MixListingComponent implements OnInit {
	@Input() isFirst: boolean;
	@Input() isLast: boolean;
	@Input() mix: Mix;
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
			// // setting this before subscribing so we can have a seamless-looking
			// // transition of the like button to liked status.
			// // if there is a failure, we set the button back to original state
			// this.mix.likes++;
			// this.alreadyLiked = true;

			this.httpComplete = false;

			let subscription = this.likesService
				.addMixLike(
					this.mix,
					this.subscriptionService.getSubscriberId()
				)
				.subscribe({
					next: () => {
						this.mix.likes++;
						this.alreadyLiked = true;
					},
					error: () => {
						// this.mix.likes--;
						// this.alreadyLiked = false;
						this.httpComplete = true;
						subscription.unsubscribe();
						if (!this.subscriptionService.getSubscriberId()) {
							this.openToast(
								"You must be subscribed to like a Mix.",
								true
							);
						} else {
							this.openToast("Unable to like Mix.");
						}
					},
					complete: () => {
						this.httpComplete = true;
						subscription.unsubscribe();
						this.openToast("Mix liked.");
					},
				});
		} else {
			// // setting this before subscribing so we can have a seamless-looking
			// // transition of the like button to unliked status.
			// // if there is a failure, we set the button back to original state
			// this.mix.likes--;
			// this.alreadyLiked = false;

			this.httpComplete = false;

			let subscription = this.likesService
				.removeMixLike(
					this.mix,
					this.subscriptionService.getSubscriberId()
				)
				.subscribe({
					next: () => {
						this.mix.likes--;
						this.alreadyLiked = false;
					},
					error: () => {
						// this.mix.likes++;
						// this.alreadyLiked = true;
						this.httpComplete = true;
						subscription.unsubscribe();
						if (!this.subscriptionService.getSubscriberId()) {
							this.openToast(
								"You must be subscribed to unlike a Mix.",
								true
							);
						} else {
							this.openToast("Unable to unlike Mix.");
						}
					},
					complete: () => {
						this.httpComplete = true;
						subscription.unsubscribe();
						this.openToast("Mix unliked.");
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
