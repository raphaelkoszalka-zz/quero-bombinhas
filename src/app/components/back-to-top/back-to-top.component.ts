import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public goToTop(): void {
    document.getElementById('topOfTheWorld').scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

}
