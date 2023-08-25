import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  GetMovies(): Observable<any> {
    return this.http.get<Movie>(environment.apiUrl + '/movies').pipe(
      catchError(this.handleError)
    )
  }

  DeleteMovie(id: number): Observable<any> {
    return this.http.delete(environment.apiUrl + '/movies/' + String(id)).pipe(
      catchError(this.handleError)
    )
  }

  //Hata Yakalama
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Try again.'));
  }
}


