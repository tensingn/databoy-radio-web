import { environment } from "src/environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { CalendarEvent } from "../interfaces/calendar-event";

@Injectable({
	providedIn: "root",
})
export class CalendarEventService {
	private baseUrl: string = `${environment.apiBaseUrl}calendar-events`;

	constructor(private httpClient: HttpClient) {}

	getCalendarEvents(daysAgo?: number): Observable<CalendarEvent[]> {
		let fullUrl: string = this.baseUrl;

		if (daysAgo != null) {
			fullUrl = `${this.baseUrl}?daysAgo=${daysAgo}`;
		}

		return this.httpClient
			.get<CalendarEvent[]>(fullUrl)
			.pipe(catchError(this.handleError));
	}

	getCalendarEventById(calendarEventId: number): Observable<CalendarEvent> {
		return this.httpClient
			.get<CalendarEvent>(`${this.baseUrl}/${calendarEventId}`)
			.pipe(catchError(this.handleError));
	}

	handleError(e: HttpErrorResponse) {
		console.log(e);
		return throwError(() => new Error("error in calendar event service"));
	}
}
