import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {
  @Input() mediaItem;
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
    console.log('Love');
  }

  onView() {
    console.log('View');
  }

  onEdit() {
    console.log('Edit');
  }
}
