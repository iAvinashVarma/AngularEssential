import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  appComponent: AppComponent = new AppComponent();
  title = this.appComponent.title;
  home = 'Home';
  link = 'Link';
  search = 'Search';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(search) {
    console.log(search);
  }
}
