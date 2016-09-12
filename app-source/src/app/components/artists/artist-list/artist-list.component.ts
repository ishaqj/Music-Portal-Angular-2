import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {APIService} from '../../../services/api.service';

@Component({
    directives: [ ROUTER_DIRECTIVES],
    templateUrl: './artist-list.html',
})

export class ArtistList {
    artists = [];

    constructor(private _apiService: APIService) {}

    ngOnInit() {
        this._apiService.listMainPageArtists().subscribe(data => this.artists = data, error => console.log(error));
    }



}
