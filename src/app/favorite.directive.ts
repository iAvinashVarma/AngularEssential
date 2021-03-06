import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.fas') isHeartEnabled = true;
  @HostBinding('class.far') isHeartDisabled = true;
  @HostBinding('class.is-favorite') isFavorite = true;
  @HostListener('mouseenter') onMouseEnter() {
    if (!this.isFavorite) {
      this.isHeartEnabled = true;
      this.isHeartDisabled = false;
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (!this.isFavorite) {
      this.isHeartEnabled = false;
      this.isHeartDisabled = true;
    }
  }
  @Input() set appFavorite(value) {
    this.isFavorite = value;
    this.isHeartEnabled = value;
    this.isHeartDisabled = !value;
  }
  constructor() { }

}
