import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MetricService } from 'src/app/services/metric-service.service';

@Component({
  selector: 'app-main-bottom',
  templateUrl: './mainbottom.component.html',
  styleUrls: ['./mainbottom.component.css'],
})
export class MainbottomComponent implements OnInit {
  constructor(private metricservice: MetricService) {}

  metrics: {
    metrics: string;
    dataFirstCity: string;
    percentageFirstCity: string;
    dataSecondCity: string;
    percentageSecondCity: string;
    dataThirdCity: string;
    percentageThirdCity: string;
    show: boolean;
  }[] = [];

  isdarkmodechecked: string = 'notchecked';

  displayMetrics: boolean = false;

  ngOnInit(): void {
    this.metrics = this.metricservice.metrics;
    this.metricservice.darkmodeStatus.subscribe(
      (darkmode) => (this.isdarkmodechecked = darkmode)
    );
  }

  openMetrics() {
    if (this.displayMetrics === false) {
      this.displayMetrics = true;
    } else {
      this.displayMetrics = false;
    }
    console.log(this.isdarkmodechecked);
  }

  changeStatus(metricname: string) {
    var foundIndex = this.metricservice.metrics.findIndex(
      (metric) => metric.metrics === metricname
    );
    this.metricservice.metrics[foundIndex].show =
      !this.metricservice.metrics[foundIndex].show;
  }

  DefaultMetrics() {
    this.metricservice.ResetValuesToDefault();
  }
  
}
