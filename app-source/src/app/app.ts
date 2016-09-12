import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {JQueryComponent} from "./components/jquery.component";
import {HeaderComponent} from "./header.component";

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES, JQueryComponent, HeaderComponent],
  templateUrl: './app.html',
})
export class App {
  constructor() {}

}
