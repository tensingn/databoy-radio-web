import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ReleasesListService } from "../services/releases-list.service";
import { Release } from "src/app/tracks/entities/release";

@Component({
	selector: "tracks-releases-list",
	templateUrl: "./releases-list.component.html",
})
export class ReleasesListComponent implements OnInit {
	releases: Observable<Array<Release>>;

	constructor(private releasesListService: ReleasesListService) {
		this.releases = this.releasesListService.releases;
	}

	ngOnInit(): void {
		this.releasesListService.initializeData();
	}
}
