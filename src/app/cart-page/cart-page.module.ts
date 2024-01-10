import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { MaterialModule } from '../material/material.module';
import { AgGridModule } from 'ag-grid-angular';
import { CartPageRoutingModule } from './cart-page-routing.module';
import { NavBarModule } from '../nav-bar/nav-bar.module';





@NgModule({
  declarations: [
    CartPageComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    CartPageRoutingModule,
    NavBarModule,
    AgGridModule.withComponents([]),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class CartPageModule { }
