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

  // player event emitter
  emitUpdatePlayerEvent(mix: Mix) {
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
    this.audioEndedEvent.next(true);
  }

  // audio ended listener
  audioEndedEventListener() {
    return this.audioEndedEvent.asObservable();
  }

  // player controls
  playMix(src: string) {
    this.audio.src = src;
    this.audio.load();
    this.audio.play();
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

  continuePlayingMix() {
    this.audio.play();
  }

  pausePlayingMix() {
    this.audio.pause();
  }
}
