import { Component, OnInit } from '@angular/core';
import { RepeatTypes } from 'src/app/template/enums/repeat-types';
import { PlayerService } from 'src/app/template/services/player-service';

@Component({
  selector: 'app-repeat-button',
  templateUrl: './repeat-button.component.html',
  styleUrls: ['./repeat-button.component.scss'],
})
export class RepeatButtonComponent implements OnInit {
  repeat: RepeatTypes = RepeatTypes.REPEAT_OFF;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {}

  toggleRepeat(): void {
    this.repeat = this.playerService.toggleRepeat();
  }
}
