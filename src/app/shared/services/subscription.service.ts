import { environment } from "src/environments/environment";

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
	providedIn: "root",
})
export class SubscriptionService {
	private baseUrl: string = environment.apiBaseUrl;

	constructor(
		private httpClient: HttpClient,
		private cookieService: CookieService
	) {}

	addSubscriber(email: string): Observable<number> {
		return this.httpClient
			.post<any>(`${this.baseUrl}subscribers`, {
				email: email,
			})
			.pipe(catchError(this.handleError));
	}

	setSubscriberId(subscriberId: number) {
		if (subscriberId != null) {
			this.cookieService.set("subscriberId", String(subscriberId));
		}
	}

	getSubscriberId(): number {
		return +this.cookieService.get("subscriberId");
	}

	handleError(e: HttpErrorResponse) {
		console.log(e);
		return throwError(() => new Error("error in subscription service"));
	}
}
