import { Component, Input } from "@angular/core";
import { Track } from "src/app/tracks/interfaces/track";
import { TrackListingService } from "../services/track-listing.service";
import { Observable } from "rxjs";

@Component({
	selector: "tracks-track-listing",
	templateUrl: "./track-listing.component.html",
	providers: [TrackListingService],
})
export class TrackListingComponent {
	@Input() track: Track;
	@Input() isFirst: boolean;
	@Input() isLast: boolean;
	likeLoading: Observable<boolean>;

	constructor(private trackListingService: TrackListingService) {
		this.likeLoading = this.trackListingService.likeLoading;

		this.trackListingService.trackUpdates.subscribe((updates) => {
			if (updates && Object.keys(updates).length) {
				this.track = { ...this.track, ...updates };
			}
		});
	}

	onLikeClicked(liked: boolean) {
		if (!this.track) throw new Error("No Track to like.");

		this.trackListingService.likeTrack(this.track?.id, liked);
	}
}
