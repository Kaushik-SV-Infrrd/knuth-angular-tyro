export class User{
    constructor(public id:string,public username:string,public email:string,private token:string){}
      get Token(){
          return this.token;
      }
}