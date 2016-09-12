/**
 * Created by Ishaq17 on 2016-09-09.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators, FormArray, FormControl} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {APIService} from "../../../services/api.service";
import {Subscription} from "rxjs/Rx";

@Component({
  templateUrl: './soundtrack-edit.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})

export class SoundtrackEditComponent implements OnInit, OnDestroy {

  soundtrackForm: FormGroup;
  private soundtrack: any = {};
  private soundtrackID:number;
  artists:Array<any> = [];
  genres:Array<any> = [];
  private successMsg:boolean = false;
  private errorMsg:boolean = false;
  private enable:boolean = false;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _ApiService: APIService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      if(params.hasOwnProperty('id')) {
        this.soundtrackID = +params['id'];
      }
    });

    this.initForm();
    this._ApiService.getAllArtists().subscribe(data => this.artists = data.artists);
    this._ApiService.listAllGenres().subscribe(data => this.genres = data.genres);
  }

  private initForm() {
    this._ApiService.fetchSoundtrack(this.soundtrackID).subscribe(data => {
      this.enable = true;
      this.soundtrack.soundtrack = data.soundtracks[0].soundtrack;
      this.soundtrack.path = data.soundtracks[0].path;
      this.soundtrack.artist = data.soundtracks[0].artist.name;
      this.soundtrack.genre = data.soundtracks[0].genre.name;
      this.soundtrack.genre_id = data.soundtracks[0].genre_id;
      this.soundtrack.artist_id = data.soundtracks[0].artist_id;

      let soundtrack = this.soundtrack.soundtrack;
      let path = this.soundtrack.path;
      let artist = this.soundtrack.artist_id;
      let genre = this.soundtrack.genre_id;

      this.soundtrackForm = this.formBuilder.group({
        soundtrack: [soundtrack, Validators.required],
        path: [path, Validators.required],
        artist_id: [artist, Validators.required],
        genre_id: [genre, Validators.required],
      });
    });
  }


  private onSubmit() {
    const soundtrack = this.soundtrackForm.value;
    this._ApiService.updateSoundtrack(this.soundtrackID, soundtrack).subscribe(success => this.successMsg = true, error => this.errorMsg = true);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onCancel() {
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['/admin/soundtrack/edit']);
  }

}
