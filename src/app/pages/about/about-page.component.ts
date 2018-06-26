import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout( () =>
        document.getElementById('topOfTheWorld').scrollIntoView({ block: 'start', behavior: 'smooth' })
    , 25);
  }


}
