import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// shared components
//import { SharedModule } from "../shared/shared.module";

import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ReleasesListViewComponent } from "./views/releases-list-view.component";
import { ReleasesListComponent } from "./containers/releases-list.component";
import { ReleaseListingModule } from "../release-listing/release-listing.module";

@NgModule({
	declarations: [ReleasesListComponent, ReleasesListViewComponent],
	imports: [
		CommonModule,
		MatListModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		// SharedModule,
		MatRippleModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		ReleaseListingModule,
	],
	exports: [ReleasesListComponent],
})
export class ReleasesListModule {}
