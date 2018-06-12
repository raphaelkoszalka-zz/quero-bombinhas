import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-header-home></app-header-home>
        <div class="clearfix"></div>
        <div style="padding-top: 90px;" class="visible-xs"></div>
        <router-outlet></router-outlet>
        <app-footer></app-footer>
    `
})

export class AppComponent {}
