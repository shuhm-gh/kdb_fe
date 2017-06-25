import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XSRFStrategy, Http, RequestOptions } from '@angular/http';


import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

import { AuthGuard } from './_services/auth.guard';


import { IlmsCookieStrategy } from '../main';

import { ChartsModule } from 'ng2-charts/ng2-charts';
//import { AlertModule } from 'ng2-bootstrap/alert';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
//import {AnalysisComponent} from './module/view.analysis';
import { LoginComponent } from './login/login.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { AlertService, AuthenticationService } from './_services/index';


// https://github.com/auth0/angular2-jwt/issues/258
// ERROR in Error encountered resolving symbol values statically. Only initialized variables and constants can be referenced because the value of this variable is needed by the template compiler (position 67:22 in the original .ts file), resolving symbol AUTH_PROVIDERS in /home/kylin/workspace/kdb_fe/node_modules/angular2-jwt/angular2-jwt.d.ts, resolving symbol AppModule in /home/kylin/workspace/kdb_fe/src/app/app.module.ts, resolving symbol AppModule in /home/kylin/workspace/kdb_fe/src/app/app.module.ts
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({}), http, options);
}

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
    //AlertModule.forRoot()
  ],
  //providers: [{ provide: XSRFStrategy, useValue: IlmsCookieStrategy} ],
  providers: [
    Location,

    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },

    AuthGuard,
    AlertService,
    AuthenticationService,

    { provide: LocationStrategy, useClass: PathLocationStrategy }],
  //providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
