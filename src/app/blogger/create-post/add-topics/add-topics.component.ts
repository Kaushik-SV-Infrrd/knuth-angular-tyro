import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import {find,pull} from 'lodash';
import {FormGroup,ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-topics',
  templateUrl: './add-topics.component.html',
  styleUrls: ['./add-topics.component.css']
})
export class AddTopicsComponent implements OnInit
{

@ViewChild('tagInput') tagInputRef: ElementRef;
tags: string[] = [];

form1: FormGroup;

constructor(private fb: FormBuilder,private router:Router) { }

ngOnInit() {
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
onClick()
{
  this.router.navigate(['/new-post'])
}



}
