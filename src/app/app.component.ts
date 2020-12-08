import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'service/messaging.service';
import { AuthService } from './shared/services/auth.service';
​
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tyro';
  message;
constructor(private auth:AuthService,private messagingService:MessagingService){}
  ngOnInit(){
    // this.messagingService.requestPermission()
    // this.messagingService.receiveMessage()
    // this.message=this.messagingService.currentMessage
this.auth.autologin();
  }
}





