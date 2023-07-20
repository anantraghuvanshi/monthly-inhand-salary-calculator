import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
})
export class WelcomeComponent implements OnInit {
  userName: string = ''; // Set a default value to ensure it's always a string

  constructor(private router: Router) {}

  ngOnInit() {
    this.userName = localStorage.getItem('userName') || 'Guest'; // Use a default value if userName is null
  }

  goToSalaryCalculator() {
    // Save the user name in localStorage
    localStorage.setItem('userName', this.userName);

    // Navigate to the Salary Calculator page
    this.router.navigate(['salary-calculator']);
  }
}
