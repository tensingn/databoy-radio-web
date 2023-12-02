import { Component, Input, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { LikeToastComponent } from "src/app/shared/components/like-toast/like-toast.component";
import { LikesService } from "src/app/shared/services/likes.service";
import { SubscriptionService } from "src/app/shared/services/subscription.service";
import { Release } from "../../../entities/release";

@Component({
	selector: "tracks-release-listing-view",
	templateUrl: "./release-listing-view.component.html",
	styleUrls: ["./release-listing-view.component.scss"],
})
export class ReleaseListingViewComponent implements OnInit {
	@Input() release: Release;
	@Input() alreadyLiked: boolean;
	httpComplete: boolean = true;
	toastDuration: number = 3;

	constructor(
		private likesService: LikesService,
		private toast: MatSnackBar,
		private subscriptionService: SubscriptionService
	) {}

	ngOnInit(): void {}

	updateReleaseLikes() {
		if (!this.alreadyLiked) {
			// // setting this before subscribing so we can have a seamless-looking
			// // transition of the like button to liked status.
			// // if there is a failure, we set the button back to original state
			// this.release.likes++;
			// this.alreadyLiked = true;

			this.httpComplete = false;

			let subscription = this.likesService
				.addReleaseLike(
					this.release,
					this.subscriptionService.getSubscriberId()
				)
				.subscribe({
					next: () => {
						this.release.numLikes++;
						this.alreadyLiked = true;
					},
					error: () => {
						// this.release.likes--;
						// this.alreadyLiked = false;
						this.httpComplete = true;
						subscription.unsubscribe();
						if (!this.subscriptionService.getSubscriberId()) {
							this.openToast("You must be subscribed to like a Release.", true);
						} else {
							this.openToast("Unable to like Release.");
						}
					},
					complete: () => {
						this.httpComplete = true;
						subscription.unsubscribe();
						this.openToast("Release liked.");
					},
				});
		} else {
			// // setting this before subscribing so we can have a seamless-looking
			// // transition of the like button to unliked status.
			// // if there is a failure, we set the button back to original state
			// this.release.likes--;
			// this.alreadyLiked = false;

			this.httpComplete = false;

			let subscription = this.likesService
				.removeReleaseLike(
					this.release,
					this.subscriptionService.getSubscriberId()
				)
				.subscribe({
					next: () => {
						this.release.numLikes--;
						this.alreadyLiked = false;
					},
					error: () => {
						// this.release.likes++;
						// this.alreadyLiked = true;
						this.httpComplete = true;
						subscription.unsubscribe();
						if (!this.subscriptionService.getSubscriberId()) {
							this.openToast(
								"You must be subscribed to unlike a Release.",
								true
							);
						} else {
							this.openToast("Unable to unlike Release.");
						}
					},
					complete: () => {
						this.httpComplete = true;
						subscription.unsubscribe();
						this.openToast("Release unliked.");
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
