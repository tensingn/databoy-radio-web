import { Component, Input } from "@angular/core";
import { Track } from "../../../entities/track";

@Component({
	selector: "tracks-list-view",
	templateUrl: "./tracks-list-view.component.html",
	styleUrls: ["./tracks-list-view.component.scss"],
})
export class TracksListViewComponent {
	@Input() releaseId: string;
	@Input() tracks: Array<Track>;
}
