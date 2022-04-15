import { Component, OnInit } from "@angular/core";
import { SubscriptionService } from "src/app/shared/services/subscription.service";
import { Release } from "../../interfaces/release";
import { MixService } from "../../services/mix-service";

@Component({
	selector: "mixes-releases-list",
	templateUrl: "./releases-list.component.html",
	styleUrls: ["./releases-list.component.scss"],
})
export class ReleasesListComponent implements OnInit {
	releases: Release[];

	constructor(
		private mixService: MixService,
		private subscriptionService: SubscriptionService
	) {}

	ngOnInit(): void {
		this.getReleases();
	}

	getReleases(): void {
		let subscription = this.mixService
			.getReleases(this.subscriptionService.getSubscriberId())
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
}
