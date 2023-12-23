import { Injectable, OnDestroy } from "@angular/core";
import {
	BehaviorSubject,
	Observable,
	Subject,
	of,
	switchMap,
	takeUntil,
} from "rxjs";
import { AddRemoveLikeResponse } from "src/app/shared/interfaces/add-remove-like-response";
import { LikesService } from "src/app/shared/services/likes.service";
import { ToastService } from "src/app/shared/services/toast.service";
import { UserService } from "src/app/shared/services/user.service";
import { ReleaseUpdates } from "src/app/tracks/interfaces/release-updates";

@Injectable()
export class ReleaseListingService implements OnDestroy {
	likeLoading: Observable<boolean>;
	releaseUpdates: Observable<ReleaseUpdates>;
	private _likeLoading = new BehaviorSubject<boolean>(false);
	private _releaseUpdates = new BehaviorSubject<ReleaseUpdates>(null);

	private unsubscribe = new Subject<void>();

	constructor(
		private likesService: LikesService,
		private userService: UserService,
		private toastService: ToastService
	) {
		this.likeLoading = this._likeLoading.asObservable();
		this.releaseUpdates = this._releaseUpdates.asObservable();
	}

	likeRelease(releaseID: string, liked: boolean) {
		this._likeLoading.next(true);
		const likeReq: Observable<AddRemoveLikeResponse> = this.userService.userID
			? this.likeRequest(releaseID, this.userService.userID, liked)
			: this.userService.getUserObservable().pipe(
					takeUntil(this.unsubscribe),
					switchMap((user) => {
						const userID = UserService.getUserIDFromUser(user);
						if (!userID) {
							this.toastService.openToast(
								"Login required to like a Release.",
								true
							);
							return of(null);
						}

						return this.likeRequest(releaseID, userID, liked);
					})
			  );

		likeReq.subscribe({
			next: (res) => {
				this._likeLoading.next(false);
				if (!res) return;
				if (liked) {
					this.toastService.openToast("Release liked.");
				} else {
					this.toastService.openToast("Release unliked.");
				}
				this._releaseUpdates.next({ ...res, isLiked: liked });
			},
			error: (error: Error) => {
				this._likeLoading.next(false);
				if (!error) {
					this.toastService.openToast("Error occurred.");
					return;
				}
				if (liked) {
					this.toastService.openToast("Error with liking Release.");
				} else {
					this.toastService.openToast("Error with unliking Release");
				}
			},
		});
	}

	ngOnDestroy() {
		this.unsubscribe.next();
	}

	private likeRequest(
		releaseID: string,
		userID: string,
		liked: boolean
	): Observable<AddRemoveLikeResponse> {
		if (liked) {
			return this.likesService
				.addReleaseLike(releaseID, userID)
				.pipe(takeUntil(this.unsubscribe));
		} else {
			return this.likesService
				.removeReleaseLike(releaseID, userID)
				.pipe(takeUntil(this.unsubscribe));
		}
	}
}
