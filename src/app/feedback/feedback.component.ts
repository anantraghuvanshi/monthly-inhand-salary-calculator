import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { OutputDialogComponent } from '../output-dialog/output-dialog.component';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  public feedbackForm: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  sendFeedback(): void {
    if (this.feedbackForm.valid) {
      const feedback = this.feedbackForm.value;
      emailjs
        .send(
          'service_6ulisls',
          'template_j6fvnkd',
          feedback,
          'LH1Va_XLcurogrm6Q'
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
            this.openDialog();
          },
          (error) => {
            console.log(error.text);
          }
        );
      this.feedbackForm.reset();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OutputDialogComponent, {
      width: '250px',
      data: { info: 'Form has been successfully submitted' },
    });
  }
}
