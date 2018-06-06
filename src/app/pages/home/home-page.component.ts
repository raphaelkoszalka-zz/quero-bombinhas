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

export class HomePageComponent {

  private indexData: object;
  private ready: boolean = false;

  constructor(
    private logger: LoggerService,
    private http: HttpService,
    private broadcaster: BroadcasterService,
    private route: ActivatedRoute) {

    this.indexData = route['data']['_value']['content'];
    console.log(this.indexData);
  }


}
