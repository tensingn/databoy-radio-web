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

    // when song is over, go to next song
    this.playerService.audioEndedEventListener().subscribe((songOver) => {
      if (songOver && this.mixPlaying) {
        let i: number = this.mixes.findIndex((m) => m.id == this.mixPlaying.id);

        // change mixes
        this.updateMixPlaying(this.mixes[i + 1] ?? this.mixes[0]);
        this.playerService.emitUpdatePlayerEvent(this.mixPlaying);
        this.playerService.playMix(this.mixPlaying.src);

        // for (let i: number = 0; i < this.mixes.length; i++) {
        //   if (this.mixes[i].id == this.mixPlaying.id) {
        //     this.mixPlaying.isCurrentlyPlaying = false;
        //     this.mixPlaying.isPlayingMix = false;

        //     this.mixes[i + 1].isPlayingMix = true;
        //     this.mixPlaying = this.mixes[i + 1];
        //     break;
        //   }
        // }
        // console.log(this.mixPlaying);
        // this.playerService.emitUpdatePlayerEvent(this.mixPlaying);
      }
    });
  }

  getMixes(): void {
    this.mixes = this.mixService.getMixes();
  }

  updateMixPlaying(newMixPlaying: Mix) {
    this.mixPlaying.isCurrentlyPlaying = false;
    this.mixPlaying.isPlayingMix = false;

    this.mixPlaying = newMixPlaying;
  }
}
