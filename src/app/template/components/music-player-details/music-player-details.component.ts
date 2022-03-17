import { Component, Input, OnInit } from '@angular/core';
import { Mix } from 'src/app/mixes/interfaces/mix';

@Component({
  selector: 'app-music-player-details',
  templateUrl: './music-player-details.component.html',
  styleUrls: ['./music-player-details.component.scss'],
})
export class MusicPlayerDetailsComponent implements OnInit {
  @Input() mix: Mix | null;

  constructor() {}

  ngOnInit(): void {}
}
