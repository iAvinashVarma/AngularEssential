import { Component, OnInit } from '@angular/core';
import { MediaItemService } from '../media-item.service';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  mediaItems;
  constructor(private mediaItemService: MediaItemService) { }
  ngOnInit() {
    this.mediaItemService.get().subscribe(mI => {
      this.mediaItems = mI;
    });
  }
  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
}
