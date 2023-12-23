import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { catchError, Observable, take, throwError } from "rxjs";
import { Product } from "../interfaces/product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class ProductService {
	private baseUrl: string = `${environment.apiBaseUrl}`;

	constructor(private httpClient: HttpClient) {}

	getProducts(): Observable<Array<Product>> {
		return this.httpClient
			.get<Array<Product>>(`${this.baseUrl}products`)
			.pipe(take(1), catchError(this.handleError));
	}

	getProductByID(id: number): Observable<Product> {
		return this.httpClient
			.get<Product>(`${this.baseUrl}products/${id}`)
			.pipe(catchError(this.handleError));
	}

	handleError(e: HttpErrorResponse) {
		console.log(e);
		return throwError(() => new Error("error in product service"));
	}
}
