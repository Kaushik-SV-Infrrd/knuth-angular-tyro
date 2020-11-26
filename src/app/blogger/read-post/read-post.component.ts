import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/services/data-storage.services';

interface post
{
  id:string,
  postTitle:string,
  postDescription:string,
  timestamp:string,
  views:number,
  likes:number
  isBookmarked:boolean,
  isLiked:boolean,
  user:{id:string,username:string}
}




@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.css']
})

export class ReadPostComponent implements OnInit {
  url:string="https://1.bp.blogspot.com/-Sl-SXtgttF0/Xm3CcJit8TI/AAAAAAAAACE/6Qgzudb0wYs5quvLc2wXJQJ0BbWgslgrwCLcBGAsYHQ/s1600/1%2B%25281%2529.png"

   postData:post;
   postId:string;

   
   postName:string
   postTitle:string;
   postDesc:string;
   postTime:string;
   bflag:boolean;
   lflag:boolean;
   likes:number;
  constructor(private data:DataStorageService,private router:Router) { }
  
  ngOnInit(): void {
this.postId=this.data.postId;
this.data.readPost(this.postId).subscribe(res=>{
  
  
  this.postData=res;

 this.postName=this.postData.user.username;
 this.postTitle=this.postData.postTitle;
 this.postDesc=this.postData.postDescription;
 this.postTime=this.postData.timestamp;
 this.bflag=this.postData.isBookmarked;
 this.lflag=this.postData.isLiked;
 this.likes=this.postData.likes;
})

  }

  onClick()
  {
    this.router.navigate(['/new-post'])
  }
  onBookmarkClick()
  {
    this.data.addBookmark(this.data.postId).subscribe(res=>
      {
        console.log(res)
      })
      
   
    this.ngOnInit();
  }
onBookmarkRemove()
{
  this.data.onDeleteBookmark(this.postId).subscribe(res=>
    {
      console.log(res);
    })
  
    this.ngOnInit();
}

onLike(id)
{
 this.data.onLike(this.postId).subscribe(res=>
  {
    console.log(res);
  })
  this.ngOnInit();
}

onDisLike(id)
{
  this.data.onDisLike(this.postId).subscribe(res=>
    {
      console.log(res);
    })
    this.ngOnInit();
}

}
