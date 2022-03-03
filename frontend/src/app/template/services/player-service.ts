import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mix } from '../../mixes/interfaces/mix';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private updatePlayerEvent = new BehaviorSubject<Mix | null>(null);
  private metaDataLoadedEvent = new BehaviorSubject<number>(0);
  private audio = new Audio();

  emitUpdatePlayerEvent(mix: Mix) {
    this.updatePlayerEvent.next(mix);
  }

  emitMetaDataLoadedEvent(duration: number) {
    this.metaDataLoadedEvent.next(duration);
  }

  updateDurationEventListener() {
    return this.metaDataLoadedEvent.asObservable();
  }

  updatePlayerEventListener() {
    return this.updatePlayerEvent.asObservable();
  }

  playMix(src: string) {
    this.audio.src = src;
    this.audio.load();
    this.audio.play();
    this.audio.onloadedmetadata = () => {
      this.emitMetaDataLoadedEvent(this.audio.duration);
    };
  }

  continuePlayingMix() {
    this.audio.play();
  }

  pausePlayingMix() {
    this.audio.pause();
  }
}
