import { environment } from "src/environments/environment";

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class SubscriptionService {
	private baseUrl: string = environment.baseUrl;
	private subscriberId: number;

	constructor(private httpClient: HttpClient) {}

	addSubscriber(email: string): Observable<number> {
		return this.httpClient
			.post<any>(`${this.baseUrl}api/subscribers`, {
				email: email,
			})
			.pipe(catchError(this.handleError));
	}

	setSubscriberId(subscriberId: number) {
		this.subscriberId = subscriberId;
	}

	getSubscriberId(): number {
		return this.subscriberId;
	}

	handleError(e: HttpErrorResponse) {
		console.log(e);
		return throwError(() => new Error("error in subscription service"));
	}
}
