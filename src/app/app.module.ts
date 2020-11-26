import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';

import { LoginComponent } from './intro/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from './shared/shared.module';



import { SignComponent } from './intro/sign/sign.component';
import { AuthService } from './shared/services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './blogger/dashboard/dashboard.component';
import { BloggerModule } from './blogger/blogger.module';
import { TrendingComponent } from './blogger/dashboard/trending/trending.component';
import { AuthGuard } from './shared/services/auth-guard.service';
import { NgxTagsInputModule } from 'ngx-tags-input';
import { DataStorageService } from './shared/services/data-storage.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingComponent } from './shared/loading spinner/loading-spinner.component';




@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
     LoginComponent,
     SignComponent,
     LoadingComponent
     
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    BloggerModule,
    NgxTagsInputModule,
    BrowserAnimationsModule,
    
    
    
  ],
  
  providers: [AuthService,AuthGuard,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
