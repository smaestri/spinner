import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppComponent }  from './app.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SpinnerService } from './shared/services/spinner.service';

@NgModule({
    imports: [
        BrowserModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        AppComponent,
        SpinnerComponent
    ],
    providers: [
        SpinnerService
    ],
    bootstrap: [AppComponent ]
})

export class AppModule { }