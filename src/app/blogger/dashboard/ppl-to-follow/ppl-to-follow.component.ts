import { Component, HostListener, OnInit,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PeopleToFollow } from 'src/app/shared/model/people.model';
import { DataStorageService } from 'src/app/shared/services/data-storage.services';


@Component({
  selector: 'app-ppl-to-follow',
  templateUrl: './ppl-to-follow.component.html',
  styleUrls: ['./ppl-to-follow.component.css']
})
export class PplToFollowComponent implements OnInit {
  seemore:boolean=false;
  peopleData:[];
  url:string="https://1.bp.blogspot.com/-Sl-SXtgttF0/Xm3CcJit8TI/AAAAAAAAACE/6Qgzudb0wYs5quvLc2wXJQJ0BbWgslgrwCLcBGAsYHQ/s1600/1%2B%25281%2529.png"

  constructor(private eRef: ElementRef,private data:DataStorageService,
    private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
    this.data.getPeopleList().subscribe(
      res=>{
        
        this.peopleData=res;
        
      }
    )
  }
  
  
  onClick()
{
  this.seemore=true;
}

onClose()
{
  this.seemore=false;
}
@HostListener('document:click', ['$event'])
clickout(event) {
  if(this.eRef.nativeElement.contains(event.target)) {
    
  } else {
    this.seemore = false;
  }
}
onFollow(id:string)
{
  let name:string;
   this.data.onFollowPeople(id).subscribe(res=>{
   
     console.log(res)
   })
  
   this.ngOnInit();
   this.toastr.success("Followed Successfully")
   
   
   
}
onUnFollow(id:string)
{
   this.data.onUnFollowPeople(id).subscribe(res=>{
     console.log(res)
   })
   this.ngOnInit();
   this.toastr.success("Unfollowed Successfully")
}


}
