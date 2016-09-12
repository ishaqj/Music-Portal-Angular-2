/**
 * Created by Ishaq17 on 2016-09-11.
 */
import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {APIService} from "../../../services/api.service";

@Component({
  templateUrl: './edit-artist.html',
  directives: [ROUTER_DIRECTIVES]

})
export class AdminEditArtistComponent implements OnInit {
  private artists = [];
  constructor(private _ApiService: APIService) {}

  ngOnInit() {
    this._ApiService.getAllArtists().subscribe(data => this.artists = data.artists);
  }
}
