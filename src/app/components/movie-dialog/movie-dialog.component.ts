import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogModel, Movie } from 'src/app/shared/models/movie.model';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,
    public dialogRef: MatDialogRef<MovieDialogComponent>) { }

  movieForm = new FormGroup({
    title: new FormControl('', Validators.required),
    director: new FormControl('', Validators.required),
    image: new FormControl('', [Validators.required, Validators.pattern('(https?:\/\/.*\.(?:png|jpg))')])
  })

  closeDialog() {
    this.dialogRef.close();
  }

}
