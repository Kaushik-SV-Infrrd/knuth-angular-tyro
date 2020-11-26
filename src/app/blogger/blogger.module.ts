import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TrendingComponent } from './dashboard/trending/trending.component';
import { PplToFollowComponent } from './dashboard/ppl-to-follow/ppl-to-follow.component';
import { TopicsToFollowComponent } from './dashboard/topics-to-follow/topics-to-follow.component';
import { ArticlesComponent } from './dashboard/articles/articles.component';
import { CreatePostComponent } from './create-post/create-post.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  AutocompleteLibModule } from 'angular-ng-autocomplete';
import { ReadPostComponent } from './read-post/read-post.component';
import { BookmarkComponent } from './bookmark/bookmark.component';







@NgModule({
  declarations: [DashboardComponent,TrendingComponent, PplToFollowComponent, TopicsToFollowComponent, ArticlesComponent, CreatePostComponent,  ReadPostComponent, BookmarkComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    
   
    
    
    
    
  ]
})
export class BloggerModule { }
