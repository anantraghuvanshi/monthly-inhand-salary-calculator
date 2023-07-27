import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  public feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
        .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', feedback, 'YOUR_USER_ID')
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      this.feedbackForm.reset();
    }
  }
}
