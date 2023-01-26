import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.css']
})
export class PortfolioHeaderComponent {
  darkmodecheckbox: string = 'notchecked';
  onCheckboxChangeDarkMode(data: string) {
    this.darkmodecheckbox = data;
  }
}

