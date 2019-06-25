import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() { }
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
   
}

