import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { EventsPageComponent } from "./calendar-events-page/events-page.component";
import { EventDialogContentComponent } from "./components/calendar-event-dialog-content/event-dialog-content.component";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDividerModule } from "@angular/material/divider";
import { SharedModule } from "../shared/shared.module";
import { CalendarModule } from "./components/calendar/calendar.module";
import { CalendarEventPageModule } from "./components/calendar-event-page/calendar-event-page.module";
import { CalendarEventPageComponent } from "./components/calendar-event-page/containers/calendar-event-page.component";
import { GoingService } from "./services/going.service";
import { CalendarEventPageService } from "./components/calendar-event-page/services/calendar-event-page.service";

const routes: Routes = [
	{ path: ":id", component: CalendarEventPageComponent },
	{ path: "", component: EventsPageComponent },
	{ path: "**", redirectTo: "" },
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatNativeDateModule,
		MatDialogModule,
		MatCardModule,
		SharedModule,
		MatProgressSpinnerModule,
		MatDividerModule,
		CalendarModule,
		CalendarEventPageModule,
	],
	declarations: [EventDialogContentComponent, EventsPageComponent],
	providers: [GoingService, CalendarEventPageService],
})
export class EventsModule {}
