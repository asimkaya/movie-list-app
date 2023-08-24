import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieService } from 'src/app/shared/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies!: Movie[];
  loading: boolean = true;

  constructor(private api: MovieService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.api.GetMovies().subscribe({
      next: async (data: Movie[]) => {
        console.log(data);
        this.movies = await data;
        this.loading = await false;
      }, error: (error) => {
        console.warn(error);
      }
    })
  }

}
