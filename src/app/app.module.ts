import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MainItemComponent } from './main-item/main-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemService } from './media-item.service';

const lookupLists = {
  mediums: ['Movies', 'Series']
};

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    NavBarComponent,
    MainItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MediaItemService,
    { provide: 'lookupListToken', useValue: lookupLists }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
