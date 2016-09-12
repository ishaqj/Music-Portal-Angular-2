/**
 * Created by Ishaq17 on 2016-07-26.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {APIService} from "../../../services/api.service";
import {REACTIVE_FORM_DIRECTIVES, FormArray, FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {Subscription} from "rxjs/Rx";
import {BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {SELECT_DIRECTIVES} from 'ng2-select';

@Component({
  templateUrl: './artist-edit.html',
  directives: [REACTIVE_FORM_DIRECTIVES,SELECT_DIRECTIVES,BUTTON_DIRECTIVES]
})
export class ArtistEditComponent implements OnInit, OnDestroy{
  artistForm: FormGroup;
  public artist: any = {};
  genres: Array<any> = [];
  artists: Array<any> = [];
  private artistId: number;
  private subscription: Subscription;

  items:Array<any> = [];
  private value:any = [];

  private successMsg:boolean = false;
  private errorMsg:boolean = false;
  private enable: boolean = false;

  constructor(private route: ActivatedRoute,
              private Api: APIService,
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {

        if(params.hasOwnProperty('id')) {
          this.artistId = +params['id'];
          this.Api.getAllGenres().subscribe(data => { this.items = data }, error => console.log(error));

        }
        this.initForm();
      }
    );
  }

  public selected(value:any):void {
    this.value = value;
  }

  public refreshValue(value:any):void {
    this.value = value;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm() {
    this.Api.fetchArtist(this.artistId).subscribe(data => {
      this.enable = true;
      this.artist.name = data.artists[0].name;
      this.artist.bio = data.artists[0].bio;
      this.artist.image = data.artists[0].image;
      this.artist.genre = data.artists[0].genre;

      let name = this.artist.name;
      let bio = this.artist.bio;
      let image = this.artist.image;
      let genre: FormArray = new FormArray([]);

      if (this.artist.hasOwnProperty('genre')) {
        for (let i = 0; i < this.artist.genre.length; i++) {
          genre.push(
            new FormControl(this.artist.genre[i].name, Validators.required)
          );
        }
      }
      this.artistForm = this.formBuilder.group({
        name: [name, Validators.required],
        bio: [bio, Validators.required],
        image: [image, Validators.required],
        genre: genre
      });
    });

  }
  onSubmit() {
    const newArtist = this.artistForm.value;
    this.Api.updateArtist(this.artistId,newArtist).subscribe(success => this.successMsg = true, error => this.errorMsg = true);


  }

  onAddItem() {
    for(let i = 0; i<this.value.length; i++) {
      (<FormArray>this.artistForm.controls['genre']).push(
        new FormControl(this.value[i].text, Validators.required)
      );
    }
  }

  onRemoveItem(index: number) {
    (<FormArray>this.artistForm.controls['genre']).removeAt(index);
  }

  onCancel() {
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['/admin/artist/edit']);
  }

}
