import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarEvent } from '../../interfaces/calendar-event';

@Component({
  selector: 'events-event-dialog-content',
  templateUrl: './event-dialog-content.component.html',
  styleUrls: ['./event-dialog-content.component.scss'],
})
export class EventDialogContentComponent implements OnInit {
  date: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { events: CalendarEvent[]; date: Date }
  ) {}

  ngOnInit(): void {
    this.date = this.data.date.toLocaleDateString('default', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    let time = this.data.date.toLocaleTimeString('default', {
      hour: 'numeric',
      hour12: true,
      minute: '2-digit',
    });
  }
}
