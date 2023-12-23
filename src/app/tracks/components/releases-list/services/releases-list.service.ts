import { BehaviorSubject, Observable, forkJoin, map } from "rxjs";
import { MusicService } from "../../../services/music-service";
import { Release } from "src/app/tracks/interfaces/release";
import { Injectable } from "@angular/core";
import { UserService } from "src/app/shared/services/user.service";
import { Like } from "src/app/shared/interfaces/like";

@Injectable()
export class ReleasesListService {
	releases: Observable<Array<Release>>;

	private _releases = new BehaviorSubject<Array<Release>>([]);

	constructor(
		private musicService: MusicService,
		private userService: UserService
	) {
		this.releases = this._releases.asObservable();
	}

	initializeData() {
		forkJoin([this.musicService.getReleases(), this.userService.getLikes()])
			.pipe(
				map(([releases, likes]) => {
					return this.calculateLikes(releases, likes);
				})
			)
			.subscribe({
				next: (releases) => {
					if (releases) {
						this._releases.next(releases);
					}
				},
			});
	}

	private calculateLikes(
		releases: Array<Release>,
		likes: Array<Like>
	): Array<Release> {
		const trackLikes = likes?.filter((l) => l.type === "tracklike") ?? [];
		const releaseLikes = likes?.filter((l) => l.type === "releaselike") ?? [];
		releases.forEach((release, releaseIndex, releaseArray) => {
			releaseArray[releaseIndex].isLiked = releaseLikes.some(
				(l) => l.likedItemID === release.id
			);

			releaseArray[releaseIndex].tracks.forEach(
				(track, trackIndex, trackArray) => {
					trackArray[trackIndex].isLiked = trackLikes.some(
						(l) => l.likedItemID === track.id
					);
				}
			);
		});

		return releases;
	}
}
