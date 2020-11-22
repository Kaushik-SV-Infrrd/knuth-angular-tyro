import { Component, OnInit } from '@angular/core';
import { ArticlesData } from 'src/app/shared/model/articles.model';
import { DataStorageService } from 'src/app/shared/services/data-storage.services';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  url:string="https://1.bp.blogspot.com/-Sl-SXtgttF0/Xm3CcJit8TI/AAAAAAAAACE/6Qgzudb0wYs5quvLc2wXJQJ0BbWgslgrwCLcBGAsYHQ/s1600/1%2B%25281%2529.png"
 
  articlesData:[]
  
  constructor(private data:DataStorageService) { }

  ngOnInit(): void {
    this.data.getFeed().subscribe(
      res=>{
        
        this.articlesData=res;
        console.log(this.articlesData);
      }
    )
  }
  }


