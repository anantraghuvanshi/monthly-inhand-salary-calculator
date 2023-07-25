import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomeComponent implements OnInit {
  userName: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || 'Guest';
    setTimeout(() => {
      document.getElementById('userInput')?.classList.add('visible');
    }, 2000);

    setTimeout(() => {
      document.getElementById('socialsContainer')?.classList.add('visible');
    }, 2500);
  }

  goToSalaryCalculator() {
    localStorage.setItem('userName', this.userName);
    this.router.navigate(['salary-calculator']);
  }
}
