import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
allPosts =[  
{
  id: 'jk123145gf',
  body: "nie mam psa!",
  author:{
    name: 'wuj Krzyś'
  },
  images: [
    "https://picsum.photos/id/237/200/50"
  ]
},
{
  id: 'jk12dd145gf',
  body: "nie mam !",
  author:{
    name: 'wuj romś'
  },
  images: [
    "https://picsum.photos/id/237/200/50"
  ]
}
]

  constructor() { }

  ngOnInit() {
  }

}
