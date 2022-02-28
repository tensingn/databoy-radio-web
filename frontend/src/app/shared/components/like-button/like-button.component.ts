import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.scss'],
})
export class LikeButtonComponent implements OnInit {
  @Input() likes: number;
  @Output() clickLikeButtonEvent = new EventEmitter<number>();
  isClicked: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  updateLikes(): void {
    this.isClicked = !this.isClicked;
    if (this.isClicked) {
      this.likes++;
    } else {
      this.likes--;
    }
    this.clickLikeButtonEvent.emit(this.likes);
  }
}
