import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/template/services/player-service';

@Component({
  selector: 'app-mute-button',
  templateUrl: './mute-button.component.html',
  styleUrls: ['./mute-button.component.scss'],
})
export class MuteButtonComponent implements OnInit {
  mute: boolean = false;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService
      .mutedThroughVolumeSliderEventListener()
      .subscribe((muted) => {
        this.mute = muted;
      });
  }

  toggleMute() {
    this.mute = this.playerService.mutePlayingMix();
  }
}
