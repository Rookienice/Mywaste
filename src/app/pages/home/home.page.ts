import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  topStories:any;

  constructor(public router:Router) {

    this.topStories=[
      {title: "Exploring San Francisco", author: "Rea Ramsey", body: "", img:'assets/img/wastebin22.png'},
      {title: "Coffee the right way", author: "Ellesha Hartley", body: "", picture: "https://picsum.photos/500/400?image=1060"},
      {title: "Best Hiking In Yosemite", author: "Vinnie Alexander", body: "", picture: "https://picsum.photos/500/400?image=1043"},
      {title: "Astro Photography Guide", author: "Greg Rakozy", body: "", picture: "https://picsum.photos/500/400?image=903"}

    ]
   }

  
  ngOnInit() {
  }
  slides = [
    {
      img:'assets/img/wastebin22.png'
    },
    {
      img: 'assets/img/wastebin22.png'
    },
    {
      img: 'assets/img/banner.jpg'
    }
  ];

  collectmoneyclick(){
    this.router.navigate(['/savewastedata'])
  }
  moneyclick(){
    this.router.navigate(['/collect'])
  }
  assessmentclick(){
    this.router.navigate(['/assessment'])
  }
  statisticclick(){
    this.router.navigate(['/statistic'])
  }
 
  
   
}

