import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { MediaItemsResponse } from './media-item';

@Injectable({
  providedIn: 'root'
})

export class MediaItemService {
  constructor(private http: HttpClient) { }
  get(medium) {
    const getOptions = {
      params: {
        medium
      }
    };
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions).pipe(
      map((response: MediaItemsResponse) => {
        return response.mediaItems;
      })
    );
  }
  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem);
  }
  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`);
  }
}
