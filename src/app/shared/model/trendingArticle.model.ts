export class TrendingData
{
private index:string;
private url:string;
private name:string;
private title:string;
private date:Date;
constructor(index:string,url:string,name:string,title:string,date:Date){
    this.index=index;
    this.url=url;
    this.name=name;
    this.title=title;
    this.date=date;
}

}