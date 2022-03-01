import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mix } from '../interfaces/mix';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private updatePlayerEvent = new BehaviorSubject<Mix | null>(null);

  emitUpdatePlayerEvent(mix: Mix | null) {
    this.updatePlayerEvent.next(mix);
  }

  updatePlayerEventListener() {
    return this.updatePlayerEvent.asObservable();
  }
}
