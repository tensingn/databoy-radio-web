import { Component, Input, OnInit } from '@angular/core';
import { Mix } from 'src/app/mixes/interfaces/mix';
import { PlayerService } from 'src/app/template/services/player-service';

@Component({
  selector: 'app-music-player-slider',
  templateUrl: './music-player-slider.component.html',
  styleUrls: ['./music-player-slider.component.scss'],
})
export class MusicPlayerSliderComponent implements OnInit {
  @Input() mix: Mix | null;
  sliderPosition: number;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    // listen for time update
    this.playerService.timeUpdateEventListener().subscribe((time) => {
      this.sliderPosition = time;
    });
  }
}
