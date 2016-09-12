/**
 * Created by Ishaq17 on 2016-07-11.
 */
import {Component, OnInit} from '@angular/core';
import {
  FORM_DIRECTIVES,
  REACTIVE_FORM_DIRECTIVES,
  FormBuilder,
  FormGroup,
  Validators, FormControl
} from "@angular/forms";
import {AuthService} from "../../services/authservice.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './signin.html',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})

export class SignIn implements OnInit {
  userForm: FormGroup;
  private authUser = {token: "", user: ""};
  constructor(private _fb: FormBuilder,
              private _authService: AuthService,
              private router: Router) {}

  ngOnInit(): any {
    this.userForm = this._fb.group({
      email: ['', Validators.compose([Validators.required, this.isEmail])],
      password: ['',Validators.required],
    });
  }

  isEmail(control:FormControl):{[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return {noEmail: true};
    }
  }

  onSubmit() : any {
    this._authService.signInUser(this.userForm.value)
      .subscribe(
        response => {
          this.authUser.token = response.token;
          this.authUser.user = JSON.stringify(response.user);
          localStorage.setItem('token',this.authUser.token);
          localStorage.setItem('user', this.authUser.user);
          location.reload();
        }
      );
    this.router.navigate(['../']);
  }
}
