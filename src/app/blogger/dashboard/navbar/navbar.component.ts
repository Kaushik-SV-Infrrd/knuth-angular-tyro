import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/services/data-storage.services';
import {DateAgoPipe} from '../../pipes/date-ago.pipe'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  url:string="https://1.bp.blogspot.com/-Sl-SXtgttF0/Xm3CcJit8TI/AAAAAAAAACE/6Qgzudb0wYs5quvLc2wXJQJ0BbWgslgrwCLcBGAsYHQ/s1600/1%2B%25281%2529.png"

  constructor(private eRef: ElementRef,private router:Router,private data:DataStorageService) { }
 greeting:string
 hours=new Date().getHours();
 
  ngOnInit(): void {
    
    if(this.hours>5 && this.hours < 11)
      {
        this.greeting="Good Morning"
      
      }else if(this.hours>11 && this.hours < 18)
      {
        this.greeting="Good Afternoon"
      }
      else if(this.hours>18 && this.hours < 21)
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
