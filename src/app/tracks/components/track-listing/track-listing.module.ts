import { NgModule } from "@angular/core";
import { TrackListingViewComponent } from "./views/track-listing-view.component";
import { TrackListingComponent } from "./containers/track-listing.component";
import { MatCardModule } from "@angular/material/card";
import { SharedModule } from "src/app/shared/shared.module";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { TrackListingService } from "./services/track-listing.service";

@NgModule({
	imports: [MatCardModule, SharedModule, MatProgressSpinnerModule],
	declarations: [TrackListingViewComponent, TrackListingComponent],
	exports: [TrackListingComponent],
})
export class TrackListingModule {}
