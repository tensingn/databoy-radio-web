import { NgModule } from "@angular/core";
import { TracksListViewComponent } from "./views/tracks-list-view.component";
import { TracksListComponent } from "./containers/tracks-list.component";
import { MatListModule } from "@angular/material/list";
import { TrackListingModule } from "../track-listing/track-listing.module";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
	declarations: [TracksListViewComponent, TracksListComponent],
	imports: [MatListModule, TrackListingModule, CommonModule, SharedModule],
	exports: [TracksListComponent],
})
export class TracksListModule {}
