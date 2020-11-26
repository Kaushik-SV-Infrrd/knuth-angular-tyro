import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmarkComponent } from './blogger/bookmark/bookmark.component';

import { CreatePostComponent } from './blogger/create-post/create-post.component';
import { DashboardComponent } from './blogger/dashboard/dashboard.component';
import { ReadPostComponent } from './blogger/read-post/read-post.component';

import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './intro/login/login.component';
import { SignComponent } from './intro/sign/sign.component';
import { AuthGuard } from './shared/services/auth-guard.service';


const routes: Routes = [
  {path:'',component:IntroComponent,children:
  [
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignComponent}
  ]},
  {path:'dashboard'
  //  ,canActivate:[AuthGuard]
  ,component:DashboardComponent},
  {path:'new-post',component:CreatePostComponent},
  {path:'bookmarks',component:BookmarkComponent},
  
  {path:'read-post',component:ReadPostComponent}
  
  
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
