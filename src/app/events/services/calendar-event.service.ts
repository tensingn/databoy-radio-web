import { environment } from "src/environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { CalendarEvent } from "../interfaces/calendar-event";

@Injectable({
	providedIn: "root",
})
export class CalendarEventService {
	private baseUrl: string = environment.apiBaseUrl;

	constructor(private httpClient: HttpClient) {}

	getCalendarEvents(daysAgo?: number): Observable<CalendarEvent[]> {
		let fullUrl: string;

		if (daysAgo != null) {
			fullUrl = `${this.baseUrl}calendar-events?daysAgo=${daysAgo}`;
		} else {
			fullUrl = `${this.baseUrl}calendar-events`;
		}

		return this.httpClient
			.get<CalendarEvent[]>(fullUrl)
			.pipe(catchError(this.handleError));
	}

	handleError(e: HttpErrorResponse) {
		console.log(e);
		return throwError(() => new Error("error in calendar event service"));
	}
}
