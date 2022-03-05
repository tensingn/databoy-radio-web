import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LikeButtonComponent } from './components/like-button/like-button.component';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import { MusicPlayerSliderComponent } from './components/music-player-slider/music-player-slider.component';
import { RepeatButtonComponent } from './components/repeat-button/repeat-button.component';
import { MuteButtonComponent } from './components/mute-button/mute-button.component';

// material modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    LikeButtonComponent,
    PlayButtonComponent,
    MusicPlayerSliderComponent,
    RepeatButtonComponent,
    MuteButtonComponent,
  ],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatSliderModule],
  exports: [
    LikeButtonComponent,
    PlayButtonComponent,
    MusicPlayerSliderComponent,
    RepeatButtonComponent,
    MuteButtonComponent,
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class SharedModule {}