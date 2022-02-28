import { LikeableObject } from 'src/app/shared/interfaces/likeable-object';
import { Release } from './release';

export interface Mix extends LikeableObject {
  id: number;
  title: string;
  music: string;
  likes: number;
  release: Release;
}
