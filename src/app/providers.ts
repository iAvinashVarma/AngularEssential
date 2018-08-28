import { InjectionToken } from '@angular/core';

export const lookupListToken = new InjectionToken('lookupListToken');

export const lookupLists = {
    mediums: [
        'Movies',
        'Series'
    ],
    categories: [
        'Action',
        'Crime',
        'Crime Thriller',
        'Science Fiction',
        'Comedy',
        'Drama',
        'Horror',
        'Romance'
    ]
};
