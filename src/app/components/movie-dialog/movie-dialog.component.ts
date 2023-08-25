import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogModel, Movie } from 'src/app/shared/models/movie.model';
import { RepositoryService } from 'src/app/shared/repositories/repository.service';

@Component({
  selector: 'app-movie-dialog',
  templateUrl: './movie-dialog.component.html',
  styleUrls: ['./movie-dialog.component.scss']
})
export class MovieDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,
    public dialogRef: MatDialogRef<MovieDialogComponent>,
    public repo: RepositoryService) {
  }
  ngOnInit(): void {
  }

  movieForm = new FormGroup({
    title: new FormControl((this.data.dialogData.title) ? this.data.dialogData.title : '', Validators.required),
    director: new FormControl((this.data.dialogData.director) ? this.data.dialogData.director : '', Validators.required),
    year: new FormControl(new Date((this.data.dialogData.year !== '') ? this.data.dialogData.year : ''), Validators.required),
    image: new FormControl((this.data.dialogData.image) ? this.data.dialogData.image : '', [Validators.required]),
    id: new FormControl((this.data.dialogData.id) ? this.data.dialogData.id : 0)
  })




  closeDialog(title: string) {
    this.dialogRef.close(title);
  }

  async submitForm() {
    if (this.data.dialogTitle == 'Düzenle') {
      await this.repo.editMovie(this.movieForm.value as any);
    } else {
      await this.repo.addMovie(this.movieForm.value as any);
    }
    await this.closeDialog(this.data.dialogTitle);
  }

}
