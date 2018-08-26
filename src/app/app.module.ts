import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainItemComponent } from './main-item/main-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    NavBarComponent,
    MainItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
