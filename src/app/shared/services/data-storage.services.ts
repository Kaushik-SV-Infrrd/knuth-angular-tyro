import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take,map } from 'rxjs/operators';
import { User } from '../model/user.model';
import { TrendingTopics } from '../model/trending.model';
import { AuthService } from './auth.service';
​
@Injectable({providedIn:'root'})
export class DataStorageService{
    ​
    trendingarticle:[];
    constructor(private http:HttpClient,private auth:AuthService){};
    getTrendingArticles(){
       return this.auth.user.pipe(
           take(1),
           exhaustMap(user=>{
               return this.http.get<TrendingTopics[]>(
                   'https://team-knuth-tyro.herokuapp.com/v1/trending',
                   {
                       headers: new HttpHeaders({'authorization': user.Token})
                   }
               )
           })
           ,
            map((trendingarticle:any)=>
               trendingarticle.data.result)
           
       )
    }

    getTopicsList(){
        return this.auth.user.pipe(
            take(1),
            exhaustMap(user=>{
                return this.http.get<[]>(
                    'https://team-knuth-tyro.herokuapp.com/v1/topics',
                    {
                        headers: new HttpHeaders({'authorization': user.Token})
                    }
                )
            }),
            map((trendingarticle:any)=>
                trendingarticle.data.result)
            
        )
     }
     getFeed(){
        return this.auth.user.pipe(
            take(1),
            exhaustMap(user=>{
                return this.http.get<[]>(
                    'https://team-knuth-tyro.herokuapp.com/v1/feed',
                    {
                        headers: new HttpHeaders({'authorization': user.Token})
                    }
                )
            }),
            map((trendingarticle:any)=>
                trendingarticle.data.result)
            
        )
     }
     getPeopleList(){
        return this.auth.user.pipe(
            take(1),
            exhaustMap(user=>{
                return this.http.get<[]>(
                    'https://team-knuth-tyro.herokuapp.com/v1/people',
                    {
                        headers: new HttpHeaders({'authorization': user.Token})
                    }
                )
            }),
            map((trendingarticle:any)=>
                trendingarticle.data.result)
            
        )
     }
     onFollowTopic(id:string)
     {
         console.log(id)
         
         return this.auth.user.pipe(
            take(1),
            exhaustMap(user=>{
                console.log(user.Token)
                return this.http.post<any>(
                    'https://team-knuth-tyro.herokuapp.com/v1/topics/follow',
                   { topicID:id},
                    {
                        headers: new HttpHeaders({'authorization': user.Token}),
                        
                    }
                )
            }),
            map((trendingarticle:any)=>
                trendingarticle.data.result)
            
        )
   
    }
     onUnFollowTopic(id:string)
     {
         console.log(id)
         
         return this.auth.user.pipe(
            take(1),
            exhaustMap(user=>{
                console.log(user.Token)
                return this.http.post<any>(
                    'https://team-knuth-tyro.herokuapp.com/v1/topics/unfollow',
                   { topicID:id},
                    {
                        headers: new HttpHeaders({'authorization': user.Token}),
                        
                    }
                )
            }),
            map((trendingarticle:any)=>
                trendingarticle.data.result)
            
        )
   
    }
     onFollowPeople(id:string)
     {
         console.log(id)
         
         return this.auth.user.pipe(
            take(1),
            exhaustMap(user=>{
                console.log(user.Token)
                return this.http.post<any>(
                    'https://team-knuth-tyro.herokuapp.com/v1/people/follow',
                   { followRequestID:id},
                    {
                        headers: new HttpHeaders({'authorization': user.Token}),
                        
                    }
                )
            }),
            map((trendingarticle:any)=>
                trendingarticle.data.result)
            
        )
   
    }
     onUnFollowPeople(id:string)
     {
         console.log(id)
         
         return this.auth.user.pipe(
            take(1),
            exhaustMap(user=>{
                console.log(user.Token)
                return this.http.post<any>(
                    'https://team-knuth-tyro.herokuapp.com/v1/people/unfollow',
                   { followRequestID:id},
                    {
                        headers: new HttpHeaders({'authorization': user.Token}),
                        
                    }
                )
            }),
            map((trendingarticle:any)=>
                trendingarticle.data.result)
            
        )
   
    }
}
      
    

    