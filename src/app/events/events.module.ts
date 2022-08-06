import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

// components
import { EventsPageComponent } from "./events-page/events-page.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { EventDialogContentComponent } from "./components/event-dialog-content/event-dialog-content.component";

// material modules
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatDividerModule } from "@angular/material/divider";

// other modules
import { SharedModule } from "../shared/shared.module";
import { EventPageComponent } from "./components/event-page/event-page.component";
import { EventDetailsComponent } from './components/event-details/event-details.component';

const routes: Routes = [
	{ path: ":id", component: EventPageComponent },
	{ path: "", component: EventsPageComponent },
	{ path: "**", redirectTo: "" },
];

@NgModule({
	declarations: [
		EventsPageComponent,
		CalendarComponent,
		EventDialogContentComponent,
		EventPageComponent,
  EventDetailsComponent,
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatDatepickerModule,
		MatNativeDateModule,
		MatDialogModule,
		MatCardModule,
		SharedModule,
		MatProgressSpinnerModule,
		MatDividerModule,
	],
})
export class EventsModule {}
