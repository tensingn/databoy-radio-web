import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// components
import { EventsPageComponent } from './events-page/events-page.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EventDialogContentComponent } from './components/event-dialog-content/event-dialog-content.component';

// material modules
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

// other modules
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: EventsPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    EventsPageComponent,
    CalendarComponent,
    EventDialogContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCardModule,
    SharedModule,
  ],
})
export class EventsModule {}
