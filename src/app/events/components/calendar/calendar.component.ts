import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MatCalendarCellClassFunction } from "@angular/material/datepicker";
import { IsSameDay } from "src/app/shared/utils/date-utils";
import { CalendarEvent } from "../../interfaces/calendar-event";
import { CalendarEventService } from "../../services/calendar-event.service";
import { MatDialog } from "@angular/material/dialog";
import { EventDialogContentComponent } from "../event-dialog-content/event-dialog-content.component";
import { map } from "rxjs";

@Component({
	selector: "events-calendar",
	templateUrl: "./calendar.component.html",
	styleUrls: ["./calendar.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
	//selectedDate: Date | null;
	minDate = new Date(2020, 0, 1);
	maxDate = new Date(2050, 11, 31);
	events: CalendarEvent[];

	constructor(
		private calendarEventService: CalendarEventService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		let subscription = this.calendarEventService
			.getCalendarEvents()
			.pipe(
				map((calendarEvents) => {
					calendarEvents.forEach((e) => {
						e.startTime = new Date(e.startTime);
						e.endTime = new Date(e.endTime);
					});
					return calendarEvents;
				})
			)
			.subscribe({
				next: (calendarEvents) => {
					this.events = calendarEvents;
				},
				error: () => {
					subscription.unsubscribe();
				},
				complete: () => {
					subscription.unsubscribe();
				},
			});
	}

	dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
		// Only highligh dates inside the month view.
		if (view === "month") {
			// Highlight days that have an event
			return this.events?.some(
				(e) =>
					IsSameDay(cellDate, e.startTime) ||
					IsSameDay(cellDate, e.endTime)
			)
				? "calendar-event"
				: "";
		}

		return "";
	};

	onDateClick(cellDate: Date | null) {
		// check for events on this day
		if (cellDate) {
			let eventsOnDay: CalendarEvent[] = this.events.filter(
				(e) =>
					IsSameDay(cellDate, e.startTime) ||
					IsSameDay(cellDate, e.endTime)
			);

			// display dialog with event info if there are events that day
			this.openDialog(cellDate, eventsOnDay);
		}
	}

	openDialog(date: Date, eventsOnDay: CalendarEvent[]) {
		this.dialog.open(EventDialogContentComponent, {
			data: {
				events: eventsOnDay,
				date: date,
			},
		});
	}
}
