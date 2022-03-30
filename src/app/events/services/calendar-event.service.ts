import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, map, throwError, of } from "rxjs";
import { CalendarEvent, CalendarEventType } from "../interfaces/calendar-event";
import { DateEvent } from "../interfaces/date-event";

@Injectable({
	providedIn: "root",
})
export class CalendarEventService {
	private baseUrl: string = "http://localhost:3000/api/calendar-events";
	constructor(private httpClient: HttpClient) {}

	getCalendarEvents(): Observable<CalendarEvent[]> {
		// return of(mockCalendarEvents);
		return this.httpClient
			.get<CalendarEvent[]>(this.baseUrl)
			.pipe(catchError(this.handleError));
	}

	getDatesWithCalendarEvents(): DateEvent[] {
		let today: Date = new Date();

		// filtering out past dates
		return mockDateEvents.filter((d) => d.date.getTime() > today.getTime());
	}

	handleError(e: HttpErrorResponse) {
		console.log(e);
		return throwError(() => new Error("error in calendar event service"));
	}
}

let mockCalendarEvents: CalendarEvent[] = [
	{
		title: "New Track Drop",
		startTime: new Date(2022, 2, 18),
		endTime: new Date(2022, 2, 18),
		description: 'New Track "New Track 1" is releasing today.',
		type: CalendarEventType.RELEASE,
	},
	{
		title: "Live Stream for New Track Drop",
		startTime: new Date(2022, 2, 18, 20, 0),
		endTime: new Date(2022, 2, 18, 20, 0),
		description:
			'New Track "New Track 1" is releasing today. Live Stream New Track at 8:00 PM',
		type: CalendarEventType.STREAM,
	},
	{
		title: "Live Show at Venue XYZ",
		startTime: new Date(2022, 2, 20, 10),
		endTime: new Date(2022, 2, 20, 11, 59),
		description: "Performing at Venue XYZ in Columbus, OH.",
		type: CalendarEventType.SHOW,
	},
	{
		title: "Live Stream",
		startTime: new Date(2022, 2, 25, 8),
		endTime: new Date(2022, 2, 25, 9),
		description: "Live Streaming preview of new album.",
		type: CalendarEventType.STREAM,
	},
];

let mockDateEvents: DateEvent[] = [
	{
		date: mockCalendarEvents[0].startTime,
		events: [mockCalendarEvents[0], mockCalendarEvents[1]],
	},
	{
		date: mockCalendarEvents[2].startTime,
		events: [mockCalendarEvents[2]],
	},
	{
		date: mockCalendarEvents[3].startTime,
		events: [mockCalendarEvents[3]],
	},
];
