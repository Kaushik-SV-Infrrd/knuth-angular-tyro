import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule,ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {find,pull} from 'lodash';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  flag:boolean=false;
  @ViewChild('tagInput') tagInputRef: ElementRef;
tags: string[] = [];

form1: FormGroup;



  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      tag: [{value: '', disabled: false}, Validators.required],
    });
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
  this.router.navigate(['/new-post'])
}
}
