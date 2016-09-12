/**
 * Created by Ishaq17 on 2016-09-11.
 */
import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {APIService} from '../../../services/api.service';

@Component({
  directives: [ ROUTER_DIRECTIVES,],
  templateUrl: './genre-detail.html',
})

export class GenreDetailComponent {
  private genreID: number;
  private artists = [];

  constructor(private _apiService: APIService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if(params.hasOwnProperty('id')) {
        this.genreID = +params['id'];
      }
    });

    this._apiService.browseGenre(this.genreID).subscribe(data => this.artists = data.artists);
  }
}
