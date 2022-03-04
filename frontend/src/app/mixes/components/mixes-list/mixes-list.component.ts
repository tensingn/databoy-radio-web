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
      if (mix) this.mixPlaying = mix;
    });
  }

  getMixes(): void {
    this.mixes = this.mixService.getMixes();
  }
}
