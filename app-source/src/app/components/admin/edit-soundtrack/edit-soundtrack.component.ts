/**
 * Created by Ishaq17 on 2016-09-11.
 */
import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {APIService} from "../../../services/api.service";

@Component({
  templateUrl: './edit-soundtrack.html',
  directives: [ROUTER_DIRECTIVES]

})
export class AdminEditSoundtrackComponent implements OnInit {
  private soundtracks = [];
  constructor(private _ApiService: APIService) {}

  ngOnInit() {
    this._ApiService.getAllSoundtracks().subscribe(data => this.soundtracks = data.soundtracks);
  }
}
