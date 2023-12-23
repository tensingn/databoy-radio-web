import { Component, Input, OnInit } from "@angular/core";
import { Track } from "src/app/tracks/interfaces/track";

@Component({
	selector: "app-music-player-details",
	templateUrl: "./music-player-details.component.html",
	styleUrls: ["./music-player-details.component.scss"],
})
export class MusicPlayerDetailsComponent implements OnInit {
	@Input() track: Track | null;

	constructor() {}

	ngOnInit(): void {}
}
