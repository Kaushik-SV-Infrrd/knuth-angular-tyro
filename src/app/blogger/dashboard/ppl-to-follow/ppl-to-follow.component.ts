import { Component, OnInit } from '@angular/core';
import { PeopleToFollow } from 'src/app/shared/model/people.model';


@Component({
  selector: 'app-ppl-to-follow',
  templateUrl: './ppl-to-follow.component.html',
  styleUrls: ['./ppl-to-follow.component.css']
})
export class PplToFollowComponent implements OnInit {
  peopleData:PeopleToFollow[]=[new PeopleToFollow("https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","Kaushik"),
  new PeopleToFollow("https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","Alpha"),
  new PeopleToFollow("https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260","Beta")
]
  constructor() { }

  ngOnInit(): void {
  }

}
