import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mute-button',
  templateUrl: './mute-button.component.html',
  styleUrls: ['./mute-button.component.scss'],
})
export class MuteButtonComponent implements OnInit {
  mute: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
