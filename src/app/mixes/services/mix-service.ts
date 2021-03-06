import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Mix } from "../interfaces/mix";
import { MixLike } from "../interfaces/mix-like";
import { Release } from "../interfaces/release";

@Injectable({
	providedIn: "root",
})
export class MixService {
	private baseUrl: string = environment.apiBaseUrl;

	constructor(private httpClient: HttpClient) {}

	getMixes(): Observable<Mix[]> {
		return this.httpClient
			.get<Mix[]>(`${this.baseUrl}mixes`)
			.pipe(catchError(this.handleError));
	}

	getReleases(subscriberId?: number): Observable<Release[]> {
		let url = `${this.baseUrl}releases`;
		if (subscriberId) {
			url = url.concat(`?subscriberId=${subscriberId}`);
		}
		return this.httpClient
			.get<Release[]>(url)
			.pipe(catchError(this.handleError));
	}

	getReleaseById(
		releaseId: number,
		subscriberId?: number
	): Observable<Release> {
		let url = `${this.baseUrl}releases/${releaseId}`;
		if (subscriberId) {
			url = url.concat(`?subscriberId=${subscriberId}`);
		}

		return this.httpClient
			.get<Release>(url)
			.pipe(catchError(this.handleError));
	}

	getLikedMixesForSubscriber(subscriberId: number) {
		return this.httpClient
			.get<MixLike[]>(
				`${this.baseUrl}subscribers/${subscriberId}/mixLikes`
			)
			.pipe(catchError(this.handleError));
	}

	handleError(e: HttpErrorResponse) {
		console.log(e);
		return throwError(() => new Error("error in mix service"));
	}
}
