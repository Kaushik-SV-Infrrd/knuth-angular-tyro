import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
 featureSelected:string='login';
  constructor() { }

  ngOnInit(): void {
  }
  
onSelect(featureSelected:string){
this.featureSelected=featureSelected;
}
}
