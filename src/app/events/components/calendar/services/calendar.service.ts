import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, Subject, map, takeUntil } from "rxjs";
import { CalendarEvent } from "src/app/events/interfaces/calendar-event";
import { CalendarEventService } from "src/app/events/services/calendar-event.service";
import { IsSameDay } from "src/app/shared/utils/date-utils";
import { EventDialogContentComponent } from "../../calendar-event-dialog-content/event-dialog-content.component";
import { MatDialog } from "@angular/material/dialog";

@Injectable()
export class CalendarService implements OnDestroy {
	calendarEvents: Observable<Array<CalendarEvent>>;

	private _calendarEvents: BehaviorSubject<Array<CalendarEvent>> =
		new BehaviorSubject([]);

	private unsubscribe = new Subject<void>();

	constructor(
		private calendarEventService: CalendarEventService,
		private dialog: MatDialog
	) {
		this.calendarEvents = this._calendarEvents.asObservable();
	}

	initialize() {
		let user = this.calendarEventService
			.getCalendarEvents()
			.pipe(
				map((calendarEvents) => {
					calendarEvents.forEach((e) => {
						e.startTime = new Date(e.startTime);
						e.endTime = new Date(e.endTime);
					});
					return calendarEvents;
				}),
				takeUntil(this.unsubscribe)
			)
			.subscribe({
				next: (calendarEvents) => {
					this._calendarEvents.next(calendarEvents);
				},
				error: () => {
					user.unsubscribe();
				},
				complete: () => {
					user.unsubscribe();
				},
			});
	}

	onDateClicked(date: Date) {
		let eventsOnDay: Array<CalendarEvent> = this._calendarEvents.value.filter(
			(e) => IsSameDay(date, e.startTime) || IsSameDay(date, e.endTime)
		);
		this.openDialog(date, eventsOnDay);
	}

	ngOnDestroy() {
		this.unsubscribe.next();
	}

	private openDialog(date: Date, eventsOnDay: Array<CalendarEvent>) {
		this.dialog.open(EventDialogContentComponent, {
			data: {
				events: eventsOnDay,
				date: date,
			},
		});
	}
}
