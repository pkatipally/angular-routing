import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';
import { AdminMainComponent } from './admin-main.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [LoginComponent, RegistrationComponent, AdminMainComponent]
})
export class AdminModule { }
