import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LikeButtonComponent } from './components/like-button/like-button.component';

// material modules
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [LikeButtonComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule],
  exports: [LikeButtonComponent, CommonModule, MatIconModule, MatButtonModule],
})
export class SharedModule {}
