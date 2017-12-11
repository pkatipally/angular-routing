import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StoreFrontComponent} from "./store-front.component";
import {AccessoriesMainComponent} from "./accessories-main.component";

const routes: Routes = [
  {
    path: 'accessories',
    // component: AccessoriesMainComponent,
    children: [{
      path: 'store', component: StoreFrontComponent
    },
      {path: '', redirectTo: 'store', pathMatch: 'full'}]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessoriesRoutingModule {
}
