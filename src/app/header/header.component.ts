import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  starCount: number | 'Loading...' = 'Loading...';

  ngOnInit() {
    this.fetchStarCount();
  }

  fetchStarCount() {
    fetch(
      'https://api.github.com/repos/anantraghuvanshi/monthly-inhand-salary-calculator'
    )
      .then((response) => response.json())
      .then((data) => {
        this.starCount = data.stargazers_count;
      })
      .catch((error) => {
        console.error('Error fetching star count:', error);
      });
  }
}
