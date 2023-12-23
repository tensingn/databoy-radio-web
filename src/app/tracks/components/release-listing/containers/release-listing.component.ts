import { Component, Input } from "@angular/core";
import { Release } from "src/app/tracks/interfaces/release";
import { ReleaseListingService } from "../services/release-listing.service";
import { Observable } from "rxjs";

@Component({
	selector: "tracks-release-listing",
	templateUrl: "./release-listing.component.html",
	providers: [ReleaseListingService],
})
export class ReleaseListingComponent {
	@Input() release: Release;
	likeLoading: Observable<boolean>;

	constructor(private releaseListingService: ReleaseListingService) {
		this.likeLoading = this.releaseListingService.likeLoading;

		this.releaseListingService.releaseUpdates.subscribe((updates) => {
			if (updates && Object.keys(updates).length) {
				this.release = { ...this.release, ...updates };
			}
		});
	}

	onLikeClicked(liked: boolean) {
		if (!this.release) throw new Error("No Release to like.");

		this.releaseListingService.likeRelease(this.release?.id, liked);
	}
}
