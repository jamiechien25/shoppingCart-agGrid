import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutPageRoutingModule } from './check-out-page-routing.module';
import { CheckOutPageComponent } from './check-out-page.component';


@NgModule({
  declarations: [
    CheckOutPageComponent
  ],
  imports: [
    CommonModule,
    CheckOutPageRoutingModule
  ]
})
export class CheckOutPageModule { }
