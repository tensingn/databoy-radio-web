import { Component, Input, OnInit } from "@angular/core";
import { Release } from "../../../entities/release";

@Component({
	selector: "tracks-releases-list-view",
	templateUrl: "./releases-list-view.component.html",
	styleUrls: ["./releases-list-view.component.scss"],
})
export class ReleasesListViewComponent {
	@Input() releases: Array<Release>;

	constructor() {}
}
