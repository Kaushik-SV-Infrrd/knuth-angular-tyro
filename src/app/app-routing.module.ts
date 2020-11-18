import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './blogger/dashboard/dashboard.component';

import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './intro/login/login.component';
import { SignComponent } from './intro/sign/sign.component';
import { AuthGuard } from './shared/services/auth-guard.service';


const routes: Routes = [
  {path:'',component:IntroComponent,children:
  [
    {path:'',component:LoginComponent},
    {path:'signup',component:SignComponent}
  ]},
  {path:'dashboard',canActivate:[AuthGuard]
  ,component:DashboardComponent}
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
