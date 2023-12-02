import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Track } from "../entities/track";
import { TrackLike } from "../entities/track-like";
import { Release } from "../entities/release";
import {
	GenerateOrderByQuery,
	GeneratePagingOptions,
	QueryOptions,
} from "src/app/shared/types/query-options";

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

	getReleases(subscriberId?: number): Observable<Array<Release>> {
		let url = `${this.baseUrl}releases?includeTracks=true`;
		if (subscriberId) {
			url = url.concat(`&subscriberId=${subscriberId}`);
		}
		return this.httpClient
			.get<Array<Release>>(url)
			.pipe(catchError(this.handleError));
	}

	getReleaseById(
		releaseId: string,
		subscriberId?: number
	): Observable<Release> {
		let url = `${this.baseUrl}releases/${releaseId}`;
		if (subscriberId) {
			url = url.concat(`?subscriberId=${subscriberId}`);
		}

		return this.httpClient.get<Release>(url).pipe(catchError(this.handleError));
	}

	getLikedTracksForSubscriber(subscriberId: number) {
		return this.httpClient
			.get<TrackLike[]>(`${this.baseUrl}subscribers/${subscriberId}/trackLikes`)
			.pipe(catchError(this.handleError));
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
