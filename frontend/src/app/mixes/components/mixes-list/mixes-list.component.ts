import { Component, OnInit } from '@angular/core';
import { Mix } from '../../interfaces/mix';
import { PlayerService } from '../../services/player-service';
import { MixService } from '../../services/mix-service';

@Component({
  selector: 'mixes-list',
  templateUrl: './mixes-list.component.html',
  styleUrls: ['./mixes-list.component.scss'],
})
export class MixesListComponent implements OnInit {
  mixes: Mix[];
  mixPlaying: Mix | null;

  constructor(
    private mixService: MixService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.getMixes();
    this.playerService.updatePlayerEventListener().subscribe((mix) => {
      // ensure previous mix playing is now not playing
      if (this.mixPlaying) {
        this.mixPlaying.isPlaying = false;
      }

      // ensure new mix playing is playing if new mix playing exists
      if (mix) {
        mix.isPlaying = true;
      }

      this.mixPlaying = mix;
    });
  }

  getMixes(): void {
    this.mixes = this.mixService.getMixes();
  }

  updateMixPlaying(mix: Mix) {
    this.mixPlaying = mix;
  }
}
