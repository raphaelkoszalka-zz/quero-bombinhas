import {Component, HostListener} from '@angular/core';
import {FadeAnimation} from "../../app.animations";
import {BroadcasterService} from "../../services/broadcaster.service";

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css'],
  animations: [FadeAnimation]
})
export class HeaderHomeComponent  {

  public pageScrolled: boolean;

  constructor(private broadcaster: BroadcasterService) {
    this.pageScrolled = false;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    if (window.scrollY > 200) {
      this.pageScrolled = true;
      return;
    }
    this.pageScrolled = false;
  }

  public scrollTo(el: string): void {
    this.broadcaster.broadcast('SCROLL_TO_ELEMENT', el);
  }

}
