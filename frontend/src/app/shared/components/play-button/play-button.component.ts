import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Mix } from '../../../mixes/interfaces/mix';
import { PlayerService } from '../../../template/services/player-service';

@Component({
  selector: 'app-play-button',
  templateUrl: './play-button.component.html',
  styleUrls: ['./play-button.component.scss'],
})
export class PlayButtonComponent implements OnInit {
  @Input() mix: Mix | null;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.updatePlayerEventListener().subscribe((mix) => {
      if (this.mix && mix && mix.id == this.mix.id) {
        this.mix.isCurrentlyPlaying = true;
        this.mix.isPlayingMix = true;
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
        this.mix.isCurrentlyPlaying = !this.mix.isCurrentlyPlaying;
      }
    }
  }
}
