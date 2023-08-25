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

  EditMovie(data: Movie): Observable<any> {
    console.log(data);
    return this.http.put(environment.apiUrl + '/movies/' + String(data.id), {
      id: data.id,
      title: data.title,
      director: data.director,
      year: new Date(data.year).toISOString(),
      image: data.image
    })
  }

  AddMovie(data: Movie): Observable<any> {
    return this.http.post(environment.apiUrl + '/movies', data);
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


