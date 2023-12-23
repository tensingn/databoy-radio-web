import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CalendarEvent } from "../../../interfaces/calendar-event";

@Component({
	selector: "events-calendar-events-page-view",
	templateUrl: "./calendar-event-page-view.component.html",
	styleUrls: ["./calendar-event-page-view.component.scss"],
})
export class CalendarEventPageViewComponent {
	@Input() calendarEvent: CalendarEvent;
	@Input() isGoing: boolean;
	@Input() loading: boolean;

	@Output() goingClicked = new EventEmitter();

	onGoingClicked() {
		this.goingClicked.emit();
	}
}
