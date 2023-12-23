import { Injectable } from "@angular/core";
import { AuthService, User } from "@auth0/auth0-angular";
import { Like } from "../interfaces/like";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment as env } from "src/environments/environment";
import { Observable, catchError, of, switchMap, take, throwError } from "rxjs";

@Injectable()
export class UserService {
	private baseUrl: string = env.apiBaseUrl;

	_user: User | null = null;

	get userID(): string | null {
		return this._user &&
			this._user.sub &&
			this._user.sub.split("|").length === 2
			? this._user.sub.split("|")[1]
			: null;
	}

	constructor(
		private authService: AuthService,
		private httpClient: HttpClient
	) {
		this.authService.user$.subscribe({
			next: (user) => {
				this._user = user;
			},
		});
	}

	getUserObservable(): Observable<User> {
		return this.authService.user$;
	}

	getUser(): User | null {
		return this._user;
	}

	getLikes(): Observable<Array<Like>> {
		const userObservable = this._user
			? of(this._user)
			: this.getUserObservable();

		return userObservable.pipe(
			switchMap((user) => {
				const userID = UserService.getUserIDFromUser(user);
				return userID
					? this.httpClient
							.get<Array<Like>>(`${this.baseUrl}users/${userID}/likes`)
							.pipe(catchError(this.handleError))
					: of<Array<Like>>(new Array<Like>());
			}),
			take(1)
		);
	}

	handleError(e: HttpErrorResponse) {
		return throwError(() => new Error("error in user service"));
	}

	static getUserIDFromUser(user: User) {
		return user && user.sub && user.sub.split("|").length === 2
			? user.sub.split("|")[1]
			: null;
	}
}
