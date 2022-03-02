import { LikeableObject } from 'src/app/shared/interfaces/likeable-object';
import { Release } from './release';

export interface Mix extends LikeableObject {
  id: number;
  title: string;
  music: string;
  likes: number;
  release: Release;
  src: string;

  // is the audio for this mix playing at the current moment. (i.e. can you hear the music playing right now)
  isCurrentlyPlaying: boolean;

  // is the audio the mix that is playing on the player. it could be paused or currently playing.
  // this is for the audio player to display the correct information
  isPlayingMix: boolean;
}
