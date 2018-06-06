import { Component, Input } from '@angular/core';
import { AppConstants } from '../../app.constants';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent {

    @Input()
    private estate: object;
    public constants: string = AppConstants.MEDIA_PHOTOS;

    constructor() {
    }

}
