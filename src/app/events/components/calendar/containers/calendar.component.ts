import { Component } from "@angular/core";
import { CalendarService } from "../services/calendar.service";
import { Observable } from "rxjs";
import { CalendarEvent } from "src/app/events/interfaces/calendar-event";

@Component({
	selector: "events-calendar",
	templateUrl: "./calendar.component.html",
})
export class CalendarComponent {
	calendarEvents: Observable<Array<CalendarEvent>>;

	constructor(private calendarService: CalendarService) {
		this.calendarEvents = this.calendarService.calendarEvents;

		this.calendarService.initialize();
	}

	onDateClicked(date: Date) {
		this.calendarService.onDateClicked(date);
	}
}
