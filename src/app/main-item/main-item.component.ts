import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main-item',
  templateUrl: './main-item.component.html',
  styleUrls: ['./main-item.component.css']
})
export class MainItemComponent implements OnInit {
  appComponent: AppComponent = new AppComponent();
  title = 'Media Watch List';
  // tslint:disable-next-line:max-line-length
  description = 'Keeping track of the media I want to watch';
  constructor() { }

  ngOnInit() {
  }

}
