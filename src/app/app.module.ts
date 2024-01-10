import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingInComponent } from './sing-in/sing-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MaterialModule } from './material/material.module';
import { BtnCellRendererComponent } from './ BtnCellRenderer/ BtnCellRenderer.component';
import { MatIconModule } from '@angular/material/icon';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { UpdownRendererComponent } from './updown-renderer/updown-renderer.component';
import { CheckOutPageComponent } from './check-out-page/check-out-page.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { OAuthModule } from 'angular-oauth2-oidc';
import { DeleteBoxPageComponent } from './delete-box-page/delete-box-page.component';
@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    HomePageComponent,
    BtnCellRendererComponent,
    UpdownRendererComponent,
    CheckOutPageComponent,
    // DeleteBoxPageComponent,
  ],
  imports: [
    OAuthModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AgGridModule.withComponents([BtnCellRendererComponent,UpdownRendererComponent]),
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MatCardModule,
    MatIconModule,
    NavBarModule,
    SocialLoginModule,

  ],
  exports:[
    // DeleteBoxPageComponent
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
