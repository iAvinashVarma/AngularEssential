import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MediaItem } from '../media-item';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  @Input() mediaItem: MediaItem;
  @Output() delete = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  wasWatched() {
    return true;
  }

  onDelete() {
    this.delete.emit(this.mediaItem);
  }

  onLove() {
    this.mediaItem.isFavorite = !this.mediaItem.isFavorite;
  }

  onView() {
    console.log(this.mediaItem);
  }

  onEdit() {
    console.log('Edit');
  }
}
