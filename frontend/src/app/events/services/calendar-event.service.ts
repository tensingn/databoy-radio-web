import { Injectable } from '@angular/core';
import { CalendarEvent, CalendarEventType } from '../interfaces/calendar-event';

@Injectable({
  providedIn: 'root',
})
export class CalendarEventService {
  constructor() {}

  getCalendarEvents(): CalendarEvent[] {
    return mockCalendarEvents;
  }
}

let mockCalendarEvents: CalendarEvent[] = [
  {
    title: 'New Track Drop',
    startTime: new Date(2022, 2, 13),
    endTime: new Date(2022, 2, 13),
    description: 'New Track "New Track 1" is releasing today.',
    type: CalendarEventType.RELEASE,
  },
  {
    title: 'Live Show at Venue XYZ',
    startTime: new Date(2022, 2, 20, 10),
    endTime: new Date(2022, 2, 20, 11, 59),
    description: 'Performing at Venue XYZ in Columbus, OH.',
    type: CalendarEventType.SHOW,
  },
  {
    title: 'Live Stream',
    startTime: new Date(2022, 2, 25, 8),
    endTime: new Date(2022, 2, 25, 9),
    description: 'Live Streaming preview of new album.',
    type: CalendarEventType.STREAM,
  },
];
