import {Component, HostListener, OnInit} from '@angular/core';
import {FadeAnimation} from "../../app.animations";
import {BroadcasterService} from "../../services/broadcaster.service";

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css'],
  animations: [FadeAnimation]
})
export class HeaderHomeComponent implements OnInit {

  public pageScrolled: boolean;

  constructor(private broadcaster: BroadcasterService) {
    this.pageScrolled = false;
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    console.log(window.scrollY);
    if (window.scrollY > 350) {
      this.pageScrolled = true;
      return;
    }
    this.pageScrolled = false;
  }

  public scrollTo(el: string): void {
    this.broadcaster.broadcast('SCROLL_TO_ELEMENT', el);
  }

}
