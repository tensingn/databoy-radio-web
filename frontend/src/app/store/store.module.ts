import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// components
import { StorePageComponent } from './store-page/store-page.component';

// material modules

const routes: Routes = [
  { path: '', component: StorePageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [StorePageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class StoreModule {}
