import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS,JSONP_PROVIDERS} from '@angular/http';
import {enableProdMode} from '@angular/core';
import {APP_ROUTER_PROVIDERS} from './app/app.routes';
import {App} from './app/app';
import {APIService} from "./app/services/api.service";
import {Configuration} from "./app/services/app.constants";
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import {AuthService} from "./app/services/authservice.service";
import {AuthGuard} from "./app/shared/auth.guard";

enableProdMode();

bootstrap(App, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  APIService, Configuration,disableDeprecatedForms(),
  provideForms(), AuthService, AuthGuard
])
.catch(err => console.error(err));
