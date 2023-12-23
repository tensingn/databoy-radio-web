import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Track } from "../../../interfaces/track";

@Component({
	selector: "tracks-track-listing-view",
	templateUrl: "./track-listing-view.component.html",
	styleUrls: ["./track-listing-view.component.scss"],
})
export class TrackListingViewComponent {
	@Input() isFirst: boolean;
	@Input() isLast: boolean;
	@Input() track: Track;
	@Input() likeLoading: boolean;
	@Output() likeClicked = new EventEmitter<boolean>();

	onLikeClicked() {
		this.likeClicked.emit(!this.track.isLiked);
	}
}
