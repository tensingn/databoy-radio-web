import { Component, OnInit } from '@angular/core';
import { Mix } from '../../interfaces/mix';
import { PlayerService } from '../../../template/services/player-service';
import { MixService } from '../../services/mix-service';

@Component({
  selector: 'mixes-list',
  templateUrl: './mixes-list.component.html',
  styleUrls: ['./mixes-list.component.scss'],
})
export class MixesListComponent implements OnInit {
  mixes: Mix[];
  mixPlaying: Mix;

  constructor(
    private mixService: MixService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.getMixes();
    this.playerService.updatePlayerEventListener().subscribe((mix) => {
      // ensure previous mix playing is now not playing
      if (mix && this.mixPlaying) {
        this.mixPlaying.isCurrentlyPlaying = false;
        this.mixPlaying.isPlayingMix = false;
      }

      // ensure new mix playing is playing if new mix playing exists
      if (mix) {
        mix.isPlayingMix = true;
        this.mixPlaying = mix;
      }
    });
  }

  getMixes(): void {
    this.mixes = this.mixService.getMixes();
  }

  updateMixPlaying(mix: Mix) {
    this.mixPlaying = mix;
  }
}
