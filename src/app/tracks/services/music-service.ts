import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError, Observable, take } from "rxjs";
import { environment } from "src/environments/environment";
import {
	GenerateOrderByQuery,
	GeneratePagingOptions,
	QueryOptions,
} from "src/app/shared/types/query-options";
import { Track } from "../interfaces/track";
import { Release } from "../interfaces/release";

@Injectable({
	providedIn: "root",
})
export class MusicService {
	private baseUrl: string = environment.apiBaseUrl;

	constructor(private httpClient: HttpClient) {}

	getTracks(queryOptions: QueryOptions): Observable<Array<Track>> {
		return this.httpClient
			.get<Array<Track>>(
				`${this.baseUrl}tracks?${constructQueryParameters(queryOptions)}`
			)
			.pipe(catchError(this.handleError));
	}

	getReleases(userID?: number): Observable<Array<Release>> {
		let url = `${this.baseUrl}releases?includeTracks=true`;
		if (userID) {
			url = url.concat(`&userID=${userID}`);
		}
		return this.httpClient
			.get<Array<Release>>(url)
			.pipe(take(1), catchError(this.handleError));
	}

	getReleaseByID(releaseID: string, userID?: number): Observable<Release> {
		let url = `${this.baseUrl}releases/${releaseID}`;
		if (userID) {
			url = url.concat(`?userID=${userID}`);
		}

		return this.httpClient.get<Release>(url).pipe(catchError(this.handleError));
	}

	handleError(e: HttpErrorResponse) {
		console.log(e);
		return throwError(() => new Error("error in track service"));
	}
}

export const ORDER_BY_RELEASE_TITLE: QueryOptions = GenerateOrderByQuery(
	"releaseName",
	"asc",
	GeneratePagingOptions(null, 10)
);

export function constructQueryParameters(queryOptions: QueryOptions) {
	return "";
}
