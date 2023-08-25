import { Injectable } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../models/movie.model';
import { MatDialog } from '@angular/material/dialog';
import { MovieDialogComponent } from 'src/app/components/movie-dialog/movie-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  public loading: boolean = true;
  public movies!: Movie[];

  constructor(private api: MovieService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  deleteMovie(id: number) {
    if (confirm('Silmek istediğinize emin misiniz?')) {
      this.api.DeleteMovie(id).subscribe({
        next: (data) => {
          console.log(data);
          this.openSnackBar('Başarılı bir şekilde silindi', 'Tamam');
          this.getAllMovies();
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

  openDialog(data: Movie, title: string) {
    let dialogRef = this.dialog.open(MovieDialogComponent, {
      data: {
        dialogTitle: title,
        dialogData: data
      },
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllMovies();
      if (result == 'Düzenle') {
        this.openSnackBar('Başarılı bir şekilde kaydedildi', 'Tamam');

      } else if (result == 'Yeni Ekle') {
        this.openSnackBar('Başarılı bir şekilde eklendi', 'Tamam');
      }
    });
  }

  editMovie(data: Movie) {
    this.api.EditMovie(data).subscribe({
      next: (data) => {
        console.log(data);
      }, error: (err) => {
        console.warn(err);
      }
    })
  }

  addMovie(data: Movie) {
    this.api.AddMovie(data).subscribe({
      next: (movie) => {
        console.log(movie);
      }, error: (err) => console.warn(err)
    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
