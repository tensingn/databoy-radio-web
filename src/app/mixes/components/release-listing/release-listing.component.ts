import { Component, Input, OnInit } from "@angular/core";
import { LikesService } from "src/app/shared/services/likes.service";
import { Release } from "../../interfaces/release";

@Component({
	selector: "mixes-release-listing",
	templateUrl: "./release-listing.component.html",
	styleUrls: ["./release-listing.component.scss"],
})
export class ReleaseListingComponent implements OnInit {
	@Input() release: Release;
	alreadyLiked: boolean = false;

	constructor(private likesService: LikesService) {}

	ngOnInit(): void {}

	updateReleaseLikes() {
		if (!this.alreadyLiked) {
			this.likesService.addReleaseLike(this.release).subscribe(() => {
				this.release.likes++;
				this.alreadyLiked = true;
			});
		} else {
			this.likesService
				.removeReleaseLike(this.release, 5)
				.subscribe(() => {
					this.release.likes--;
					this.alreadyLiked = false;
				});
		}
	}
}
