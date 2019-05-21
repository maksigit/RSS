import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {ServService} from './myService/serv.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ChartModule} from 'primeng/chart';
import {InputUrlComponent} from './components/input-url/input-url.component';
import {ContentComponent} from './components/content/content.component';
import {ChartComponent} from './components/chart/chart.component';

@NgModule({
    declarations: [
        AppComponent,
        InputUrlComponent,
        ContentComponent,
        ChartComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ChartModule
    ],
    providers: [ServService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
