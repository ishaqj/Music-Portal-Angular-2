/**
 * Created by Ishaq17 on 2016-09-11.
 */
import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {APIService} from "../../../services/api.service";

@Component({
  templateUrl: './edit-genre.html',
  directives: [ROUTER_DIRECTIVES]

})
export class AdminEditGenreComponent implements OnInit {
  private genres = [];
  constructor(private _ApiService: APIService) {}

  ngOnInit() {
    this._ApiService.listAllGenres().subscribe(data => this.genres = data.genres);
  }
}
