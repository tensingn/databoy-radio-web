import { Component, Input, OnInit } from "@angular/core";
import { Mix } from "../../interfaces/mix";
import { PlayerService } from "../../../template/services/player-service";
import { MixService } from "../../services/mix-service";

@Component({
	selector: "mixes-list",
	templateUrl: "./mixes-list.component.html",
	styleUrls: ["./mixes-list.component.scss"],
})
export class MixesListComponent implements OnInit {
	@Input() releaseId: number;
	mixes: Mix[];
	@Input() subscriberId: number;

	constructor(
		private mixService: MixService,
		private playerService: PlayerService
	) {}

	ngOnInit(): void {
		this.getMixes();
	}

	getMixes(): void {
		this.mixService
			.getReleaseById(this.releaseId, this.subscriberId)
			.subscribe({
				next: (release) => {
					this.mixes = release.mixes;
				},
			});
	}
}
