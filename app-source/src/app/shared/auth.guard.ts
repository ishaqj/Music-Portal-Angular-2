/**
 * Created by Ishaq17 on 2016-09-11.
 */
import {Injectable} from "@angular/core";
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {AuthService} from "../services/authservice.service";


  @Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _AuthService: AuthService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
      if(!this._AuthService.isAdmin()) {
        return false;
      }
      return true;
    }

  }
