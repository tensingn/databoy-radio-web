import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ReleasesListService } from "../services/releases-list.service";
import { Release } from "src/app/tracks/interfaces/release";

@Component({
	selector: "tracks-releases-list",
	templateUrl: "./releases-list.component.html",
	providers: [ReleasesListService],
})
export class ReleasesListComponent implements OnInit {
	releases: Observable<Array<Release>>;
	unsubscribe = new Subject<void>();

	constructor(private releasesListService: ReleasesListService) {
		this.releases = this.releasesListService.releases;
	}

	ngOnInit(): void {
		this.releasesListService.initializeData();
	}
}
