import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesRoutingModule } from './accessories-routing.module';
import { StoreFrontComponent } from './store-front.component';
import { CartComponent } from './cart.component';
import { AccessoriesMainComponent } from './accessories-main.component';

@NgModule({
  imports: [
    CommonModule,
    AccessoriesRoutingModule
  ],
  declarations: [StoreFrontComponent, CartComponent, AccessoriesMainComponent]
})
export class AccessoriesModule { }
