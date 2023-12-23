import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { TracksPageComponent } from "./tracks-page/tracks-page.component";
import { ReleasesListModule } from "./components/releases-list/releases-list.module";

const routes: Routes = [
	{ path: "", component: TracksPageComponent },
	{ path: "**", redirectTo: "" },
];

@NgModule({
	declarations: [TracksPageComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatListModule,
		MatCardModule,
		MatButtonModule,
		MatIconModule,
		SharedModule,
		MatRippleModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		ReleasesListModule,
	],
})
export class TracksModule {}
