import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceRoutingModule } from './insurance-routing.module';
import { PlansComponent } from './plans.component';
import { EnrollComponent } from './enroll.component';

@NgModule({
  imports: [
    CommonModule,
    InsuranceRoutingModule
  ],
  declarations: [PlansComponent, EnrollComponent]
})
export class InsuranceModule { }
