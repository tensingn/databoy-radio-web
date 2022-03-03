import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// mix components
import { MixesPageComponent } from './mixes-page/mixes-page.component';
import { MixesListComponent } from './components/mixes-list/mixes-list.component';
import { MixListingComponent } from './components/mix-listing/mix-listing.component';

// shared components
import { SharedModule } from '../shared/shared.module';

// material modules
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

const routes: Routes = [
  { path: '', component: MixesPageComponent },
  { path: '**', redirectTo: '' },
];

// material modules

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
    SharedModule,
    MatRippleModule,
  ],
})
export class MixesModule {}
