import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogModel, Movie } from 'src/app/shared/models/movie.model';
import { RepositoryService } from 'src/app/shared/repositories/repository.service';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    public repo: RepositoryService) { }

  movieForm = new FormGroup({
    title: new FormControl(this.data.dialogData.title, Validators.required),
    director: new FormControl(this.data.dialogData.director, Validators.required),
    year: new FormControl(new Date(this.data.dialogData.year), Validators.required),
    image: new FormControl(this.data.dialogData.image, [Validators.required, Validators.pattern('(https?:\/\/.*\.(?:png|jpg))')]),
    id: new FormControl(this.data.dialogData.id)
  })

  closeDialog() {
    this.dialogRef.close(this.data.dialogTitle);
  }

  async submitForm() {
    await this.repo.editMovie(this.movieForm.value as any);
    await this.closeDialog();
  }

}
