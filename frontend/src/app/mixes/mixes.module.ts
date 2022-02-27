import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// components
import { MixesPageComponent } from './mixes-page/mixes-page.component';
import { MixesListComponent } from './components/mixes-list/mixes-list.component';
import { MixListingComponent } from './components/mix-listing/mix-listing.component';

// material modules
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: '', component: MixesPageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    MixesPageComponent,
    MixesListComponent,
    MixListingComponent,
    MixListingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class MixesModule {}
