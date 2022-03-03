import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// main component
import { TemplateComponent } from './template.component';

// components
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MusicPlayerComponent } from './components/music-player/music-player.component';
import { MusicPlayerDetailsComponent } from './components/music-player-details/music-player-details.component';

// shared components
import { SharedModule } from '../shared/shared.module';

// material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

// other imported modules
import { NgxAudioPlayerModule } from 'ngx-audio-player';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      { path: '', component: MainContentComponent },
      {
        path: 'mixes',
        loadChildren: () =>
          import('../mixes/mixes.module').then((m) => m.MixesModule),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('../events/events.module').then((e) => e.EventsModule),
      },
      {
        path: 'store',
        loadChildren: () =>
          import('../store/store.module').then((e) => e.StoreModule),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    TemplateComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    MusicPlayerComponent,
    MusicPlayerDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    NgxAudioPlayerModule,
    SharedModule,
    MatCardModule,
  ],
})
export class TemplateModule {}
