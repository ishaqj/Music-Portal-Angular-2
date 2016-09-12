import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {AuthService} from "./services/authservice.service";

@Component({
  selector: 'my-header',
  templateUrl: 'header.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {

  constructor(private router: Router, private _AuthService: AuthService) {}

  isAuth() {
    if(this._AuthService.isAuthtenticated()) {
      return true;
    }
    return false;
  }

  isAdmin() {
    if(this._AuthService.isAdmin()) {
      return true;
    }
    return false;
  }

  logout() {
    this._AuthService.logout();
    this.router.navigate(['../']);
  }

}
