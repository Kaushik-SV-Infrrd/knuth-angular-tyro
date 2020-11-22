import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TrendingComponent } from './dashboard/trending/trending.component';
import { PplToFollowComponent } from './dashboard/ppl-to-follow/ppl-to-follow.component';
import { TopicsToFollowComponent } from './dashboard/topics-to-follow/topics-to-follow.component';
import { ArticlesComponent } from './dashboard/articles/articles.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { NewPostComponent } from './create-post/new-post/new-post.component';
import { AddTopicsComponent } from './create-post/add-topics/add-topics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocompleteLibComponent, AutocompleteLibModule } from 'angular-ng-autocomplete';






@NgModule({
  declarations: [DashboardComponent,TrendingComponent, PplToFollowComponent, TopicsToFollowComponent, ArticlesComponent, CreatePostComponent, NewPostComponent, AddTopicsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule
    
  ]
})
export class BloggerModule { }
