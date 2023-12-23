import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { ReleaseListingViewComponent } from "./views/release-listing-view.component";
import { ReleaseListingComponent } from "./containers/release-listing.component";
import { SharedModule } from "src/app/shared/shared.module";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { TracksListModule } from "../tracks-list/tracks-list.module";

@NgModule({
	declarations: [ReleaseListingComponent, ReleaseListingViewComponent],
	imports: [
		MatCardModule,
		SharedModule,
		MatDividerModule,
		MatProgressSpinnerModule,
		TracksListModule,
	],
	exports: [ReleaseListingComponent],
})
export class ReleaseListingModule {}
