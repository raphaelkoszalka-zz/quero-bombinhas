import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
    constructor() { }

    public throwInfo(logData: any): void {
        for (const key in logData) {
            if (logData.hasOwnProperty(key)) {
                console.info(key + ': ' + logData[key]);
            }
        }
    }

    public throwError(logData: object): void {
        console.error(logData);
    }
}
