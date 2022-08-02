import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// components
import { LikeButtonComponent } from "./components/like-button/like-button.component";
import { PlayButtonComponent } from "./components/play-button/play-button.component";
import { MusicPlayerSliderComponent } from "./components/music-player-slider/music-player-slider.component";
import { RepeatButtonComponent } from "./components/repeat-button/repeat-button.component";
import { MuteButtonComponent } from "./components/mute-button/mute-button.component";
import { VolumeSliderComponent } from "./components/volume-slider/volume-slider.component";
import { AddToCartButtonComponent } from "./components/add-to-cart-button/add-to-cart-button.component";
import { EventExpansionPanelComponent } from "./components/event-expansion-panel/event-expansion-panel.component";
import { DateEventCardComponent } from "./components/date-event-card/date-event-card.component";
import { LikeToastComponent } from "./components/like-toast/like-toast.component";
import { SubscriptionDialogComponent } from "./components/subscription-dialog/subscription-dialog.component";

// material modules
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSliderModule } from "@angular/material/slider";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";

// pipes
import { TimePipe } from "./pipes/time.pipe";

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
		LikeToastComponent,
		SubscriptionDialogComponent,
	],
	imports: [
		CommonModule,
		MatIconModule,
		MatButtonModule,
		MatSliderModule,
		MatSnackBarModule,
		MatExpansionModule,
		MatCardModule,
		MatFormFieldModule,
		MatDialogModule,
		FormsModule,
		MatInputModule,
		ReactiveFormsModule,
		RouterModule,
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
		LikeToastComponent,
		CommonModule,
		MatIconModule,
		MatButtonModule,
	],
})
export class SharedModule {}
