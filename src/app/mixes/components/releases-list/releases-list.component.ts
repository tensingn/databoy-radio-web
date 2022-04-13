import { Component, OnInit } from "@angular/core";
import { Release } from "../../interfaces/release";
import { MixService } from "../../services/mix-service";

@Component({
	selector: "mixes-releases-list",
	templateUrl: "./releases-list.component.html",
	styleUrls: ["./releases-list.component.scss"],
})
export class ReleasesListComponent implements OnInit {
	releases: Release[];
	subscriberId: number = 0;

	constructor(private mixService: MixService) {}

	ngOnInit(): void {
		this.getSubscriberId();
		this.getReleases();
	}

	getReleases(): void {
		let subscription = this.mixService
			.getReleases(this.subscriberId)
			.subscribe({
				next: (releases) => {
					this.releases = releases;
				},
				error: () => {
					subscription.unsubscribe();
				},
				complete: () => {
					subscription.unsubscribe();
				},
			});
	}

	// TODO - add this logic
	getSubscriberId() {
		this.subscriberId = 4;
	}
}
