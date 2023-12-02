import { Component, Input, OnInit } from "@angular/core";
import { Track } from "src/app/tracks/entities/track";

@Component({
	selector: "tracks-list",
	templateUrl: "./tracks-list.component.html",
})
export class TracksListComponent implements OnInit {
	@Input() releaseID: string;
	@Input() tracks: Array<Track>;

	ngOnInit() {
		console.log(this.tracks);
		console.log(this.releaseID);
	}
}
