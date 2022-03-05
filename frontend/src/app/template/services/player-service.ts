import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mix } from '../../mixes/interfaces/mix';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private updatePlayerEvent = new BehaviorSubject<Mix | null>(null);
  private metaDataLoadedEvent = new BehaviorSubject<number>(0);
  private timeUpdateEvent = new BehaviorSubject<number>(0);
  private audioEndedEvent = new BehaviorSubject<boolean>(false);
  private audio = new Audio();
  private mixPlaying: Mix | null;

  // player event emitter
  emitUpdatePlayerEvent(mix: Mix) {
    if (this.mixPlaying) {
      this.mixPlaying.isCurrentlyPlaying = false;
      this.mixPlaying.isPlayingMix = false;
    }
    this.updatePlayerEvent.next(mix);
  }

  // player listener
  updatePlayerEventListener() {
    return this.updatePlayerEvent.asObservable();
  }

  // meta data loaded event emitter
  emitMetaDataLoadedEvent(duration: number) {
    this.metaDataLoadedEvent.next(duration);
  }

  // meta data listener
  updateDurationEventListener() {
    return this.metaDataLoadedEvent.asObservable();
  }

  // time update event emitter
  emitTimeUpdateEvent(time: number) {
    this.timeUpdateEvent.next(time);
  }

  // time update listener
  timeUpdateEventListener() {
    return this.timeUpdateEvent.asObservable();
  }

  // audio ended event emitter
  emitAudioEndedEvent() {
    if (this.mixPlaying) {
      this.mixPlaying.isCurrentlyPlaying = false;
    }
    this.audioEndedEvent.next(true);
  }

  // audio ended listener
  audioEndedEventListener() {
    return this.audioEndedEvent.asObservable();
  }

  // player controls
  playMix(mix: Mix) {
    this.mixPlaying = mix;
    this.audio.src = this.mixPlaying.src;
    this.audio.load();
    this.audio.play();
    this.mixPlaying.isCurrentlyPlaying = true;
    this.mixPlaying.isPlayingMix = true;

    // setup callbacks
    this.audio.onloadedmetadata = () => {
      this.emitMetaDataLoadedEvent(this.audio.duration);
    };
    this.audio.ontimeupdate = () => {
      this.emitTimeUpdateEvent(this.audio.currentTime);
    };
    this.audio.onended = () => {
      this.emitAudioEndedEvent();
    };
  }

  continuePlayingMix(mix: Mix) {
    this.audio.play();
    mix.isCurrentlyPlaying = true;
  }

  pausePlayingMix(mix: Mix) {
    this.audio.pause();
    mix.isCurrentlyPlaying = false;
  }

  mutePlayingMix(): boolean {
    this.audio.muted = !this.audio.muted;
    return this.audio.muted;
  }
}
