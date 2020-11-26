import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/services/data-storage.services';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css']
})
export class BookmarkComponent implements OnInit {
 article:[]
 hours=new Date().getHours();
 greeting:string
​  url:string="https://1.bp.blogspot.com/-Sl-SXtgttF0/Xm3CcJit8TI/AAAAAAAAACE/6Qgzudb0wYs5quvLc2wXJQJ0BbWgslgrwCLcBGAsYHQ/s1600/1%2B%25281%2529.png"
length:number;
  flag:boolean=false;

  constructor(private data:DataStorageService,private router:Router) { }
​
  ngOnInit(): void {
    this.data.getBookmark().subscribe(res=>
      {
        this.article=res;
        if(this.article==undefined)
       {
this.length=0;
this.flag=true;
       }
       this.length=this.article.length;
        
      })
      if(this.hours>0 && this.hours < 4) 
      {
        this.greeting="Good Night"
      }else if(this.hours>5 && this.hours < 11)
      {
        this.greeting="Good Morning"
      
      }else if(this.hours>12 && this.hours < 17)
      {
        this.greeting="Good Evening"
      }
      else
      {
        this.greeting="Good Night"
      }
    

  }
​onDelete(id:string)
{
  this.data.onDeleteBookmark(id).subscribe(res=>
    {
      console.log(res)
    })
  this.ngOnInit();
}
onClick(id)
{
  console.log(id);
  this.data.postId=id;
  this.router.navigate(['/read-post'])
}
onNewPost()
{

  this.router.navigate(['/new-post'])
}
}