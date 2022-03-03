import { Component, Input, OnInit } from '@angular/core';
import { Mix } from 'src/app/mixes/interfaces/mix';

@Component({
  selector: 'app-music-player-slider',
  templateUrl: './music-player-slider.component.html',
  styleUrls: ['./music-player-slider.component.scss'],
})
export class MusicPlayerSliderComponent implements OnInit {
  @Input() mix: Mix | null;

  constructor() {}

  ngOnInit(): void {}
}
