import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// components
import { EventsPageComponent } from './events-page/events-page.component';

// material modules

const routes: Routes = [
  { path: '', component: EventsPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [EventsPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EventsModule {}
