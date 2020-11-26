import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule,ReactiveFormsModule, FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {find,pull} from 'lodash';
import { DataStorageService } from 'src/app/shared/services/data-storage.services';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  flag:boolean=false;
  @ViewChild('tagInput') tagInputRef: ElementRef;
tags: string[] = [];
topics:[];
form1: FormGroup;
blogForm:FormGroup;
keyword='name'
listOfTopics:string[]=[];
placeholder="Enter the topic name"
errorMsg:string;
  constructor(private fb: FormBuilder,private router:Router,private data:DataStorageService) { }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      tag: [{value: '', disabled: false}, Validators.required],
    });

    this.blogForm=new FormGroup({
      'title': new FormControl(null,[Validators.required]),
      'description':new FormControl(null,[Validators.required])
    });

    this.data.getTopicsList().subscribe(res=>
      {
        for(let i=0;i<res.length;i++)
        {
  this.listOfTopics.push(res[i].topicName);
        }
 
      })


  }
  
onKeyUp(event: KeyboardEvent): void {
  const inputValue: string = this.form1.controls.tag.value;
  if (event.code === 'Backspace' && !inputValue) {
    this.removeTag();
    return;
  } else {
    if (event.code === 'Comma' || event.code === 'Space'||event.code==='Enter') {
      this.addTag(inputValue);
      this.form1.controls.tag.setValue('');
    }
  }
}

addTag(tag: string): void {
  if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
    tag = tag.slice(0, -1);
  }
  if (tag.length > 0 && !find(this.tags, tag)) {
    this.tags.push(tag);
    
   
  }
}

removeTag(tag?: string): void {
  if (!!tag) {
    pull(this.tags, tag);
  } else {
    this.tags.splice(-1);
  }
}
  onSelect()
  {
    
   this.flag=true;
     

  }
onClick()
{
  this.flag=false;
  
}
onPublish()
{
  if(this.tags.length<1)
  {
    alert("Please add atleast one topic so that the user knows what your post is about")
  }
  else
  {

  
  let topicsId:string[]=[];
  let topicsName:string[]=[];
  let i:number;
  this.flag=false;
  let ids:string[]=[];
  let m:number=0;
  this.data.getTopicsList().subscribe(res=>
    {
     for(i=0;i<res.length;i++)
     {
       topicsId[i]=res[i].id;
       topicsName[i]=res[i].topicName;
     }
     
      for(let j=0;j<this.tags.length;j++)
      {
        for(let k=0;k<topicsName.length;k++)
        {
            if(this.tags[j].localeCompare(topicsName[k])==0)
            {
              ids[m]=topicsId[k];
              m=m+1;
            }
        }
      }
      console.log(ids)
     let title= this.blogForm.value.title
      let description=this.blogForm.value.description
      this.data.publishPost(ids,title,description).subscribe(res=>{
        
        
        alert("Published Successfully")
      })
    })
    
this.router.navigate(['/dashboard']);
  }
}
onSubmit()
{
  
  if(!this.blogForm.valid){
    alert("Please describe your aticle with atleast 10 characters for it to be publised..")
    return;
  }
  else
  {
    this.flag=true;
  }
}
public   topics1:string[]=this.listOfTopics;



}
