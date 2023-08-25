import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models/movie.model';
import { MovieService } from 'src/app/shared/services/movie.service';
import { RepositoryService } from 'src/app/shared/repositories/repository.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movieData!: Movie;


  constructor(private api: MovieService, public repo: RepositoryService) { }

  ngOnInit(): void {
  }


}
