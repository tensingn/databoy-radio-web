import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

// shared components
import { SharedModule } from "../shared/shared.module";

// material modules
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";

// mix components
import { MixesPageComponent } from "./mixes-page/mixes-page.component";
import { MixesListComponent } from "./components/mixes-list/mixes-list.component";
import { MixListingComponent } from "./components/mix-listing/mix-listing.component";
import { ReleaseListingComponent } from "./components/release-listing/release-listing.component";
import { ReleasesListComponent } from "./components/releases-list/releases-list.component";

const routes: Routes = [
	{ path: "", component: MixesPageComponent },
	{ path: "**", redirectTo: "" },
];

// material modules

@NgModule({
	declarations: [
		MixesPageComponent,
		MixesListComponent,
		MixListingComponent,
		MixListingComponent,
		ReleaseListingComponent,
		ReleasesListComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatListModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		SharedModule,
		MatRippleModule,
	],
})
export class MixesModule {}
