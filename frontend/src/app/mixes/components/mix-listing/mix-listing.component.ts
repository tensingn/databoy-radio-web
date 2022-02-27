import { Component, Input, OnInit } from '@angular/core';
import { Mix } from '../../interfaces/mix';

@Component({
  selector: 'mixes-mix-listing',
  templateUrl: './mix-listing.component.html',
  styleUrls: ['./mix-listing.component.scss'],
})
export class MixListingComponent implements OnInit {
  @Input() isFirst: boolean;
  @Input() isLast: boolean;
  @Input() mix: Mix;

  constructor() {}

  ngOnInit(): void {}
}
