import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header-home></app-header-home>
    <div class="clearfix"></div>
    <div style="padding-top: 90px;" class="visible-xs"></div>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <app-back-to-top></app-back-to-top>
  `
})

export class AppComponent implements OnInit {

  private static responsiveAlert(): void {
    if (window.innerWidth < 1024) {
      alert('responsiveness not yet implemented')
    }
  }

  ngOnInit() {
    AppComponent.responsiveAlert();
  }

  @HostListener('window:resize', ['$event']) onScrollEvent($event) {
    AppComponent.responsiveAlert();
  }
}
