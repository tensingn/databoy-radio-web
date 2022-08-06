import { Component, Input, OnInit } from "@angular/core";
import { CalendarEvent } from "../../interfaces/calendar-event";

@Component({
	selector: "events-event-details",
	templateUrl: "./event-details.component.html",
	styleUrls: ["./event-details.component.scss"],
})
export class EventDetailsComponent implements OnInit {
	@Input() calendarEvent: CalendarEvent;

	constructor() {}

	ngOnInit(): void {}
}
