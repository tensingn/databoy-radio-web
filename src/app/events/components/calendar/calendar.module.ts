import { NgModule } from "@angular/core";
import { CalendarViewComponent } from "./views/calendar-view.component";
import { CalendarComponent } from "./containers/calendar.component";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { CommonModule } from "@angular/common";
import { CalendarService } from "./services/calendar.service";

@NgModule({
	imports: [MatDatepickerModule, CommonModule],
	declarations: [CalendarComponent, CalendarViewComponent],
	providers: [CalendarService],
	exports: [CalendarComponent],
})
export class CalendarModule {}
