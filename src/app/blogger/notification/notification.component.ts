import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/services/data-storage.services';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notify:boolean=false;
  notifyData:[];
  url:string="https://1.bp.blogspot.com/-Sl-SXtgttF0/Xm3CcJit8TI/AAAAAAAAACE/6Qgzudb0wYs5quvLc2wXJQJ0BbWgslgrwCLcBGAsYHQ/s1600/1%2B%25281%2529.png"

  constructor(private eRef: ElementRef,private router:Router,private data:DataStorageService) { }

  ngOnInit(): void {
    this.data.activate().subscribe(res=>
      {
        console.log(res)
      });
      this.data.notification().subscribe(res=>
        {
          this.notifyData=res;
          console.log(res)
        })
  }
  onNotificationClick(postId,id)
  {
    this.data.postId=postId;
    this.router.navigate(['/read-post'])
  
  }
  onNotification()
{
  this.notify=true;
 
}
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(this.eRef.nativeElement.contains(event.target)) {
      
    } else {
      this.notify = false;
    }
  }
}
