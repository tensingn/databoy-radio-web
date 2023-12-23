import { Component, Input, OnInit } from "@angular/core";
import { Track } from "src/app/tracks/interfaces/track";

@Component({
	selector: "tracks-list",
	templateUrl: "./tracks-list.component.html",
})
export class TracksListComponent {
	@Input() releaseID: string;
	@Input() tracks: Array<Track>;
}
