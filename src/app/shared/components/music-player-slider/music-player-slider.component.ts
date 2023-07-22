import { AfterViewChecked, Component, Input, OnInit } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";
import { Mix } from "src/app/mixes/interfaces/mix";
import { PlayerService } from "src/app/template/services/player-service";

@Component({
	selector: "app-music-player-slider",
	templateUrl: "./music-player-slider.component.html",
	styleUrls: ["./music-player-slider.component.scss"],
})
export class MusicPlayerSliderComponent implements OnInit, AfterViewChecked {
	@Input() mix: Mix | null;
	sliderPosition: number;
	dragging: boolean = false;

	constructor(
		private playerService: PlayerService,
		private cdRef: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		// listen for time update
		this.playerService.timeUpdateEventListener().subscribe((time) => {
			if (!this.dragging) {
				this.sliderPosition = time;
			}
		});

		// listen for duration update
		this.playerService
			.updateDurationEventListener()
			.subscribe((duration) => {
				if (this.mix) {
					this.mix.duration = duration;
				}
			});
	}

	ngAfterViewChecked(): void {
		this.cdRef.detectChanges();
	}

	onSliderDrag() {
		this.dragging = true;
	}

	onSliderChange(sliderValue: number) {
		this.sliderPosition = sliderValue;
		this.playerService.updateCurrentTime(this.sliderPosition);
		this.dragging = false;
	}
}
