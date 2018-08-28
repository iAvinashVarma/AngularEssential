import { HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { HttpBackend } from '@angular/common/http/src/backend';
import { Observer, Observable } from 'rxjs';

export class MockXHRBackend implements HttpBackend {
    _mediaItems = [
        {
            id: 1,
            name: 'Firebug',
            medium: 'Series',
            category: 'Science Fiction',
            year: 2010,
            watchedOn: 1294166565384,
            isFavorite: false
        },
        {
            id: 2,
            name: 'The Small Tall',
            medium: 'Movies',
            category: 'Comedy',
            year: 2015,
            watchedOn: null,
            isFavorite: true
        },
        {
            id: 3,
            name: 'The Redemption',
            medium: 'Movies',
            category: 'Action',
            year: 2016,
            watchedOn: null,
            isFavorite: false
        },
        {
            id: 4,
            name: 'Hoopers',
            medium: 'Series',
            category: 'Drama',
            year: null,
            watchedOn: null,
            isFavorite: true
        },
        {
            id: 5,
            name: 'Happy Joe: Cheery Road',
            medium: 'Movies',
            category: 'Action',
            year: 2015,
            watchedOn: 1457166565384,
            isFavorite: false
        }
    ];
    handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {
        return new Observable((responseObserver: Observer<HttpResponse<any>>) => {
            let responseOptions;
            switch (request.method) {
                case 'GET':
                    if (request.urlWithParams.indexOf('mediaitems?medium=') >= 0 || request.url === 'mediaitems') {
                        let medium;
                        if (request.urlWithParams.indexOf('?') >= 0) {
                            medium = request.urlWithParams.split('=')[1];
                            if (medium === 'undefined') {
                                medium = '';
                            }
                        }
                        let mediaItems;
                        if (medium) {
                            mediaItems = this._mediaItems.filter(m => m.medium === medium);
                        } else {
                            mediaItems = this._mediaItems;
                        }
                        responseOptions = {
                            body: { mediaItems: JSON.parse(JSON.stringify(mediaItems)) },
                            status: 200
                        };
                    } else {
                        let mediaItems;
                        const i: number = parseInt(request.url.split('/')[1], null);
                        mediaItems = this._mediaItems.filter(m => m.id === i);
                        responseOptions = {
                            body: JSON.parse(JSON.stringify(mediaItems[0])),
                            status: 200
                        };
                    }
                    break;
                case 'POST':
                    const mediaItem = request.body;
                    mediaItem.id = this._getNewId();
                    this._mediaItems.push(mediaItem);
                    responseOptions = { status: 201 };
                    break;
                case 'DELETE':
                    const urlId = parseInt(request.url.split('/')[1], null);
                    this._deleteMediaItem(urlId);
                    responseOptions = { status: 200 };
            }

            const responseObject = new HttpResponse(responseOptions);
            responseObserver.next(responseObject);
            responseObserver.complete();
            return () => {
            };
        });
    }

    _deleteMediaItem(id) {
        const mediaItem = this._mediaItems.find(m => m.id === id);
        const index = this._mediaItems.indexOf(mediaItem);
        if (index >= 0) {
            this._mediaItems.splice(index, 1);
        }
    }

    _getNewId() {
        if (this._mediaItems.length > 0) {
            return Math.max.apply(Math, this._mediaItems.map(mediaItem => mediaItem.id)) + 1;
        } else {
            return 1;
        }
    }
}
