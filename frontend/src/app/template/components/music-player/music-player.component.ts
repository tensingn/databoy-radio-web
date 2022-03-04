import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { Mix } from 'src/app/mixes/interfaces/mix';
import { MixService } from 'src/app/mixes/services/mix-service';
import { PlayerService } from 'src/app/template/services/player-service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent implements OnInit {
  mixPlaying: Mix | null;
  queue: Mix[];

  constructor(
    private playerService: PlayerService,
    private mixService: MixService
  ) {}

  ngOnInit(): void {
    this.getQueue();

    // listen for player update (mix update)
    this.playerService.updatePlayerEventListener().subscribe((mix) => {
      if (mix) {
        this.mixPlaying = mix;
      }
    });

    // listen for song to be over
    this.playerService.audioEndedEventListener().subscribe((songOver) => {
      if (songOver && this.mixPlaying) {
        let i: number = this.queue.findIndex(
          (m) => this.mixPlaying && m.id == this.mixPlaying.id
        );
        // change mixes
        if (i != -1) {
          this.playerService.emitUpdatePlayerEvent(
            this.queue[i + 1] ?? this.queue[0]
          );
          this.playerService.playMix(this.mixPlaying);
        }
      }
    });
  }

  getQueue() {
    this.queue = this.mixService.getMixes();
  }
}
