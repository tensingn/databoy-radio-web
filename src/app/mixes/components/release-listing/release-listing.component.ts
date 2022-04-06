import { Component, Input, OnInit } from "@angular/core";
import { Release } from "../../interfaces/release";

@Component({
	selector: "mixes-release-listing",
	templateUrl: "./release-listing.component.html",
	styleUrls: ["./release-listing.component.scss"],
})
export class ReleaseListingComponent implements OnInit {
	@Input() release: Release;

	constructor() {}

	ngOnInit(): void {}
}
