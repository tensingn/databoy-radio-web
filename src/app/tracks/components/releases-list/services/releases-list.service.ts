import { BehaviorSubject, Observable } from "rxjs";
import { MusicService } from "../../../services/music-service";
import { Release } from "src/app/tracks/entities/release";
import { Injectable } from "@angular/core";
import { Track } from "src/app/tracks/entities/track";

@Injectable({
	providedIn: "root",
})
export class ReleasesListService {
	releases: Observable<Array<Release>>;

	private _releases = new BehaviorSubject<Array<Release>>([]);

	constructor(private musicService: MusicService) {
		this.releases = this._releases.asObservable();
	}

	initializeData() {
		this.musicService.getReleases().subscribe({
			next: (releases: Array<Release>) => {
				if (releases) {
					this._releases.next(releases);
				}
			},
		});
	}
}
