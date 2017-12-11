import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlansComponent} from "./plans.component";

const routes: Routes = [
  {
    path: 'insurance',
    // component: AccessoriesMainComponent,
    children: [{
      path: 'plans', component: PlansComponent
    },
      {path: '', redirectTo: 'plans', pathMatch: 'full'}]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceRoutingModule { }
