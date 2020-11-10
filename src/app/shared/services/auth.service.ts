import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private http:HttpClient){}
signup(email:string,password:string){
 return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDYE__9wB9j64hBPZ33ymyhG7BfcHf0GBM'
,{
    email:email,
    password:password,
    returnSecureToken:true
}
);
}
}