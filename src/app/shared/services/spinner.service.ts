import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Rx";

@Injectable()
export class SpinnerService {
    countDisplay: number =0;

    private subject = new Subject<boolean>();
    spinnerObs$ = this.subject.asObservable();

    displaySpinner() {
        this.countDisplay++;
        this.subject.next(true);
    }

    hideSpinner (){
        this.countDisplay--;
        if( this.countDisplay == 0){
            this.subject.next(false);
        }
    }
}