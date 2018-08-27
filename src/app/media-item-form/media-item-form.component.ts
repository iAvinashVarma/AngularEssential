import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  mediaForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mediaForm = this.formBuilder.group({
      medium: ['Movies', Validators.required],
      name: ['', [Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')]],
      category: ['Action', Validators.required],
      year: ['', Validators.required]
    });
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
