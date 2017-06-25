import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XSRFStrategy, Http } from '@angular/http';
import { IlmsCookieStrategy } from '../main';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AlertModule } from 'ng2-bootstrap/alert';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
//import {AnalysisComponent} from './module/view.analysis';
import { LoginComponent } from './login/login.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { AlertService, AuthenticationService } from './_services/index';


@NgModule({
  declarations: [
    AppComponent,
    //AnalysisComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ChartsModule,
    DashboardModule,
    AlertModule.forRoot()
  ],
  //providers: [{ provide: XSRFStrategy, useValue: IlmsCookieStrategy} ],
  providers: [
    Location,
    AlertService,
    AuthenticationService,
    {provide: LocationStrategy, useClass: PathLocationStrategy}],
  //providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
