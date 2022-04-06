import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Mix } from "../interfaces/mix";
import { Release } from "../interfaces/release";

@Injectable({
	providedIn: "root",
})
export class MixService {
	private baseUrl: string = environment.baseUrl;

	constructor(private httpClient: HttpClient) {}

	getMixes(): Observable<Mix[]> {
		//return of(this._mixes);
		return this.httpClient
			.get<Mix[]>(`${this.baseUrl}api/mixes`)
			.pipe(catchError(this.handleError));
	}

	updateMix(mix: Mix) {
		// update mix from api
	}

	getReleases(): Observable<Release[]> {
		//return of(this._mixes);
		return this.httpClient
			.get<Release[]>(`${this.baseUrl}api/releases`)
			.pipe(catchError(this.handleError));
	}

	getReleaseById(releaseId: number): Observable<Release> {
		return this.httpClient
			.get<Release>(`${this.baseUrl}api/releases/${releaseId}`)
			.pipe(catchError(this.handleError));
	}

	handleError(e: HttpErrorResponse) {
		console.log(e);
		return throwError(() => new Error("error in calendar event service"));
	}
}
