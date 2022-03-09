import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LikeButtonComponent } from './components/like-button/like-button.component';
import { PlayButtonComponent } from './components/play-button/play-button.component';
import { MusicPlayerSliderComponent } from './components/music-player-slider/music-player-slider.component';
import { RepeatButtonComponent } from './components/repeat-button/repeat-button.component';
import { MuteButtonComponent } from './components/mute-button/mute-button.component';
import { VolumeSliderComponent } from './components/volume-slider/volume-slider.component';
import { AddToCartButtonComponent } from './components/add-to-cart-button/add-to-cart-button.component';

// material modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// pipes
import { TimePipe } from './pipes/time.pipe';

@NgModule({
  declarations: [
    LikeButtonComponent,
    PlayButtonComponent,
    MusicPlayerSliderComponent,
    RepeatButtonComponent,
    MuteButtonComponent,
    TimePipe,
    VolumeSliderComponent,
    AddToCartButtonComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatSnackBarModule,
  ],
  exports: [
    LikeButtonComponent,
    PlayButtonComponent,
    MusicPlayerSliderComponent,
    RepeatButtonComponent,
    MuteButtonComponent,
    VolumeSliderComponent,
    AddToCartButtonComponent,
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
