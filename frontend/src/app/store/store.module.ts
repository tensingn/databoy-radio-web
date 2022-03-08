import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// components
import { StorePageComponent } from './store-page/store-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';
import { ProductDialogContentComponent } from './components/product-dialog-content/product-dialog-content.component';

// material modules
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  { path: '', component: StorePageComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    StorePageComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDialogComponent,
    ProductDialogContentComponent,
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
  ],
})
export class StoreModule {}
