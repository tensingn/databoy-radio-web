import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { StorePageComponent } from './store-page/store-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

// material modules
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';

// other modules
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'products/:id', component: ProductPageComponent },
  { path: '', component: StorePageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    StorePageComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatTooltipModule,
    MatDividerModule,
  ],
})
export class StoreModule {}
