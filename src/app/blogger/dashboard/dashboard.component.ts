
import { Component, HostListener, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { MessagingService } from 'service/messaging.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isSticky: boolean = false;
  message;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 185;
  }
  constructor(private messagingService: MessagingService) { }

  ngOnInit(): void {
   
  this.messagingService.requestPermission()
  this.messagingService.receiveMessage()
  this.message = this.messagingService.currentMessage
  }

}
