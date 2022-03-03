import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeat-button',
  templateUrl: './repeat-button.component.html',
  styleUrls: ['./repeat-button.component.scss'],
})
export class RepeatButtonComponent implements OnInit {
  repeatOn: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
