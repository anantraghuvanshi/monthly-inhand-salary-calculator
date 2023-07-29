import { Component, OnInit } from '@angular/core';
import { Octokit } from '@octokit/core';
import { environment } from '../../environments/environment';
import * as dotenv from 'dotenv';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  collaborators: string[] = [];

  ngOnInit() {
    this.fetchCollaborators();
  }

  async fetchCollaborators() {
    const octokit = new Octokit({
      auth: dotenv.config().GITHUB_TOKEN,
    });
    try {
      const response = await octokit.request(
        'GET /repos/{owner}/{repo}/collaborators',
        {
          owner: 'anantraghuvanshi',
          repo: 'monthly-inhand-salary-calculator',
        }
      );

      this.collaborators = response.data.map(
        (collaborator: any) => collaborator.login
      );
    } catch (error) {
      console.error('Error fetching collaborators:', error);
    }
  }
}
