import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Project, Emission, Token } from './org.energy.network';
import { catchError, retry } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private url = "http://10.4.13.143:3000/api/"
  constructor(private http: HttpClient) {
   }

   getEmissions(): Observable<Emission[]> {
     return this.http.get<Emission[]>(this.url+"Emission", this.httpOptions).pipe(catchError(this.handleError));

   }

   getTokens(id): Observable<Token[]>{
     return this.http.get<Token[]>(this.url+"getTokens/" + id, this.httpOptions).pipe(catchError(this.handleError));
   }

   private handleError(error: any) {
     if (error.error instanceof ErrorEvent) {
       // A client-side or network error occurred. Handle it accordingly.
       console.error('An error occurred:', error.error.message);
     } else {
       // The backend returned an unsuccessful response code.
       // The response body may contain clues as to what went wrong,
       console.error(
         `Backend returned code ${error.status}, ` +
         `body was: ${error.error}`);
       }

}
}
