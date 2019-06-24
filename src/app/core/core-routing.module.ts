import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true})],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
