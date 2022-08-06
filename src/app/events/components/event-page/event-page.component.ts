import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { map } from "rxjs";
import { CalendarEvent } from "../../interfaces/calendar-event";
import { CalendarEventService } from "../../services/calendar-event.service";

@Component({
	selector: "events-event-page",
	templateUrl: "./event-page.component.html",
	styleUrls: ["./event-page.component.scss"],
})
export class EventPageComponent implements OnInit {
	calendarEvent: CalendarEvent;

	constructor(
		private route: ActivatedRoute,
		private calendarEventService: CalendarEventService
	) {}

	ngOnInit(): void {
		this.calendarEvent = window.history.state;

		// calendar event is null if the page was nav'd to via the url bar
		// instead of clicking on the event expansion pannel
		if (!this.calendarEvent.calendarEventId) {
			this.route.paramMap.subscribe((params) => {
				this.getCalendarEvent(Number(params.get("id")));
			});
		}
	}

	getCalendarEvent(calendarEventId: number): void {
		let subscription = this.calendarEventService
			.getCalendarEventById(calendarEventId)
			.pipe(
				map((calendarEvent) => {
					calendarEvent.startTime = new Date(calendarEvent.startTime);
					calendarEvent.endTime = new Date(calendarEvent.endTime);
					return calendarEvent;
				})
			)
			.subscribe({
				next: (calendarEvent) => {
					this.calendarEvent = calendarEvent;
				},
				error: () => {
					subscription.unsubscribe();
				},
				complete: () => {
					subscription.unsubscribe();
				},
			});
	}
}
