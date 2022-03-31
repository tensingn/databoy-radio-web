import { Component, OnInit } from "@angular/core";
import { map } from "rxjs";
import { DateEvent } from "src/app/events/interfaces/date-event";
import { CalendarEventService } from "src/app/events/services/calendar-event.service";

@Component({
	selector: "app-events-side-panel",
	templateUrl: "./events-side-panel.component.html",
	styleUrls: ["./events-side-panel.component.scss"],
})
export class EventsSidePanelComponent implements OnInit {
	dates: DateEvent[] = [];

	constructor(private calendarEventService: CalendarEventService) {}

	ngOnInit(): void {
		this.calendarEventService
			.getDatesWithCalendarEvents()
			.pipe(
				map((dates) => {
					dates.forEach((date) => {
						date.date = new Date(date.date);

						date.calendarEvents.forEach((e) => {
							e.startTime = new Date(e.startTime);
							e.endTime = new Date(e.endTime);
						});
					});
					return dates;
				})
			)
			.subscribe({
				next: (dates) => (this.dates = dates),
			});
	}
}
