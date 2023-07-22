import { Component, OnInit } from "@angular/core";
import { MatSlider } from "@angular/material/slider";
import { PlayerService } from "src/app/template/services/player-service";

@Component({
	selector: "app-volume-slider",
	templateUrl: "./volume-slider.component.html",
	styleUrls: ["./volume-slider.component.scss"],
})
export class VolumeSliderComponent implements OnInit {
	sliderPosition: number = 100;
	volume: number = 100;
	dragging: boolean = false;

	constructor(private playerService: PlayerService) {}

	ngOnInit(): void {
		this.playerService.updateVolume(this.volume / 100);

		this.playerService
			.mutedThroughMuteButtonEventListener()
			.subscribe((muted) => {
				if (muted) {
					this.sliderPosition = 0;
				} else {
					this.sliderPosition = this.volume;
				}
			});
	}

	onVolumeDrag() {
		this.dragging = true;
	}

	onVolumeChange(sliderValue: number) {
		this.sliderPosition = sliderValue;
		this.volume = sliderValue;
		this.playerService.updateVolume(this.volume / 100);
		this.dragging = false;
	}
}
