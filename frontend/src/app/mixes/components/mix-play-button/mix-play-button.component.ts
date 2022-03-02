import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mix } from '../../interfaces/mix';
import { PlayerService } from '../../../template/services/player-service';

@Component({
  selector: 'mixes-mix-play-button',
  templateUrl: './mix-play-button.component.html',
  styleUrls: ['./mix-play-button.component.scss'],
})
export class MixPlayButtonComponent implements OnInit {
  @Input() mix: Mix;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}

  togglePlaying(): void {
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
    console.log(this.mix.isPlayingMix);
    console.log(this.mix.isCurrentlyPlaying);
  }
}
