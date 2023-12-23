import { Component, OnInit } from "@angular/core";
import { map } from "rxjs";
import { DateEvent } from "src/app/events/interfaces/date-event";
import { CalendarEventService } from "src/app/events/services/calendar-event.service";
import { CalendarEventsToDateEvents } from "src/app/shared/utils/date-utils";

@Component({
	selector: "app-events-side-panel",
	templateUrl: "./events-side-panel.component.html",
	styleUrls: ["./events-side-panel.component.scss"],
})
export class EventsSidePanelComponent implements OnInit {
	dates: DateEvent[] = [];

	constructor(private calendarEventService: CalendarEventService) {}

	ngOnInit(): void {
		let user = this.calendarEventService
			.getCalendarEvents()
			.pipe(
				map((calendarEvents) => {
					calendarEvents.forEach((calendarEvent) => {
						calendarEvent.startTime = new Date(calendarEvent.startTime);

						calendarEvent.endTime = new Date(calendarEvent.endTime);
					});
					return calendarEvents;
				})
			)
			.subscribe({
				next: (calendarEvents) => {
					this.dates = CalendarEventsToDateEvents(calendarEvents);
				},
				error: () => {
					user.unsubscribe();
				},
				complete: () => {
					user.unsubscribe();
				},
			});
	}
}
