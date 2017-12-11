import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {AccessoriesRoutingModule} from "./accessories/accessories-routing.module";
import {AccessoriesModule} from "./accessories/accessories.module";
import {AdminModule} from "./admin/admin.module";
import {AdminRoutingModule} from "./admin/admin-routing.module";
import {InsuranceModule} from "./insurance/insurance.module";
import {InsuranceRoutingModule} from "./insurance/insurance-routing.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccessoriesModule,
    AccessoriesRoutingModule,
    AdminModule,
    AdminRoutingModule,
    InsuranceModule,
    InsuranceRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
