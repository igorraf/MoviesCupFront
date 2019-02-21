import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Movie } from './movie.entity';
import { MessageService } from '../core/messages/message.service';
import { BaseService } from '../core/base.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class MovieService extends BaseService {
    private moviesUrl = 'http://localhost:4200/proxy/api/movies';  // URL to web api

    constructor(
        private http: HttpClient,
        messageService: MessageService) {
        super(messageService);
    }

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.moviesUrl).pipe(
            catchError(this.handleError('getMovies', []))
        );
    }
}
