import {Component, OnInit} from '@angular/core';
import { AppConstants } from '../../app.constants';
import { BroadcasterService } from '../../services/broadcaster.service';
import { LoggerService } from '../../services/logger.service';
import { HttpService } from '../../services/http.service';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})

export class SinglePageComponent implements OnInit {

  public estate: object;
  public mediaUrl: string = AppConstants.MEDIA_PHOTOS;
  public name: string;
  public subject: string;
  public message: string;
  public email: string;
  public phone: string;
  public isLoading: boolean = true;


  constructor(private logger: LoggerService, private http: HttpService, private broadcaster: BroadcasterService,
    private route: ActivatedRoute, private sanitizer: DomSanitizer) {

    this.estate = route['data']['_value']['content'];
    console.log(this.estate);

  }

  ngOnInit() {
    setTimeout( () => this.isLoading = false, 300);
  }

  public parseAndSanitizeHTML(html: string): SafeHtml {
    html = html.replace(/\\r\\n\\r\\n/g, '<br/>');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }



}
