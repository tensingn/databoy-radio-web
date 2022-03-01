import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mix } from '../../interfaces/mix';
import { PlayerService } from '../../services/player-service';

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
    if (this.mix.isPlaying) {
      this.playerService.emitUpdatePlayerEvent(null);
    } else {
      this.playerService.emitUpdatePlayerEvent(this.mix);
    }
  }
}
