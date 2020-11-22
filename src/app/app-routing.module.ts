import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTopicsComponent } from './blogger/create-post/add-topics/add-topics.component';
import { CreatePostComponent } from './blogger/create-post/create-post.component';
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
  {path:'dashboard'
   ,canActivate:[AuthGuard]
  ,component:DashboardComponent},
  {path:'new-post',component:CreatePostComponent},
  {path:'add-topics',component:AddTopicsComponent}
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
