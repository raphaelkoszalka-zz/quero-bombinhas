import {Component, HostListener} from '@angular/core';
import {FadeAnimation} from "../../app.animations";
import {BroadcasterService} from "../../services/broadcaster.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css'],
  animations: [FadeAnimation]
})
export class HeaderHomeComponent  {

  public pageScrolled: boolean;
  private url: string;

  constructor(private broadcaster: BroadcasterService, private router: Router) {
    this.pageScrolled = false;
    // @todo: use some angular service instead of JS API window object
    this.url = window.location.href;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (window.scrollY > 200) {
      this.pageScrolled = true;
      return;
    }
    this.pageScrolled = false;
  }

  private homeRoute(el: string): void {
    this.broadcaster.broadcast('SCROLL_TO_ELEMENT', el);
  }

  private otherRoutes(el: string): void {
    if (el === 'topOfTheWorld') {
      this.router.navigate(['home']);
    }
  }

  public scrollTo(el: string): void {
    if (/home/.test(this.url)) {
      this.homeRoute(el);
      return;
    }

    this.otherRoutes(el);

  }

}
