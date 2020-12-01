import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule,FormControl,ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {find,pull} from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { DataStorageService } from 'src/app/shared/services/data-storage.services';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  isLoading=false;
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  topicCtrl = new FormControl();
  filteredchosenTopics: Observable<string[]>;
  chosenTopics: string[] = [];
  chosenTopicIds: string[] = [];
  allTopicsNames: string[] = [];
  allTopics = [];
  error:string=null;
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;



  flag:boolean=false;
  
topics:[];
form1: FormGroup;
blogForm:FormGroup;


  constructor(private fb: FormBuilder,private router:Router,private data:DataStorageService,
      private toastr:ToastrService) 
      { this.filteredchosenTopics = this.topicCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allTopicsNames.slice())); }

  ngOnInit(): void {
    this.isLoading=true;
    this.form1 = this.fb.group({
      tag: [{value: '', disabled: false}, Validators.required],
    });

    this.blogForm=new FormGroup({
      'title': new FormControl(null,[Validators.required]),
      'description':new FormControl(null,[Validators.required])
    });

    this.data.getTopicsList().subscribe(topics=>
      {
        this.allTopics = topics;
        topics.forEach(element => {
          this.allTopicsNames.push(element.topicName);
        });
        
      })
 
      

this.isLoading=false;
  }
  
onTyro()
{
  this.router.navigate(['/dashboard'])
}




  onSelect()
  {
    
   this.flag=true;
     

  }
onClick()
{
  this.flag=false;
  
}

onSubmit()
{
  
  if(!this.blogForm.valid){
    this.toastr.error("Title should be more than 4 characters and description should be more than 10 characters for the article to be published");
    return;
  }
  else
  {
    this.flag=true;
  }
}

add(event: MatChipInputEvent): void {
  const input = event.input;
  let value = event.value;
  this.error = null;

  // Add our topic
  if ((value || '').trim()) {
    if (!this.allTopicsNames.includes(value)) {
      this.error = value + " is not present in the list.";
    }
    value = "";
  }
  // Reset the input value
  if (input) {
    input.value = '';
  }
  this.topicCtrl.setValue(null);
}


remove(fruit: string): void {
  const index = this.chosenTopics.indexOf(fruit);

  if (index >= 0) {
    this.chosenTopics.splice(index, 1);
  }
}

selected(event: MatAutocompleteSelectedEvent): void {


  this.error = null;
  if (this.chosenTopics.length < 5) {
    if (this.chosenTopics.includes(event.option.viewValue)) {
      this.toastr.warning("Already selected")
      this.error = event.option.viewValue + " is already selected."
    }
    else {
      this.chosenTopics.push(event.option.viewValue.trim());
    }
  }
  else {
    this.toastr.warning("Limit reached! You cannot add more.")
    this.error = "Limit reached! You cannot add more.";
  }

  this.topicCtrl.setValue(null);
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();
  return this.allTopicsNames.filter(topic => topic.toLowerCase().indexOf(filterValue) === 0);
}

getTopicId(selectedTopics: string[]) {
  this.chosenTopics.forEach(element => {
    var index = this.allTopics.findIndex(x => x.topicName === element);
    this.chosenTopicIds.push(this.allTopics[index].id);
  });
}
publish() {
  this.getTopicId(this.chosenTopics);
  if(this.chosenTopicIds.length<1){
   this.toastr.warning("Choose atleast one topic to publish article");
  }
  else
  {
  let title= this.blogForm.value.title
  let description=this.blogForm.value.description
  if(this.chosenTopicIds.length>1){
  this.data.publishPost( this.chosenTopicIds,title, description).subscribe(responseData => {
    
    
  
  });
  this.toastr.success("Article Published Successfully");
    this.router.navigate(['/dashboard']);
}
  }
}
}