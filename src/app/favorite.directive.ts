import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {
  @HostBinding('class.fa-heart') isHeartEnabled = true;
  @HostBinding('class.fa-heart-o') isHeartDisabled = true;
  @HostListener('mouseenter') onMouseEnter() {
    this.isHeartEnabled = true;
    this.isHeartDisabled = false;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isHeartEnabled = false;
    this.isHeartDisabled = true;
  }
  @Input() set appFavorite(value) {
    this.isHeartEnabled = value;
    this.isHeartDisabled = !value;
  }
  constructor() { }

}
