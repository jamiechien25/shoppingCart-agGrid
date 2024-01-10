import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ProductPageComponent } from './product-page.component';
import { ProductPageRoutingModule } from './product-page-routing.module';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NavBarModule } from '../nav-bar/nav-bar.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';




@NgModule({
  declarations: [
    ProductPageComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    NavBarModule,
    ProductPageRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ProductPageModule { }
