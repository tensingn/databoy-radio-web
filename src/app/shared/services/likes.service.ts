import { environment } from "src/environments/environment";

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Mix } from "src/app/mixes/interfaces/mix";
import { catchError, Observable, throwError } from "rxjs";
import { Release } from "src/app/mixes/interfaces/release";

@Injectable({
	providedIn: "root",
})
export class LikesService {
	private baseUrl: string = environment.apiBaseUrl;

	constructor(private httpClient: HttpClient) {}

	addMixLike(mix: Mix, subscriberId: number): Observable<any> {
		return this.httpClient
			.post<any>(`${this.baseUrl}mixes/${mix.mixId}/likes`, {
				subscriberId: subscriberId,
			})
			.pipe(catchError(this.handleError));
	}

	removeMixLike(mix: Mix, subscriberId: number): Observable<any> {
		return this.httpClient
			.delete<any>(
				`${this.baseUrl}mixes/${mix.mixId}/likes?subscriberId=${subscriberId}`
			)
			.pipe(catchError(this.handleError));
	}

	addReleaseLike(release: Release, subscriberId: number): Observable<any> {
		return this.httpClient
			.post<any>(`${this.baseUrl}releases/${release.releaseId}/likes`, {
				subscriberId: subscriberId,
			})
			.pipe(catchError(this.handleError));
	}

	removeReleaseLike(release: Release, subscriberId: number): Observable<any> {
		return this.httpClient
			.delete<any>(
				`${this.baseUrl}releases/${release.releaseId}/likes?subscriberId=${subscriberId}`
			)
			.pipe(catchError(this.handleError));
	}

	handleError(e: HttpErrorResponse) {
		return throwError(() => new Error("error in likes service"));
	}
}
