import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-top',
  templateUrl: './maintop.component.html',
  styleUrls: ['./maintop.component.css'],
})
export class MaintopComponent {
  selectedCurrency: string = '';
  
  onChangedCurrency(data: string) {
    this.selectedCurrency = data;
    console.log(this.selectedCurrency);
  }

  @Input()
  title = 'Market Snapshot';
}
