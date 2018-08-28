import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { MediaItemService } from '../media-item.service';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  mediaForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService,
    @Inject('lookupListToken') public lookupLists) { }

  ngOnInit() {
    this.mediaForm = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control('Action'),
      year: this.formBuilder.control('', this.yearValidator)
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
    this.mediaItemService.add(mediaItem);
  }
}
