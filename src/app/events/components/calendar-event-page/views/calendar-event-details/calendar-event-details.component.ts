import { Component, Input, OnInit } from "@angular/core";
import { GoogleMapsUrlTypes } from "src/app/shared/pipes/google-maps-url.pipe";
import { CalendarEvent } from "../../../../interfaces/calendar-event";

@Component({
	selector: "events-calendar-event-details",
	templateUrl: "./calendar-event-details.component.html",
	styleUrls: ["./calendar-event-details.component.scss"],
})
export class CalendarEventDetailsComponent {
	@Input() calendarEvent: CalendarEvent | undefined;

	constructor() {}

	public get GoogleMapsUrlTypes() {
		return GoogleMapsUrlTypes;
	}
}
