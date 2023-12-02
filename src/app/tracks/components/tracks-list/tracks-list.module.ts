import { NgModule } from "@angular/core";
import { TracksListViewComponent } from "./views/tracks-list-view.component";
import { TracksListComponent } from "./containers/tracks-list.component";
import { MatListModule } from "@angular/material/list";
import { TrackListingModule } from "../track-listing/track-listing.module";
import { CommonModule } from "@angular/common";

@NgModule({
	declarations: [TracksListViewComponent, TracksListComponent],
	imports: [MatListModule, TrackListingModule, CommonModule],
	exports: [TracksListComponent],
})
export class TracksListModule {}
