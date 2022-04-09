import { environment } from "src/environments/environment";

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Mix } from "src/app/mixes/interfaces/mix";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class LikesService {
	private baseUrl: string = environment.baseUrl;

	constructor(private httpClient: HttpClient) {}

	addMixLike(mix: Mix): void {
		console.log("add mix like");
		console.log(`${this.baseUrl}api/mixes/${mix.mixId}/likes`);
		this.httpClient
			.post<any>(`${this.baseUrl}api/mixes/${mix.mixId}/likes`, {
				subscriberId: 5,
			})
			.pipe(catchError(this.handleError))
			.subscribe();
	}

	removeMixLike(mix: Mix) {
		throw new Error("Method not implemented.");
	}

	handleError(e: HttpErrorResponse) {
		console.log(e);
		return throwError(() => new Error("error in likes service"));
	}
}
