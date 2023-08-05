import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomeComponent implements OnInit {
  userNameForm = this.fb.group({
    userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
  });

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    let userName = localStorage.getItem('userName') || 'Guest';
    this.userNameForm.patchValue({ userName });

    setTimeout(() => {
      document.getElementById('userInput')?.classList.add('visible');
    }, 2000);

    setTimeout(() => {
      document.getElementById('socialsContainer')?.classList.add('visible');
    }, 2500);
  }

  goToSalaryCalculator() {
    let userName = this.userNameForm.get('userName')?.value || '';
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    localStorage.setItem('userName', userName);
    this.router.navigate(['salary-calculator']);
  }
}
