import { environment } from "src/environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { CalendarEvent, CalendarEventType } from "../interfaces/calendar-event";
import { DateEvent } from "../interfaces/date-event";

@Injectable({
	providedIn: "root",
})
export class CalendarEventService {
	private baseUrl: string = environment.baseUrl;
	constructor(private httpClient: HttpClient) {}

	getCalendarEvents(): Observable<CalendarEvent[]> {
		// return of(mockCalendarEvents);
		return this.httpClient
			.get<CalendarEvent[]>(`${this.baseUrl}api/calendar-events`)
			.pipe(catchError(this.handleError));
	}

	getDatesWithCalendarEvents(): Observable<DateEvent[]> {
		// filtering out past dates
		//return mockDateEvents.filter((d) => d.date.getTime() > today.getTime());
		return this.httpClient
			.get<DateEvent[]>(`${this.baseUrl}api/date-events`)
			.pipe(catchError(this.handleError));
	}

	handleError(e: HttpErrorResponse) {
		console.log(e);
		return throwError(() => new Error("error in calendar event service"));
	}
}
