import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrendingTopics } from 'src/app/shared/model/trending.model';
import { TrendingData } from 'src/app/shared/model/trendingArticle.model';
import { DataStorageService } from 'src/app/shared/services/data-storage.services';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
 url:string="https://1.bp.blogspot.com/-Sl-SXtgttF0/Xm3CcJit8TI/AAAAAAAAACE/6Qgzudb0wYs5quvLc2wXJQJ0BbWgslgrwCLcBGAsYHQ/s1600/1%2B%25281%2529.png"
 
  constructor(private data:DataStorageService,private router:Router) { }
  trendingArticle:[];
  ngOnInit(): void {
    this.data.getTrendingArticles().subscribe(
      res=>{
        
        this.trendingArticle=res;
        
      }
    )
  }
onClick(id)
{
  this.data.postId=id;
  this.router.navigate(['/read-post'])
}
}
