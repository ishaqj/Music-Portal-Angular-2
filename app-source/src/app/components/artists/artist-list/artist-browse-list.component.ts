/**
 * Created by Ishaq17 on 2016-09-11.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {APIService} from '../../../services/api.service';

@Component({
  directives: [ ROUTER_DIRECTIVES,],
  templateUrl: './artist-browse.html',
})

export class ArtistBrowseListComponent {
  artists = [];

  constructor(private _apiService: APIService) {}

  ngOnInit() {
    this._apiService.browseArtists().subscribe(data => this.artists = data.artists, error => console.log(error));
  }



}
