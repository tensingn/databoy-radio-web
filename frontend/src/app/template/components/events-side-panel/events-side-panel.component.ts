import { Component, OnInit } from '@angular/core';
import { DateEvent } from 'src/app/events/interfaces/date-event';
import { CalendarEventService } from 'src/app/events/services/calendar-event.service';

@Component({
  selector: 'app-events-side-panel',
  templateUrl: './events-side-panel.component.html',
  styleUrls: ['./events-side-panel.component.scss'],
})
export class EventsSidePanelComponent implements OnInit {
  dates: DateEvent[] = [];

  constructor(private calendarEventService: CalendarEventService) {}

  ngOnInit(): void {
    this.dates = this.calendarEventService.getDatesWithCalendarEvents();
  }
}
