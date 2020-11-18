import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { TrendingComponent } from './dashboard/trending/trending.component';
import { PplToFollowComponent } from './dashboard/ppl-to-follow/ppl-to-follow.component';
import { TopicsToFollowComponent } from './dashboard/topics-to-follow/topics-to-follow.component';
import { ArticlesComponent } from './dashboard/articles/articles.component';




@NgModule({
  declarations: [DashboardComponent,TrendingComponent, PplToFollowComponent, TopicsToFollowComponent, ArticlesComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BloggerModule { }
