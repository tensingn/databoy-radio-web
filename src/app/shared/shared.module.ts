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
import { EventExpansionPanelComponent } from './components/event-expansion-panel/event-expansion-panel.component';
import { DateEventCardComponent } from './components/date-event-card/date-event-card.component';

// material modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

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
    EventExpansionPanelComponent,
    DateEventCardComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSliderModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatCardModule,
  ],
  exports: [
    LikeButtonComponent,
    PlayButtonComponent,
    MusicPlayerSliderComponent,
    RepeatButtonComponent,
    MuteButtonComponent,
    VolumeSliderComponent,
    AddToCartButtonComponent,
    EventExpansionPanelComponent,
    DateEventCardComponent,
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class SharedModule {}
