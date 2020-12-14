import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    postId:string;
    token:string;
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
        
         
         return this.auth.user.pipe(
            take(1),
            exhaustMap(user=>{
                
                return this.http.post<any>(
                    'https://team-knuth-tyro.herokuapp.com/v1/topics/follow',
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
                    'https://team-knuth-tyro.herokuapp.com/v1/topics/unfollow',
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
                    'https://team-knuth-tyro.herokuapp.com/v1/people/follow',
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
                    'https://team-knuth-tyro.herokuapp.com/v1/people/unfollow',
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
                'https://team-knuth-tyro.herokuapp.com/v1/publish',
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
                'https://team-knuth-tyro.herokuapp.com/v1/article/'+postId,
              
                

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
                'https://team-knuth-tyro.herokuapp.com/v1/bookmarks',
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
                'https://team-knuth-tyro.herokuapp.com/v1/article/bookmark',
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
                'https://team-knuth-tyro.herokuapp.com/v1/bookmarks/remove',
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
                'https://team-knuth-tyro.herokuapp.com/v1/article/like',
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
                'https://team-knuth-tyro.herokuapp.com/v1/like/remove',
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
                'https://team-knuth-tyro.herokuapp.com/v1/notification/activate',
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
                'https://team-knuth-tyro.herokuapp.com/v1/notifications',
              
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
                'https://team-knuth-tyro.herokuapp.com/v1/notification/read',
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
      
    

    