import { Component, Input, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { Mix } from 'src/app/mixes/interfaces/mix';
import { PlayerService } from 'src/app/template/services/player-service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss'],
})
export class MusicPlayerComponent implements OnInit {
  mix: Mix | null;
  msaapDisplayTitle = true;
  msaapDisplayPlayList = false;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;

  // Material Style Advance Audio Player Playlist
  @Input() msaapPlaylist: Track[] = [
    {
      title: 'Release 2 - Mix 2',
      link: '../../../assets/Release 2 - Mix 2.m4a',
      artist: 'Audio One Artist',
      duration: 16,
    },
  ];

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
