import {Component, OnDestroy, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from '@angular/router';
import {APIService} from "../../../services/api.service";
import {Subscription} from "rxjs/Rx";

@Component({
    directives: [ ROUTER_DIRECTIVES ],
    templateUrl: './artist-detail.html'
})

export class ArtistDetailComponent implements OnInit, OnDestroy{
    private id:string;
    private subscription: Subscription;

    public artistDetails: any = [];

    constructor(private _apiService: APIService, private router:Router, private route:ActivatedRoute) {}

    ngOnInit() {
      this.subscription = this.route.params.subscribe((param: any) =>
        {
          this.id = param['id'];
           this._apiService.browseArtist(this.id)
            .subscribe(artist => this.artistDetails = artist);
        }
        )

    }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
