import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from "../../app.constants";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  @Input()
  public pictures: Array<any>;
  public current: object;
  public showBig: boolean = false;

  constructor() { }

  ngOnInit() {
    let i: number = 0;
    for (const pic of this.pictures) {
      pic.position = i;
      pic.url = AppConstants.MEDIA_PHOTOS + pic['foto_url'];
      i++;
    }

    this.current = this.pictures[0];

    this.registerKeyPress();
  }

  public imageLoader(z: string): void {
    const currentImage = document.getElementById('currentImage');
    currentImage.style.zIndex = z;
  }

  public navigate(direction: string): void {
    this.imageLoader('-1');

    if (direction === 'next') {
      this.current = this.pictures[this.current['position'] + 1];
      if (typeof this.current === 'undefined') {
        this.current = this.pictures[0];
      }
      return;
    }

    this.current = this.pictures[this.current['position'] - 1];

    if (typeof this.current === 'undefined') {
      this.current = this.pictures[this.pictures.length - 1];
    }
  }

  public openPic(item: object): void {
    this.imageLoader('-1');
    this.current = item;
    this.showBig = true;
  }

  public registerKeyPress(): void {
    this.showBig = true;
    const self = this;

    document.addEventListener('keyup', function(e) {
      if (e.keyCode === 37) {
        self.navigate('previous');
        return;
      }

      if (e.keyCode === 39) {
        self.navigate('next');
        return;
      }
    });
  }
}
