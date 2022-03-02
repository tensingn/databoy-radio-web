import { Component, OnInit } from '@angular/core';
import { Mix } from 'src/app/mixes/interfaces/mix';
import { PlayerService } from 'src/app/template/services/player-service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent implements OnInit {
  mix: Mix | null;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.updatePlayerEventListener().subscribe((mix) => {
      if (mix) {
        this.mix = mix;
      }
    });
  }

  togglePlaying(): void {
    if (this.mix) {
      if (!this.mix.isPlayingMix) {
        this.playerService.emitUpdatePlayerEvent(this.mix);
        this.playerService.playMix(this.mix.src);
      } else {
        if (!this.mix.isCurrentlyPlaying) {
          this.playerService.continuePlayingMix();
        } else {
          this.playerService.pausePlayingMix();
        }
      }

      this.mix.isCurrentlyPlaying = !this.mix.isCurrentlyPlaying;
    }
  }
}
