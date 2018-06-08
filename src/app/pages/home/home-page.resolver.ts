import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import {HttpService} from "../../services/http.service";
import {AppConstants} from "../../app.constants";
import 'rxjs';

@Injectable()
export class HomePageResolver implements Resolve<any> {

  constructor(private http: HttpService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<object>>  {
    return Observable.create((observer: Observer<any>) => {
      this.http.get(AppConstants.ENDPOINT_RENT_PAGE)
        .subscribe(
          (res) => { observer.next(res); observer.complete(); },
          (err) => { throw new Error(err); }
        );
    });
  }

}
