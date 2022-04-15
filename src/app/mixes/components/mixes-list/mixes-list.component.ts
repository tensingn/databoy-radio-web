import { Component, Input, OnInit } from "@angular/core";
import { Mix } from "../../interfaces/mix";
import { PlayerService } from "../../../template/services/player-service";
import { MixService } from "../../services/mix-service";
import { SubscriptionService } from "src/app/shared/services/subscription.service";

@Component({
	selector: "mixes-list",
	templateUrl: "./mixes-list.component.html",
	styleUrls: ["./mixes-list.component.scss"],
})
export class MixesListComponent implements OnInit {
	@Input() releaseId: number;
	mixes: Mix[];

	constructor(
		private mixService: MixService,
		private playerService: PlayerService,
		private subscriptionService: SubscriptionService
	) {}

	ngOnInit(): void {
		this.getMixes();
	}

	getMixes(): void {
		let subscription = this.mixService
			.getReleaseById(
				this.releaseId,
				this.subscriptionService.getSubscriberId()
			)
			.subscribe({
				next: (release) => {
					this.mixes = release.mixes;
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
