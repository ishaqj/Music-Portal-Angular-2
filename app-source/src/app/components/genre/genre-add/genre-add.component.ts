/**
 * Created by Ishaq17 on 2016-09-11.
 */
import {Component, OnInit} from "@angular/core";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormBuilder, Validators,FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {APIService} from "../../../services/api.service";

@Component({
  templateUrl: './genre-add.html',
  directives: [REACTIVE_FORM_DIRECTIVES]

})

export class GenreAddComponent implements OnInit {

  genreForm: FormGroup;
  private successMsg:boolean = false;
  private errorMsg:boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private _ApiService: APIService){}

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    let genre = "";

    this.genreForm = this.formBuilder.group({
      genre: [genre, Validators.required]
    });
  }

  private navigateBack() {
    this.router.navigate(['/admin']);
  }

  onSubmit() {
    const newGenre = this.genreForm.value;
    this._ApiService.insertGenre(newGenre).subscribe(success => this.successMsg = true, error => this.errorMsg = true);
  }

  onCancel() {
    this.navigateBack();
  }

}
