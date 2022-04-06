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

	constructor(private mixService: MixService) {}

	ngOnInit(): void {
		this.getReleases();
	}

	getReleases(): void {
		this.mixService.getReleases().subscribe({
			next: (releases) => {
				this.releases = releases;
				// console.log(releases);
			},
		});
	}
}
