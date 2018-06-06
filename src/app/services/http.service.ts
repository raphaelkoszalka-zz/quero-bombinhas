import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { LoggerService } from './logger.service';
import 'rxjs/Rx';

@Injectable()
export class HttpService
{
    constructor(private http: Http, private logger: LoggerService) {}

    public get(url: string) {
        return this.http.get(url).map ((response: Response) => {
            try {
                return JSON.parse(response['_body']);
            } catch (e) {
                this.logger.throwError(e);
            }
        } );
    }

    public post(payload: string, url: string) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(url, payload, { headers: headers }).map((response: Response) => {
            try {
                response.json();
            } catch (e) {
                this.logger.throwError(e);
            }
        });
    }
}
