import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  flag:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect()
  {
   this.router.navigate(['/add-topics'])
  }
onClick()
{
  
}
}
