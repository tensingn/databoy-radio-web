import { Component, Input, OnInit } from "@angular/core";
import { GoogleMapsUrlTypes } from "src/app/shared/pipes/google-maps-url.pipe";
import { CalendarEvent } from "../../interfaces/calendar-event";

@Component({
	selector: "events-event-details",
	templateUrl: "./event-details.component.html",
	styleUrls: ["./event-details.component.scss"],
})
export class EventDetailsComponent implements OnInit {
	@Input() calendarEvent: CalendarEvent | undefined;

	constructor() {}

	ngOnInit(): void {}

	public get GoogleMapsUrlTypes() {
		return GoogleMapsUrlTypes;
	}
}
