import { Component, OnInit,HostListener,ElementRef } from '@angular/core';
import { Topics } from 'src/app/shared/model/topics.model';
import { DataStorageService } from 'src/app/shared/services/data-storage.services';


@Component({
  selector: 'app-topics-to-follow',
  templateUrl: './topics-to-follow.component.html',
  styleUrls: ['./topics-to-follow.component.css']
})
export class TopicsToFollowComponent implements OnInit {
  seemore:boolean=false;
  
topicsData:[];
  constructor(private eRef: ElementRef,private data:DataStorageService) { }

  ngOnInit(): void {
    this.data.getTopicsList().subscribe(
      res=>{
        
        this.topicsData=res;
        console.log(this.topicsData)
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
  onFollow(id:string)
  {
     this.data.onFollowTopic(id).subscribe(res=>{
       console.log(res)
     })
     this.ngOnInit();
  }
  onUnFollow(id:string)
  {
     this.data.onUnFollowTopic(id).subscribe(res=>{
       console.log(res)
     })
     this.ngOnInit();
  }

  @HostListener('document:click', ['$event'])
clickout(event) {
  if(this.eRef.nativeElement.contains(event.target)) {
    
  } else {
    this.seemore = false;
  }
}
}
