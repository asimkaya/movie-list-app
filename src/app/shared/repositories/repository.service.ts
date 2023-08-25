import { Injectable } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  public loading: boolean = true;
  public movies!: Movie[];

  constructor(private api: MovieService) { }

  deleteMovie(id: number) {
    if (confirm('Silmek istediğinize emin misiniz?')) {
      this.api.DeleteMovie(id).subscribe({
        next: (data) => {
          console.log(data);
        }, error: (err) => {
          console.warn(err);
        }
      })
    }
  }

  getAllMovies() {
    this.api.GetMovies().subscribe({
      next: async (data: Movie[]) => {
        this.movies = await data;
        this.loading = await false;
      }, error: (error) => {
        console.warn(error);
      }
    })
  }
}
