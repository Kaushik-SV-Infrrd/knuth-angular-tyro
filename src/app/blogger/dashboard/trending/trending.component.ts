import { Component, OnInit } from '@angular/core';
import { TrendingData } from 'src/app/shared/model/trendingArticle.model';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
 trendingData:TrendingData[]=[new TrendingData("01",
  "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Kaushik S V",
  "Fundamentals of Software Engineering",
  new Date("2019-01-12")),
  new TrendingData("02",
  "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Alpha",
  "Meaning of Life, Universe and Everything",
  new Date("2019-01-12")),
  new TrendingData("03",
  "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "Beta",
  "Take it easy, my friend",
  new Date("2019-01-12")),
  new TrendingData("04",
  "https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Charlie",
  "What not to do in life? I have all the answers.",
  new Date("2019-01-12")) ]
  constructor() { }

  ngOnInit(): void {
  }

}
