import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// components
import { EventsPageComponent } from './events-page/events-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';

// material modules
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [
  { path: '', component: EventsPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [EventsPageComponent, CalendarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class EventsModule {}
