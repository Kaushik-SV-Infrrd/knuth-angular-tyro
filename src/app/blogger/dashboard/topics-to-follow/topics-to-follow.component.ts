import { Component, OnInit } from '@angular/core';
import { Topics } from 'src/app/shared/model/topics.model';


@Component({
  selector: 'app-topics-to-follow',
  templateUrl: './topics-to-follow.component.html',
  styleUrls: ['./topics-to-follow.component.css']
})
export class TopicsToFollowComponent implements OnInit {
  topicsData:Topics[]=[new Topics("","Science"),
new Topics(" ","Technology")
]
  constructor() { }

  ngOnInit(): void {
  }

}
