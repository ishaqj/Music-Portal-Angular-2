/**
 * Created by Ishaq17 on 2016-07-11.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Configuration} from "./app.constants";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {User} from "../shared/user.interface";

@Injectable()
export class AuthService {
  private signup = "auth/signup";
  private login = "auth/login";
  private admin: boolean = false;
  constructor(private _http: Http, private _configuration: Configuration){}

  signupUser(user: User): Observable<any> {
    const body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post(this._configuration.ServerWithApiUrl + this.signup, body, {
      headers: headers
    })
      .map(response => response.json());
  }

  signInUser(user:User) {
    const body = JSON.stringify(user);
    let headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this._http.post(this._configuration.ServerWithApiUrl + this.login, body, {
      headers: headers
    })
      .map(response => response.json());

  }

  isAuthtenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  isAdmin() : boolean {
    let admin = JSON.parse(localStorage.getItem('user'));
    if(admin != null)
    {
      if(admin.admin)
      {
        this.admin = true;
      }

    }
    return this.admin;
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
}
