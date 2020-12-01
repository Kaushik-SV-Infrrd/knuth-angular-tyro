import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './../shared/services/auth-guard.service';

import { BookmarkComponent } from './bookmark/bookmark.component';
import { ReadPostComponent } from './read-post/read-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
const routes:Routes=[
    {path:'', 
    // canActivate:[AuthGuard],
    component:DashboardComponent},
  {path:'createpost',component:CreatePostComponent,children:[
  ]},
  {path:'new-post',component:CreatePostComponent},
  {path:'bookmarks',component:BookmarkComponent},
  {path:'read-post',component:ReadPostComponent},
];
@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class BloggerRoutingModule{
}