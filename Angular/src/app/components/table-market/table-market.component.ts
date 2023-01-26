import { Component, Input, OnInit } from '@angular/core';
import { MetricService } from 'src/app/services/metric-service.service';

@Component({
  selector: 'app-table-market',
  templateUrl: './table-market.component.html',
  styleUrls: ['./table-market.component.css'],
})
export class TableMarketComponent implements OnInit {
  constructor(private metricservice: MetricService) {
    this.marketdatas = this.metricservice.metrics;
  }
  cities: { city: string; unit: string }[] = [];

  marketdatas: {
    metrics: string;
    dataFirstCity: string;
    percentageFirstCity: string;
    dataSecondCity: string;
    percentageSecondCity: string;
    dataThirdCity: string;
    percentageThirdCity: string;
    show: boolean;
  }[] = [];

  ngOnInit(): void {
    this.getCities();
  }

  getCities(): void {
    this.cities = [
      { city: 'Atlanta', unit: '185,314 Units' },
      { city: 'Georgia', unit: '07,637 Units' },
      { city: 'United States', unit: '3,219,662 Units' },
    ];
  }

  selectedRow: any = this.metricservice.metrics[0];

  @Input()
  isdarkmodechecked: string = 'notchecked';

  @Input()
  valute: string = 'USD';
}
