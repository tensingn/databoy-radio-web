import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { AddRemoveGoingResponse } from "../interfaces/add-remove-going-response";

@Injectable()
export class GoingService {
	private baseUrl: string = environment.apiBaseUrl;

	constructor(private httpClient: HttpClient) {}

	addGoing(
		calendarEventID: string,
		userID: string
	): Observable<AddRemoveGoingResponse> {
		return this.httpClient
			.post<AddRemoveGoingResponse>(
				`${this.baseUrl}calendar-events/${calendarEventID}/going/${userID}`,
				{}
			)
			.pipe(catchError(this.handleError));
	}

	removeGoing(
		calendarEventID: string,
		userID: string
	): Observable<AddRemoveGoingResponse> {
		return this.httpClient
			.delete<AddRemoveGoingResponse>(
				`${this.baseUrl}calendar-events/${calendarEventID}/going/${userID}`
			)
			.pipe(catchError(this.handleError));
	}

	isGoing(calendarEventID: string, userID: string): Observable<boolean> {
		return this.httpClient
			.get<boolean>(
				`${this.baseUrl}calendar-events/${calendarEventID}/going/${userID}`
			)
			.pipe(catchError(this.handleError));
	}

	handleError(e: HttpErrorResponse) {
		return throwError(() => new Error("error in going service"));
	}
}
