/* refer: https://stackblitz.com/angular/egpdxlkaoal */

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class LoginService {

    private heroesUrl = 'api/heroes';  // URL to web api

    constructor(
        private http: HttpClient
    ) { }

    //////// Save methods //////////

    /** POST: add a new hero to the server */
    addHero(hero: any): Observable<any> {
        return this.http.post<any>(this.heroesUrl, hero, httpOptions).pipe(
            tap((newHero: any) => this.log(`added hero w/ id=${newHero.id}`)),
            catchError(this.handleError<any>('addHero'))
        );
    }



    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
       // this.messageService.add(`HeroService: ${message}`);
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
