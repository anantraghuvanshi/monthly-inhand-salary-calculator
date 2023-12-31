import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface DialogData {
  info: SafeHtml;
}

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('0.5s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class DialogComponentComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private sanitizer: DomSanitizer
  ) {
    this.data.info = sanitizer.bypassSecurityTrustHtml(
      this.data.info as string
    );
  }
}
