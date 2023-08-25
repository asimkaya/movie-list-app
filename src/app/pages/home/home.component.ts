import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';
import { RepositoryService } from 'src/app/shared/repositories/repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  setNullForNewMovie: Movie = {
    title: undefined,
    director: undefined,
    year: '',
    image: undefined,
    id: 0
  }
  constructor(private api: MovieService, public repo: RepositoryService) { }

  ngOnInit(): void {
    this.repo.getAllMovies();
  }
}
