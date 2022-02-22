import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'home', component: TestComponent },
  {
    path: 'template',
    loadChildren: () =>
      import('./template/template.module').then((m) => m.TemplateModule),
  },
  { path: '**', redirectTo: 'template' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
