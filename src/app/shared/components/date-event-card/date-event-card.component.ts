import { Component, Input, OnInit } from '@angular/core';
import { DateEvent } from 'src/app/events/interfaces/date-event';

@Component({
  selector: 'app-date-event-card',
  templateUrl: './date-event-card.component.html',
  styleUrls: ['./date-event-card.component.scss'],
})
export class DateEventCardComponent implements OnInit {
  @Input() date: DateEvent;

  constructor() {}

  ngOnInit(): void {}
}
