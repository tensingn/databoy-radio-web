import { environment as env } from "src/environments/environment";

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { AddRemoveLikeResponse } from "../interfaces/add-remove-like-response";

@Injectable()
export class LikesService {
	private baseUrl: string = env.apiBaseUrl;

	constructor(private httpClient: HttpClient) {}

	addTrackLike(id: string, userID: string): Observable<AddRemoveLikeResponse> {
		return this.httpClient
			.post<AddRemoveLikeResponse>(
				`${this.baseUrl}tracks/${id}/likes/${userID}`,
				{}
			)
			.pipe(catchError(this.handleError));
	}

	removeTrackLike(
		id: string,
		userID: string
	): Observable<AddRemoveLikeResponse> {
		return this.httpClient
			.delete<AddRemoveLikeResponse>(
				`${this.baseUrl}tracks/${id}/likes/${userID}`
			)
			.pipe(catchError(this.handleError));
	}

	addReleaseLike(
		id: string,
		userID: string
	): Observable<AddRemoveLikeResponse> {
		return this.httpClient
			.post<AddRemoveLikeResponse>(
				`${this.baseUrl}releases/${id}/likes/${userID}`,
				{}
			)
			.pipe(catchError(this.handleError));
	}

	removeReleaseLike(
		id: string,
		userID: string
	): Observable<AddRemoveLikeResponse> {
		return this.httpClient
			.delete<AddRemoveLikeResponse>(
				`${this.baseUrl}releases/${id}/likes/${userID}`
			)
			.pipe(catchError(this.handleError));
	}

	handleError(e: HttpErrorResponse) {
		return throwError(() => new Error("error in likes service"));
	}
}
