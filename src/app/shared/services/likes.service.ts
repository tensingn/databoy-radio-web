import { environment } from "src/environments/environment";

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Track } from "src/app/tracks/entities/track";
import { catchError, Observable, throwError } from "rxjs";
import { Release } from "src/app/tracks/entities/release";

@Injectable({
	providedIn: "root",
})
export class LikesService {
	private baseUrl: string = environment.apiBaseUrl;

	constructor(private httpClient: HttpClient) {}

	addTrackLike(track: Track, subscriberId: number): Observable<any> {
		return this.httpClient
			.post<any>(`${this.baseUrl}tracks/${track.trackId}/likes`, {
				subscriberId: subscriberId,
			})
			.pipe(catchError(this.handleError));
	}

	removeTrackLike(track: Track, subscriberId: number): Observable<any> {
		return this.httpClient
			.delete<any>(
				`${this.baseUrl}tracks/${track.trackId}/likes?subscriberId=${subscriberId}`
			)
			.pipe(catchError(this.handleError));
	}

	addReleaseLike(release: Release, subscriberId: number): Observable<any> {
		return this.httpClient
			.post<any>(`${this.baseUrl}releases/${release.id}/likes`, {
				subscriberId: subscriberId,
			})
			.pipe(catchError(this.handleError));
	}

	removeReleaseLike(release: Release, subscriberId: number): Observable<any> {
		return this.httpClient
			.delete<any>(
				`${this.baseUrl}releases/${release.id}/likes?subscriberId=${subscriberId}`
			)
			.pipe(catchError(this.handleError));
	}

	handleError(e: HttpErrorResponse) {
		return throwError(() => new Error("error in likes service"));
	}
}
