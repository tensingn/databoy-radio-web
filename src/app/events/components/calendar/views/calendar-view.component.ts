import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	ViewEncapsulation,
} from "@angular/core";
import { MatCalendarCellClassFunction } from "@angular/material/datepicker";
import { IsSameDay } from "src/app/shared/utils/date-utils";
import { CalendarEvent } from "../../../interfaces/calendar-event";

@Component({
	selector: "events-calendar-view",
	templateUrl: "./calendar-view.component.html",
	styleUrls: ["./calendar-view.component.scss"],
	encapsulation: ViewEncapsulation.None,
})
export class CalendarViewComponent implements OnInit {
	@Input() calendarEvents: Array<CalendarEvent>;

	@Output() dateClicked = new EventEmitter<Date>();

	minDate = new Date(2020, 0, 1);
	maxDate = new Date(2050, 11, 31);

	constructor() {}

	ngOnInit() {}

	dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
		// Only highligh dates inside the month view.
		if (view === "month") {
			// Highlight days that have an event
			return this.calendarEvents?.some(
				(e) =>
					IsSameDay(cellDate, e.startTime) || IsSameDay(cellDate, e.endTime)
			)
				? "calendar-event"
				: "";
		}

		return "";
	};

	onDateClick(cellDate: Date | null) {
		this.dateClicked.emit(cellDate);
	}
}
