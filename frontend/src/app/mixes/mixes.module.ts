import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// components
import { MixesPageComponent } from './mixes-page/mixes-page.component';

// material modules

const routes: Routes = [
  { path: '', component: MixesPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [MixesPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MixesModule {}
