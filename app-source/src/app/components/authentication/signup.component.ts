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
  templateUrl: './signup.html',
  directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})

export class SignUp implements OnInit {
  myForm: FormGroup;

  constructor(private router: Router, private _fb: FormBuilder, private _authService: AuthService) {}

  ngOnInit(): any {
    this.myForm = this._fb.group({
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, this.isEmail])],
      password: ['',Validators.required],
      confirmpassword: ['', Validators.compose([
        Validators.required,
        this.isEqualPassword.bind(this)
      ])]
    });
  }

  isEmail(control:FormControl):{[s: string]: boolean} {
    if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return {noEmail: true};
    }
  }

  isEqualPassword(control:FormControl):{[s: string]: boolean} {
    if (!this.myForm) {
      return {passwordsNotMatch: true};

    }
    if (control.value !== this.myForm.controls['password'].value) {
      return {passwordsNotMatch: true};
    }
  }

  onSubmit() : any {
    this._authService.signupUser(this.myForm.value)
      .subscribe();
    this.router.navigate(['/login'])

  }
}
