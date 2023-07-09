import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomeComponent implements OnInit {
  userName: string | null = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    if (!this.userName) {
      this.userName = 'Guest';
    }
  }

  goToSalaryCalculator() {
    this.router.navigate(['salaryCalculator'], {
      queryParams: { userName: this.userName },
    });
  }
}
