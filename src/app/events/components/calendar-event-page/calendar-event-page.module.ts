import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CalendarEventPageComponent } from "./containers/calendar-event-page.component";
import { CalendarEventPageViewComponent } from "./views/calendar-event-page-view.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CalendarEventPageService } from "./services/calendar-event-page.service";
import { CalendarEventDetailsComponent } from "./views/calendar-event-details/calendar-event-details.component";
import { GoingButtonModule } from "../going-button/going-button.module";

@NgModule({
	imports: [
		CommonModule,
		MatDividerModule,
		MatCardModule,
		MatProgressSpinnerModule,
		GoingButtonModule,
	],
	declarations: [
		CalendarEventPageComponent,
		CalendarEventPageViewComponent,
		CalendarEventDetailsComponent,
	],
	providers: [CalendarEventPageService],
	exports: [CalendarEventPageComponent],
})
export class CalendarEventPageModule {}
