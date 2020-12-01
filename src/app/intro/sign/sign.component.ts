import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
signupForm:FormGroup;
error:string=null;
  constructor(private authservice:AuthService,private router:Router,private toastr:ToastrService){}

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      'username': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required)
      
   });
  }
  onSubmit(){
   
    if(!this.signupForm.valid){
      return;
    }
    const username=this.signupForm.value.username;
    const email= this.signupForm.value.email;
    const password=this.signupForm.value.password;
    this.authservice.signup(username,email,password).subscribe(
      restData=>{
        console.log(restData);

        this.router.navigate(['/login']);
        this.toastr.success("Account Created Successfully")
      },
      errorMessage=>{
        console.log(errorMessage);
        this.error=errorMessage;
        if (this.error.length > 0) {
          this.signupForm.controls['email'].markAsTouched;
          this.signupForm.controls['email'].setErrors({ 'valid': false });
        }
        
        
        
      }
      
    );
   
  }

}
