/**
 * Created by Ishaq17 on 2016-07-26.
 */
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {APIService} from "../../../services/api.service";
import {REACTIVE_FORM_DIRECTIVES, FormArray, FormGroup, FormBuilder, Validators, FormControl} from "@angular/forms";
import {BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {SELECT_DIRECTIVES} from 'ng2-select';

@Component({
  templateUrl: './artist-add.html',
  directives: [REACTIVE_FORM_DIRECTIVES,SELECT_DIRECTIVES,BUTTON_DIRECTIVES]
})
export class ArtistAddComponent implements OnInit {
  artistForm: FormGroup;

  public artist: any = {};
  items:Array<any> = [];
  private value:any = {};

  private successMsg:boolean = false;
  private errorMsg:boolean = false;

  constructor(private route: ActivatedRoute,
              private Api: APIService,
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.Api.getAllGenres().subscribe(data => this.items = data, error => console.log(error));
    this.initForm();
  }

  public selected(value:any):void {
    this.value = value;
  }

  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }

  public typed(value:any):void {
    console.log('New search input: ', value);
  }

  public refreshValue(value:any):void {
    this.value = value;
  }

  private initForm() {
    let name = '';
    let bio = '';
    let image = '';
    let genre: FormArray = new FormArray([]);


    this.artistForm = this.formBuilder.group({
      name: [name, Validators.required],
      bio: [bio, Validators.required],
      image: [image, Validators.required],
      genre: genre
    });
  }
  onSubmit() {
    const newArtist = this.artistForm.value;
    this.Api.insertArtist(newArtist).subscribe(success => this.successMsg = true, error => this.errorMsg = true);
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
    this.router.navigate(['/admin']);
  }
}
