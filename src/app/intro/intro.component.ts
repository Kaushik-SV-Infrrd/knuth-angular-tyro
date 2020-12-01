import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
 featureSelected:string='login';
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  this.router.navigate(['/login']);
  }
  
onSelect(featureSelected:string){
this.featureSelected=featureSelected;
}
}
