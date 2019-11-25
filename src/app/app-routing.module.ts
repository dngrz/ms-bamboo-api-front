import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/infobamboo',
    pathMatch: 'full'
  },
  {
    path: 'infobamboo',
    component: InfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
