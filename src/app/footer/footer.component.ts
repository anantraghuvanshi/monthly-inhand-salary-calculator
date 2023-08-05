import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  safeHtml!: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const html = `<a class="bmc-button" target="_blank" href="https://bmc.link/anantraghuvanshi" style="text-decoration: none; color: #000;">
      <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" style="height: 20px; width: 20px;">
      <span style="margin-left:5px; font-family: 'Roboto', sans-serif;">Buy me a book</span>
    </a>`;
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
