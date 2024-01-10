import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { MaterialModule } from '../material/material.module';
import { NavBarComponent } from '../nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NavBarComponent
  ]
})
export class HomePageModule { }
