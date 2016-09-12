/**
 * Created by Ishaq17 on 2016-09-09.
 */
import {Component, OnInit} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators, FormArray, FormControl} from "@angular/forms";
import {BUTTON_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {ActivatedRoute, Router} from "@angular/router";
import {APIService} from "../../../services/api.service";

@Component({
  templateUrl: './soundtrack-add.html',
  directives: [REACTIVE_FORM_DIRECTIVES,BUTTON_DIRECTIVES]
})

export class SoundtrackAddComponent implements OnInit {

  soundtrackForm: FormGroup;
  genres: Array<any> = [];
  artists: Array<any> = [];
  private value:any = {};

  private successMsg:boolean = false;
  private errorMsg:boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _ApiService: APIService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this._ApiService.getAllGenres().subscribe(data => this.genres = data, error => console.log(error));
    this._ApiService.listArtist().subscribe(data => this.artists = data, error => console.log(error));
    this.initForm();
  }

  private initForm() {

    let artist = "";
    let genre = "";
    let soundtracks : FormArray = new FormArray([]);

    this.soundtrackForm = this.formBuilder.group({
      artist: [artist, Validators.required],
      genre: [genre, Validators.required],
      soundtrack: soundtracks
    });
  }


  private onSubmit() {
    const soundtrack = this.soundtrackForm.value;
    this._ApiService.insertSoundtrack(soundtrack).subscribe(success => this.successMsg = true, error => this.errorMsg = true);
  }

  onAddItem(soundtrack: string, path: string) {
    (<FormArray>this.soundtrackForm.controls['soundtrack']).push(
      new FormGroup({
        song: new FormControl(soundtrack, Validators.required),
        path: new FormControl(path, [Validators.required])
      })
    );
  }

  onRemoveItem(index: number) {
    (<FormArray>this.soundtrackForm.controls['soundtrack']).removeAt(index);
  }

  onCancel() {
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['/admin']);
  }

}
