import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyCheck',
})
export class CurrencyCheckPipe implements PipeTransform {
  transform(value: string, valute: string): string {
    var NumberToConvert: number = 0;
    var output: string = value;
    if (value.startsWith('$')) {
      NumberToConvert = Number(value.substring(1));
      if (valute === 'EUR') {
        NumberToConvert = NumberToConvert * 0.92;
        output = '€' + NumberToConvert.toFixed(3);
      } else if (valute === 'Pound') {
        NumberToConvert = NumberToConvert * 0.81;
        output = '£' + NumberToConvert.toFixed(3);
      }
    }
    return output;
  }
}
