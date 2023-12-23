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
import { TrackUpdates } from "src/app/tracks/interfaces/track-updates";

@Injectable()
export class TrackListingService implements OnDestroy {
	likeLoading: Observable<boolean>;
	trackUpdates: Observable<TrackUpdates>;
	private _likeLoading = new BehaviorSubject<boolean>(false);
	private _trackUpdates = new BehaviorSubject<TrackUpdates>(null);

	private unsubscribe = new Subject<void>();

	constructor(
		private likesService: LikesService,
		private userService: UserService,
		private toastService: ToastService
	) {
		this.likeLoading = this._likeLoading.asObservable();
		this.trackUpdates = this._trackUpdates.asObservable();
	}

	likeTrack(trackID: string, liked: boolean) {
		this._likeLoading.next(true);
		const likeReq: Observable<AddRemoveLikeResponse> = this.userService.userID
			? this.likeRequest(trackID, this.userService.userID, liked)
			: this.userService.getUserObservable().pipe(
					takeUntil(this.unsubscribe),
					switchMap((user) => {
						const userID = UserService.getUserIDFromUser(user);
						if (!userID) {
							this.toastService.openToast(
								"Login required to like a Track.",
								true
							);
							return of(null);
						}

						return this.likeRequest(trackID, userID, liked);
					})
			  );

		likeReq.subscribe({
			next: (res) => {
				this._likeLoading.next(false);
				if (!res) return;
				if (liked) {
					this.toastService.openToast("Track liked.");
				} else {
					this.toastService.openToast("Track unliked.");
				}
				this._trackUpdates.next({ ...res, isLiked: liked });
			},
			error: (error: Error) => {
				this._likeLoading.next(false);
				if (!error) {
					this.toastService.openToast("Error occurred.");
					return;
				}
				if (liked) {
					this.toastService.openToast("Error with liking Track.");
				} else {
					this.toastService.openToast("Error with unliking Track");
				}
			},
		});
	}

	ngOnDestroy() {
		this.unsubscribe.next();
	}

	private likeRequest(
		trackID: string,
		userID: string,
		liked: boolean
	): Observable<AddRemoveLikeResponse> {
		if (liked) {
			return this.likesService
				.addTrackLike(trackID, userID)
				.pipe(takeUntil(this.unsubscribe));
		} else {
			return this.likesService
				.removeTrackLike(trackID, userID)
				.pipe(takeUntil(this.unsubscribe));
		}
	}
}
