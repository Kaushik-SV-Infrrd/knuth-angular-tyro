import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup;
error:string=null;
isLoading=false;
  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required)
    });
  }
onSubmit(){
  this.isLoading=true;
 if(!this.loginForm.valid){
   return;
 }
 const email= this.loginForm.value.email;
    const password=this.loginForm.value.password;
    this.authservice.login(email,password).subscribe(
      restData=>{
        console.log(restData);
        this.isLoading=false;
        this.router.navigate(['/dashboard']);
      },
      errorMessage=>{
        console.log(errorMessage);
        this.isLoading=false;
        this.error=errorMessage;
        
        
        
      }
      
    );
  
}
}
