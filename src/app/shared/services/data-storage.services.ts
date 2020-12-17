import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, take,map } from 'rxjs/operators';
import { User } from '../model/user.model';
import { TrendingTopics } from '../model/trending.model';
import { AuthService } from './auth.service';
​
@Injectable({providedIn:'root'})
export class DataStorageService{
    ​    ​baseUrl:string='https://team-knuth-tyro.herokuapp.com/v1/';

    trendingarticle:[];
    postId:string;
    token:string;
    constructor(private http:HttpClient,private auth:AuthService){};
    getTrendingArticles(){
       return this.auth.user.pipe(
           take(1),
           exhaustMap(user=>{
               return this.http.get<TrendingTopics[]>(
                   this.baseUrl+'trending',
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
                    this.baseUrl+'topics',
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
                    this.baseUrl+'feed',
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
                    this.baseUrl+'people',
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
        
         
         return this.auth.user.pipe(
            take(1),
            exhaustMap(user=>{
                
                return this.http.post<any>(
                    this.baseUrl+'topics/follow',
                   { id:id},
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
        
         
         return this.auth.user.pipe(
            take(1),
            exhaustMap(user=>{
               
                return this.http.post<any>(
                    this.baseUrl+'topics/unfollow',
                   { id:id},
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
        
         
         return this.auth.user.pipe(
            take(1),
            exhaustMap(user=>{
                
                return this.http.post<any>(
                    this.baseUrl+'people/follow',
                   { id:id},
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
         
         
         return this.auth.user.pipe(
            take(1),
            exhaustMap(user=>{
               
                return this.http.post<any>(
                    this.baseUrl+'people/unfollow',
                   { id:id},
                    {
                        headers: new HttpHeaders({'authorization': user.Token}),
                        
                    }
                )
            }),
            map((trendingarticle:any)=>
                trendingarticle.data.result)
            
        )
   
    }
  publishPost(ids,title:string,description:string)
  {
    return this.auth.user.pipe(
        take(1),
        exhaustMap(user=>{
           
            return this.http.post<any>(
                this.baseUrl+'publish',
               { postTitle:title,
                postDescription:description,
                topics:ids
                  },
                {
                    headers: new HttpHeaders({'authorization': user.Token}),
                    
                }
            )
        }),
        map((trendingarticle:any)=>
            trendingarticle.data.result)
        
    )
    

  }

  assisnPostId(id)
  {
   this.postId=id;
  }
readPost(postId:string)
{
    
const params= new HttpParams().append('',postId);
     
    return this.auth.user.pipe(
        take(1),
        exhaustMap(user=>{
           
            return this.http.get<[]>(
                this.baseUrl+'article/'+postId,
              
                

                {
                    headers: new HttpHeaders({'authorization': user.Token}),
                    params
                    
                }
            )
        }),
        map((trendingarticle:any)=>
            trendingarticle.data.result)
        
    )
}
getBookmark()
{
    return this.auth.user.pipe(
        take(1),
        exhaustMap(user=>{
            return this.http.get<[]>(
                this.baseUrl+'bookmarks',
                {
                    headers: new HttpHeaders({'authorization': user.Token})
                }
            )
        }),
        map((trendingarticle:any)=>
            trendingarticle.data.result)
        
    )
}

addBookmark(id)
{
    return this.auth.user.pipe(
        take(1),
        exhaustMap(user=>{
            
            return this.http.post<any>(
                this.baseUrl+'article/bookmark',
               { id:id},
                {
                    headers: new HttpHeaders({'authorization': user.Token}),
                    
                }
            )
        }),
        map((trendingarticle:any)=>
            trendingarticle.data.result)
        
    )
}

onDeleteBookmark(id)
{
    return this.auth.user.pipe(
        take(1),
        exhaustMap(user=>{
            
            return this.http.post<any>(
                this.baseUrl+'bookmarks/remove',
               { id:id},
                {
                    headers: new HttpHeaders({'authorization': user.Token}),
                    
                }
            )
        }),
        map((trendingarticle:any)=>
            trendingarticle.data.result)
        
    )
}

onLike(id)
{
    return this.auth.user.pipe(
        take(1),
        exhaustMap(user=>{
            
            return this.http.post<any>(
                this.baseUrl+'article/like',
               { id:id},
                {
                    headers: new HttpHeaders({'authorization': user.Token}),
                    
                }
            )
        }),
        map((trendingarticle:any)=>
            trendingarticle.data.result)
        
    )
}

onDisLike(id)
{
    return this.auth.user.pipe(
        take(1),
        exhaustMap(user=>{
            
            return this.http.post<any>(
                this.baseUrl+'like/remove',
               { id:id},
                {
                    headers: new HttpHeaders({'authorization': user.Token}),
                    
                }
            )
        }),
        map((trendingarticle:any)=>
            trendingarticle.data.result)
        
    )
}

activate()
{
    return this.auth.user.pipe(
        take(1),
        exhaustMap(user=>{
            
            return this.http.post<any>(
                this.baseUrl+'notification/activate',
               { id:this.token},
                {
                    headers: new HttpHeaders({'authorization': user.Token}),
                    
                }
            )
        }),
        map((trendingarticle:any)=>
            trendingarticle.data.result)
        
    )  
}
notification()
{
    return this.auth.user.pipe(
        take(1),
        exhaustMap(user=>{
            
            return this.http.get<[]>(
                this.baseUrl+'notifications',
              
                {
                    headers: new HttpHeaders({'authorization': user.Token}),
                    
                }
            )
        }),
        map((trendingarticle:any)=>
            trendingarticle.data.result)
        
    )  
}

read(id:string)
{
    return this.auth.user.pipe(
        take(1),
        exhaustMap(user=>{
            
            return this.http.post<any>(
                this.baseUrl+'notification/read',
               { id:id},
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
      
    

    