import { Component, Input, OnInit } from "@angular/core";
import { CalendarEvent } from "src/app/events/interfaces/calendar-event";

@Component({
	selector: "app-event-expansion-panel",
	templateUrl: "./event-expansion-panel.component.html",
	styleUrls: ["./event-expansion-panel.component.scss"],
})
export class EventExpansionPanelComponent implements OnInit {
	@Input() events: Array<CalendarEvent>;

	constructor() {}

	ngOnInit(): void {}
}
