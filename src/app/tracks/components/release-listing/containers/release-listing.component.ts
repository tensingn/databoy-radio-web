import { Component, Input } from "@angular/core";
import { Release } from "src/app/tracks/entities/release";

@Component({
	selector: "tracks-release-listing",
	templateUrl: "./release-listing.component.html",
})
export class ReleaseListingComponent {
	@Input() release: Release;
}
