import {Component, OnInit, HostListener} from '@angular/core';
import {FadeAnimation} from "../../app.animations";
import {BroadcasterService} from "../../services/broadcaster.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css'],
  animations: [FadeAnimation]
})
export class HeaderHomeComponent implements OnInit {

  public pageScrolled: boolean;
  // @todo: should be using Location service instead of this
  private url: string;

  constructor(private broadcaster: BroadcasterService, private router: Router) {
    this.pageScrolled = false;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (window.scrollY > 200) {
      this.pageScrolled = true;
      return;
    }
    this.pageScrolled = false;
  }

  ngOnInit() {
    this.url = window.location.href;
  }

  public scrollTo(el: string): void {
    if (el === 'topOfTheWorld') {
      this.router.navigate(['home'], { queryParams: { goTo: 'top' } });
      this.broadcaster.broadcast('CHECK_QUERY_ARG', el);
      return;
    }

    // if still here because there will be another conditions at this method
    if (el === 'estatesRow') {
      this.router.navigate(['home'], { queryParams: { goTo: 'imoveis' } });
      this.broadcaster.broadcast('CHECK_QUERY_ARG', el);
    }
  }

}
