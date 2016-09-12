/**
 * Created by Ishaq17 on 2016-09-11.
 */
import {Component, OnInit, OnDestroy} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators,FormControl} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {APIService} from "../../../services/api.service";
import {Subscription} from "rxjs/Rx";

@Component({
  templateUrl: './genre-edit.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})

export class GenreEditComponent implements OnInit, OnDestroy {

  genreForm: FormGroup;
  private genreId: number;
  private subscription: Subscription;

  private enable:boolean = false;
  private successMsg:boolean = false;
  private errorMsg:boolean = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private _ApiService: APIService){}

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params: any) => {
      if(params.hasOwnProperty('id')) {
        this.genreId = +params['id'];
      }
    });

    this.initForm();
  }

  private initForm() {

    this._ApiService.findGenre(this.genreId).subscribe(data => {
      this.enable = true;
      let genre = data.genre.name;
      this.genreForm = this.formBuilder.group({
        genre: [genre, Validators.required]
      });
    });

  }

  private navigateBack() {
    this.router.navigate(['/admin/genre/edit']);
  }

  onSubmit() {
    const updateGenre = this.genreForm.value;
    this._ApiService.updateGenre(this.genreId, updateGenre).subscribe(success => this.successMsg = true, error => this.errorMsg = true);
  }


  onCancel() {
    this.navigateBack();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
