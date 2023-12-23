import { environment } from "src/environments/environment";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { CalendarEvent } from "../interfaces/calendar-event";
import {
	firstOfThisMonth,
	lastOfThisMonth,
} from "src/app/shared/utils/date-utils";

@Injectable({
	providedIn: "root",
})
export class CalendarEventService {
	private baseUrl: string = `${environment.apiBaseUrl}calendar-events`;

	constructor(private httpClient: HttpClient) {}

	getCalendarEvents(
		startOfRange: Date = firstOfThisMonth(),
		endOfRange: Date = lastOfThisMonth()
	): Observable<Array<CalendarEvent>> {
		let fullUrl: string = `${
			this.baseUrl
		}?startOfRange=${startOfRange.toISOString()}&endOfRange=${endOfRange.toISOString()}`;

		return this.httpClient
			.get<Array<CalendarEvent>>(fullUrl)
			.pipe(catchError(this.handleError));
	}

	getCalendarEventByID(calendarEventID: string): Observable<CalendarEvent> {
		return this.httpClient
			.get<CalendarEvent>(`${this.baseUrl}/${calendarEventID}`)
			.pipe(catchError(this.handleError));
	}

	handleError(e: HttpErrorResponse) {
		console.log(e);
		return throwError(() => new Error("error in calendar event service"));
	}
}
