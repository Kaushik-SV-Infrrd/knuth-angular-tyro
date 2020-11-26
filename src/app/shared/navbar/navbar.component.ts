import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  constructor(private router:Router) { }
 greeting:string
 hours=new Date().getHours();

  ngOnInit(): void {
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
onClick()
{

this.router.navigate(['/new-post']);

}

onBookmarkClicked()
{
  this.router.navigate(['/bookmarks'])
}
}
