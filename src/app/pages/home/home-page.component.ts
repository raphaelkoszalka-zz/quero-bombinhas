import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { BroadcasterService } from '../../services/broadcaster.service';
import { LoggerService } from '../../services/logger.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  public indexData: object;
  public isLoading: boolean = true;

  constructor(private logger: LoggerService, private http: HttpService, private broadcaster: BroadcasterService,
    private route: ActivatedRoute) {

    this.indexData = route['data']['_value']['content'];
  }

  ngOnInit() {
    setTimeout( () => this.isLoading = false, 300);
    this.broadcaster.on<string>('SCROLL_TO_ELEMENT')
      .subscribe( (el) => this.scrollToElement(el));
  }

  public scrollToElement(el): void {

    if (el === 'estatesRow') {
      document.getElementById(el).style.paddingTop = '110px';
    }

    document.getElementById(el).scrollIntoView({ block: 'start', behavior: 'smooth' });

  }

}
