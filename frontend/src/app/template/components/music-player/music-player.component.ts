import { Component, OnInit } from '@angular/core';
import { Mix } from 'src/app/mixes/interfaces/mix';
import { PlayerService } from 'src/app/mixes/services/player-service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent implements OnInit {
  isPlaying: boolean = false;
  mixPlaying: Mix | null;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.updatePlayerEventListener().subscribe((mix) => {
      this.mixPlaying = mix;
    });
  }

  togglePlaying(): void {
    this.isPlaying = !this.isPlaying;
  }
}
