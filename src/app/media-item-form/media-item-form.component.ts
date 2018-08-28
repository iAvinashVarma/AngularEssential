import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  mediaForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.mediaForm = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: new FormControl('Action'),
      year: new FormControl('', this.yearValidator)
    });
  }

  yearValidator(control: AbstractControl) {
    if (!control.value) {
      return null;
    }
    const year = control.value;
    const minYear = 1850;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return {
        'year': {
          'min': minYear,
          'max': maxYear
        }
      };
    }
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
