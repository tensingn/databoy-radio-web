import { Release } from './release';

export interface Mix {
  id: number;
  title: string;
  music: string;
  likes: number;
  release: Release;
}
