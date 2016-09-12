/**
 * Created by Ishaq17 on 2016-09-11.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {APIService} from '../../../services/api.service';

@Component({
  directives: [ ROUTER_DIRECTIVES,],
  templateUrl: './genre-list.html',
})

export class GenreListComponent {
  private genres = [];

  constructor(private _apiService: APIService) {}

  ngOnInit() {
    this._apiService.listAllGenres().subscribe(data => this.genres = data.genres, error => console.log(error));
  }
}
