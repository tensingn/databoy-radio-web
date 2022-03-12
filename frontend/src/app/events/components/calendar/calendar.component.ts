import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { CompareDates } from 'src/app/shared/utils/date-utils';
import { CalendarEvent } from '../../interfaces/calendar-event';
import { CalendarEventService } from '../../services/calendar-event.service';

@Component({
  selector: 'events-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
  //selectedDate: Date | null;
  minDate = new Date(2020, 0, 1);
  maxDate = new Date(2050, 11, 31);
  events: CalendarEvent[];

  constructor(private calendarEventService: CalendarEventService) {}

  ngOnInit(): void {
    this.events = this.calendarEventService.getCalendarEvents();
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      // Highlight days that have an event
      return this.events.some(
        (e) =>
          CompareDates(cellDate, e.startTime, 1) ||
          CompareDates(cellDate, e.endTime, 1)
      )
        ? 'calendar-event'
        : '';
    }

    return '';
  };
}
