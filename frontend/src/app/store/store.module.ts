import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// components
import { StorePageComponent } from './store-page/store-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

// material modules
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  { path: '', component: StorePageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    StorePageComponent,
    ProductListComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class StoreModule {}
