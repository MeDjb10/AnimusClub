import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  slides: any[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '../../../../assets/img1.jpg',
      title: 'First slide',
      subtitle: 'The work is what matters. — Jhin',
    };
    this.slides[1] = {
      id: 1,
      src: '../../../../assets/img2.jpg',
      title: 'Second slide',
      subtitle: 'A True Master Is An Eternal Student. — Master YI',
    };
    this.slides[2] = {
      id: 2,
      src: '../../../../assets/img3.jpg',
      title: 'Third slide',
      subtitle: 'We Are What We Overcome. — Pantheon',
    };
  }
}