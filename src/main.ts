import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

import { HttpModule, XSRFStrategy, CookieXSRFStrategy, Http } from '@angular/http';

export function IlmsCookieStrategy(http: Http) {
  return new CookieXSRFStrategy('RESPONSE_TOKEN', 'X-CSRFToken');
}

platformBrowserDynamic().bootstrapModule(AppModule);
