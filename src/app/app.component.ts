import { Component, OnInit } from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: []
})
export class AppComponent {
    spinnerVisible : boolean;
    message: string = 'please wait';

    constructor(private spinnerService: SpinnerService) {
        this.spinnerService.spinnerObs$.subscribe(visible => {
            // prevent ExpressionChangedAfterItHasBeenCheckedError angular error
            setTimeout(()=> {
                this.spinnerVisible = visible; 
            })       
        });
     }

     ngOnInit() {
        this.spinnerService.displaySpinner();
        setTimeout(()=> {
            this.message = 'Hello, world!';
            this.spinnerService.hideSpinner();
        }, 1500)

     }

}
