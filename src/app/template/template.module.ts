import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { TemplateComponent } from "./template.component";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { MainContentComponent } from "./components/main-content/main-content.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { MusicPlayerComponent } from "./components/music-player/music-player.component";
import { MusicPlayerDetailsComponent } from "./components/music-player-details/music-player-details.component";
import { SharedModule } from "../shared/shared.module";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { EventsSidePanelComponent } from "./components/events-side-panel/events-side-panel.component";
import { AuthModule } from "../auth/auth.module";

const routes: Routes = [
	{
		path: "",
		component: TemplateComponent,
		children: [
			{ path: "", component: MainContentComponent },
			{
				path: "tracks",
				loadChildren: () =>
					import("../tracks/tracks.module").then((m) => m.TracksModule),
			},
			{
				path: "events",
				loadChildren: () =>
					import("../events/calendar-events.module").then(
						(e) => e.EventsModule
					),
			},
			{
				path: "store",
				loadChildren: () =>
					import("../store/store.module").then((e) => e.StoreModule),
			},
		],
	},
	{ path: "**", redirectTo: "" },
];

@NgModule({
	declarations: [
		TemplateComponent,
		ToolbarComponent,
		MainContentComponent,
		SidenavComponent,
		MusicPlayerComponent,
		MusicPlayerDetailsComponent,
		EventsSidePanelComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatSidenavModule,
		MatButtonModule,
		MatToolbarModule,
		MatIconModule,
		MatListModule,
		SharedModule,
		MatCardModule,
		AuthModule,
	],
})
export class TemplateModule {}
