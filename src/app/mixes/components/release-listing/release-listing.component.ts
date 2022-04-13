import { Component, Input, OnInit } from "@angular/core";
import { response } from "express";
import { LikesService } from "src/app/shared/services/likes.service";
import { Release } from "../../interfaces/release";

@Component({
	selector: "mixes-release-listing",
	templateUrl: "./release-listing.component.html",
	styleUrls: ["./release-listing.component.scss"],
})
export class ReleaseListingComponent implements OnInit {
	@Input() release: Release;
	@Input() alreadyLiked: boolean;
	@Input() subscriberId: number;

	constructor(private likesService: LikesService) {}

	ngOnInit(): void {}

	updateReleaseLikes() {
		if (!this.alreadyLiked) {
			let subscription = this.likesService
				.addReleaseLike(this.release, this.subscriberId)
				.subscribe({
					next: () => {
						this.release.likes++;
						this.alreadyLiked = true;
					},
					error: () => {
						subscription.unsubscribe();
					},
					complete: () => {
						subscription.unsubscribe();
					},
				});
		} else {
			let subscription = this.likesService
				.removeReleaseLike(this.release, this.subscriberId)
				.subscribe({
					next: () => {
						this.release.likes--;
						this.alreadyLiked = false;
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
}
