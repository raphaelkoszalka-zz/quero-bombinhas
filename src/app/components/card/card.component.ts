import { AfterViewInit, Component, Input } from '@angular/core';
import { AppConstants } from '../../app.constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements AfterViewInit {

  @Input()
  public estate: object;
  public mediaPhotosUrl: string = AppConstants.MEDIA_PHOTOS;
  public cardID: string;

  constructor() {
    this.cardID = Math.random().toString()
  }

  ngAfterViewInit() {
    const card = document.getElementById(this.cardID);
    console.log(card);
    card.addEventListener('mouseover', function () {
      card.classList.add('shadow-left-right');
    });
    card.addEventListener('mouseleave', function () {
      card.classList.remove('shadow-left-right');
    });
  }

}

