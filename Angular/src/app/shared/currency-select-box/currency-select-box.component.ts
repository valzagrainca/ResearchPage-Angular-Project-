import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-currency-select-box',
  templateUrl: './currency-select-box.component.html',
  styleUrls: ['./currency-select-box.component.css']
})
export class CurrencySelectBoxComponent {
  currency:string='USD';
  @Output()
  currencychanged: EventEmitter<string>=new EventEmitter<string>();

  onCurrencyValueChange(data: string){
    this.currency=data;
    this.currencychanged.emit(this.currency);
  }
}
