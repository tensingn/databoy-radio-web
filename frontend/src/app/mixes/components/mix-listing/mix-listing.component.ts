import { Component, Input, OnInit } from '@angular/core';
import { Mix } from '../../interfaces/mix';
import { MixService } from '../../services/mix-service';

@Component({
  selector: 'mixes-mix-listing',
  templateUrl: './mix-listing.component.html',
  styleUrls: ['./mix-listing.component.scss'],
})
export class MixListingComponent implements OnInit {
  @Input() isFirst: boolean;
  @Input() isLast: boolean;
  @Input() mix: Mix;

  constructor(private mixService: MixService) {}

  ngOnInit(): void {}

  updateMixLikes(likes: number) {
    this.mix.likes = likes;
    this.mixService.updateMix(this.mix);
  }
}
