import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',  redirectTo: 'accessories', pathMatch: 'full'},
  { path: 'admin',  redirectTo: 'admin', pathMatch: 'full'},
  { path: 'insurance',  redirectTo: 'insurance', pathMatch: 'full'},
  // { path: 'internalerror', component: InternalErrorComponent},
  // { path: 'sessionexpired', component: SessionTimeoutComponent},
   { path: '**', redirectTo:'accessories'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
