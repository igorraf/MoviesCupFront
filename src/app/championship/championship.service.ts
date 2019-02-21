import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Match } from './matchs.entity';
import { BaseService } from '../core/base.service';
import { MessageService } from '../core/messages/message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ChampionshipService extends BaseService {
    private ChampionshipUrl = 'http://localhost:4200/proxy/api/Championship/byId';  // URL to web api

    constructor(
        private http: HttpClient,
        messageService: MessageService) {
        super(messageService);
    }

    execute(ids: number[]): Observable<Match> {
        return this.http.post<Match>(this.ChampionshipUrl, ids).pipe(
            catchError(this.handleError('Error champs', null))
        );
    }

    msgClear() {
        this.messageService.clear();
    }
}
