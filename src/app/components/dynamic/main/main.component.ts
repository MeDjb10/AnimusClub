import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private router:Router){}
  Formation = [
    {
      id: 1,
      name: 'Trainings',
      img: '../../../../assets/austin-distel-rxpThOwuVgE-unsplash.jpg',
      rout:'/home/events'
    },
    {
      id: 2,
      name: 'A.P.I.',
      img: '../../../../assets/api.jpg',
      rout:'/home/api'
    },{
      id: 3,
      name: 'About us',
      img: '../../../../assets/aboutUs.jpg',
      rout:'/home/aboutUs'
    },
  ];
  GoTo(rout:String){
    this.router.navigate([rout])
  }
}
