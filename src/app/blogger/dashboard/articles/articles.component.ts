import { Component, OnInit } from '@angular/core';
import { ArticlesData } from 'src/app/shared/model/articles.model';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articlesData:ArticlesData[]=[new ArticlesData(
  "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Kaushik S V",
  "Fundamentals of Software Engineering",
  "Tincidunt nunc pulvinar sapien et ligula ullamcorper. Auctor eu augue ut lectus arcu. Amet aliquam id diam maecenas ultricies mi. Lectus magna fringilla urna porttitor rhoncus dolor. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit.",
  new Date("2019-01-12")),
  new ArticlesData( "https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Alpha",
  "Meaning of Life, Universe and Everything",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis.",
  new Date("2019-01-12")),
  new ArticlesData( "https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  "Beta",
  "Take it easy, my friend",
  "Consectetur adipiscing elit pellentesque habitant. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Eu sem integer vitae justo eget magna fermentum iaculis.",
  new Date("2019-01-12")),
  new ArticlesData( "https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "Charlie",
  "What not to do in life? I have all the answers.",
  "Tortor at risus viverra adipiscing at. Iaculis eu non diam phasellus vestibulum lorem sed. Pretium fusce id velit ut tortor pretium viverra suspendisse. Viverra vitae congue eu consequat ac felis donec ",
  new Date("2019-01-12")) 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
