import { Injectable } from '@angular/core';
import { Mix } from '../interfaces/mix';
import { Release } from '../interfaces/release';

@Injectable({
  providedIn: 'root',
})
export class MixService {
  private _url: string = 'url-to-mixes';
  private _mixes: Mix[] = mockMixes;

  constructor() {}

  getMixes(): Mix[] {
    return this._mixes;
  }

  updateMix(mix: Mix) {
    // update mix from api
  }
}

let release1 = {
  id: 1,
  title: 'Release 1',
  releaseDate: new Date('2022-01-01'),
};

let release2 = {
  id: 2,
  title: 'Release 2',
  releaseDate: new Date('2022-02-02'),
};

let release3 = {
  id: 3,
  title: 'Release 3',
  releaseDate: new Date('2022-03-03'),
};

let mockMixes: Mix[] = [
  {
    id: 1,
    title: 'Release 1 - Mix 1',
    music: 'url-to-release1-mix1',
    likes: 100,
    release: release1,
    src: '../../../assets/Release 1 - Mix 1.m4a',
    duration: null,
    isCurrentlyPlaying: false,
    isPlayingMix: false,
  },
  {
    id: 2,
    title: 'Release 1 - Mix 2',
    music: 'url-to-release1-mix2',
    likes: 99,
    release: release1,
    src: '../../../assets/Release 1 - Mix 2.m4a',
    duration: null,
    isCurrentlyPlaying: false,
    isPlayingMix: false,
  },
  {
    id: 3,
    title: 'Release 1 - Mix 3',
    music: 'url-to-release1-mix3',
    likes: 98,
    release: release1,
    src: '../../../assets/Release 1 - Mix 3.m4a',
    duration: null,
    isCurrentlyPlaying: false,
    isPlayingMix: false,
  },
  {
    id: 4,
    title: 'Release 2 - Mix 1',
    music: 'url-to-release2-mix1',
    likes: 90,
    release: release2,
    src: '../../../assets/Release 2 - Mix 1.m4a',
    duration: null,
    isCurrentlyPlaying: false,
    isPlayingMix: false,
  },
  {
    id: 5,
    title: 'Release 2 - Mix 2',
    music: 'url-to-release2-mix2',
    likes: 95,
    release: release2,
    src: '../../../assets/Release 2 - Mix 2.m4a',
    duration: null,
    isCurrentlyPlaying: false,
    isPlayingMix: false,
  },
  {
    id: 6,
    title: 'Release 3 - Mix 1',
    music: 'url-to-release3-mix1',
    likes: 200,
    release: release3,
    src: '../../../assets/Release 3 - Mix 1.m4a',
    duration: null,
    isCurrentlyPlaying: false,
    isPlayingMix: false,
  },
];
