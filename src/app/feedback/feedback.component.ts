import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  name = '';
  email = '';
  feedback = '';

  onSubmit() {
    const emailData = {
      name: this.name,
      email: this.email,
      feedback: this.feedback,
    };

    //emailjs
    // .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    //data: emailData,
    //public_key: 'YOUR_PUBLIC_KEY',
    //  })
    // .then(
    // (result: EmailJSResponseStatus) => {
    //   console.log(result.text);
    //  },
    //  (error) => {
    //    console.log(error.text);
    //  }
    // );
  }

  ngOnInit() {}
}
