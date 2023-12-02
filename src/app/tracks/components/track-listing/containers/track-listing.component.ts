import { Component, Input, OnInit } from "@angular/core";
import { Track } from "src/app/tracks/entities/track";

@Component({
	selector: "tracks-track-listing",
	templateUrl: "./track-listing.component.html",
})
export class TrackListingComponent implements OnInit {
	@Input() track: Track;
	@Input() isFirst: boolean;
	@Input() isLast: boolean;

	ngOnInit() {
		console.log(this.track);
		console.log(this.isFirst ? "first" : "last");
	}
}
