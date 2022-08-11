import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { CalendarEvent } from "../interfaces/calendar-event";

@Injectable({
	providedIn: "root",
})
export class CalendarEventSubscriptionService {
	private baseUrl: string = environment.apiBaseUrl;

	constructor(private httpClient: HttpClient) {}

	addCalendarEventSubscription(
		calendarEvent: CalendarEvent,
		subscriberId: number,
		isGoing: boolean = false
	): Observable<any> {
		return this.httpClient
			.post<any>(
				`${this.baseUrl}calendar-events/${calendarEvent.calendarEventId}/subscribers`,
				{
					subscriberId: subscriberId,
					isGoing: isGoing,
				}
			)
			.pipe(catchError(this.handleError));
	}

	getCalendarEventSubscription(
		calendarEvent: CalendarEvent,
		subscriberId: number
	): Observable<any> {
		return this.httpClient
			.get<any>(
				`${this.baseUrl}calendar-events/${calendarEvent.calendarEventId}/subscribers/${subscriberId}`
			)
			.pipe(catchError(this.handleError));
	}

	handleError(e: HttpErrorResponse) {
		return throwError(
			() => new Error("error in calendar event subscriber service")
		);
	}
}
