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
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { LoadingComponent } from '../shared/loading spinner/loading-spinner.component';
import { Spinner1 } from './spinner/spinner.component';
import { BloggerRoutingModule } from './blogger-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';








@NgModule({
  declarations: [Spinner1,DateAgoPipe,DashboardComponent,TrendingComponent, PplToFollowComponent, TopicsToFollowComponent, ArticlesComponent, CreatePostComponent,  ReadPostComponent, BookmarkComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    BloggerRoutingModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatRippleModule,
    MatChipsModule,
    MatTooltipModule,
    MatDividerModule,
    
    
    
    
   
    
    
    
    
  ]
})
export class BloggerModule { }
