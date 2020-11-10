import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SignupComponent } from './intro/signup/signup.component';
import { LoginComponent } from './intro/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
// import { DashboardModule } from './dashboard/dashboard.module';
import {SharedModule} from './shared/shared.module'


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SignupComponent,
    LoginComponent,

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
