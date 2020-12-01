export class ArticlesData
{

private url:string;
private name:string;
private title:string;
private content:string;
private date:Date;
constructor(url:string,name:string,title:string,content:string,date:Date){
    
    this.url=url;
    this.name=name;
    this.title=title;
    this.content=content;
    this.date=date;
}

}
