import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  info: string;
}

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
})
export class DialogComponentComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
