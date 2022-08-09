import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { CalendarEvent } from "../../interfaces/calendar-event";
import { CalendarEventService } from "../../services/calendar-event.service";

@Component({
	selector: "events-event-page",
	templateUrl: "./event-page.component.html",
	styleUrls: ["./event-page.component.scss"],
})
export class EventPageComponent implements OnInit {
	calendarEvent: CalendarEvent | undefined;

	constructor(
		private route: ActivatedRoute,
		private calendarEventService: CalendarEventService
	) {}

	ngOnInit(): void {
		let stateId = window.history.state.calendarEventId;

		this.route.paramMap.subscribe((params) => {
			let paramId = Number(params.get("id"));

			if (stateId !== paramId) {
				console.log("calling service");
				this.getCalendarEvent(paramId);
			} else {
				this.calendarEvent = window.history.state;
			}
		});
	}

	getCalendarEvent(calendarEventId: number): void {
		let subscription = this.calendarEventService
			.getCalendarEventById(calendarEventId)
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
