import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Release } from "../../../interfaces/release";

@Component({
	selector: "tracks-release-listing-view",
	templateUrl: "./release-listing-view.component.html",
	styleUrls: ["./release-listing-view.component.scss"],
})
export class ReleaseListingViewComponent {
	@Input() release: Release;
	@Input() likeLoading: boolean;
	@Output() likeClicked = new EventEmitter<boolean>();

	onLikeClicked() {
		this.likeClicked.emit(!this.release.isLiked);
	}
}
