import { Component, OnInit, Input, trigger, state, animate, transition, style } from '@angular/core';
import { LoggerService } from '../../services/logger.service';
import { AppConstants } from '../../app.constants';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ opacity: '1' }),
          animate('300ms', style({opacity: '1' }))
        ]),
        transition(':leave', [
          style({ opacity: '0' }),
          animate('0ms', style({opacity: '1' }))
        ])
      ]
    )
  ]
})

export class SliderComponent implements OnInit {

  @Input()
  private slides: Array<object>;
  @Input()
  private referer: string;
  private current: object;
  private ready: boolean = false;
  private constants: AppConstants;

  constructor(private logger: LoggerService) {
    this.constants = new AppConstants();
  }

  ngOnInit() {
    this.rotate();
  }

  private rotate(): void {
    try {
      this.current = {
        slider: this.slides[0],
        index: 0
      };
      this.ready = true;
      this.logger.throwInfo({'[SLIDER]': JSON.stringify(this.slides)});
    } catch (e) {
      this.logger.throwError(e);
    }
  }

  private navigate(direction: string): void {
    try {

      let position: number = this.current['index'];
      const self = this;

      if (direction === 'next') {
        if (!this.slides[position + 1]) {
          position = 0;
        }
        this.current = { slider: { 'slide_id' : -1 } };
        setTimeout( () => { self.current = { slider: self.slides[position], index: position + 1 }; }, 305);
        return;
      }

      if (position < 0) {
        position = this.slides.length - 1;
      }

      this.current = { slider: { 'slide_id' : -1 } };

      setTimeout( () => { self.current = { slider: self.slides[position], index: position - 1 }; }, 305);
    } catch (e) {
      this.logger.throwError(e);
    }

  }
}
