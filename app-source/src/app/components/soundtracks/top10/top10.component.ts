/**
 * Created by Ishaq17 on 2016-09-11.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {APIService} from '../../../services/api.service';

@Component({
  directives: [ ROUTER_DIRECTIVES,],
  templateUrl: './top10.html',
})

export class Top10Component {
  top10 = [];

  constructor(private _apiService: APIService) {}

  ngOnInit() {
    this._apiService.top10().subscribe(data => this.top10 = data.soundtracks, error => console.log(error));
  }
}
